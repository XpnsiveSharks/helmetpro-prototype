export type Metric = {
  value: string
  label: string
}

export const metrics: Metric[] = [
  { value: '00 seconds', label: 'Cleaning cycle' },
  { value: '99.9%', label: 'System Uptime' },
  { value: 'less than 6 mo.', label: 'Avg. Payback' },
  { value: 'IoT', label: 'Remote management' },
]
