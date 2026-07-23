import {
  ArrowRight,
  Check,
  FileSpreadsheet,
  Mail,
  MessageCircle,
  Route,
  Search,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const frictionSignals = [
  { source: 'WhatsApp', detail: 'Pedido nuevo', issue: 'Sin asignar', icon: MessageCircle },
  { source: 'Correo', detail: 'Cotización enviada', issue: 'Sin seguimiento', icon: Mail },
  { source: 'Hoja', detail: 'Estado del caso', issue: 'Desactualizado', icon: FileSpreadsheet },
];

const improvementSteps = [
  'Identificamos dónde entra y se pierde la información.',
  'Definimos responsables, decisiones y siguientes pasos.',
  'Conectamos solo lo necesario para sostener el orden.',
];

const orderedRecord = [
  { label: 'Entrada', value: 'Solicitud #184' },
  { label: 'Responsable', value: 'Camila' },
  { label: 'Estado', value: 'En curso', status: true },
  { label: 'Siguiente paso', value: 'Confirmar entrega' },
];

export default function AutomationFlow() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
      };

  return (
    <section id="automatizacion" className="section-space relative overflow-hidden">
      <div className="automation-ambient" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Diagnóstico antes que herramientas</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-sand sm:text-5xl">
              Entendemos qué está fallando. Después diseñamos una forma mejor de trabajar.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-brand-mist lg:justify-self-end">
            No llegamos preguntando qué querés automatizar. Seguimos el trabajo como ocurre hoy:
            dónde entra la información, quién interviene, dónde se repite y qué queda sin seguimiento.
          </p>
        </div>

        <div className="process-story mt-12">
          <div className="process-comparison">
            <motion.article {...reveal} className="process-pane process-pane-before">
              <div className="process-pane-heading">
                <p className="process-kicker process-kicker-problem">01 · Lo que encontramos</p>
                <h3>El trabajo existe, pero el proceso está escondido.</h3>
              </div>

              <ul className="friction-stack" aria-label="Señales de una operación desordenada">
                {frictionSignals.map((signal) => {
                  const Icon = signal.icon;
                  return (
                    <li key={signal.source} className="friction-card">
                      <span className="friction-icon"><Icon size={17} aria-hidden="true" /></span>
                      <span>
                        <strong>{signal.source}</strong>
                        <small>{signal.detail}</small>
                      </span>
                      <span className="friction-issue">{signal.issue}</span>
                    </li>
                  );
                })}
              </ul>

              <p className="process-observation">
                El equipo termina uniendo todo con memoria, mensajes y tareas que nadie puede ver completas.
              </p>
            </motion.article>

            <motion.article
              {...reveal}
              transition={reduceMotion ? undefined : { delay: 0.12 }}
              className="process-diagnosis"
            >
              <div className="diagnosis-mark"><Search size={20} aria-hidden="true" /></div>
              <p className="process-kicker">Diagnóstico Arkanis</p>
              <h3>No automatizamos el caos.</h3>
              <p className="diagnosis-copy">
                Primero convertimos el trabajo real en un proceso que todos puedan entender.
              </p>

              <ol className="diagnosis-steps">
                {improvementSteps.map((step, index) => (
                  <li key={step}>
                    <span>0{index + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>

              <div className="process-direction" aria-hidden="true">
                <span>Ordenamos la operación</span>
                <ArrowRight size={18} />
              </div>
            </motion.article>

            <motion.article
              {...reveal}
              transition={reduceMotion ? undefined : { delay: 0.24 }}
              className="process-pane process-pane-after"
            >
              <div className="process-pane-heading">
                <p className="process-kicker process-kicker-result">02 · Cómo la mejoramos</p>
                <h3>Cada solicitud tiene un recorrido claro.</h3>
              </div>

              <div className="ordered-card">
                <div className="ordered-card-heading">
                  <span><Route size={18} aria-hidden="true" /></span>
                  <p>Proceso visible</p>
                  <small>Actualizado ahora</small>
                </div>
                <dl>
                  {orderedRecord.map((item) => (
                    <div key={item.label} className="ordered-row">
                      <dt>{item.label}</dt>
                      <dd className={item.status ? 'ordered-status' : undefined}>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="process-benefits">
                {['Responsable visible', 'Información sin duplicar', 'Seguimiento continuo'].map((benefit) => (
                  <p key={benefit}><Check size={14} aria-hidden="true" /> {benefit}</p>
                ))}
              </div>

              <p className="process-observation process-observation-result">
                La automatización llega al final para sostener el orden, no para esconder el problema.
              </p>
            </motion.article>
          </div>

          <div className="process-story-outcome">
            <p className="process-kicker">El cambio real</p>
            <p>
              Tu equipo deja de recordar cómo mover el trabajo y puede ver qué está pasando,
              quién sigue y dónde intervenir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
