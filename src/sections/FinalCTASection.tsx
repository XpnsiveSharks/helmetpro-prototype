import { tokens } from '../styles/tokens'
import Container from '../components/Container'

const FinalCTASection = () => {
  return (
    <section id="cta-section" className={`${tokens.layout.sectionWide} relative z-10`}>
      <Container className="max-w-xl text-center">
        <h2 className={`${tokens.typeScale.h2} ${tokens.fonts.heading} text-white mb-6 reveal-on-scroll`}>
          Start with one location.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll delay-100">
          <button
            type="button"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium text-[10px] uppercase tracking-widest transition-transform hover:bg-blue-500 hover:scale-[1.02] shadow-[0_0_30px_rgba(37,99,235,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
          >
            Get Pricing
          </button>
          <button
            type="button"
            className="bg-transparent text-zinc-400 border border-white/10 px-8 py-3 rounded-xl font-medium text-[10px] uppercase tracking-widest hover:border-white/30 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
          >
            Contact Sales
          </button>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTASection
