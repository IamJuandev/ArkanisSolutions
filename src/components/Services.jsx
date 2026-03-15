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

export default function Services() {
  const { lang } = useLang()
  const tr = t[lang].services

  const [large, small] = [
    tr.items.filter(i => i.size === 'large'),
    tr.items.filter(i => i.size === 'small'),
  ]

  return (
    <section id="services" className="section-padding max-w-7xl mx-auto">
      {/* Header */}
      <motion.div {...fadeInView()} className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full glass border border-[#40E0FF]/20 text-xs font-semibold text-[#40E0FF] uppercase tracking-widest mb-4">
          {tr.badge}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E2E8F0] mb-4">{tr.title}</h2>
        <p className="text-[#94A3B8] max-w-xl mx-auto text-lg">{tr.subtitle}</p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Large cards */}
        {large.map((item, i) => (
          <motion.div
            key={i}
            {...fadeInView(i * 0.1)}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`lg:col-span-1 md:col-span-1 p-6 rounded-2xl glass border cursor-default group
              ${item.accent === 'cyan' ? 'border-[#40E0FF]/20 hover:border-[#40E0FF]/50' : 'border-[#22c55e]/20 hover:border-[#22c55e]/50'}
            `}
          >
            <GlassIcon size="lg" color={item.accent} className="mb-4">
              <AppIcon name={item.icon} size={28} className="text-white/90" />
            </GlassIcon>
            <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">{item.title}</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className={`text-xs px-2.5 py-1 rounded-full font-medium
                  ${item.accent === 'cyan' ? 'bg-[#40E0FF]/10 text-[#40E0FF]' : 'bg-[#22c55e]/10 text-[#22c55e]'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Small cards */}
        {small.map((item, i) => (
          <motion.div
            key={i}
            {...fadeInView((i + 2) * 0.1)}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`p-5 rounded-2xl glass border cursor-default
              ${item.accent === 'cyan' ? 'border-[#40E0FF]/15 hover:border-[#40E0FF]/40' : 'border-[#22c55e]/15 hover:border-[#22c55e]/40'}
            `}
          >
            <GlassIcon size="sm" color={item.accent} className="mb-3">
              <AppIcon name={item.icon} size={20} className="text-white/90" />
            </GlassIcon>
            <h3 className="text-base font-bold text-[#E2E8F0] mb-2">{item.title}</h3>
            <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map(tag => (
                <span key={tag} className={`text-xs px-2 py-0.5 rounded-full
                  ${item.accent === 'cyan' ? 'bg-[#40E0FF]/10 text-[#40E0FF]' : 'bg-[#22c55e]/10 text-[#22c55e]'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
