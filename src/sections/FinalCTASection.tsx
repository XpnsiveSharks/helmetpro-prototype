import { tokens } from '../styles/tokens'
import Container from '../components/Container'
import Button from '../components/ui/Button'

const FinalCTASection = () => {
  return (
    <section id="cta-section" className={`${tokens.layout.sectionWide} relative z-10`}>
      <Container className="max-w-xl text-center">
        <h2 className={`${tokens.typeScale.h2} ${tokens.fonts.heading} text-white mb-6 reveal-on-scroll`}>
          Start with one location.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll delay-100">
          <Button
            variant="primary"
            size="sm"
          >
            Get Pricing
          </Button>
          <Button variant="secondary" size="sm">
            Contact Sales
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTASection
