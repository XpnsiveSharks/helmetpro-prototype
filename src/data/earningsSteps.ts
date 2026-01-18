import type { LucideIcon } from 'lucide-react'
import { BoxSelect, Layers, Rocket } from 'lucide-react'
import stepOne from '../assets/Step1.png'
import stepTwo from '../assets/Step2.png'
import stepThree from '../assets/Step3.png'
export type EarningsStep = {
  step: string
  title: string
  description: string
  image: string
  icon: LucideIcon
}

export const earningsSteps: EarningsStep[] = [
  {
    step: '01',
    title: 'Deploy Unit',
    description: 'Install modular units in high-traffic zones like malls and transit hubs.',
    image: stepOne,
    icon: BoxSelect,
  },
  {
    step: '02',
    title: 'Automate',
    description: 'Zero staffing needed. 24/7 autonomous cleaning and service.',
    image: stepTwo,
    icon: Layers,
  },
  {
    step: '03',
    title: 'Generate Income',
    description: 'Collect revenue instantly via direct deposit. Monitor ROI in real-time.',
    image: stepThree,
    icon: Rocket,
  },
]
