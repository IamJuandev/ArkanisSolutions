import express from 'express'
import cors from 'cors'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import {
  closeDb,
  markNotified,
  pendingNotifications,
  recordNotifyFailure,
  recordSubmission,
  stats,
} from './db.js'
// Generated from emails/ by `npm run build:emails`.
import { internalAlert, leadConfirmation } from './emails.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001
// Overridable so the contact flow can be exercised against a local webhook
// without creating real leads in production n8n.
const N8N_WEBHOOK = process.env.N8N_WEBHOOK_URL
  || 'https://n8n.arkanis.site/webhook/fd0b0e50-2248-4803-9c5b-0f1b8acffa8c'
const WEBHOOK_TIMEOUT_MS = 10_000
const NOTIFY_MAX_ATTEMPTS = 8
const NOTIFY_SWEEP_MS = Number(process.env.NOTIFY_SWEEP_MS || 60_000)
const NOTIFY_SWEEP_BATCH = 20
const SITE_URL = 'https://arkanis.site'
const FIELD_LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  service: 120,
  message: 4_000,
}

const ROUTE_SEO = {
  '/': {
    title: 'Automatización y software en Armenia, Quindío | Arkanis',
    description: 'Automatización de procesos, diseño web y software a medida para pymes de Armenia, Quindío y el Eje Cafetero.',
    canonical: `${SITE_URL}/`,
    image: `${SITE_URL}/arkanis-hero-poster.webp`,
    imageAlt: 'Arkanis Solutions transforma operaciones empresariales con tecnología.',
  },
  '/nosotros': {
    title: 'Nosotros | Arkanis Solutions',
    description: 'Conocé la misión, visión y principios con los que Arkanis Solutions acompaña la modernización de las pymes del Eje Cafetero.',
    canonical: `${SITE_URL}/nosotros`,
    image: `${SITE_URL}/arkanis-hero-poster.webp`,
    imageAlt: 'Arkanis Solutions acompaña empresas del Eje Cafetero con tecnología útil.',
  },
  '/que-hacemos': {
    title: 'Diseño web, automatización y software | Arkanis Solutions',
    description: 'Diseño web a medida, automatización de operaciones y consultoría tecnológica para empresas de Armenia y el Eje Cafetero.',
    canonical: `${SITE_URL}/que-hacemos`,
    image: `${SITE_URL}/arkanis-hero-poster.webp`,
    imageAlt: 'Servicios digitales y de automatización de Arkanis Solutions.',
  },
  '/como-trabajamos': {
    title: 'Cómo trabajamos | Arkanis Solutions',
    description: 'Diagnóstico, priorización, diseño, construcción y evolución de sistemas digitales adaptados a cada empresa.',
    canonical: `${SITE_URL}/como-trabajamos`,
    image: `${SITE_URL}/arkanis-hero-poster.webp`,
    imageAlt: 'Proceso de trabajo de Arkanis Solutions.',
  },
  '/flujo': {
    title: 'Diagnóstico y automatización de procesos | Arkanis Solutions',
    description: 'Arkanis identifica el desorden operativo, define responsables y convierte tareas dispersas en procesos visibles y automatizables.',
    canonical: `${SITE_URL}/flujo`,
    image: `${SITE_URL}/arkanis-hero-poster.webp`,
    imageAlt: 'Comparación entre una operación dispersa y un proceso organizado por Arkanis.',
  },
  '/proyectos': {
    title: 'Proyectos de software y automatización | Arkanis Solutions',
    description: 'Casos reales y productos funcionales construidos por Arkanis Solutions para operaciones empresariales concretas.',
    canonical: `${SITE_URL}/proyectos`,
    image: `${SITE_URL}/arkanis-hero-poster.webp`,
    imageAlt: 'Proyectos destacados de Arkanis Solutions.',
  },
  '/contacto': {
    title: 'Solicitar diagnóstico tecnológico | Arkanis Solutions',
    description: 'Contanos dónde está la fricción en tu empresa y conversemos sobre una ruta tecnológica clara y realista.',
    canonical: `${SITE_URL}/contacto`,
    image: `${SITE_URL}/arkanis-hero-poster.webp`,
    imageAlt: 'Formulario de diagnóstico de Arkanis Solutions.',
  },
  '/privacidad': {
    title: 'Política de tratamiento de datos personales | Arkanis Solutions',
    description: 'Qué datos personales recoge Arkanis Solutions, con qué finalidad los trata y cómo ejercer tus derechos según la Ley 1581 de 2012.',
    canonical: `${SITE_URL}/privacidad`,
    image: `${SITE_URL}/arkanis-hero-poster.webp`,
    imageAlt: 'Política de tratamiento de datos personales de Arkanis Solutions.',
  },
  '/proyectos/directorio-terrario': {
    title: 'Directorio Terrario | Caso de estudio de Arkanis Solutions',
    description: 'Directorio mobile-first para huéspedes Airbnb, implementado por Arkanis Solutions en tres sedes de Armenia.',
    canonical: `${SITE_URL}/proyectos/directorio-terrario`,
    image: `${SITE_URL}/projects/terrario-home.png`,
    imageAlt: 'Directorio Terrario muestra lugares útiles para huéspedes desde una experiencia móvil.',
  },
  '/productos/sistema-gestion-restaurantes': {
    title: 'Sistema de gestión para restaurantes | Arkanis Solutions',
    description: 'Aplicación web exclusiva y personalizable para administrar la operación completa de un restaurante.',
    canonical: `${SITE_URL}/productos/sistema-gestion-restaurantes`,
    image: `${SITE_URL}/capturas_thedukes/dashboard-escritorio.webp`,
    imageAlt: 'Dashboard del sistema de gestión para restaurantes desarrollado por Arkanis Solutions.',
  },
}

