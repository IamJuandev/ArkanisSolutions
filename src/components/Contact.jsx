import { useState } from 'react'
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

export default function Contact() {
  const { lang } = useLang()
  const tr = t[lang].contact
  const f = tr.form

  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', company: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full bg-[#151A21] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E2E8F0] placeholder-[#94A3B8]/50
    focus:outline-none focus:border-[#40E0FF]/60 focus:bg-[#1A2030] transition-all min-h-[48px]`

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <motion.div {...fadeInView()} className="text-center mb-14">
        <span className="inline-block px-4 py-1 rounded-full glass border border-[#40E0FF]/20 text-xs font-semibold text-[#40E0FF] uppercase tracking-widest mb-4">
          {tr.badge}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E2E8F0] mb-4">{tr.title}</h2>
        <p className="text-[#94A3B8] max-w-xl mx-auto text-lg">{tr.subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div {...fadeInView(0.1)} className="lg:col-span-2 space-y-4">
          {tr.info.map((item, i) => (
            <div key={i} className="glass rounded-xl p-4 border border-white/8 flex items-center gap-4 min-h-[64px]">
              <GlassIcon size="sm" color="cyan">
                <AppIcon name={item.icon} size={20} className="text-white/90" />
              </GlassIcon>
              <div>
                <div className="text-xs text-[#94A3B8] mb-0.5">{item.label}</div>
                <div className="text-sm font-medium text-[#E2E8F0]">{item.value}</div>
              </div>
            </div>
          ))}

          <div className="glass rounded-xl p-5 border border-[#40E0FF]/15 mt-4">
            <div className="text-[#40E0FF] font-bold text-sm mb-2">⏱ {lang === 'es' ? 'Respuesta rápida' : 'Fast response'}</div>
            <p className="text-xs text-[#94A3B8]">
              {lang === 'es'
                ? 'Respondemos en menos de 24 horas hábiles con una propuesta inicial personalizada.'
                : 'We respond within 24 business hours with a personalized initial proposal.'}
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div {...fadeInView(0.2)} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass rounded-2xl border border-white/8 p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder={f.name}
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder={f.email}
                className={inputClass}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange}
                placeholder={f.company}
                className={inputClass}
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClass + ' cursor-pointer'}
              >
                <option value="" disabled>{f.service}</option>
                {f.serviceOptions.map(opt => (
                  <option key={opt} value={opt} className="bg-[#151A21]">{opt}</option>
                ))}
              </select>
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder={f.message}
              className={inputClass + ' resize-none min-h-[120px]'}
            />

            <motion.button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl font-semibold text-sm bg-[#40E0FF] text-dark hover:bg-[#0BB8D4] disabled:opacity-60 transition-all glow-cyan min-h-[48px]"
            >
              {status === 'loading' ? f.submitting : f.submit}
            </motion.button>

            {status === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm text-[#22c55e]">
                ✓ {f.success}
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm text-red-400">
                ✗ {f.error}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
