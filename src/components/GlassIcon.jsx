/**
 * GlassIcon — Liquid glass icon container
 * Simulates the iOS/visionOS liquid glass material:
 *   - backdrop blur
 *   - semi-transparent gradient fill (tinted by accent color)
 *   - specular highlight at the top (refraction)
 *   - subtle bottom shadow
 *   - luminous border
 */
export default function GlassIcon({ children, size = 'md', color = 'cyan', className = '' }) {
  const sizes = {
    xs:  'w-9  h-9  text-lg  rounded-2xl',
    sm:  'w-11 h-11 text-xl  rounded-2xl',
    md:  'w-14 h-14 text-2xl rounded-3xl',
    lg:  'w-16 h-16 text-3xl rounded-3xl',
  }

  const tints = {
    cyan:    { bg: 'rgba(64,224,255,0.12)',  border: 'rgba(64,224,255,0.30)',  glow: 'rgba(64,224,255,0.15)'  },
    green:   { bg: 'rgba(34,197,94,0.12)',   border: 'rgba(34,197,94,0.30)',   glow: 'rgba(34,197,94,0.15)'   },
    neutral: { bg: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.18)', glow: 'rgba(255,255,255,0.08)' },
    orange:  { bg: 'rgba(249,115,22,0.12)',  border: 'rgba(249,115,22,0.30)',  glow: 'rgba(249,115,22,0.12)'  },
  }

  const c = tints[color] ?? tints.neutral

  return (
    <div
      className={`relative flex-shrink-0 flex items-center justify-center overflow-hidden ${sizes[size]} ${className}`}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: `linear-gradient(150deg, rgba(255,255,255,0.16) 0%, ${c.bg} 60%, rgba(0,0,0,0.08) 100%)`,
        border: `1px solid ${c.border}`,
        boxShadow: `0 4px 24px ${c.glow}, 0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.20) inset`,
      }}
    >
      {/* Specular highlight — top half bright sheen */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: '52%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 60%, transparent 100%)',
          borderRadius: 'inherit',
        }}
      />
      {/* Bottom inner shadow */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '35%',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.18) 0%, transparent 100%)',
          borderRadius: 'inherit',
        }}
      />
      {/* Icon content */}
      <span className="relative z-10 select-none">{children}</span>
    </div>
  )
}
