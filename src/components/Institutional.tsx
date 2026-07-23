import { motion, useReducedMotion } from 'motion/react';

const principles = [
  {
    title: 'Tecnología con propósito',
    description: 'Construimos únicamente lo que aporta valor real.',
  },
  {
    title: 'Claridad antes de ejecutar',
    description: 'Entendemos el problema antes de recomendar herramientas.',
  },
  {
    title: 'Sistemas a la medida',
    description: 'Cada empresa tiene procesos, personas y necesidades diferentes.',
  },
  {
    title: 'Cercanía regional',
    description: 'Conocemos el contexto y los desafíos de las empresas del Eje Cafetero.',
  },
  {
    title: 'Crecimiento sostenible',
    description: 'Creamos sistemas que puedan mantenerse y evolucionar.',
  },
];

export default function Institutional() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="nosotros"
      aria-labelledby="institutional-heading"
      className="section-space relative isolate overflow-hidden border-y border-white/8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 w-2/3 bg-gradient-to-l from-brand-depth/25 via-brand-surface/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-0 h-px w-[42%] bg-gradient-to-r from-brand-sky via-brand-aqua to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16"
        >
          <p className="eyebrow">Quiénes somos</p>
          <div>
            <h2
              id="institutional-heading"
              className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-brand-sand sm:text-6xl"
            >
              Tecnología cercana para empresas que quieren avanzar.
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-8 text-brand-mist sm:text-lg">
              Arkanis Solutions nace en el Eje Cafetero para acompañar a pequeñas y medianas empresas en la
              modernización de sus negocios. Diseñamos experiencias web, automatizamos procesos y orientamos
              decisiones tecnológicas con sistemas adaptados a la realidad de cada empresa.
            </p>
          </div>
        </motion.header>

        <div className="mt-20 grid gap-14 border-t border-white/10 pt-14 lg:grid-cols-12 lg:gap-x-10 lg:pt-16">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.55 }}
            className="relative lg:col-span-7"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.18em] text-brand-aqua">01</span>
              <span aria-hidden="true" className="h-px flex-1 bg-brand-aqua/30" />
            </div>
            <h3 className="font-display text-3xl font-semibold tracking-[-0.035em] text-brand-sand sm:text-4xl">
              Misión
            </h3>
            <p className="mt-6 max-w-3xl text-base leading-8 text-brand-sand/80 sm:text-lg">
              Ayudar a las pequeñas y medianas empresas, principalmente del Eje Cafetero, a construir una
              infraestructura digital moderna mediante diseño web a medida, automatización y consultoría tecnológica.
              Buscamos que puedan mejorar su operación, competir con mayor solidez y avanzar sin quedarse atrás frente
              al cambio tecnológico.
            </p>
          </motion.article>

          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08 }}
            className="border-l border-brand-lime/30 pl-6 lg:col-span-4 lg:col-start-9 lg:mt-24 lg:pl-8"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.18em] text-brand-lime">02</span>
              <span aria-hidden="true" className="h-px flex-1 bg-brand-lime/30" />
            </div>
            <h3 className="font-display text-3xl font-semibold tracking-[-0.035em] text-brand-sand sm:text-4xl">
              Visión 2030
            </h3>
            <p className="mt-6 text-sm leading-7 text-brand-mist sm:text-base">
              Ser una empresa referente en el Eje Cafetero en automatización de procesos, diseño web a medida y
              consultoría tecnológica; reconocida por acercar tecnología útil a las pymes y convertir sus desafíos
              operativos en sistemas claros, sostenibles y preparados para crecer.
            </p>
          </motion.article>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="eyebrow">Principios de trabajo</p>
          </div>
          <ol className="border-t border-white/12">
            {principles.map((principle, index) => (
              <motion.li
                key={principle.title}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.04 }}
                className="grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[3rem_0.8fr_1fr] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-[10px] tracking-[0.16em] text-brand-mist/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-brand-sand">
                  {principle.title}
                </h3>
                <p className="max-w-xl text-sm leading-7 text-brand-mist">{principle.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
