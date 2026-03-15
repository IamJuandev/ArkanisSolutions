import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

export default function Footer() {
  const { lang } = useLang()
  const tr = t[lang].footer
  const navTr = t[lang].nav
  const year = new Date().getFullYear()

  const navLinks = [
    { label: navTr.services, href: '#services' },
    { label: navTr.cases, href: '#cases' },
    { label: navTr.about, href: '#about' },
    { label: navTr.faq, href: '#faq' },
    { label: navTr.contact, href: '#contact' },
  ]

  const serviceLinks = [
    'Automatización n8n/Python',
    'Desarrollo React/Laravel',
    'Integraciones API',
    'Consultoría Técnica',
  ]

  return (
    <footer className="bg-[#080A0D] border-t border-white/5 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/Arkanis_logo.svg"
              alt="Arkanis Solutions"
              className="h-10 mb-4"
            />
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">{tr.tagline}</p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-semibold text-[#E2E8F0] uppercase tracking-widest mb-4">{tr.links.title}</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[#94A3B8] hover:text-[#40E0FF] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-[#E2E8F0] uppercase tracking-widest mb-4">{tr.services.title}</h4>
            <ul className="space-y-2">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" className="text-sm text-[#94A3B8] hover:text-[#40E0FF] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#94A3B8]">© {year} Arkanis Solutions. {tr.legal}</p>
          <div className="flex items-center gap-1 text-xs text-[#94A3B8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            {lang === 'es' ? 'Todos los sistemas operativos' : 'All systems operational'}
          </div>
        </div>
      </div>
    </footer>
  )
}
