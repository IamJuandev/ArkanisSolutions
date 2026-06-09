# AGENTS.md

Guidance for agents working in this repo (Arkanis Solutions marketing site).

## Stack

- React 18 + Vite 5 (ESM, `"type": "module"`), Tailwind 3, Motion (Framer Motion successor).
- Express 4 + `better-sqlite3` backend in `server/`.
- Single-page site, no router. Sections composed in `src/App.jsx`.
- i18n: `src/context/LanguageContext.jsx` (es/en toggle, default `es`) reading `src/i18n/translations.js`.

## Commands (npm, lockfile is `package-lock.json`)

- `npm install` — install deps. Use `npm ci` in CI/Docker.
- `npm run dev` — runs Vite and the Express API (3001) concurrently. Vite proxies `/api` → `http://localhost:3001` (see `vite.config.js`).
- `npm run server` — API only.
- `npm run build` — Vite build into `dist/`.
- `npm run preview` — Vite preview of the built bundle (does not start the API).

No `lint`, `test`, or `typecheck` scripts exist. The project is plain JS/JSX (no TypeScript).

## Backend

- `server/index.js`: routes `POST /api/contact` (validates name/email/message, inserts row, fires-and-forgets an n8n webhook — URL is hardcoded) and `GET /api/contacts`.
- `server/db.js`: opens `server/contacts.db` on import and creates the `contacts` table if missing. The DB file is gitignored and ignored by Docker.
- In production (`NODE_ENV=production`) `server/index.js` serves `dist/` and a SPA fallback for `*`. In dev, the frontend is served by Vite and only `/api` is proxied.
- Port defaults to `3001` (`PORT` env overrides).

## Docker

- Multi-stage `Dockerfile`: builder runs `npm ci` + `npm run build`; runtime is `node:20-alpine` with `python3 make g++` installed (needed to rebuild `better-sqlite3`).
- Runtime entry: `node server/index.js`, `EXPOSE 3001`, `VOLUME /app/server` for SQLite persistence.

## Styling conventions (verified in `tailwind.config.js` + `src/index.css`)

- Custom colors: `dark` `#0B0D10`, `surface` `#151A21`, `elevated` `#1E2530`, `cyan` (`#40E0FF` / `dark #0BB8D4`), `green` (`#22c55e` / `dark #16a34a`). Use these names rather than hex literals where possible.
- Reusable utility classes defined in `index.css`: `glass`, `glass-strong`, `text-gradient`, `glow-cyan`, `glow-green`, `grid-bg`, `section-padding`.
- Font: Inter, loaded from Google Fonts in `index.html`.

## Conventions

- Keep new UI strings in `src/i18n/translations.js` and read them via `useLang()`; don't hardcode user-visible copy in components.
- New section components go under `src/components/` and are composed into `src/App.jsx` (no routing layer to update).

## Gotchas

- `better-sqlite3` is a native module — if you change Node versions or move between host and container, you may need `npm rebuild better-sqlite3`.
- The n8n webhook URL in `server/index.js` is hardcoded; failures are logged but do not fail the request.
- `npm run preview` will not have a working `/api` unless you also run `npm run server`.
