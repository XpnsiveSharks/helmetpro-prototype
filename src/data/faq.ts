export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'What is the initial capital requirement?',
    answer:
      'Our modular units start at $8,500 with financing options available for multi-unit fleet deployments.',
  },
  {
    question: 'Do I need to handle maintenance?',
    answer:
      'No. Our service partners handle all routine maintenance and refills. You simply monitor the dashboard.',
  },
  {
    question: 'What is the typical ROI?',
    answer:
      'Most high-traffic locations break even in 6-8 months, with a projected 3-year ROI of 340%.',
  },
]
