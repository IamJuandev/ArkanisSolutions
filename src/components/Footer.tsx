export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="/#inicio" className="flex items-center gap-3" aria-label="Arkanis Solutions, volver al inicio">
          <img src="/Arkanis_Logo_Icon.svg" alt="" className="h-10 w-10" />
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.14em] text-brand-sand">ARKANIS SOLUTIONS</p>
            <p className="mt-1 text-xs text-brand-mist">Diseño con intención. Sistemas con propósito.</p>
          </div>
        </a>
        <div className="text-left text-xs leading-5 text-brand-mist sm:text-right">
          <a href="mailto:contacto@arkanis.site" className="transition-colors hover:text-brand-aqua">contacto@arkanis.site</a>
          <p>© 2026 Arkanis Solutions</p>
        </div>
      </div>
    </footer>
  );
}