const replaceSeoTag = (html, key, replacement) => (
  html.replace(new RegExp(`<[^>]+data-seo="${key}"[^>]*>`), replacement)
)

const renderSeoDocument = (template, {
  title,
  description,
  canonical,
  image,
  imageAlt,
  robots = 'index, follow',
}) => {
  let html = template.replace(
    /<title data-seo="title">[^<]*<\/title>/,
    `<title data-seo="title">${title}</title>`,
  )
  html = replaceSeoTag(html, 'robots', `<meta data-seo="robots" name="robots" content="${robots}" />`)
  html = replaceSeoTag(html, 'description', `<meta data-seo="description" name="description" content="${description}" />`)
  html = replaceSeoTag(html, 'og-title', `<meta data-seo="og-title" property="og:title" content="${title}" />`)
  html = replaceSeoTag(html, 'og-description', `<meta data-seo="og-description" property="og:description" content="${description}" />`)
  html = replaceSeoTag(html, 'og-image', `<meta data-seo="og-image" property="og:image" content="${image}" />`)
  html = replaceSeoTag(html, 'og-image-alt', `<meta data-seo="og-image-alt" property="og:image:alt" content="${imageAlt}" />`)
  html = replaceSeoTag(html, 'twitter-title', `<meta data-seo="twitter-title" name="twitter:title" content="${title}" />`)
  html = replaceSeoTag(html, 'twitter-description', `<meta data-seo="twitter-description" name="twitter:description" content="${description}" />`)
  html = replaceSeoTag(html, 'twitter-image', `<meta data-seo="twitter-image" name="twitter:image" content="${image}" />`)

  if (canonical) {
    html = replaceSeoTag(html, 'canonical', `<link data-seo="canonical" rel="canonical" href="${canonical}" />`)
    html = replaceSeoTag(html, 'og-url', `<meta data-seo="og-url" property="og:url" content="${canonical}" />`)
  } else {
    html = html
      .replace(/\s*<[^>]+data-seo="canonical"[^>]*>/, '')
      .replace(/\s*<[^>]+data-seo="og-url"[^>]*>/, '')
  }

  return html
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

  // Ley 1581 de 2012 requires prior, express and informed authorization before
  // personal data is processed. A checkbox that only lives in the browser
  // proves nothing, so the server refuses submissions without it and records
  // when the authorization was given.
  if (req.body.dataConsent !== true) {
    return res.status(400).json({ error: 'Data processing authorization is required' })
  }
  const consentedAt = new Date().toISOString()

  // Persist before answering. The local database is the source of truth, so a
  // notification outage can never cost a lead: the row already exists and the
  // sweep below will deliver it once the webhook recovers.
  let id
  try {
    id = recordSubmission({ name, email, company, service, message, consentedAt })
  } catch (err) {
    console.error('failed to persist submission:', err instanceof Error ? err.message : err)
    return res.status(500).json({ error: 'Could not store the request' })
  }

  res.json({ success: true })

  // Fire and forget: the visitor already has their answer.
  notify({ id, name, email, company, service, message, consented_at: consentedAt, notify_attempts: 0 })
})

