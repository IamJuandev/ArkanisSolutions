import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { insertContact, getAllContacts } from './db.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001
const N8N_WEBHOOK = 'https://n8n.arkanis.site/webhook/fd0b0e50-2248-4803-9c5b-0f1b8acffa8c'

app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, company, service, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    insertContact({ name, email, company, service, message })
  } catch (err) {
    console.error('DB error:', err)
    return res.status(500).json({ error: 'Database error' })
  }

  try {
    console.log('Calling n8n webhook...')
    const webhookRes = await fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, service, message }),
    })
    console.log('n8n response status:', webhookRes.status)
  } catch (err) {
    console.error('Webhook error:', err.message)
  }

  res.json({ success: true })
})

app.get('/api/contacts', (req, res) => {
  try {
    res.json(getAllContacts())
  } catch (err) {
    res.status(500).json({ error: 'Database error' })
  }
})

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')))
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
