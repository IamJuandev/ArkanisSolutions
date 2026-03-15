/**
 * AppIcon — resolves a string key to the matching Lucide icon component.
 * Usage: <AppIcon name="zap" size={24} className="text-white" />
 */
import {
  Zap, Monitor, Plug, Cpu, Shield,
  Target, ScanSearch, Handshake,
  Mail, MessageCircle, MapPin,
  CalendarCheck, ScanLine, Receipt,
} from 'lucide-react'

const icons = {
  zap: Zap,
  monitor: Monitor,
  plug: Plug,
  cpu: Cpu,
  shield: Shield,
  target: Target,
  'scan-search': ScanSearch,
  handshake: Handshake,
  mail: Mail,
  'message-circle': MessageCircle,
  'map-pin': MapPin,
  'calendar-check': CalendarCheck,
  'scan-line': ScanLine,
  receipt: Receipt,
}

export default function AppIcon({ name, size = 20, strokeWidth = 1.5, className = '' }) {
  const Icon = icons[name]
  if (!Icon) return null
  return <Icon size={size} strokeWidth={strokeWidth} className={className} />
}
