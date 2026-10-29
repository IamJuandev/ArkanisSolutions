import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/que-hacemos', label: 'Soluciones' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/como-trabajamos', label: 'Cómo trabajamos' },
  { href: '/nosotros', label: 'Nosotros' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  return (
    <>
      <header className="ak-nav">
        <div className="ak-grad-strip" />
        <div className="ak-wrap">
          <div className="ak-nav-row">
            <a href="/" className="ak-logo" aria-label="Arkanis Solutions, ir al inicio">
              <img src="/brand/symbol-color.svg" alt="" width={40} height={40} />
              <span>
                <b>ARKANIS</b>
                <small>SOLUTIONS</small>
              </span>
            </a>
            <nav aria-label="Principal">
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} aria-current={currentPath === link.href ? 'page' : undefined}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a className="ak-btn ak-btn-verde" href="/contacto">
              Diagnóstico gratis
            </a>
            <button
              type="button"
              className="ak-nav-toggle"
              aria-expanded={open}
              aria-controls="ak-nav-panel"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
          <div id="ak-nav-panel" className="ak-nav-panel" data-open={open}>
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>
      <div className="ak-nav-spacer" aria-hidden="true" />
    </>
  );
}
