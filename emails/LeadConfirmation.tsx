import { Button, Column, Row, Section, Text } from '@react-email/components'
import { Layout } from './Layout'
import { SITE_URL, brand, fonts } from './theme'

export type LeadConfirmationProps = {
  name: string
  company: string
  service: string
  message: string
}

/**
 * What the person gets back after sending the form.
 *
 * The 24-hour promise is the only thing they actually want to know, so it is a
 * visual anchor rather than a sentence buried in a paragraph. The three steps
 * below it exist to remove the "and now what?" silence that follows most
 * contact forms — and they double as a demonstration of the ordered process
 * Arkanis sells.
 */
const steps = [
  {
    n: '01',
    title: 'Leemos tu caso',
    body: 'Revisamos lo que nos contaste y buscamos el punto donde se origina la fricción, no donde se nota.',
  },
  {
    n: '02',
    title: 'Te escribimos',
    body: 'En menos de 24 horas, con preguntas concretas o una propuesta de conversación.',
  },
  {
    n: '03',
    title: 'Definimos una ruta',
    body: 'Si hay algo que podamos resolver, lo planteamos con alcance y prioridades claras.',
  },
]

export function LeadConfirmation({ name, company, service, message }: LeadConfirmationProps) {
  const firstName = name.trim().split(/\s+/)[0] || 'Hola'

  return (
    <Layout preview="Recibimos tu solicitud. Te respondemos en menos de 24 horas." showLegalFooter>
      <Text style={eyebrow}>SOLICITUD RECIBIDA</Text>
      <Text style={heading}>
        Gracias, {firstName}. Ya estamos con tu caso.
      </Text>

      <Section style={promiseBox}>
        <Row>
          <Column style={promiseIconCell}>
            <Text style={promiseIcon}>24h</Text>
          </Column>
          <Column>
            <Text style={promiseTitle}>Te respondemos en menos de 24 horas</Text>
            <Text style={promiseSub}>
              No proponemos una solución antes de entender el problema.
            </Text>
          </Column>
        </Row>
      </Section>

      <Text style={sectionLabel}>QUÉ SIGUE</Text>
      <Section style={stepsBlock}>
        {steps.map((step) => (
          <Row key={step.n} style={stepRow}>
            <Column style={stepNumberCell}>
              <Text style={stepNumber}>{step.n}</Text>
            </Column>
            <Column>
              <Text style={stepTitle}>{step.title}</Text>
              <Text style={stepBody}>{step.body}</Text>
            </Column>
          </Row>
        ))}
      </Section>

      <Text style={sectionLabel}>LO QUE NOS ENVIASTE</Text>
      <Section style={summaryCard}>
        <Row style={summaryRow}>
          <Column style={summaryKey}>Empresa</Column>
          <Column style={summaryValue}>{company}</Column>
        </Row>
        <Row style={summaryRow}>
          <Column style={summaryKey}>Área</Column>
          <Column style={summaryValue}>{service}</Column>
        </Row>
        <Row>
          <Column style={summaryMessageCell} colSpan={2}>
            <Text style={summaryMessage}>{message}</Text>
          </Column>
        </Row>
      </Section>

      <Text style={paragraph}>
        ¿Cambió algo o querés agregar contexto? Respondé este correo directamente: llega a la misma
        persona que va a revisar tu caso.
      </Text>

      <Section style={buttonWrap}>
        <Button href={`${SITE_URL}/proyectos`} style={button}>
          Ver proyectos que ya construimos
        </Button>
      </Section>

      <Text style={signature}>— Equipo Arkanis Solutions</Text>
    </Layout>
  )
}

LeadConfirmation.PreviewProps = {
  name: 'María Fernanda López',
  company: 'Panadería La Espiga',
  service: 'Automatización',
  message:
    'Llevamos los pedidos en un cuaderno y en WhatsApp. Se nos pierden pedidos y no sabemos cuánto vendemos por semana.',
} satisfies LeadConfirmationProps

export default LeadConfirmation

const eyebrow = {
  margin: '0',
  fontFamily: fonts.mono,
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.14em',
  color: brand.aqua,
}

const heading = {
  margin: '10px 0 0',
  fontSize: '25px',
  lineHeight: '1.28',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: brand.text,
}

const paragraph = {
  margin: '26px 0 0',
  fontSize: '15px',
  lineHeight: '1.65',
  color: brand.textMuted,
}

/* The promise: dark surface so it reads as a commitment, not as another note. */
const promiseBox = {
  margin: '24px 0 0',
  padding: '16px 18px',
  backgroundColor: brand.ink,
  borderRadius: '8px',
}

const promiseIconCell = {
  width: '54px',
  verticalAlign: 'top' as const,
}

const promiseIcon = {
  margin: '0',
  fontFamily: fonts.mono,
  fontSize: '17px',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: brand.aquaSoft,
}

const promiseTitle = {
  margin: '0',
  fontSize: '15px',
  fontWeight: 600,
  lineHeight: '1.4',
  color: brand.sand,
}

const promiseSub = {
  margin: '5px 0 0',
  fontSize: '13px',
  lineHeight: '1.55',
  color: brand.mist,
}

const sectionLabel = {
  margin: '32px 0 0',
  fontFamily: fonts.mono,
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  color: brand.textFaint,
}

const stepsBlock = {
  margin: '14px 0 0',
}

const stepRow = {
  marginBottom: '2px',
}

const stepNumberCell = {
  width: '44px',
  verticalAlign: 'top' as const,
  paddingTop: '2px',
}

const stepNumber = {
  margin: '0 0 14px',
  fontFamily: fonts.mono,
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  color: brand.aqua,
}

const stepTitle = {
  margin: '0',
  fontSize: '14px',
  fontWeight: 600,
  color: brand.text,
}

const stepBody = {
  margin: '3px 0 14px',
  fontSize: '13px',
  lineHeight: '1.6',
  color: brand.textMuted,
}

/* Bordered card rather than a grey fill, so it does not compete with the
   promise block above it. */
const summaryCard = {
  margin: '14px 0 0',
  border: `1px solid ${brand.border}`,
  borderRadius: '8px',
  padding: '4px 18px 0',
}

const summaryRow = {
  borderBottom: `1px solid ${brand.border}`,
}

const summaryKey = {
  width: '92px',
  padding: '12px 0',
  fontSize: '13px',
  color: brand.textFaint,
  verticalAlign: 'top' as const,
}

const summaryValue = {
  padding: '12px 0',
  fontSize: '14px',
  fontWeight: 600,
  color: brand.text,
  verticalAlign: 'top' as const,
}

const summaryMessageCell = {
  padding: '14px 0 16px',
}

const summaryMessage = {
  margin: '0',
  fontSize: '14px',
  lineHeight: '1.65',
  color: brand.textMuted,
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

const signature = {
  margin: '26px 0 0',
  fontSize: '14px',
  color: brand.text,
}
