# Redesign: official Arkanis brand
Objective: rebuild arkanis.site on the official brand package (`/Users/juan/Documents/arkanis/marca-arkanis`), with a full homepage funnel, heavy local SEO and Komio replacing TheDukes.
Branch: `feat/redesign-marca-oficial` (from `main` + 7 rescued SEO commits) · Delivery: ask-on-risk · Checks: `npm run typecheck`, `npm run build`, browser inspection (no test runner exists).

## Specs
- S1 Brand: "yo quiero es seguir la misma colimetria" of the official package. Palette Azul Noche #061A2E, Azul Arkanis #0B5FE0, Verde Señal #17C46E, Niebla #F2F7FB, greys #C8D8E6 #7A93A8 #3D5771, gradient 135deg #17C46E → #0F86D8 → #0B47C9; Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (labels/data); 3D render only on web/large pieces, flat logo elsewhere.
- S2 Positioning copy: "arkanis es una empresa de desarrollo de software a la medida impulsado por la inteligencia artificial que ayuda a que tu pequeño negocio avance en la integración de la IA sin quedarse atrás haciéndolo de una manera económica, eficiente".
- S3 Homepage is the approved mockup (scratchpad `maqueta-marca/index.html`): proposal-cover hero with the "¿Qué te gustaría dejar de hacer a mano?" chooser, node arc and title block (Komio, Terrario, Armenia, 1–50 people); then projects, IA/automation ledger with mid CTA band, process in 4 phases, solutions index, FAQ, final form, footer. "esta pagina debe tener MUCHO SEO llamado al accion que el cliente le cuase curiosidad mostrar bien directorio terrario y komio".
- S4 Chooser CTA (answer "la C, las dos"): green button goes to the diagnosis form with the chosen task preloaded, plus a secondary WhatsApp link with the message prewritten (wa.me/573138751753).
- S5 Offer naming (answer "la C, ambos"): "Diagnóstico gratis" in headings/SEO; closer phrases on buttons ("Contanos dónde se te enreda el día").
- S6 Navigation (answer "la C, 4 enlaces"): Soluciones · Proyectos · Cómo trabajamos · Nosotros + "Diagnóstico gratis" button. Short homepage (5–6 screens of teasers with "Ver más"), deep content on inner pages, sticky mobile CTA.
- S7 IA ledger (answer "B"): "facturas leídas desde foto/PDF" and "asistente que responde consultas frecuentes" shown as services offered today. Komio AI inside the Komio product stays "Próximamente".
- S8 "hay que quitar thedukes y poner a komio": the restaurant product page and all references show Komio, with screenshots from the local demo (answer "usa las que hay": salon desktop + mobile in `public/capturas_komio/`), personal email cropped out.
- S9 No invented clients, testimonials, metrics, prices or delivery times. Terrario facts: 3 sedes · 68 lugares.
- S10 Open product/design questions go to the owner: "si surgen preguntas no las decidan pregúntenme".
- S11 Finish with the full impeccable flow (direction contract, finish reviewer, DESIGN.md) and polish with emil-design-eng / animate.

## Tasks
- [x] T1 S1,S6 Brand tokens, fonts, logo assets, theme-color, navbar (4 links + CTA), footer · inline · 0732071
- [x] T2 S3,S4,S5,S7,S9 Homepage sections + contact form task prefill + sticky mobile CTA · inline · 0732071
- [x] T3 S8 KomioProduct replaces TheDukesProduct (page, project card, server meta, sitemap) · inline · see next commit
- [x] T4 S1 Inner pages on brand: square buttons/frames, no eyebrows, no glows, coral only for errors, type floor 12.5px · inline · see commit
- [x] T5 S11 impeccable finish review (ship after 2 rounds, f5e3ff1) + DESIGN.md/.impeccable/design.json by documenter · subagents

## Log
- L1 (2026-10-28, owner, verbatim): "no vuelve a desestimar este rediseño por favor y vuuelve a genrar unos diseños con impecable vale? esta pagina debe tener MUCHO SEO llamado al accion que el cliente le cuase curiosidad mostrar bien directorio terrario y komio si me entiendes?"
- L2 (owner): "Naaa ninguna me gustaron mira la identidad de marca esta aca /Users/juan/Documents/arkanis/marca-arkanis ... yo quiero es seguir la misma colimetria ... arkanis es uan empresa de desarrollo de sofware a la medida impulsado por l ainteligencia artificial ..."
- L3 Rejected: La Comanda world and four exotic mockups. gentle-shell + agy proposals converged on the proposal-cover concept; owner answered the forks (S4–S7). Mockup approved: "si, dale armala con la marca oficial" / "entonces implementemos esta" (note: mobile felt "un poco suave").
- L4 Branch `feat/redesign-comanda` deleted on owner request after rescuing SEO commits aa0b11b..7d0ca94; La Comanda commits and old DESIGN.md dropped.
- L5 Komio screenshots captured from http://demo.komio.test (salon desktop + mobile); dashboard skipped (empty sales, negative cash).
- L6 T1–T3 verified: typecheck + build pass; chooser interaction checked in browser (task, example, WhatsApp text); production server renders new titles/H1 for /, Komio route, /proyectos and 404 for unknown paths. Engram mirror saved under project arkanissolutions (owner: "los dos es lo mismo").
- L7 (owner): Komio modules claim confirmed ("a"): DIAN e-invoicing, two-factor auth and Excel export all work in the demo today. Finish review round 1: disposition fix, 8 material fixes applied in one batch; verdict pass pending.
- L8 Finish review: round 1 fix (8 fixes), round 2 fix (sticky CTA, mobile H1, Komio live status), final disposition ship. Sticky CTA uses a scroll listener because the automation tab is hidden; logic verified with a synthetic scroll.
- L9 DESIGN.md + .impeccable/design.json written from the shipped build. Reported drift (not fixed): inner pages keep rounded cards, eyebrows, glass/gradient buttons and coral; "Sora" still named in .section-cta-headline/.legal-clause-title; AssessmentForm success state uses eyebrow + rounded icon + ghost button; Komio AI chip outlined in green. Next: T4 inner-page restyle.
- L10 (owner): "dale, pasá las páginas interiores a la marca". T4 done: legacy buttons (brand/glass/ghost) restyled in index.css, 16 eyebrows removed, rounded corners and radial glows removed, decorative coral → grey, tiny text raised, Terrario H1 now names the project, process nodes blue→green. Checked 10 inner routes at 390 and 1440: no overflow, no eyebrows, no rounded panels, no text under 12px. No impeccable finish review run on inner pages.
- L11 (owner): "la d eprivasidad tambien y si corre eso d eimpecable". Inner-page finish review (10 routes incl. /privacidad, 20 captures with reduced motion): round 1 fix (8 fixes: remaining kickers, green on non-actions, 2px frames, decorative panel, zigzag steps, mono labels, Terrario cards and CTA), round 2 fix (2 Terrario icons, flujo outcome column), final disposition ship.
