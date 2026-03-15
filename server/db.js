import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const db = new Database(join(__dirname, 'contacts.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    service TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

export const insertContact = (data) => {
  const stmt = db.prepare(
    'INSERT INTO contacts (name, email, company, service, message) VALUES (?, ?, ?, ?, ?)'
  )
  return stmt.run(data.name, data.email, data.company || '', data.service || '', data.message)
}

export const getAllContacts = () => {
  return db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all()
}

export default db
