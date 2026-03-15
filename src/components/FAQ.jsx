import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

const fadeInView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function FAQ() {
  const { lang } = useLang()
  const tr = t[lang].faq
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section-padding bg-[#0F1318]">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeInView()} className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full glass border border-[#40E0FF]/20 text-xs font-semibold text-[#40E0FF] uppercase tracking-widest mb-4">
            {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E2E8F0] mb-4">{tr.title}</h2>
          <p className="text-[#94A3B8] text-lg">{tr.subtitle}</p>
        </motion.div>

        <div className="space-y-3">
          {tr.items.map((item, i) => (
            <motion.div
              key={i}
              {...fadeInView(i * 0.05)}
              className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                open === i ? 'border-[#40E0FF]/40 bg-[#40E0FF]/5' : 'border-white/8 glass'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left min-h-[48px]"
              >
                <span className={`font-semibold text-sm sm:text-base transition-colors ${open === i ? 'text-[#40E0FF]' : 'text-[#E2E8F0]'}`}>
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`shrink-0 text-xl font-light ${open === i ? 'text-[#40E0FF]' : 'text-[#94A3B8]'}`}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-4 text-sm text-[#94A3B8] leading-relaxed border-t border-white/5">
                      {item.steps ? (
                        <ol className="pt-3 space-y-2">
                          {item.steps.map((step, n) => (
                            <li key={n} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#40E0FF]/15 border border-[#40E0FF]/30 text-[#40E0FF] text-[10px] font-bold flex items-center justify-center mt-0.5">
                                {n + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <div className="pt-3">{item.a}</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
