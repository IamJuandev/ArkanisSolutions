import { DatabaseSync } from 'node:sqlite'
import { mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// In the container this points at the mounted volume; locally it falls back to
// server/contacts.db, which is gitignored.
const DB_PATH = process.env.CONTACTS_DB_PATH || join(__dirname, 'contacts.db')

mkdirSync(dirname(DB_PATH), { recursive: true })

const db = new DatabaseSync(DB_PATH)

// WAL keeps the write that answers the request from blocking the retry sweep.
db.exec('PRAGMA journal_mode = WAL')
db.exec('PRAGMA foreign_keys = ON')

db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    service TEXT,
    message TEXT NOT NULL,
    -- Proof of the Ley 1581 authorization. Not nullable on purpose: a row that
    -- cannot show when consent was given must never exist.
    consented_at TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
    notified INTEGER NOT NULL DEFAULT 0,
    notify_attempts INTEGER NOT NULL DEFAULT 0,
    next_attempt_at INTEGER NOT NULL DEFAULT 0,
    last_notify_error TEXT,
    notified_at TEXT
  )
`)

db.exec(`
  CREATE INDEX IF NOT EXISTS idx_submissions_pending
  ON submissions (notified, next_attempt_at)
`)

const insertStmt = db.prepare(`
  INSERT INTO submissions (name, email, company, service, message, consented_at)
  VALUES (?, ?, ?, ?, ?, ?)
`)

const markNotifiedStmt = db.prepare(`
  UPDATE submissions
  SET notified = 1,
      notified_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now'),
      last_notify_error = NULL
  WHERE id = ?
`)

const recordFailureStmt = db.prepare(`
  UPDATE submissions
  SET notify_attempts = notify_attempts + 1,
      next_attempt_at = ?,
      last_notify_error = ?
  WHERE id = ?
`)

const pendingStmt = db.prepare(`
  SELECT id, name, email, company, service, message, consented_at, notify_attempts
  FROM submissions
  WHERE notified = 0 AND notify_attempts < ? AND next_attempt_at <= ?
  ORDER BY id
  LIMIT ?
`)

const statsStmt = db.prepare(`
  SELECT
    COUNT(*) AS total,
    SUM(CASE WHEN notified = 0 THEN 1 ELSE 0 END) AS pending
  FROM submissions
`)

/** Persist a submission. Returns its id; throws if the write fails. */
export const recordSubmission = ({ name, email, company, service, message, consentedAt }) => {
  const { lastInsertRowid } = insertStmt.run(name, email, company, service, message, consentedAt)
  return Number(lastInsertRowid)
}

export const markNotified = (id) => {
  markNotifiedStmt.run(id)
}

/** Back off exponentially so a long outage does not hammer the webhook. */
export const recordNotifyFailure = (id, attempts, error) => {
  const delaySeconds = Math.min(2 ** attempts * 30, 3_600)
  recordFailureStmt.run(Math.floor(Date.now() / 1000) + delaySeconds, String(error).slice(0, 500), id)
}

export const pendingNotifications = (maxAttempts, limit) => (
  pendingStmt.all(maxAttempts, Math.floor(Date.now() / 1000), limit)
)

export const stats = () => statsStmt.get()

export const closeDb = () => db.close()
