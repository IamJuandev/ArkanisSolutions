import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import AssessmentForm from './components/AssessmentForm';
import AutomationFlow from './components/AutomationFlow';
import ClientProcess from './components/ClientProcess';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Institutional from './components/Institutional';
import Navbar from './components/Navbar';
import Pillars from './components/Pillars';
import ProductionProjects from './components/ProductionProjects';
import TerrarioCaseStudy from './components/TerrarioCaseStudy';
import TheDukesProduct from './components/TheDukesProduct';

const sectionViews: Record<string, ReactNode> = {
  '/nosotros': <Institutional />,
  '/que-hacemos': <Pillars />,
  '/como-trabajamos': <ClientProcess />,
  '/flujo': <AutomationFlow />,
  '/proyectos': <ProductionProjects />,
  '/contacto': <AssessmentForm />,
};

function SectionView({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-bg font-sans text-brand-sand antialiased selection:bg-brand-aqua selection:text-brand-ink">
      <div className="site-texture" aria-hidden="true" />
      <Navbar />
      <main className="section-view-main relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <a href="/" className="section-back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Volver al inicio
          </a>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function NotFoundView() {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-brand-bg px-6 font-sans text-brand-sand antialiased">
      <div className="site-texture" aria-hidden="true" />
      <main className="relative z-10 mx-auto w-full max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-aqua">Error 404</p>
        <h1 className="mt-5 font-display text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
          Esta página no existe.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-brand-mist">
          La dirección puede estar incompleta o el contenido pudo haberse movido.
        </p>
        <a href="/" className="brand-button brand-button-large liquid-glass-button mt-9">
          Volver al inicio
        </a>
      </main>
    </div>
  );
}

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (currentPath === '/proyectos/directorio-terrario') {
    return <TerrarioCaseStudy />;
  }

  if (currentPath === '/productos/sistema-gestion-restaurantes') {
    return <TheDukesProduct />;
  }

  if (currentPath === '/') {
    return (
      <div className="min-h-screen overflow-x-hidden bg-brand-bg font-sans text-brand-sand antialiased selection:bg-brand-aqua selection:text-brand-ink">
        <div className="site-texture" aria-hidden="true" />
        <Navbar />
        <main className="relative z-10">
          <Hero />
        </main>
      </div>
    );
  }

  const sectionView = sectionViews[currentPath];
  if (sectionView) {
    return <SectionView>{sectionView}</SectionView>;
  }

  return <NotFoundView />;
}
