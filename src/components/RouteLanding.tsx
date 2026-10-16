import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';
import type { RouteLandingContent } from '../content/landings';

/**
 * SEO landing built around the real path of a project. The route rail in the
 * first viewport doubles as navigation: each stage lights up while its
 * section is on screen, so the visitor always knows where they are.
 *
 * Content lives in `server/content/landings.json` so the Express server can
 * render the same text for crawlers that do not run JavaScript.
 */
export default function RouteLanding({ content }: { content: RouteLandingContent }) {
  const [activeStage, setActiveStage] = useState(content.stages[0]?.id ?? '');
  const [isRailStuck, setIsRailStuck] = useState(false);
  const stageRefs = useRef<Record<string, HTMLElement | null>>({});
  const railSentinelRef = useRef<HTMLDivElement | null>(null);
  const activeIndex = content.stages.findIndex((stage) => stage.id === activeStage);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = content.title;
    if (description) description.content = content.description;

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, [content.title, content.description]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveStage(visible[0].target.id);
      },
      // A stage counts as current while it crosses the viewport's horizontal center line.
      { rootMargin: '-50% 0px -49% 0px' },
    );

    Object.values(stageRefs.current).forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [content.stages]);

  useEffect(() => {
    const sentinel = railSentinelRef.current;
    if (!sentinel) return;
    // The sentinel sits right above the rail: once it scrolls past the sticky
    // offset, the rail is pinned and needs the band that closes the gap to the navbar.
    const observer = new IntersectionObserver(
      ([entry]) => setIsRailStuck(!entry.isIntersecting && entry.boundingClientRect.top < 100),
      { rootMargin: '-96px 0px 0px 0px' },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-brand-bg font-sans text-brand-sand antialiased selection:bg-brand-aqua selection:text-brand-ink">
      <div className="site-texture" aria-hidden="true" />
      <Navbar />

      <main className="relative z-10">
        <section className="route-hero relative overflow-hidden pt-36 sm:pt-44">
          <div className="route-hero-glow" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-brand-sand sm:text-6xl lg:text-7xl">
              {content.heading}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-mist">{content.lead}</p>
            <p className="mt-4 text-sm text-brand-mist/80">{content.areaLine}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/contacto" className="brand-button brand-button-large liquid-glass-button">
                {content.cta.button} <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#ruta" className="ghost-button">
                Ver cómo trabajamos
              </a>
            </div>
          </div>
        </section>

        <div className="route-journey">
          <div ref={railSentinelRef} aria-hidden="true" />
          <nav id="ruta" aria-label="Etapas del proyecto" className="route-rail-wrap" data-stuck={isRailStuck || undefined}>
            <ol className="route-rail mx-auto max-w-7xl px-6">
              {content.stages.map((stage, index) => {
                const isActive = stage.id === activeStage;
                return (
                  <li key={stage.id} className="route-rail-item" data-done={index < activeIndex || undefined}>
                    <a
                      href={`#${stage.id}`}
                      className="route-rail-link"
                      aria-current={isActive ? 'step' : undefined}
                      data-active={isActive || undefined}
                    >
                      <span className="route-rail-dot" aria-hidden="true" />
                      <span className="route-rail-number">{stage.number}</span>
                      <span className="route-rail-name">{stage.name}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>

          <section aria-labelledby="route-stages-title" className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-28">
            <h2 id="route-stages-title" className="route-section-title">
              {content.stagesTitle}
            </h2>

            <div className="mt-12">
              {content.stages.map((stage) => (
                <article
                  key={stage.id}
                  id={stage.id}
                  ref={(node) => {
                    stageRefs.current[stage.id] = node;
                  }}
                  className="route-stage"
                  data-active={stage.id === activeStage || undefined}
                >
                  <p className="route-stage-number" aria-hidden="true">
                    {stage.number}
                  </p>

                  <div className="route-stage-body">
                    <h3 className="route-stage-title">{stage.title}</h3>
                    <p className="route-stage-description">{stage.description}</p>

                    <p className="route-stage-receive">Recibís</p>
                    <ul className="route-stage-deliverables">
                      {stage.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {stage.proof && (
                    <aside className="route-proof" aria-label={`Evidencia: ${stage.proof.name}`}>
                      <span className="route-proof-status" data-status={stage.proof.status}>
                        {stage.proof.status === 'live' ? 'En uso' : 'Próximamente'}
                      </span>
                      <p className="route-proof-name">{stage.proof.name}</p>
                      <p className="route-proof-text">{stage.proof.text}</p>
                      {stage.proof.href && (
                        <a
                          href={stage.proof.href}
                          className="route-proof-link"
                          {...(stage.proof.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {stage.proof.linkLabel}
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                      )}
                    </aside>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>

        <section aria-labelledby="route-services-title" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <h2 id="route-services-title" className="route-section-title">
            {content.servicesTitle}
          </h2>
          <dl className="route-services mt-12">
            {content.services.map((service) => (
              <div key={service.name} className="route-service">
                <dt className="route-service-name">{service.name}</dt>
                <dd className="route-service-description">{service.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="route-faq-title" className="mx-auto max-w-4xl px-6 pb-20 sm:pb-28">
          <h2 id="route-faq-title" className="route-section-title">
            Preguntas frecuentes
          </h2>
          <div className="route-faq mt-10">
            {content.faq.map((item) => (
              <details key={item.question} className="route-faq-item">
                <summary className="route-faq-question">
                  <span>{item.question}</span>
                  <Plus size={18} aria-hidden="true" className="route-faq-icon" />
                </summary>
                <p className="route-faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-cta-band">
          <div className="mx-auto max-w-7xl px-6">
            <div className="section-cta-shell">
              <div className="section-cta-copy">
                <h2 className="section-cta-headline mt-0">{content.cta.heading}</h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-brand-mist">{content.cta.text}</p>
              </div>
              <div className="section-cta-actions">
                <a href="/contacto" className="brand-button brand-button-large liquid-glass-button">
                  {content.cta.button} <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
