interface NavbarProps {
  onStartAssessment: () => void;
}

export default function Navbar({ onStartAssessment }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-blue/20 bg-brand-bg/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Arkanis SVG */}
        <a href="#" className="flex items-center space-x-3 group">
          <img
            src="/Arkanis_Logo_Icon.svg"
            alt="Arkanis Solutions"
            className="w-8 h-8 transition-transform group-hover:scale-105 duration-300"
          />
          <span className="font-mono text-lg font-bold tracking-wider text-brand-sand group-hover:text-brand-turquoise transition-colors">
            ARKANIS<span className="font-normal text-brand-lightBlue/80"> SOLUTIONS</span>
          </span>
        </a>
        
        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-mono text-xs tracking-wider text-brand-lightBlue">
          <a href="#problema" className="hover:text-brand-turquoise transition-colors duration-200">01. EL CAOS</a>
          <a href="#solucion" className="hover:text-brand-turquoise transition-colors duration-200">02. ARQUITECTURA</a>
          <a href="#servicios" className="hover:text-brand-turquoise transition-colors duration-200">03. SERVICIOS</a>
          <a href="#calculadora" className="hover:text-brand-turquoise transition-colors duration-200">04. CALCULADORA ROI</a>
          <a href="#casos" className="hover:text-brand-turquoise transition-colors duration-200">05. CASOS</a>
          <a href="#proyectos" className="hover:text-brand-turquoise transition-colors duration-200">06. PROYECTOS</a>
        </nav>

        <div>
          <button 
            onClick={onStartAssessment}
            className="border border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-brand-bg hover:shadow-lg hover:shadow-brand-turquoise/20 transition-all px-4 py-2 text-xs font-mono tracking-wider cursor-pointer font-bold"
          >
            EVALUACIÓN GRATUITA
          </button>
        </div>
      </div>
    </header>
  );
}
