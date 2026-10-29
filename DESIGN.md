---
name: Arkanis Solutions
description: Custom software, websites and process automation for small businesses in the Eje Cafetero, presented as a commercial-proposal cover.
colors:
  azul-noche: "#061a2e"
  noche-raised: "#0a2440"
  azul-arkanis: "#0b5fe0"
  azul-arkanis-hover: "#0a52c4"
  verde-senal: "#17c46e"
  verde-senal-hover: "#1ed47c"
  verde-ink: "#0f7a45"
  gradient-mid: "#0f86d8"
  gradient-end: "#0b47c9"
  niebla: "#f2f7fb"
  paper: "#ffffff"
  gris-claro: "#c8d8e6"
  gris-medio: "#7a93a8"
  gris-pizarra: "#3d5771"
  hairline: "rgba(200, 216, 230, 0.22)"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 3.4vw, 3.15rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-mobile:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.95rem"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.3
  lead:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0"
  device: "18px"
  node: "50%"
spacing:
  gutter: "24px"
  gutter-mobile: "16px"
  container: "1200px"
  section: "clamp(72px, 9vw, 120px)"
  head-gap: "48px"
  cell: "20px 24px"
  panel: "40px"
components:
  button-primary:
    backgroundColor: "{colors.verde-senal}"
    textColor: "{colors.azul-noche}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.verde-senal-hover}"
  button-secondary:
    backgroundColor: "{colors.azul-arkanis}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "15px 22px"
  button-secondary-hover:
    backgroundColor: "{colors.azul-arkanis-hover}"
  chip-option:
    backgroundColor: "{colors.azul-noche}"
    textColor: "{colors.gris-claro}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
  input-field:
    backgroundColor: "{colors.noche-raised}"
    textColor: "{colors.niebla}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1rem"
    height: "3.1rem"
  titleblock-cell:
    backgroundColor: "{colors.azul-noche}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  card-project:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.azul-noche}"
    rounded: "{rounded.none}"
    padding: "{spacing.panel}"
---

# Design System: Arkanis Solutions

## Overview

**Creative North Star: "The Proposal Cover"**

Every surface reads like the cover and interior pages of an Arkanis commercial proposal: an Azul Noche ground, a hairline frame, a thin official gradient strip, and a drafting-style title block of data cells. The web makes that document interactive rather than decorating it. Depth comes from framing and tonal bands, not from glow or glass.

The world is owner-pinned from the official brand package v1.0 (palette, 135° gradient, Space Grotesk / IBM Plex Sans / IBM Plex Mono). Dark Azul Noche sections alternate with Niebla light bands that carry white project panels. Density is moderate: generous section padding, tight internal grids divided by 1px rules. Motion is short and exponential (ease-out), used to draw lines and light nodes, never to float cards.

The 3D render of the "A" appears only as a large hero piece on the web, masked into the ground. Everything small (nav mark, icons, favicons) uses the flat vector symbol.

**Key Characteristics:**
- Square corners everywhere except device screenshots and circular nodes.
- 1px hairline frames and dividers; 3px official-gradient strips as the only ornament.
- Verde Señal only on actions and "on" states.
- Space Grotesk headings, IBM Plex Sans body, IBM Plex Mono reserved for data labels and the title block.
- Alternating Azul Noche and Niebla bands.

## Colors

A two-blue brand on a near-black navy ground, with a single signal green that means "act" or "on".

### Primary
- **Azul Arkanis** (`azul-arkanis`): the brand color. Text links ("Ver más" arrows), the secondary solid button, the "today" node of the arc, process-route nodes, FAQ chevrons. Hover darkens to `azul-arkanis-hover`.

### Secondary
- **Verde Señal** (`verde-senal`): the call to action and the "on" state. Primary buttons, the sticky mobile CTA, the selected chooser option, the lit "your system" node, the "Sí · IA" ledger flag, the active-nav underline, the last node of the process route, text selection. On light Niebla/white surfaces where green text must be legible, use **Verde Tinta** (`verde-ink`) instead.

