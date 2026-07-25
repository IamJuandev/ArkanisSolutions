import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { ReactNode } from 'react'
import { CONTACT_EMAIL, SITE_URL, brand, fonts } from './theme'

type LayoutProps = {
  /** Shown in the inbox list next to the subject. */
  preview: string
  children: ReactNode
  /** Legal footer belongs on mail to data subjects, not on internal alerts. */
  showLegalFooter?: boolean
}

/**
 * Shared shell: dark masthead, white content card, footer.
 *
 * The wordmark is set in type rather than as an image on purpose — most clients
 * block remote images by default, so a logo would leave a broken first
 * impression exactly where it matters most.
 */
export function Layout({ preview, children, showLegalFooter = false }: LayoutProps) {
  return (
    <Html lang="es">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={masthead}>
            <Text style={wordmark}>
              ARKANIS <span style={wordmarkLight}>SOLUTIONS</span>
            </Text>
          </Section>
          {/* Thin brand rule: carries the identity without spending vertical
              space on a tagline nobody reads in an inbox. */}
          <Section style={accentBar} />

          <Section style={card}>{children}</Section>

          <Section style={footer}>
            <Text style={footerText}>
              <Link href={SITE_URL} style={footerLink}>
                arkanis.site
              </Link>
              {'  ·  '}
              <Link href={`mailto:${CONTACT_EMAIL}`} style={footerLink}>
                {CONTACT_EMAIL}
              </Link>
            </Text>
            <Text style={footerMuted}>Armenia, Quindío · Colombia</Text>

            {showLegalFooter ? (
              <>
                <Hr style={footerRule} />
                <Text style={footerLegal}>
                  Tratamos tus datos conforme a nuestra{' '}
                  <Link href={`${SITE_URL}/privacidad`} style={footerLegalLink}>
                    política de tratamiento de datos
                  </Link>
                  . Podés consultarlos, actualizarlos o solicitar su supresión escribiendo a{' '}
                  <Link href={`mailto:${CONTACT_EMAIL}`} style={footerLegalLink}>
                    {CONTACT_EMAIL}
                  </Link>
                  .
                </Text>
              </>
            ) : null}
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const body = {
  margin: '0',
  padding: '24px 12px',
  backgroundColor: brand.paperMuted,
  fontFamily: fonts.sans,
  WebkitFontSmoothing: 'antialiased' as const,
}

const container = {
  maxWidth: '580px',
  margin: '0 auto',
}

const masthead = {
  backgroundColor: brand.ink,
  padding: '20px 32px',
  borderRadius: '10px 10px 0 0',
}

const wordmark = {
  margin: '0',
  fontFamily: fonts.sans,
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.16em',
  color: brand.sand,
}

const wordmarkLight = {
  fontWeight: 400,
  color: brand.aquaSoft,
}

const accentBar = {
  height: '3px',
  lineHeight: '3px',
  fontSize: '1px',
  backgroundColor: brand.aqua,
}

const card = {
  backgroundColor: brand.paper,
  padding: '34px 32px 30px',
  borderLeft: `1px solid ${brand.border}`,
  borderRight: `1px solid ${brand.border}`,
  borderBottom: `1px solid ${brand.border}`,
  borderRadius: '0 0 10px 10px',
}

const footer = {
  padding: '22px 32px 8px',
  textAlign: 'center' as const,
}

const footerText = {
  margin: '0',
  fontSize: '12px',
  lineHeight: '1.6',
  color: brand.textMuted,
}

const footerLink = {
  color: brand.textMuted,
  textDecoration: 'none',
}

const footerMuted = {
  margin: '4px 0 0',
  fontSize: '12px',
  color: brand.textFaint,
}

const footerRule = {
  borderColor: brand.border,
  margin: '16px 0 12px',
}

const footerLegal = {
  margin: '0',
  fontSize: '11px',
  lineHeight: '1.6',
  color: brand.textFaint,
  textAlign: 'left' as const,
}

const footerLegalLink = {
  color: brand.textMuted,
  textDecoration: 'underline',
}
