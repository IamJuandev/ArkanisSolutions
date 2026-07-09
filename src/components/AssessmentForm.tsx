import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Terminal, Info, CheckCircle2, RefreshCw } from 'lucide-react';
import { AssessmentInput } from '../types';

export default function AssessmentForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [inputs, setInputs] = useState<AssessmentInput>({
    name: '',
    email: '',
    businessName: '',
    primaryPain: 'Procesos manuales en Excel',
    customDescription: ''
  });
  const [loadingLogs, setLoadingLogs] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const logsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [loadingLogs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.businessName || !inputs.customDescription) {
      alert('Por favor, completa todos los campos del diagnóstico.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setStep(2);
    setLoadingLogs([]);

    const logSequence = [
      '[ARKANIS_INIT] Conectando con el motor de diagnóstico operativo v1.5...',
      '[METRIC_ENGINE] Analizando dolores de cuello de botella estructural...',
      `[DATABASE_MAPPING] Buscando silos de datos para: ${inputs.businessName.toUpperCase()}`,
      `[PAIN_DETECTOR] Analizando dolor primario: ${inputs.primaryPain.toUpperCase()}`,
      '[LEAD_ROUTER] Enviando solicitud al equipo de ingeniería de Arkanis...',
      '[SYSTEM_COMPILE] Confirmando recepción de la solicitud...'
    ];

    let logIdx = 0;
    const interval = setInterval(() => {
      if (logIdx < logSequence.length) {
        setLoadingLogs(prev => [...prev, logSequence[logIdx]]);
        logIdx++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inputs.name,
          email: inputs.email,
          company: inputs.businessName,
          service: inputs.primaryPain,
          message: inputs.customDescription
        })
      });

      if (!response.ok) {
        throw new Error('API Error');
      }

      setTimeout(() => {
        setStep(3);
        setIsSubmitting(false);
      }, logSequence.length * 400 + 200);
    } catch (err) {
      console.error('Contact submission failed:', err);
      setSubmitError('No pudimos enviar tu solicitud. Por favor, escríbenos directamente a juan.gabrie.dev@gmail.com.');
      setIsSubmitting(false);
      setStep(1);
    } finally {
      clearInterval(interval);
    }
  };

  const handleReset = () => {
    setInputs({
      name: '',
      email: '',
      businessName: '',
      primaryPain: 'Procesos manuales en Excel',
      customDescription: ''
    });
    setSubmitError(null);
    setStep(1);
  };

  return (
    <section id="contacto" className="py-24 border-t border-brand-blue/20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: CTA info */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="inline-flex items-center space-x-2 border border-brand-turquoise/30 px-3 py-1 bg-brand-darkBlue/20">
            <span className="font-mono text-[10px] tracking-widest text-brand-turquoise uppercase">
              SISTEMA, NO PARCHES
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-sand leading-[1.1] tracking-tight">
            Tu operación no necesita más parches. Necesita un sistema.
          </h2>
          <p className="text-brand-lightBlue font-light leading-relaxed text-sm md:text-base">
            Agenda una llamada de diagnóstico técnico gratuita. Evaluaremos tus procesos actuales y te presentaremos un mapa claro de los flujos que pueden automatizarse para devolver el control operativo a tu negocio.
          </p>

          <div className="pt-6 font-mono text-[11px] text-brand-lightBlue space-y-3 border-t border-brand-blue/15">
            <div className="flex items-center gap-2">
              <Mail size={12} className="text-brand-turquoise" />
              <span>Correo corporativo: <span className="text-brand-sand">juan.gabrie.dev@gmail.com</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Info size={12} className="text-brand-green" />
              <span>Garantía de confidencialidad absoluta de tus datos y procesos</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Form Wizard */}
        <div className="lg:col-span-7 border border-brand-blue/30 bg-brand-darkBlue/15 p-6 md:p-10 relative">
          <div className="absolute -top-1 -left-1 w-3.5 h-3.5 bg-brand-green"></div>
          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-brand-turquoise"></div>

          <AnimatePresence mode="wait">
            {/* Step 1: Input Fields Form */}
            {step === 1 && (
              <motion.div
                key="step-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-serif text-2xl text-brand-sand">Solicitar Evaluación Técnica y Plan de Bypass</h3>
                  <p className="font-mono text-[9px] text-brand-lightBlue mt-1">
                    // Completa el formulario de ingeniería para simular tu plano técnico de automatización.
                  </p>
                </div>

                {submitError && (
                  <div className="border border-red-400/40 bg-red-400/5 px-4 py-3 font-mono text-[10px] text-red-300">
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[9px] uppercase text-brand-lightBlue mb-2">Nombre completo</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Javier Mendoza"
                        value={inputs.name}
                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                        className="w-full bg-brand-bg border border-brand-blue/30 px-4 py-3 text-brand-sand font-sans text-sm focus:outline-none focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[9px] uppercase text-brand-lightBlue mb-2">Correo corporativo</label>
                      <input
                        type="email"
                        required
                        placeholder="javier@empresa.com"
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        className="w-full bg-brand-bg border border-brand-blue/30 px-4 py-3 text-brand-sand font-sans text-sm focus:outline-none focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[9px] uppercase text-brand-lightBlue mb-2">Nombre del Negocio</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Distribuidora Mendoza"
                        value={inputs.businessName}
                        onChange={(e) => setInputs({ ...inputs, businessName: e.target.value })}
                        className="w-full bg-brand-bg border border-brand-blue/30 px-4 py-3 text-brand-sand font-sans text-sm focus:outline-none focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[9px] uppercase text-brand-lightBlue mb-2">¿Cuál es tu principal dolor operativo?</label>
                      <select
                        value={inputs.primaryPain}
                        onChange={(e) => setInputs({ ...inputs, primaryPain: e.target.value })}
                        className="w-full bg-brand-bg border border-brand-blue/30 px-4 py-3 text-brand-sand font-sans text-sm focus:outline-none focus:border-brand-turquoise rounded-none"
                      >
                        <option>Procesos manuales en Excel</option>
                        <option>Falta de conexión entre herramientas</option>
                        <option>Falta de reportes / Datos desordenados</option>
                        <option>Necesito un software a medida</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase text-brand-lightBlue mb-2">
                      Describe brevemente cómo operan hoy, qué herramientas usan y qué buscas resolver
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Ej. El equipo de administración descarga las ventas manuales de Shopify y las escribe a mano en una planilla de Excel compartida..."
                      value={inputs.customDescription}
                      onChange={(e) => setInputs({ ...inputs, customDescription: e.target.value })}
                      className="w-full bg-brand-bg border border-brand-blue/30 px-4 py-3 text-brand-sand font-sans text-sm focus:outline-none focus:border-brand-turquoise focus:ring-1 focus:ring-brand-turquoise rounded-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-turquoise text-brand-bg hover:bg-brand-turquoise/90 hover:shadow-lg hover:shadow-brand-turquoise/20 transition-all font-mono text-xs font-bold tracking-wider py-4 rounded-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    SOLICITAR EVALUACIÓN AHORA
                  </button>
                </form>
              </motion.div>
            )}

            {/* Step 2: Simulated Engineering Loading Terminal */}
            {step === 2 && (
              <motion.div
                key="step-loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 min-h-[350px] flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-brand-sand flex items-center gap-2">
                    <Terminal size={18} className="text-brand-turquoise animate-pulse" />
                    Procesando Diagnóstico de Fricción Operativa...
                  </h3>
                  <p className="font-mono text-[9px] text-brand-lightBlue">
                    // Enviando tu solicitud al equipo de ingeniería de Arkanis.
                  </p>
                </div>

                <div className="bg-brand-bg border border-brand-blue/30 p-4 font-mono text-[10px] text-brand-turquoise space-y-2 h-[200px] overflow-y-auto rounded-none">
                  {loadingLogs.map((log, i) => (
                    <div key={i} className="leading-relaxed flex items-start gap-1 animate-fadeIn">
                      <span className="text-brand-green font-bold">&gt;&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                  <div ref={logsEndRef} />
                </div>

                <div className="flex items-center justify-center gap-3 font-mono text-xs text-brand-lightBlue">
                  <RefreshCw size={14} className="animate-spin text-brand-turquoise" />
                  <span>Confirmando envío...</span>
                </div>
              </motion.div>
            )}

            {/* Step 3: Static Success State */}
            {step === 3 && (
              <motion.div
                key="step-result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8 min-h-[350px] flex flex-col items-center justify-center text-center py-8"
              >
                <div className="w-14 h-14 rounded-full bg-brand-green/10 border border-brand-green flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-brand-green" />
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-[9px] text-brand-turquoise block">// SOLICITUD RECIBIDA</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-sand">
                    Gracias, {inputs.name.split(' ')[0]}. Tu solicitud está en camino.
                  </h3>
                  <p className="text-brand-lightBlue font-light leading-relaxed text-sm max-w-md mx-auto">
                    Un ingeniero de Arkanis revisará el caso de {inputs.businessName} y te contactará a {inputs.email} dentro de las próximas 24 horas hábiles para agendar tu llamada de diagnóstico.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="border border-brand-blue/40 text-brand-lightBlue hover:bg-brand-darkBlue/20 font-mono text-xs py-4 px-6 text-center tracking-wider transition-all cursor-pointer"
                >
                  ENVIAR OTRA SOLICITUD
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
