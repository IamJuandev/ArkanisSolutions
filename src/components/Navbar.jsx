import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const tr = t[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: tr.services, href: '#services' },
    { label: tr.cases, href: '#cases' },
    { label: tr.about, href: '#about' },
    { label: tr.faq, href: '#faq' },
    { label: tr.contact, href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src="/Arkanis_logo.svg"
            alt="Arkanis Solutions"
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#94A3B8] hover:text-[#40E0FF] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="px-3 py-1.5 text-xs font-semibold rounded-full border border-white/10 text-[#94A3B8] hover:text-[#40E0FF] hover:border-[#40E0FF]/40 transition-all"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#40E0FF] text-dark hover:bg-[#0BB8D4] transition-all glow-cyan"
          >
            {tr.cta}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} className="text-xs text-[#94A3B8] px-2 py-1 border border-white/10 rounded">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setOpen(v => !v)}
            className="p-2 text-[#94A3B8] hover:text-white"
            aria-label="Menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" style={open ? {transform:'rotate(45deg) translate(3px,3px)'} : {}}/>
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" style={open ? {opacity:0} : {}}/>
            <div className="w-5 h-0.5 bg-current transition-all" style={open ? {transform:'rotate(-45deg) translate(3px,-3px)'} : {}}/>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm py-2 text-[#94A3B8] hover:text-[#40E0FF] transition-colors border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-semibold rounded-lg bg-[#40E0FF] text-dark text-center"
              >
                {tr.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