const notify = async (row) => {
  try {
    // The templates live in emails/ and are rendered here rather than written
    // as HTML inside n8n, so the design is versioned with the code and can be
    // previewed locally. n8n only delivers what it is handed.
    const [confirmation, internal] = await Promise.all([
      leadConfirmation({
        name: row.name,
        company: row.company,
        service: row.service,
        message: row.message,
      }),
      internalAlert({
        submissionId: row.id,
        name: row.name,
        email: row.email,
        company: row.company,
        service: row.service,
        message: row.message,
        consentedAt: row.consented_at,
      }),
    ])

    const webhookRes = await fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        submissionId: row.id,
        name: row.name,
        email: row.email,
        company: row.company,
        service: row.service,
        message: row.message,
        consentedAt: row.consented_at,
        confirmation,
        internal,
      }),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    })

    if (!webhookRes.ok) throw new Error(`webhook responded ${webhookRes.status}`)
    markNotified(row.id)
    return true
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err)
    console.error(`notification failed for submission ${row.id}: ${reason}`)
    recordNotifyFailure(row.id, row.notify_attempts, reason)
    return false
  }
}

let sweeping = false
const sweepPendingNotifications = async () => {
  if (sweeping) return
  sweeping = true
  try {
    const pending = pendingNotifications(NOTIFY_MAX_ATTEMPTS, NOTIFY_SWEEP_BATCH)
    for (const row of pending) await notify(row)
    if (pending.length) console.log(`retried ${pending.length} pending notification(s)`)
  } catch (err) {
    console.error('notification sweep failed:', err instanceof Error ? err.message : err)
  } finally {
    sweeping = false
  }
}

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found' })
})

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  const distPath = join(__dirname, '../dist')
  const htmlTemplate = readFileSync(join(distPath, 'index.html'), 'utf8')

  app.use(express.static(distPath, { index: false }))
  app.get(Object.keys(ROUTE_SEO), (req, res) => {
    const routePath = req.path.replace(/\/+$/, '') || '/'

    if (req.path !== routePath) {
      const queryIndex = req.originalUrl.indexOf('?')
      const query = queryIndex >= 0 ? req.originalUrl.slice(queryIndex) : ''
      return res.redirect(308, `${routePath}${query}`)
    }

    res.type('html').send(renderSeoDocument(htmlTemplate, ROUTE_SEO[routePath]))
  })
  app.get('*', (req, res) => {
    res.status(404).type('html').send(renderSeoDocument(htmlTemplate, {
      title: 'Página no encontrada | Arkanis Solutions',
      description: 'La página solicitada no existe o fue movida.',
      canonical: null,
      image: `${SITE_URL}/arkanis-hero-poster.webp`,
      imageAlt: 'Arkanis Solutions transforma operaciones empresariales con tecnología.',
      robots: 'noindex, follow',
    }))
  })
}

const server = app.listen(PORT, () => {
  const { total, pending } = stats()
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`submissions stored: ${total}, pending notification: ${pending ?? 0}`)
})

const sweepTimer = setInterval(sweepPendingNotifications, NOTIFY_SWEEP_MS)
sweepTimer.unref()
sweepPendingNotifications()

const shutdown = () => {
  clearInterval(sweepTimer)
  server.close(() => {
    closeDb()
    process.exit(0)
  })
}
process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
