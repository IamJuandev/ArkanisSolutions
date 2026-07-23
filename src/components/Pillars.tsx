import { ArrowUpRight, Braces, Compass, Workflow } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const pillars = [
  {
    number: '01',
    title: 'Diseño web a medida',
    summary: 'Una presencia digital que nace de tu marca, no de una plantilla.',
    detail: 'Diseñamos la experiencia, la interfaz y el desarrollo como una sola pieza: clara para tus clientes, rápida y lista para crecer con el negocio.',
    outcome: 'Marca reconocible · Experiencia propia · Desarrollo sólido',
    icon: Braces,
    accent: 'pillar-sky',
  },
  {
    number: '02',
    title: 'Automatización',
    summary: 'El trabajo repetitivo deja de pasar por las manos de tu equipo.',
    detail: 'Conectamos formularios, correos, hojas de cálculo, sistemas y reglas para que la información avance sin copiar, pegar ni perseguir aprobaciones.',
    outcome: 'Menos fricción · Menos errores · Más control',
    icon: Workflow,
    accent: 'pillar-aqua',
  },
  {
    number: '03',
    title: 'Consultoría',
    summary: 'Tecnología entendida antes de ser comprada o construida.',
    detail: 'Mapeamos el problema, priorizamos lo que realmente mueve la operación y definimos una ruta viable para invertir con criterio, no por tendencia.',
    outcome: 'Decisiones claras · Ruta realista · Acompañamiento técnico',
    icon: Compass,
    accent: 'pillar-lime',
  },
];

export default function Pillars() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="pilares" className="section-space relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-heading grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Tres formas de construir mejor</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-brand-sand sm:text-5xl">
            Diseñamos experiencias web, automatizamos operaciones y aterrizamos decisiones tecnológicas en sistemas que sí pertenecen a tu empresa.
          </h2>
        </div>

        <div>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`pillar-row ${pillar.accent}`}
              >
                <div className="flex items-center gap-4 lg:block">
                  <span className="pillar-number">{pillar.number}</span>
                  <Icon className="pillar-icon lg:mt-10" size={28} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.035em] text-brand-sand sm:text-4xl">{pillar.title}</h3>
                  <p className="mt-3 max-w-lg text-lg leading-7 text-brand-sand/85">{pillar.summary}</p>
                </div>
                <div className="lg:pl-8">
                  <p className="max-w-xl text-sm leading-7 text-brand-mist sm:text-base">{pillar.detail}</p>
                  <p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-sand/70">
                    <ArrowUpRight size={13} aria-hidden="true" /> {pillar.outcome}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
