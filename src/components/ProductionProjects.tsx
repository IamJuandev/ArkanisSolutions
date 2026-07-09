import { motion } from 'motion/react';
import { ExternalLink, Utensils, MapPin, QrCode } from 'lucide-react';

interface ProductionProject {
  client: string;
  industry: string;
  icon: React.ReactNode;
  problem: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  url: string;
}

const projects: ProductionProject[] = [
  {
    client: 'TheDukes',
    industry: 'Restaurante & Operaciones',
    icon: <Utensils size={14} />,
    problem:
      'Operación de restaurante con comandas, mesas, ventas, caja e impresión dispersas, generando demoras y riesgo de errores en horas pico.',
    solution:
      'POS operacional con comandas, gestión de mesas, ventas, caja, impresión ESC/POS y facturación DIAN integradas en un solo flujo.',
    outcome: 'Operación unificada de mesa a caja, con facturación DIAN al cierre y sin saltos entre sistemas.',
    metrics: [
      { value: 'POS', label: 'restaurante' },
      { value: 'DIAN', label: 'facturación' },
    ],
    tags: ['Laravel', 'React', 'Inertia', 'Reverb'],
    url: 'https://restaurantethedukes.com/',
  },
  {
    client: 'Directorio Terrario',
    industry: 'Comercio Local',
    icon: <MapPin size={14} />,
    problem:
      'Negocios locales sin presencia digital y clientes sin forma de descubrir servicios y productos cercanos de forma rápida.',
    solution:
      'Plataforma de directorio local con búsqueda por categoría y ubicación para conectar clientes con negocios de su zona.',
    outcome: 'Comercios locales descubribles en línea y conectados con clientes de su zona desde el primer día.',
    metrics: [
      { value: 'Digital', label: 'presencia local' },
      { value: 'Geo', label: 'servicios' },
    ],
    tags: ['React', 'Laravel', 'Geolocalización'],
    url: 'https://directorioterrario.com/',
  },
  {
    client: 'Ceremonias',
    industry: 'Gestión de Eventos',
    icon: <QrCode size={14} />,
    problem:
      'Control de acceso a eventos mediante listas en papel con alta tasa de errores en verificación de invitados y sin visibilidad de asistencia en tiempo real.',
    solution:
      'Plataforma web con generación de códigos QR por invitado, control de acceso en puerta y dashboard de asistencia en tiempo real.',
    outcome: 'Acceso ágil en puerta y visibilidad inmediata de la asistencia, eliminando errores de las listas en papel.',
    metrics: [
      { value: 'QR', label: 'control de acceso' },
      { value: 'Real time', label: 'asistencia' },
    ],
    tags: ['React', 'Laravel', 'QR Code'],
    url: 'https://ceremonias.arkanis.site/',
  },
];

export default function ProductionProjects() {
  return (
    <section id="proyectos" className="py-24 border-t border-brand-blue/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-brand-turquoise tracking-widest block mb-2">
            06. PROYECTOS EN PRODUCCIÓN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-sand">
            Sistemas reales, operando hoy.
          </h2>
          <p className="text-brand-lightBlue mt-4 font-light">
            No son maquetas ni promesas: son plataformas construidas por Arkanis que están en producción,
            sosteniendo la operación diaria de negocios reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-brand-blue/20 bg-brand-darkBlue/10 flex flex-col relative group"
            >
              {/* Technical corner accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-turquoise opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Live status header */}
              <div className="flex items-center justify-between border-b border-brand-blue/10 px-6 py-3 font-mono text-[9px]">
                <span className="text-brand-green flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-ping"></span>
                  EN PRODUCCIÓN
                </span>
                <span className="text-brand-lightBlue/60 flex items-center gap-1.5">
                  {project.icon}
                  {project.industry.toUpperCase()}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="font-serif text-2xl text-brand-sand">{project.client}</h3>

                <div className="space-y-3 text-xs font-light leading-relaxed flex-grow">
                  <div>
                    <span className="font-mono text-[9px] text-red-400 block mb-1">// PROBLEMA:</span>
                    <p className="text-brand-lightBlue">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-brand-turquoise block mb-1">// SISTEMA:</span>
                    <p className="text-brand-lightBlue">{project.solution}</p>
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-2 gap-2 font-mono text-center border-y border-brand-blue/10 py-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span className="text-brand-turquoise text-sm font-bold block">{metric.value}</span>
                      <span className="text-brand-lightBlue/60 text-[8px] tracking-wider uppercase">{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Outcome */}
                <p className="font-mono text-[10px] text-brand-green leading-normal">{project.outcome}</p>

                {/* Tags + CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[8px] text-brand-lightBlue/70">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border border-brand-blue/20 px-1.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[10px] text-brand-turquoise hover:text-brand-sand transition-colors font-bold shrink-0 ml-3"
                  >
                    VER SITIO
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
