import type { LucideIcon } from 'lucide-react'
import { Activity, Cpu, CreditCard, Settings } from 'lucide-react'

export type FrictionTimelineItem = {
  step: string
  title: string
  description: string
  meta: string
  icon: LucideIcon
}

export const frictionTimelineData: FrictionTimelineItem[] = [
  {
    step: '01',
    title: 'No staff required',
    description: 'Every 45 seconds, the unit performs a deep UV-C cycle without intervention.',
    meta: 'Cycle: 45s',
    icon: Cpu,
  },
  {
    step: '02',
    title: 'Low maintenance',
    description: 'Tethered to LTE cloud grid, self-reporting hardware health 24/7.',
    meta: 'Uptime: 99.9%',
    icon: Settings,
  },
  {
    step: '03',
    title: 'Contactless payments',
    description: 'Secure NFC and QR transactions handled automatically via global gateways.',
    meta: 'Payouts: Daily',
    icon: CreditCard,
  },
  {
    step: '04',
    title: 'Remote monitoring',
    description: 'Monitor fleet health, revenue, and inventory levels from a single dashboard.',
    meta: 'Live Feed',
    icon: Activity,
  },
]