### Tertiary
- **Official Gradient** (`linear-gradient(135deg, verde-senal 0%, gradient-mid 50%, gradient-end 100%)`): the 3px strip at the top of the nav, over project screenshots, CTA bands and the diagnosis form; the arc stroke when lit; the process-route line (run blue to green, 90° / 180°). `gradient-mid` (#0f86d8) doubles as the global focus-ring color.

### Neutral
- **Azul Noche** (`azul-noche`): the primary ground, title-block cells, screenshot stages, primary-button text.
- **Noche Raised** (`noche-raised`): one step up from the ground. Hover fill on title-block cells and index rows, form field fills.
- **Niebla** (`niebla`): light section bands (projects, process, FAQ) and the light text tone on dark.
- **Paper** (`paper`): project panels on Niebla; headings and primary text on Azul Noche.
- **Gris Claro** (`gris-claro`): secondary text on dark; 1px borders on light surfaces.
- **Gris Medio** (`gris-medio`): mono labels, metadata, placeholders, legal footer.
- **Gris Pizarra** (`gris-pizarra`): secondary text on Niebla; the unlit "later" node.
- **Hairline** (`hairline`): every 1px frame and divider on dark.

### Named Rules
**The Signal Rule.** Verde Señal marks only what can be clicked to move forward or what is switched on. Never use it for decoration, section labels, or plain icons.

**The Strip Rule.** The official gradient appears as a 3px strip or a 2-3px line, never as a fill behind text or a button background.

## Typography

**Display Font:** Space Grotesk (with ui-sans-serif, system-ui)
**Body Font:** IBM Plex Sans (with ui-sans-serif, system-ui)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular)

**Character:** A geometric grotesk with engineering edges for headlines over a sober technical sans; the mono is the drafting hand of the title block.

### Hierarchy
- **Display** (600, clamp(2.1rem, 3.4vw, 3.15rem), 1.08, -0.025em): the single H1 inside the hero cover, max 25ch, balanced wrap. At ≤600px it becomes **Display Mobile** (700, 1.95rem, 1.04, -0.03em).
- **Headline** (600, clamp(1.9rem, 3.4vw, 3rem), 1.08): section H2s in the two-column section head; 700 at ≤600px.
- **Title** (600, clamp(1.6rem, 2.4vw, 2.1rem), 1.1): project panel H3s. CTA bands, index rows and modules use 1.3-1.9rem steps of the same face.
- **Title Small** (600, 1.2rem, 1.3): chooser legend, FAQ questions, title-block values (18px).
- **Lead** (400, clamp(1.08rem, 1.4vw, 1.25rem), 1.6): the hero lead, max 52ch.
- **Body** (400, 16px, 1.6): running text; section-head paragraphs at 1.1rem, max 54ch; FAQ answers max 68ch.
- **Label** (500, 12px, 0.14em, uppercase): title-block cell labels, spec-sheet terms, ledger headers, footer column headings, arc node captions. 12.5px on mobile.

### Named Rules
**The Drafting Hand Rule.** IBM Plex Mono is reserved for data: title-block labels, spec terms, table headers, status flags. It never sits above a heading as an eyebrow or kicker.

## Layout

A centered 1200px container with 24px gutters (16px at ≤600px). Sections pad clamp(72px, 9vw, 120px) vertically. Each section opens with a two-column head (H2 left, paragraph right, aligned to the bottom, 24px / 64px gaps, 48px below), collapsing to one column at ≤860px.

The hero is a framed cover: a 1.4fr / 0.6fr grid (copy / masked 3D render) over a four-cell title block (1.3fr 1.3fr 1fr 1fr). At ≤960px the render moves above the copy (300px tall, 130px at ≤600px) and the title block becomes 2×2, then a single column at ≤520px.

Project panels are 1.25fr / 1fr splits (alternately flipped), stacking at ≤860px. Grids of modules are 3 → 2 → 1 columns with shared hairline borders, not gaps. The process route runs as a horizontal 4- or 3-column line, turning vertical at ≤860px.

Navigation: fixed 72px row. Links collapse into a disclosure panel at ≤960px; the nav CTA hides at ≤760px, where a single sticky full-width CTA (12px inset from the viewport) slides in only after the hero button has scrolled out of view.

## Elevation & Depth

Flat by default. Depth is conveyed by framing (1px hairlines), tonal steps (Azul Noche → Noche Raised on hover) and band alternation (dark ↔ Niebla). Shadows exist only on content that represents a physical object or a lit signal.

### Shadow Vocabulary
- **Screenshot lift** (`box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35)`): product screenshots on their Azul Noche stage.
- **Node glow** (`box-shadow: 0 4px 18px rgba(11, 95, 224, 0.55)` blue; `rgba(23, 196, 110, 0.55)` green when on): the two arc nodes only.
- **Floating CTA** (`box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35)`): the sticky mobile CTA.

The nav is the one translucent surface: Azul Noche at 94% with a 10px backdrop blur.

