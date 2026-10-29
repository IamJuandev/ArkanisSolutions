import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, LoaderCircle, Mail, ShieldCheck } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { AssessmentInput } from '../types';

const initialInputs: AssessmentInput = {
  name: '',
  email: '',
  businessName: '',
  primaryPain: 'Diseño web a medida',
  customDescription: '',
  dataConsent: false,
};

// The homepage task chooser submits ?tarea=<task>, so the form opens with it.
function initialFromQuery(): AssessmentInput {
  const task = new URLSearchParams(window.location.search).get('tarea')?.trim().slice(0, 300);
  if (!task) return initialInputs;
  return { ...initialInputs, primaryPain: 'Automatización', customDescription: `Quiero dejar de: ${task}.` };
}

export default function AssessmentForm() {
  const [inputs, setInputs] = useState<AssessmentInput>(initialFromQuery);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === 'success') successHeadingRef.current?.focus();
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inputs.name,
          email: inputs.email,
          company: inputs.businessName,
          service: inputs.primaryPain,
          message: inputs.customDescription,
          // Ley 1581 de 2012 requires proof of authorization, so the consent
          // travels with the submission and is stored alongside it.
          dataConsent: inputs.dataConsent,
        }),
      });

      if (!response.ok) throw new Error('API Error');
      setStatus('success');
    } catch (error) {
      console.error('Contact submission failed:', error);
      setSubmitError('No pudimos enviar tu solicitud. Escribinos directamente a contacto@arkanis.site.');
      setStatus('idle');
    }
  };

  const resetForm = () => {
    setInputs(initialInputs);
    setSubmitError(null);
    setStatus('idle');
  };

  return (
    <section id="contacto" className="section-space relative overflow-hidden">
      <div className="diagnostic-glow" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="diagnostic-shell grid overflow-hidden lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <img src="/brand/symbol-white.svg" alt="" className="absolute -right-12 -top-12 h-56 w-56 opacity-[0.08]" />
            <div className="relative">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-brand-sand sm:text-5xl">
                ¿Y si lo que hoy hacés a mano se hiciera solo?
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-brand-mist">
                Pedí tu diagnóstico gratis. Te respondemos con una idea concreta para tu negocio, aunque después no trabajes con nosotros.
              </p>
              <div className="mt-10 space-y-4 border-t border-white/10 pt-7 text-sm text-brand-mist">
                <p className="flex items-start gap-3"><ShieldCheck className="mt-0.5 shrink-0 text-brand-lime" size={18} /> Tu información se usa únicamente para revisar la solicitud.</p>
                <a href="mailto:contacto@arkanis.site" className="flex items-center gap-3 transition-colors hover:text-brand-aqua"><Mail className="shrink-0 text-brand-aqua" size={18} /> contacto@arkanis.site</a>
              </div>
            </div>
          </div>

          <div className="bg-brand-surface/55 p-7 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[470px] flex-col items-start justify-center"
                  role="status"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-lime/40 bg-brand-lime/10 text-brand-lime"><Check size={26} /></span>
                  <p className="eyebrow mt-8">Solicitud recibida</p>
                  <h3 ref={successHeadingRef} tabIndex={-1} className="mt-4 font-display text-3xl font-semibold text-brand-sand">Gracias, {inputs.name.split(' ')[0]}.</h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-brand-mist">Revisaremos el caso de {inputs.businessName} y te contactaremos al correo que nos compartiste.</p>
                  <button type="button" onClick={resetForm} className="ghost-button mt-8">Enviar otra solicitud</button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="mb-7">
                    <p className="font-display text-2xl font-semibold text-brand-sand">Diagnóstico gratis</p>
                    <p className="mt-2 text-sm text-brand-mist">Todos los campos son necesarios para entender el contexto.</p>
                  </div>

                  {submitError && <p role="alert" className="border border-brand-coral/40 bg-brand-coral/8 px-4 py-3 text-sm text-brand-coral">{submitError}</p>}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-field">
                      <span>Nombre completo</span>
                      <input required autoComplete="name" value={inputs.name} onChange={(event) => setInputs({ ...inputs, name: event.target.value })} placeholder="Tu nombre" />
                    </label>
                    <label className="form-field">
                      <span>Correo</span>
                      <input required type="email" autoComplete="email" value={inputs.email} onChange={(event) => setInputs({ ...inputs, email: event.target.value })} placeholder="nombre@empresa.com" />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-field">
                      <span>Empresa o proyecto</span>
                      <input required autoComplete="organization" value={inputs.businessName} onChange={(event) => setInputs({ ...inputs, businessName: event.target.value })} placeholder="Nombre de tu negocio" />
                    </label>
                    <label className="form-field">
                      <span>Área principal</span>
                      <select value={inputs.primaryPain} onChange={(event) => setInputs({ ...inputs, primaryPain: event.target.value })}>
                        <option>Diseño web a medida</option>
                        <option>Automatización</option>
                        <option>Consultoría</option>
                        <option>No estoy seguro todavía</option>
                      </select>
                    </label>
                  </div>

                  <label className="form-field">
                    <span>¿Qué querés resolver?</span>
                    <textarea required rows={5} value={inputs.customDescription} onChange={(event) => setInputs({ ...inputs, customDescription: event.target.value })} placeholder="Cómo funciona hoy, dónde aparece la fricción y qué te gustaría cambiar." />
                  </label>

                  <label className="consent-field">
                    <input
                      required
                      type="checkbox"
                      checked={inputs.dataConsent}
                      onChange={(event) => setInputs({ ...inputs, dataConsent: event.target.checked })}
                    />
                    <span>
                      Autorizo a Arkanis Solutions a tratar mis datos personales para atender esta
                      solicitud, conforme a la{' '}
                      <a href="/privacidad" target="_blank" rel="noopener noreferrer">
                        política de tratamiento de datos
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === 'submitting' || !inputs.dataConsent}
                    className="ak-btn ak-btn-verde w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'submitting' ? <><LoaderCircle className={reduceMotion ? '' : 'animate-spin'} size={17} /> Enviando solicitud</> : <>Pedí tu diagnóstico gratis <ArrowRight size={17} /></>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
