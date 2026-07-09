# AGENTS.md

Guidance for agents working in this repo (Arkanis Solutions marketing site).

## Stack

- React 19 + TypeScript + Vite 6 (ESM, `"type": "module"`), Tailwind 4 (`@tailwindcss/vite` plugin, no `tailwind.config.js` / no PostCSS — theme is defined via `@theme` in `src/index.css`), `motion` (Framer Motion successor), `lucide-react` icons.
- Express 4 + `better-sqlite3` backend in `server/`.
- Single-page site, no router. Sections composed in `src/App.tsx`.
- UI copy is Spanish-only — there is no i18n system. Do not hardcode English user-facing copy; code identifiers, comments, and internal docs stay in English.

## Components (`src/components/`)

`Navbar`, `Hero`, `ChaosBoard`, `SolutionMap`, `ServicesGrid`, `RoiCalculator`, `CaseStudies`, `ProductionProjects`, `AssessmentForm`, `Footer`. All are composed directly in `src/App.tsx` — no routing layer to update when adding a section.

## Commands (npm, lockfile is `package-lock.json`)

- `npm install` — install deps. Use `npm ci` in CI/Docker.
- `npm run dev` — runs Vite and the Express API (3001) concurrently. Vite proxies `/api` → `http://localhost:3001` (see `vite.config.ts`).
- `npm run server` — API only.
- `npm run build` — `vite build` into `dist/`.
- `npm run preview` — Vite preview of the built bundle (does not start the API).
- `npm run typecheck` (or `npx tsc --noEmit`) — TypeScript check, no emit. No `lint` or `test` scripts exist.

## Backend

- `server/index.js`: `POST /api/contact` validates name/email/message, inserts a row, and fires-and-forgets an n8n webhook (production URL is hardcoded in the file). `GET /api/contacts` reads them back.
- `server/db.js`: opens `server/contacts.db` on import and creates the `contacts` table if missing. The DB file is gitignored and ignored by Docker.
- In production (`NODE_ENV=production`) `server/index.js` serves `dist/` and a SPA fallback for `*`. In dev, the frontend is served by Vite and only `/api` is proxied.
- Port defaults to `3001` (`PORT` env overrides).
- Contact email shown in the UI (`AssessmentForm.tsx`) is `juan.gabrie.dev@gmail.com` — spelled without the trailing "l" in "gabrie". This is intentional, not a typo.

## Docker

- Multi-stage `Dockerfile`: builder runs `npm ci` + `npm run build`; runtime is `node:20-alpine` with `python3 make g++` installed (needed to rebuild `better-sqlite3`).
- Runtime entry: `node server/index.js`, `EXPOSE 3001`, `VOLUME /app/server` for SQLite persistence.

## Styling conventions

- Tailwind 4, theme tokens declared with `@theme` in `src/index.css` (brand colors: `brand-bg`, `brand-sand`, `brand-blue`, `brand-darkBlue`, `brand-lightBlue`, `brand-turquoise`, `brand-green`, etc.). Use these `brand-*` utility names rather than hex literals.
- Font: serif for headings (`font-serif`), mono for labels/technical copy (`font-mono`), sans for body.
- Recurring visual motifs: dashed "blueprint" borders/corners, `font-mono` uppercase status labels, and small technical/telemetry-style copy fragments.

## Conventions

- Brand name is "Arkanis Solutions". Keep it consistent in copy and metadata.
- Keep user-facing copy in Spanish; code, comments, and identifiers in English.
- New section components go under `src/components/` and are composed into `src/App.tsx`.

## Gotchas

- `better-sqlite3` is a native module — if you change Node versions or move between host and container, you may need `npm rebuild better-sqlite3`.
- The n8n webhook URL in `server/index.js` is hardcoded; failures are logged but do not fail the request.
- `npm run preview` will not have a working `/api` unless you also run `npm run server`.
