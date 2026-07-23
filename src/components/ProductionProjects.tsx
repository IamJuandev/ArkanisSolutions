import { ArrowUpRight, MapPin, Utensils } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const projects = [
  {
    client: 'Directorio Terrario',
    industry: 'Hospitalidad y turismo',
    icon: MapPin,
    status: 'Caso real · En uso',
    statement: 'Una guía local para huéspedes que llegan sin conocer la zona.',
    detail: 'Un directorio mobile-first accesible por QR, personalizado para tres sedes Airbnb y con 68 lugares locales publicados.',
    url: '/proyectos/directorio-terrario',
    external: false,
  },
  {
    client: 'TheDukes',
    industry: 'Operación de restaurante',
    icon: Utensils,
    status: 'Producto funcional · Demo disponible',
    statement: 'Una operación de restaurante reunida en un solo sistema.',
    detail: 'Aplicación web exclusiva y personalizable con comandas, mesas, ventas, caja, inventario, impresión ESC/POS y facturación DIAN.',
    url: '/productos/sistema-gestion-restaurantes',
    external: false,
  },
];

export default function ProductionProjects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="proyectos" className="section-space relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <p className="eyebrow">Proyectos destacados</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-brand-sand sm:text-5xl">
              Soluciones construidas para problemas concretos.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-brand-mist lg:justify-self-end">
            Diferenciamos con claridad lo que está operando en un negocio de lo que hoy funciona como producto demostrable.
          </p>
        </div>

        <div className="mt-14 border-t border-white/10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={project.client}
                href={project.url}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="project-row group"
                aria-label={`Ver proyecto ${project.client}`}
              >
                <div className="flex items-center gap-3">
                  <span className="project-index">0{index + 1}</span>
                  <Icon size={18} className="text-brand-aqua" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-mist">{project.industry}</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-brand-sand">{project.client}</h3>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-brand-lime">{project.status}</p>
                </div>
                <div>
                  <p className="text-lg font-medium leading-7 text-brand-sand/90">{project.statement}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-mist">{project.detail}</p>
                </div>
                <span className="project-link"><ArrowUpRight size={20} /></span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
