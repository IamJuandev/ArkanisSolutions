import { ArrowRight, Home } from 'lucide-react';

/**
 * Closing call to action for section pages. Since the site moved to
 * section-based navigation the contact form no longer lives on the homepage,
 * so every section needs its own way to reach it instead of sending the
 * visitor back to the hero to hunt for a button.
 *
 * Each section closes with its own line, picking up the argument that section
 * just made — a single repeated sentence reads like boilerplate.
 */
type Copy = { eyebrow: string; headline: string };

const DEFAULT_COPY: Copy = {
  eyebrow: '¿Vemos tu caso?',
  headline: 'Hablemos de dónde aparece la fricción en tu operación y te respondemos con una ruta clara.',
};

const COPY_BY_PATH: Record<string, Copy> = {
  '/nosotros': {
    eyebrow: '¿Trabajamos juntos?',
    headline: 'Si compartís esta forma de entender la tecnología, conversemos sobre tu operación.',
  },
  '/que-hacemos': {
    eyebrow: '¿Cuál es tu prioridad?',
    headline: 'Hablemos del frente que te resulta más urgente y te proponemos por dónde empezar.',
  },
  '/como-trabajamos': {
    eyebrow: 'El primer paso',
    headline: 'Todo empieza con un diagnóstico. Hablemos de cómo opera tu empresa hoy.',
  },
  '/flujo': {
    eyebrow: '¿Te resulta conocido?',
    headline: 'Si reconocés este patrón en tu operación, veamos qué se puede ordenar y automatizar.',
  },
  '/proyectos': {
    eyebrow: 'Tu proyecto',
    headline: 'Cada uno de estos sistemas empezó con una conversación. Hablemos del tuyo.',
  },
  '/privacidad': {
    eyebrow: '¿Hablamos?',
    headline: 'Si tenés dudas sobre el tratamiento de tus datos o querés proponernos un proyecto, hablemos.',
  },
};

export default function SectionCta({ path }: { path: string }) {
  const { eyebrow, headline } = COPY_BY_PATH[path] ?? DEFAULT_COPY;

  return (
    <section className="section-cta-band">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-cta-shell">
          <div className="section-cta-copy">
            <p className="eyebrow">{eyebrow}</p>
            <p className="section-cta-headline">{headline}</p>
          </div>
          <div className="section-cta-actions">
            <a href="/contacto" className="brand-button brand-button-large liquid-glass-button">
              Solicitar diagnóstico <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="/" className="ghost-button">
              <Home size={16} aria-hidden="true" />
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
