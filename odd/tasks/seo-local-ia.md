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
| T1 | S2, S7 | `ProfessionalService` JSON-LD with phone, areaServed, sameAs; keyword-aligned titles/descriptions in `ROUTE_SEO` | inline | pending | |
| T2 | S2, S3, S5 | New landing `/desarrollo-web-armenia` (web + software a la medida, portfolio cases) + route, SEO entry, sitemap | inline | pending | |
| T3 | S2, S3, S4, S5 | New landing `/automatizacion-con-ia` (process automation, expenses app case, Komio AI "Próximamente") + route, SEO entry, sitemap | inline | pending | |
| T4 | S3 | Portfolio: link Komio demo and Carolina landing from `/proyectos` | inline | pending | |
| T5 | S8 | Server-rendered main content per route for non-JS crawlers | inline | pending | |
| T6 | S2 | Internal links: navbar/footer/home link to new landings | inline | pending | |

## Log

- L1 (2026-10-15, user): "te voy a hacer claro este es mi proyecto de vida esta es la empresa que quiero crear formal estabñlecer .. [...] la idea cual es primero empezar por la web ver si esta bien lo le metemos mas CEO para quue a la Hora que busquen IA en armenia o desarrollo web a meduda seamos unos d elos primeros en aparecer si ?"
- L2 (2026-10-15): Baseline audit — zero mentions of "IA"/"desarrollo web" in `src/`; raw HTML ~6.5 KB with only H1 fallback; Organization schema without phone/sameAs; no keyword landing pages.
- L3 (2026-10-15): OpenSEO keyword research (181 credits, 207 left). City-level volumes are near zero → local ranking comes from Google Business Profile + city landing pages.
- L4 (2026-10-15, user): portfolio and Komio AI statements quoted in S3–S6.
- L5: Open product question for T4/TheDukesProduct — is the restaurant product page the same product as Komio? Ask before renaming anything.
- L6: Engram mirror pending (mem_save fails: session ownership ambiguous "thedukes"); resync when available.
- Line forecast: ~600–900 authored lines (two landings + server content) → exceeds ~400; `ask-on-risk` asks for chain strategy before crossing it.
