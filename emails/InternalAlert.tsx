import { Button, Column, Row, Section, Text } from '@react-email/components'
import { Layout } from './Layout'
import { brand, fonts } from './theme'

export type InternalAlertProps = {
  submissionId: number
  name: string
  email: string
  company: string
  service: string
  message: string
  consentedAt: string
}

/** Formats the ISO consent timestamp in Colombian local time. */
function formatConsent(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat('es-CO', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/Bogota',
  }).format(date)
}

/** Sent to Arkanis when a lead comes in. */
export function InternalAlert({
  submissionId,
  name,
  email,
  company,
  service,
  message,
  consentedAt,
}: InternalAlertProps) {
  return (
    <Layout preview={`${name} — ${company} · ${service}`}>
      <Text style={eyebrow}>NUEVA SOLICITUD · #{submissionId}</Text>
      <Text style={heading}>{name}</Text>
      <Text style={subheading}>
        {company} · {service}
      </Text>

      <Section style={detailBlock}>
        <Row style={detailRow}>
          <Column style={detailKey}>Correo</Column>
          <Column style={detailValue}>{email}</Column>
        </Row>
        <Row style={detailRow}>
          <Column style={detailKey}>Autorización</Column>
          <Column style={detailValueMuted}>{formatConsent(consentedAt)}</Column>
        </Row>
        <Row style={detailRow}>
          <Column style={detailKey}>ID en base</Column>
          <Column style={detailValueMono}>#{submissionId}</Column>
        </Row>
      </Section>

      <Text style={sectionLabel}>QUÉ NECESITA</Text>
      <Section style={quoteBlock}>
        <Text style={quoteText}>{message}</Text>
      </Section>

      <Section style={buttonWrap}>
        <Button href={`mailto:${email}`} style={button}>
          Responder a {name.trim().split(/\s+/)[0]}
        </Button>
      </Section>

      <Text style={reminder}>
        Le prometimos respuesta en menos de 24 horas. Respondiendo este correo le escribís
        directamente.
      </Text>
    </Layout>
  )
}

InternalAlert.PreviewProps = {
  submissionId: 42,
  name: 'María Fernanda López',
  email: 'maria@laespiga.co',
  company: 'Panadería La Espiga',
  service: 'Automatización',
  message:
    'Llevamos los pedidos en un cuaderno y en WhatsApp. Se nos pierden pedidos y no sabemos cuánto vendemos por semana.',
  consentedAt: '2026-07-25T05:37:12.000Z',
} satisfies InternalAlertProps

export default InternalAlert

const eyebrow = {
  margin: '0',
  fontFamily: fonts.mono,
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.14em',
  color: brand.lime,
}

const heading = {
  margin: '12px 0 0',
  fontSize: '24px',
  lineHeight: '1.25',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: brand.text,
}

const subheading = {
  margin: '5px 0 0',
  fontSize: '14px',
  color: brand.textMuted,
}

const detailBlock = {
  margin: '24px 0 0',
  borderTop: `1px solid ${brand.border}`,
}

const detailRow = {
  borderBottom: `1px solid ${brand.border}`,
}

const detailKey = {
  width: '112px',
  padding: '11px 0',
  fontSize: '13px',
  color: brand.textFaint,
  verticalAlign: 'top' as const,
}

const detailValue = {
  padding: '11px 0',
  fontSize: '14px',
  fontWeight: 600,
  color: brand.text,
  verticalAlign: 'top' as const,
}

const detailValueMuted = {
  ...detailValue,
  fontWeight: 400,
  color: brand.textMuted,
}

const detailValueMono = {
  ...detailValue,
  fontFamily: fonts.mono,
  fontSize: '13px',
  color: brand.textMuted,
}

const sectionLabel = {
  margin: '28px 0 0',
  fontFamily: fonts.mono,
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  color: brand.textFaint,
}

const quoteBlock = {
  margin: '12px 0 0',
  padding: '16px 18px',
  backgroundColor: brand.paperMuted,
  borderRadius: '6px',
}

const quoteText = {
  margin: '0',
  fontSize: '14px',
  lineHeight: '1.65',
  color: brand.text,
}

const buttonWrap = {
  margin: '26px 0 0',
}

const button = {
  display: 'inline-block',
  padding: '12px 22px',
  backgroundColor: brand.ink,
  color: brand.sand,
  fontSize: '14px',
  fontWeight: 600,
  borderRadius: '8px',
  textDecoration: 'none',
}

const reminder = {
  margin: '18px 0 0',
  fontSize: '13px',
  lineHeight: '1.6',
  color: brand.textFaint,
}