### Named Rules
**The Lit Signal Rule.** A glow means a node is lit. No card, button or panel glows.

## Shapes

Square corners (0) throughout: buttons, chips, fields, panels, title-block cells, bands. Frames are 1px hairlines. The two exceptions are the world's own materials: circular nodes (50%) on the arc and process route, and phone screenshots (18px; 14px in paired shots) that mimic the device. The FAQ chevron is a drawn 2px corner rotated 45°, not an icon glyph.

## Components

### Buttons
Solid, square, confident; one primary action per view.
- **Shape:** square (0).
- **Primary:** Verde Señal with Azul Noche text, 600 16px IBM Plex Sans, 15px 22px padding, 18px trailing icon at 10px gap.
- **Hover / Focus:** lightens to `verde-senal-hover`; presses 1px down on :active; focus is the global 2px `gradient-mid` outline at 3px offset.
- **Secondary:** Azul Arkanis with white text, for "go see the live product" links out (demo, live directory).
- **Text action:** Azul Arkanis 600 link with an arrow ("ver más"), underlined on hover. The WhatsApp link is Gris Claro text with a green WhatsApp icon.

### Chips (chooser options)
- **Style:** 1px hairline frame, Gris Claro text, 10px 14px, square.
- **State:** hover lifts the border to Gris Claro and the text to white; selected takes a Verde Señal border, white text and a 10% green fill; keyboard focus draws a 2px green outline.

### Cards / Containers
- **Corner Style:** square.
- **Background:** project panels are white on Niebla with a 1px Gris Claro border; their screenshot half is an Azul Noche stage under a 3px gradient top border. Dark containers (cover, CTA band, module grid) are unfilled hairline frames.
- **Shadow Strategy:** none on containers (see Elevation).
- **Internal Padding:** 40px (28px 22px on mobile).

### Inputs / Fields
- **Style:** Noche Raised fill, 1px hairline, square, 0.85rem 1rem padding, 3.1rem min height, 1.02rem Plex Sans; mono uppercase label above.
- **Focus:** border shifts to 70% Verde Señal with a 3px 8% green ring.
- **Container:** the diagnosis form sits in an Azul Noche hairline shell under a 3px gradient strip.

### Navigation
- **Style:** fixed Azul Noche bar under a 3px gradient strip; flat symbol (40px) + "Arkanis" in Space Grotesk 600 22px with a mono tagline.
- **States:** links Gris Claro → white on hover; the current page gets a 2px inset Verde Señal underline.
- **Mobile:** ≤960px a 46px square hairline toggle opens a panel of Space Grotesk 20px links divided by hairlines; ≤760px the nav CTA is removed in favor of the sticky CTA.

### The Title Block (signature)
The drafting cajetín at the foot of the hero cover: four cells divided by hairlines, each a mono label (11.5px, Gris Medio) over a Space Grotesk value (600 18px) and an optional Plex Sans note. Linked cells fill Noche Raised on hover and turn their value green.

### The Node Arc (signature)
A blue "today" node and a slate "later" node joined by a hairline SVG arc. Choosing a task draws a gradient stroke along the arc (stroke-dashoffset, 0.9s `cubic-bezier(0.16, 1, 0.3, 1)`) and lights the second node green. Reduced motion shows the final state instantly.

### Spec Sheet and Ledger
Definition rows (150px mono term / value) and comparison tables ruled by 1px lines, no fills; on mobile, the ledger rows stack and repeat their column names as mono labels.

## Do's and Don'ts

### Do:
- **Do** keep every corner square except circular nodes and phone screenshots (18px).
- **Do** frame with 1px hairlines (`hairline` on dark, Gris Claro on light) and divide grids with shared borders instead of gaps.
- **Do** use the official 135° gradient only as a 3px strip or a 2-3px line.
- **Do** reserve Verde Señal for actions and "on" states; use `verde-ink` for green text on light surfaces.
- **Do** use the flat vector symbol for anything under 200px and the 3D render only as a large hero piece.
- **Do** alternate Azul Noche and Niebla bands to pace a page.
- **Do** keep one sticky CTA on mobile that appears only after the hero button scrolls away.

### Don't:
- **Don't** place eyebrow or kicker labels above headings.
- **Don't** use IBM Plex Mono for anything but data labels, spec terms, table headers and the title block.
- **Don't** round cards, buttons, chips or fields.
- **Don't** use glass buttons, gradient-filled buttons or glowing cards.
- **Don't** use Verde Señal for decoration, plain icons or section labels.
- **Don't** show a nav button at ≤760px.
