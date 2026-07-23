import { Blocks, BriefcaseBusiness, Building2, Route, Workflow } from 'lucide-react';
import { LimelightNav, type LimelightNavItem } from './ui/limelight-nav';

const links: LimelightNavItem[] = [
  { href: '/nosotros', label: 'Nosotros', icon: Building2 },
  { href: '/que-hacemos', label: 'Qué hacemos', icon: Blocks },
  { href: '/como-trabajamos', label: 'Cómo trabajamos', icon: Route },
  { href: '/flujo', label: 'Ver un flujo', icon: Workflow },
  { href: '/proyectos', label: 'Proyectos', icon: BriefcaseBusiness },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="brand-shell mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 rounded-2xl border border-white/8 bg-brand-bg/72 px-3 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-5">
        <a href="/" className="group flex shrink-0 items-center gap-3" aria-label="Arkanis Solutions, ir al inicio">
          <img
            src="/Arkanis_Logo_Icon.svg"
            alt=""
            className="h-9 w-9 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 motion-reduce:transition-none"
          />
          <span className="hidden font-display text-sm font-semibold tracking-[0.16em] text-brand-sand sm:inline lg:text-base">
            ARKANIS <span className="font-normal text-brand-mist">SOLUTIONS</span>
          </span>
        </a>

        <LimelightNav items={links} className="shrink-0" />
      </div>
    </header>
  );
}
