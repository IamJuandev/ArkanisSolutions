# SEO local + IA for arkanis.site

Objective: rank arkanis.site for web development, custom software and AI automation searches in Armenia, Quindío. Branch `feat/seo-local-ia`. Delivery strategy: `ask-on-risk`. Test runner: none in repo (`npm run typecheck`, `npm run build`, curl checks of server-rendered HTML).

## Specs

- S1. Goal, verbatim (L1): "primero empezar por la web ver si esta bien lo le metemos mas CEO para quue a la Hora que busquen IA en armenia o desarrollo web a meduda seamos unos d elos primeros en aparecer si ?"
- S2. Target keywords from OpenSEO research (Colombia, 2026-10-15): "desarrollo web" (1300/mo, KD 29), "empresas de desarrollo de software" (390, KD 0), "desarrollo de software a la medida" (90, KD 18), "automatizacion de procesos" (590, KD 15), "automatizacion con ia" (110), "automatizacion de procesos con ia" (50). Combine with Armenia / Quindío / Eje Cafetero modifiers. Copy must not claim services Arkanis does not offer.
- S3. Portfolio stated by the user: Komio — "esta esn demo.arkanis.site"; Directorio Terrario — "https://directorioterrario.com/"; Carolina — "https://carolina-castellanos.com/eneagrama"; expenses app — "mi ap d egastos que lee correos y va diciendo que voy gastandi que me entra tiene funciones para crear gastos fijis prestamos etc". The expenses app is rule-based (no LLM): present it as automation, not AI.
- S4. Komio AI status, verbatim: "no proximamente se podria mensionar proximamente". AI features are presented as "Próximamente", never as live.
- S5. Design, verbatim: "este utiliza las skil con las qu edesarrolamos el portafolio para la pagina tambien" — use the `impeccable` and `emil-design-eng` skills, inside the existing brand system (AGENTS.md tokens, fonts, motifs).
- S6. Delegation, verbatim: "apoyate en gentle-shell y agy ya sabes gentle-shelñl confianza agy no mucho es a veces muy tonto" — gentle-shell and agy are read-only advisors; agy output gets double verification. Claude is the only writer.
- S7. Local business data: service-area business, no public address; phone 313 875 1753; email contacto@arkanis.site; areas Armenia, Quindío, Pereira, Manizales; Google Business Profile pending verification (account arkanis.solutions@gmail.com).
- S8. Crawlers that do not run JavaScript must receive the page's main text content in the server HTML, not only the H1.

## Tasks

| ID | Specs | Task | Route | Status | Evidence |
|---|---|---|---|---|---|
| T1 | S2, S7 | `ProfessionalService` JSON-LD with phone, areaServed, sameAs; keyword-aligned titles/descriptions in `ROUTE_SEO` | inline | done | aa0b11b; JSON-LD parses, typecheck+build ok, prod SSR curl shows new titles |
| T2 | S2, S3, S5 | New landing `/desarrollo-web-armenia` (web + software a la medida, portfolio cases) + route, SEO entry, sitemap | inline | done | 02e54b9, 36784b2, 46e826a; impeccable finish review fixes applied; RDD review approved (L10) |
| T3 | S2, S3, S4, S5 | New landing `/automatizacion-de-procesos` (process automation, expenses app case, Komio AI "Próximamente") + route, SEO entry, sitemap | inline | done | same commits as T2 |
| T4 | S3 | Portfolio: link Komio demo and Carolina landing from `/proyectos` | inline | pending | |
| T5 | S8 | Server-rendered main content per route for non-JS crawlers | inline | done (landings only) | b5864aa, e05fe86; RED: 0 matches of stage/FAQ text in SSR HTML, GREEN: stages, FAQ and FAQPage JSON-LD present |
| T6 | S2 | Internal links: navbar/footer/home link to new landings | inline | pending | |

## Log

- L1 (2026-10-15, user): "te voy a hacer claro este es mi proyecto de vida esta es la empresa que quiero crear formal estabñlecer .. [...] la idea cual es primero empezar por la web ver si esta bien lo le metemos mas CEO para quue a la Hora que busquen IA en armenia o desarrollo web a meduda seamos unos d elos primeros en aparecer si ?"
- L2 (2026-10-15): Baseline audit — zero mentions of "IA"/"desarrollo web" in `src/`; raw HTML ~6.5 KB with only H1 fallback; Organization schema without phone/sameAs; no keyword landing pages.
- L3 (2026-10-15): OpenSEO keyword research (181 credits, 207 left). City-level volumes are near zero → local ranking comes from Google Business Profile + city landing pages.
- L4 (2026-10-15, user): portfolio and Komio AI statements quoted in S3–S6.
- L5: Open product question for T4/TheDukesProduct — is the restaurant product page the same product as Komio? Ask before renaming anything.
- L6: Engram mirror pending (mem_save fails: session ownership ambiguous "thedukes"); resync when available.
- L7 (2026-10-15): T3 slug changed from `/automatizacion-con-ia` to `/automatizacion-de-procesos`: AI is not live (S4), and "automatizacion de procesos" has 590/mo vs 110. "Automatización con IA · Próximamente" stays as a service on the page. Copy drafted by gentle-shell (T2) and agy (T3); agy draft had unverifiable claims (Komio "en producción", "Totalmente" seguro, WhatsApp integration, "sin cobros imprevistos") removed before use.
- L8 (2026-10-15): Impeccable: PRODUCT.md written (user confirmed client = pymes del Eje Cafetero); user chose structure "Ruta de construcción" (seed f14a8d10); direction contract in .impeccable/surfaces. Inspection found and fixed: rail line crossing stage numbers; sticky rail broken by root `overflow-x: hidden` (now `clip`). Detector: no findings in new code (3 pre-existing). Finish reviewer launched.
- L9 (2026-10-15, user): delivery chain strategy = stacked-to-main ("PRs encadenados a main"). Slices: PR1 T1; PR2 T2+T3; PR3 T5; PR4 T4+T6.
- L10 (2026-10-15): T5 scope: only the two landings get full server-rendered content (their copy is JSON); other routes keep H1 + description, because their content lives in TSX and full SSR would need a router refactor. User granted RDD review (lenses risk, reliability); approved and acknowledged (lineage review-e7a8864b26997bd3). Advisory follow-ups: dollar-pattern replace fixed in e05fe86; open: no automated tests for renderLandingContent, sticky threshold constants (RouteLanding 96px/100px).
- L11: Open question to user — are TheDukes (restaurant product page) and Komio the same product? Landing copy describes Komio with TheDukes' features (mesas, pedidos, cocina, inventario, caja).
- Line forecast: ~600–900 authored lines (two landings + server content) → exceeds ~400; `ask-on-risk` asks for chain strategy before crossing it.
