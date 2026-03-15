import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'
import GlassIcon from './GlassIcon'
import AppIcon from './AppIcon'

const fadeInView = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function About() {
  const { lang } = useLang()
  const tr = t[lang].about

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div {...fadeInView(0)}>
            <span className="inline-block px-4 py-1 rounded-full glass border border-[#40E0FF]/20 text-xs font-semibold text-[#40E0FF] uppercase tracking-widest mb-6">
              {tr.badge}
            </span>
          </motion.div>

          <motion.h2 {...fadeInView(0.1)} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E2E8F0] mb-6">
            {tr.title}
          </motion.h2>

          <motion.p {...fadeInView(0.2)} className="text-[#94A3B8] text-lg leading-relaxed mb-4">
            {tr.description1}
          </motion.p>
          <motion.p {...fadeInView(0.25)} className="text-[#94A3B8] text-lg leading-relaxed mb-8">
            {tr.description2}
          </motion.p>

          {/* Values */}
          <div className="space-y-4">
            {tr.values.map((v, i) => (
              <motion.div
                key={i}
                {...fadeInView(0.3 + i * 0.1)}
                className="flex items-start gap-4 p-4 rounded-xl glass border border-white/5"
              >
                <GlassIcon size="sm" color="cyan">
                  <AppIcon name={v.icon} size={20} className="text-white/90" />
                </GlassIcon>
                <div>
                  <h4 className="font-semibold text-[#E2E8F0] mb-1">{v.title}</h4>
                  <p className="text-sm text-[#94A3B8]">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Logo */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="w-80 h-80 rounded-3xl glass border border-[#40E0FF]/20 flex items-center justify-center glow-cyan">
              <img
                src="/Arkanis_logo_sinletras.svg"
                alt="Arkanis icon"
                className="w-56 h-56 object-contain"
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-[#40E0FF] text-dark text-xs font-bold shadow-lg"
            >
              React + Laravel
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-[#22c55e] text-dark text-xs font-bold shadow-lg"
            >
              n8n + Python
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
