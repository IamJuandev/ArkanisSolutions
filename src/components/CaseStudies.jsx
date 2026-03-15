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

const CASE_ICONS = ['calendar-check', 'map-pin', 'receipt']

export default function CaseStudies() {
  const { lang } = useLang()
  const tr = t[lang].cases

  return (
    <section id="cases" className="section-padding bg-[#0F1318]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInView()} className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass border border-[#40E0FF]/20 text-xs font-semibold text-[#40E0FF] uppercase tracking-widest mb-4">
            {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E2E8F0] mb-4">{tr.title}</h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-lg">{tr.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tr.items.map((item, i) => (
            <motion.div
              key={i}
              {...fadeInView(i * 0.15)}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="flex flex-col rounded-2xl overflow-hidden glass border border-white/8 hover:border-[#40E0FF]/30 group"
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full ${item.color === 'cyan' ? 'bg-gradient-to-r from-[#40E0FF] to-[#22c55e]' : 'bg-gradient-to-r from-[#22c55e] to-[#40E0FF]'}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Client header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-[#E2E8F0]">{item.client}</h3>
                      {item.inConstruction && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
                          {lang === 'es' ? 'En construcción' : 'In development'}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#94A3B8]">{item.industry}</p>
                  </div>
                  <GlassIcon size="xs" color={item.color === 'cyan' ? 'cyan' : 'green'}>
                    <AppIcon name={CASE_ICONS[i]} size={18} className="text-white/90" />
                  </GlassIcon>
                </div>

                {/* Problem / Solution */}
                <div className="flex-1 space-y-3 mb-5">
                  <div>
                    <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wide">
                      {lang === 'es' ? 'Problema' : 'Problem'}
                    </span>
                    <p className="text-sm text-[#94A3B8] mt-1 leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wide ${item.color === 'cyan' ? 'text-[#40E0FF]' : 'text-[#22c55e]'}`}>
                      {lang === 'es' ? 'Solución' : 'Solution'}
                    </span>
                    <p className="text-sm text-[#B8C4D0] mt-1 leading-relaxed">{item.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { value: item.metric, label: item.metricLabel },
                    { value: item.metric2, label: item.metric2Label },
                  ].map((m, j) => (
                    <div key={j} className={`rounded-xl p-3 text-center ${item.color === 'cyan' ? 'bg-[#40E0FF]/10' : 'bg-[#22c55e]/10'}`}>
                      <div className={`text-lg font-extrabold ${item.color === 'cyan' ? 'text-[#40E0FF]' : 'text-[#22c55e]'}`}>{m.value}</div>
                      <div className="text-xs text-[#94A3B8]">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags + link */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#94A3B8]">{tag}</span>
                    ))}
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-semibold shrink-0 flex items-center gap-1 transition-colors
                        ${item.color === 'cyan' ? 'text-[#40E0FF] hover:text-white' : 'text-[#22c55e] hover:text-white'}`}
                    >
                      {lang === 'es' ? 'Ver proyecto' : 'View project'} →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
