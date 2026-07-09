import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChaosBoard from './components/ChaosBoard';
import SolutionMap from './components/SolutionMap';
import ServicesGrid from './components/ServicesGrid';
import RoiCalculator from './components/RoiCalculator';
import CaseStudies from './components/CaseStudies';
import ProductionProjects from './components/ProductionProjects';
import AssessmentForm from './components/AssessmentForm';
import Footer from './components/Footer';

export default function App() {
  const handleStartAssessment = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-bg text-brand-sand font-sans antialiased overflow-x-hidden selection:bg-brand-turquoise selection:text-brand-bg relative min-h-screen">
      {/* Background grid lines and film grain textures */}
      <div className="fixed inset-0 pointer-events-none grain-bg z-30"></div>
      <div className="fixed inset-0 pointer-events-none blueprint-lines z-0"></div>

      {/* Main Layout wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onStartAssessment={handleStartAssessment} />
        
        <main className="flex-grow">
          {/* Hero Section with Logo Deconstruction */}
          <Hero onStartAssessment={handleStartAssessment} />
          
          {/* Sector 1: El Caos (Interactive Bottlenecks) */}
          <ChaosBoard />
          
          {/* Sector 2: La Arquitectura (Dynamic Pipeline Steps) */}
          <SolutionMap />
          
          {/* Sector 3: Servicios (Stack Configurator) */}
          <ServicesGrid />

          {/* Sector 4: Calculadora ROI (Salary Sliders & SVG Chart) */}
          <RoiCalculator />
          
          {/* Sector 5: Casos de Uso (Industry Tabs & Flowcharts) */}
          <CaseStudies />

          {/* Sector 6: Proyectos en Producción (Live client platforms) */}
          <ProductionProjects />

          {/* Sector 7: Contacto / Diagnóstico */}
          <AssessmentForm />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
