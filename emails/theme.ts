/**
 * Brand tokens for email, mirrored from src/index.css.
 *
 * Email needs its own copy because CSS custom properties are unsupported in
 * Outlook and stripped by Gmail, so every value has to be inlined literally.
 */
export const brand = {
  ink: '#02070c',
  bg: '#050b12',
  aqua: '#23b6b5',
  aquaSoft: '#79ddd5',
  lime: '#35c77a',
  sand: '#f4f1ea',
  mist: '#a7b6c5',
  // Email bodies stay light: dark backgrounds are inverted unpredictably by
  // several clients and hurt readability of long text.
  paper: '#ffffff',
  paperMuted: '#f5f7f9',
  border: '#e3e8ed',
  text: '#1c2b36',
  textMuted: '#5a6b7a',
  textFaint: '#8a99a8',
} as const

// System stacks only. Webfonts are blocked or ignored by most email clients,
// and a failed webfont falls back to something worse than a good stack.
export const fonts = {
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace",
} as const

export const SITE_URL = 'https://arkanis.site'
export const CONTACT_EMAIL = 'contacto@arkanis.site'
