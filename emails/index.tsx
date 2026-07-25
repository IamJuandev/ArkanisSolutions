import { render } from '@react-email/render'
import { InternalAlert, type InternalAlertProps } from './InternalAlert'
import { LeadConfirmation, type LeadConfirmationProps } from './LeadConfirmation'

export type RenderedEmail = {
  subject: string
  html: string
  text: string
}

/**
 * Both HTML and a plain-text alternative are produced. Text-only clients and
 * spam filters treat a message without a text part with suspicion, and n8n
 * cannot derive one on its own.
 */
async function renderBoth(node: React.ReactElement, subject: string): Promise<RenderedEmail> {
  const [html, text] = await Promise.all([
    render(node),
    render(node, { plainText: true }),
  ])
  return { subject, html, text }
}

export function leadConfirmation(props: LeadConfirmationProps) {
  return renderBoth(
    <LeadConfirmation {...props} />,
    'Recibimos tu solicitud — Arkanis Solutions',
  )
}

export function internalAlert(props: InternalAlertProps) {
  return renderBoth(
    <InternalAlert {...props} />,
    `Nueva solicitud: ${props.name} — ${props.company}`,
  )
}
