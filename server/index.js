import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001
const N8N_WEBHOOK = 'https://n8n.arkanis.site/webhook/fd0b0e50-2248-4803-9c5b-0f1b8acffa8c'
const WEBHOOK_TIMEOUT_MS = 10_000
const FIELD_LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  service: 120,
  message: 4_000,
}

const normalizeField = (value, maxLength, required = false) => {
  if (value === undefined || value === null) return required ? null : ''
  if (typeof value !== 'string') return null

  const normalized = value.trim()
  if ((required && !normalized) || normalized.length > maxLength) return null
  return normalized
}

app.use(cors())
app.use(express.json({ limit: '16kb' }))

app.post('/api/contact', async (req, res) => {
  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res.status(400).json({ error: 'Invalid request body' })
  }

  const name = normalizeField(req.body.name, FIELD_LIMITS.name, true)
  const email = normalizeField(req.body.email, FIELD_LIMITS.email, true)
  const company = normalizeField(req.body.company, FIELD_LIMITS.company)
  const service = normalizeField(req.body.service, FIELD_LIMITS.service)
  const message = normalizeField(req.body.message, FIELD_LIMITS.message, true)

  if (!name || !email || company === null || service === null || !message) {
    return res.status(400).json({ error: 'Invalid contact fields' })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  try {
    const webhookRes = await fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, service, message }),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    })

    if (!webhookRes.ok) {
      console.error(`n8n webhook failed with status ${webhookRes.status}`)
      return res.status(502).json({ error: 'Contact service unavailable' })
    }
  } catch (err) {
    console.error('n8n webhook request failed:', err instanceof Error ? err.message : err)
    return res.status(502).json({ error: 'Contact service unavailable' })
  }

  res.json({ success: true })
})

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found' })
})

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')))
  app.get([
    '/',
    '/proyectos/directorio-terrario',
    '/productos/sistema-gestion-restaurantes',
  ], (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'))
  })
  app.get('*', (req, res) => {
    res.status(404).sendFile(join(__dirname, '../dist/index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
