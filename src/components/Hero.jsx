import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const chips = [
  { label: 'React', color: '#40E0FF', top: '8%',  left: '62%' },
  { label: 'Laravel', color: '#f97316', top: '22%', left: '88%' },
  { label: 'n8n', color: '#22c55e', top: '68%', left: '85%' },
  { label: 'Python', color: '#facc15', top: '82%', left: '58%' },
  { label: 'API', color: '#a78bfa', top: '75%', left: '10%' },
  { label: 'SQLite', color: '#40E0FF', top: '18%', left: '5%' },
]

export default function Hero() {
  const { lang } = useLang()
  const tr = t[lang].hero

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden pt-16"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-[#40E0FF]/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#22c55e]/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)] py-16">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#40E0FF]/20 text-xs font-semibold text-[#40E0FF] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#40E0FF] animate-pulse" />
                {tr.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-6"
            >
              <span className="text-[#E2E8F0]">{tr.title1}</span>
              <br />
              <span className="text-gradient">{tr.title2}</span>
              <br />
              <span className="text-[#E2E8F0]">{tr.title3}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              {tr.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <a
                href="#services"
                className="px-7 py-4 rounded-xl text-sm font-semibold bg-[#40E0FF] text-dark hover:bg-[#0BB8D4] transition-all glow-cyan min-w-[190px] text-center"
              >
                {tr.cta1}
              </a>
              <a
                href="#contact"
                className="px-7 py-4 rounded-xl text-sm font-semibold glass border border-[#40E0FF]/30 text-[#40E0FF] hover:bg-[#40E0FF]/10 transition-all min-w-[190px] text-center"
              >
                {tr.cta2}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
              className="grid grid-cols-2 gap-3 max-w-xs mx-auto lg:mx-0"
            >
              {tr.stats.map((stat, i) => (
                <div key={i} className="glass rounded-xl p-3 text-center border border-white/5">
                  <div className="text-xl sm:text-2xl font-extrabold text-gradient">{stat.value}</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Logo visual ── */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#40E0FF]/15 to-[#22c55e]/10 blur-2xl" />

              {/* Rotating dashed orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-dashed border-[#40E0FF]/20"
              />

              {/* Counter-rotating inner orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="absolute inset-10 rounded-full border border-dashed border-[#22c55e]/15"
              />

              {/* Glass backdrop circle */}
              <div className="absolute inset-8 rounded-full glass border border-[#40E0FF]/25 shadow-[0_0_60px_rgba(64,224,255,0.12)]" />

              {/* Logo icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src="/Arkanis_logo.svg"
                  alt="Arkanis"
                  className="w-2/3 h-2/3 object-contain drop-shadow-[0_0_30px_rgba(64,224,255,0.3)]"
                />
              </motion.div>

              {/* Floating tech chips */}
              {chips.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4, ease: 'backOut' }}
                  style={{ top: chip.top, left: chip.left, borderColor: chip.color + '55', color: chip.color }}
                  className="absolute px-2.5 py-1 rounded-full text-[11px] font-bold glass border backdrop-blur-sm shadow-sm -translate-x-1/2 -translate-y-1/2"
                >
                  {chip.label}
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#40E0FF]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
