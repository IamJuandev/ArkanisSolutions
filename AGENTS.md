# AGENTS.md

Guidance for agents working in this repo (Arkanis Solutions marketing site).

## Stack

- React 19 + TypeScript + Vite 6 (ESM, `"type": "module"`), Tailwind 4 (`@tailwindcss/vite` plugin, no `tailwind.config.js` / no PostCSS — theme is defined via `@theme` in `src/index.css`), `motion` (Framer Motion successor), `lucide-react` icons.
- Express 4 backend in `server/`; contact submissions are forwarded to n8n.
- No router dependency. `src/App.tsx` dispatches the homepage and two detail pages from `window.location.pathname`.
- UI copy is Spanish-only — there is no i18n system. Do not hardcode English user-facing copy; code identifiers, comments, and internal docs stay in English.

## Components (`src/components/`)

The homepage composes `Navbar`, `Hero`, `Pillars`, `AutomationFlow`, `ProductionProjects`, `AssessmentForm`, and `Footer`. `TerrarioCaseStudy` and `TheDukesProduct` render at `/proyectos/directorio-terrario` and `/productos/sistema-gestion-restaurantes`.

## Commands (npm, lockfile is `package-lock.json`)

- `npm install` — install deps. Use `npm ci` in CI/Docker.
- `npm run dev` — runs Vite and the Express API (3001) concurrently. Vite proxies `/api` → `http://localhost:3001` (see `vite.config.ts`).
- `npm run server` — API only.
- `npm run build` — `vite build` into `dist/`.
- `npm run preview` — Vite preview of the built bundle (does not start the API).
- `npm run typecheck` (or `npx tsc --noEmit`) — TypeScript check, no emit. No `lint` or `test` scripts exist.

## Backend

- `server/index.js`: `POST /api/contact` validates the submitted fields, waits up to 10 seconds for the hardcoded n8n webhook, and returns `502` if delivery fails. There is no local contact database or contacts read endpoint.
- Unmatched `/api/*` requests return JSON `404`. In production, known page paths serve `dist/index.html`; unknown page paths render the client not-found UI with HTTP `404`.
- Port defaults to `3001` (`PORT` env overrides).
- Contact email shown in the UI is `contacto@arkanis.site`.

## Docker

- Multi-stage `Dockerfile`: the builder runs `npm ci` + `npm run build`; the `node:20-alpine` runtime installs production dependencies only.
- Runtime entry: `node server/index.js`; port `3001` is exposed. No persistent volume is required.

## Styling conventions

- Tailwind 4 theme tokens live in `src/index.css`. Prefer `brand-ink`, `brand-bg`, `brand-surface`, `brand-depth`, `brand-sky`, `brand-aqua`, `brand-lime`, `brand-coral`, `brand-mist`, and `brand-sand` utilities over hex literals.
- Fonts: Syne for display headings (`font-display`), Manrope for body (`font-sans`), and JetBrains Mono for labels (`font-mono`).
- Recurring motifs include dark layered surfaces, fine grid texture, gradient accents, restrained glass effects, and uppercase mono labels.

## Conventions

- Brand name is "Arkanis Solutions". Keep it consistent in copy and metadata.
- Keep user-facing copy in Spanish; code, comments, and identifiers in English.
- New section components go under `src/components/` and are composed into `src/App.tsx`.

## Gotchas

- The n8n webhook URL in `server/index.js` is hardcoded; failures are logged and return `502`.
- `npm run preview` will not have a working `/api` unless you also run `npm run server`.
