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
  const labels = tr.labels

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
          {tr.items.map((item, i) => {
            const isCyan = item.color === 'cyan'
            return (
              <motion.div
                key={i}
                {...fadeInView(i * 0.15)}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="flex flex-col rounded-2xl overflow-hidden glass border border-white/8 hover:border-[#40E0FF]/30 group"
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full ${isCyan ? 'bg-gradient-to-r from-[#40E0FF] to-[#22c55e]' : 'bg-gradient-to-r from-[#22c55e] to-[#40E0FF]'}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Client header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className={`text-[10px] font-semibold uppercase tracking-widest mb-1 ${isCyan ? 'text-[#40E0FF]' : 'text-[#22c55e]'}`}>
                        {item.industry}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-[#E2E8F0]">{item.client}</h3>
                        {item.inConstruction && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
                            {labels.inConstruction}
                          </span>
                        )}
                      </div>
                    </div>
                    <GlassIcon size="xs" color={isCyan ? 'cyan' : 'green'}>
                      <AppIcon name={CASE_ICONS[i]} size={18} className="text-white/90" />
                    </GlassIcon>
                  </div>

                  {/* Problem / Solution */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-widest">
                        {labels.problem}
                      </span>
                      <p className="text-sm text-[#94A3B8] mt-1 leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <span className={`text-[10px] font-semibold uppercase tracking-widest ${isCyan ? 'text-[#40E0FF]' : 'text-[#22c55e]'}`}>
                        {labels.solution}
                      </span>
                      <p className="text-sm text-[#B8C4D0] mt-1 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>

                  {/* Outcome — emphasized block */}
                  <div
                    className={`rounded-xl p-3 mb-4 border ${isCyan ? 'bg-[#40E0FF]/[0.06] border-[#40E0FF]/20' : 'bg-[#22c55e]/[0.06] border-[#22c55e]/20'}`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <AppIcon name="trending-up" size={12} className={isCyan ? 'text-[#40E0FF]' : 'text-[#22c55e]'} />
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${isCyan ? 'text-[#40E0FF]' : 'text-[#22c55e]'}`}>
                        {labels.outcome}
                      </span>
                    </div>
                    <p className="text-sm text-[#E2E8F0] leading-relaxed">{item.outcome}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { value: item.metric, label: item.metricLabel },
                      { value: item.metric2, label: item.metric2Label },
                    ].map((m, j) => (
                      <div key={j} className={`rounded-xl p-3 text-center ${isCyan ? 'bg-[#40E0FF]/10' : 'bg-[#22c55e]/10'}`}>
                        <div className={`text-lg font-extrabold ${isCyan ? 'text-[#40E0FF]' : 'text-[#22c55e]'}`}>{m.value}</div>
                        <div className="text-xs text-[#94A3B8]">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#94A3B8]">{tag}</span>
                    ))}
                  </div>

                  {/* CTA button — pinned to bottom */}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${labels.cta} — ${item.client}`}
                      className={`mt-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1318]
                        ${isCyan
                          ? 'border-[#40E0FF]/40 text-[#40E0FF] hover:bg-[#40E0FF]/10 hover:border-[#40E0FF]/70 hover:shadow-[0_0_18px_rgba(64,224,255,0.35)] focus-visible:ring-[#40E0FF]'
                          : 'border-[#22c55e]/40 text-[#22c55e] hover:bg-[#22c55e]/10 hover:border-[#22c55e]/70 hover:shadow-[0_0_18px_rgba(34,197,94,0.35)] focus-visible:ring-[#22c55e]'}`}
                    >
                      <span>{labels.cta}</span>
                      <AppIcon name="arrow-up-right" size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
