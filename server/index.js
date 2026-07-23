import express from 'express'
import cors from 'cors'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001
const N8N_WEBHOOK = 'https://n8n.arkanis.site/webhook/fd0b0e50-2248-4803-9c5b-0f1b8acffa8c'
const WEBHOOK_TIMEOUT_MS = 10_000
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
  const distPath = join(__dirname, '../dist')
  const htmlTemplate = readFileSync(join(distPath, 'index.html'), 'utf8')

  app.use(express.static(distPath, { index: false }))
  app.get([
    '/',
    '/proyectos/directorio-terrario',
    '/productos/sistema-gestion-restaurantes',
  ], (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
