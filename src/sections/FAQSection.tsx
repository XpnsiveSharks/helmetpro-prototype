import { faqItems } from '../data/faq'
import { tokens } from '../styles/tokens'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'

const FAQSection = () => {
  return (
    <section id="faq" className={`${tokens.layout.section} relative z-10`}>
      <Container className="max-w-4xl">
        <SectionHeader
          title="Common Questions"
          className="mb-16 reveal-on-scroll"
        />
        <div className="space-y-4 reveal-on-scroll">
          {faqItems.map((faq) => (
            <div key={faq.question} className="p-6 rounded-xl border border-white/10 bg-zinc-900/30">
              <h3 className={`text-sm font-medium text-white mb-2 ${tokens.fonts.heading} uppercase tracking-wider`}>
                {faq.question}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
