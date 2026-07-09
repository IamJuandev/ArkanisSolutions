export default function Footer() {
  return (
    <footer className="border-t border-brand-blue/20 bg-brand-bg py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <img src="/Arkanis_Logo_Icon.svg" alt="Arkanis Solutions" className="w-8 h-8" />
          <span className="font-mono text-sm tracking-wider text-brand-sand">
            ARKANIS SOLUTIONS — SISTEMAS OPERATIVOS
          </span>
        </div>
        
        <p className="font-mono text-[10px] text-brand-lightBlue text-center md:text-right">
          © 2026 Arkanis Solutions. Diseñado con honestidad e ingeniería útil. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
