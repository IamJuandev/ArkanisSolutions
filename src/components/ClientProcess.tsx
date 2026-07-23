import { motion, useReducedMotion } from 'motion/react';

const processSteps = [
  {
    number: '01',
    title: 'Escuchar antes de proponer',
    description:
      'Comenzamos con un diagnóstico para entender tu operación, el contexto del equipo y el problema que realmente vale la pena resolver.',
    accent: 'border-brand-sky/40 bg-brand-sky/10 text-brand-sky',
  },
  {
    number: '02',
    title: 'Ordenar y priorizar',
    description:
      'Mapeamos procesos, datos y herramientas. Separamos lo urgente de lo importante y definimos una ruta realista.',
    accent: 'border-brand-aqua/40 bg-brand-aqua/10 text-brand-aqua',
  },
  {
    number: '03',
    title: 'Diseñar y construir',
    description:
      'Convertimos esa ruta en una experiencia web, automatización o sistema a medida, validando decisiones antes de sumar complejidad.',
    accent: 'border-brand-lime/40 bg-brand-lime/10 text-brand-lime',
  },
  {
    number: '04',
    title: 'Entregar y evolucionar',
    description:
      'Ponemos la solución en funcionamiento, documentamos lo esencial y acompañamos los ajustes que aparecen con el uso real.',
    accent: 'border-brand-coral/40 bg-brand-coral/10 text-brand-coral',
  },
];

export default function ClientProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="proceso" className="section-space relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] border-l border-white/5 bg-brand-surface/20 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <header className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">Cómo trabajamos</p>
            <p className="mt-7 max-w-sm font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-brand-mist">
              Una ruta de trabajo compartida, antes de elegir la tecnología.
            </p>
          </div>
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-brand-sand sm:text-5xl lg:text-6xl">
              Primero entendemos. Después construimos.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-brand-mist sm:text-lg sm:leading-8">
              No empezamos recomendando herramientas. Empezamos entendiendo cómo funciona hoy tu empresa, dónde aparece la fricción y qué resultado necesitás.
            </p>
          </div>
        </header>

        <ol className="mt-14 border-y border-white/10 lg:mt-20">
          {processSteps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="grid grid-cols-[4.5rem_1fr] border-b border-white/10 py-8 last:border-b-0 sm:grid-cols-[6rem_1fr] lg:grid-cols-[8rem_1fr] lg:py-12"
            >
              <div className="relative flex items-start">
                <span
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border font-mono text-xs tracking-[0.12em] ${step.accent}`}
                >
                  {step.number}
                </span>
                {index < processSteps.length - 1 && (
                  <span
                    className="absolute left-[1.35rem] top-11 h-[calc(100%+2rem)] w-px bg-gradient-to-b from-white/20 to-white/5 sm:h-[calc(100%+2rem)] lg:h-[calc(100%+3rem)]"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div
                className={`grid gap-5 lg:grid-cols-12 lg:items-start ${
                  index % 2 === 0 ? '' : 'lg:pl-[8%]'
                }`}
              >
                <div className={index % 2 === 0 ? 'lg:col-span-5' : 'lg:col-span-5 lg:col-start-2'}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-mist">
                    Etapa {step.number}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em] text-brand-sand sm:text-3xl">
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`max-w-xl text-sm leading-7 text-brand-mist sm:text-base ${
                    index % 2 === 0
                      ? 'lg:col-span-6 lg:col-start-7'
                      : 'lg:col-span-5 lg:col-start-8'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="mt-9 grid gap-5 border-l-2 border-brand-aqua/60 pl-5 sm:grid-cols-[1fr_auto] sm:items-center sm:pl-7">
          <p className="font-display text-xl font-semibold tracking-[-0.025em] text-brand-sand sm:text-2xl">
            Cada etapa deja una decisión clara. Nada se construye porque sí.
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-aqua">
            Luego: verlo en acción
          </span>
        </div>
      </div>
    </section>
  );
}
