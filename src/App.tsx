import Navbar from './components/Navbar'
import MetricsStrip from './components/MetricsStrip'
import ScrollToTopFAB from './components/ScrollToTopFAB'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import EarningsSection from './sections/EarningsSection'
import LocationsSection from './sections/LocationsSection'
import FrictionSection from './sections/FrictionSection'
import ProofSection from './sections/ProofSection'
import FAQSection from './sections/FAQSection'
import FinalCTASection from './sections/FinalCTASection'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { tokens } from './styles/tokens'

const App = () => {
  useRevealOnScroll()

  return (
    <div
      className={`min-h-screen ${tokens.colors.bg} ${tokens.colors.text} ${tokens.fonts.body} antialiased selection:bg-blue-600/30 selection:text-white overflow-x-hidden`}
    >
      <div className="grain-overlay" />

      <div className="fixed inset-0 pointer-events-none flex justify-center z-0 select-none">
        <div className="w-full max-w-6xl h-full border-x border-white/[0.04] flex justify-between px-6">
          <div className="h-full w-px bg-white/[0.04]" />
          <div className="h-full w-px bg-white/[0.04]" />
          <div className="h-full w-px bg-white/[0.04]" />
        </div>
      </div>

      <Navbar />

      <main>
        <HeroSection />
        <MetricsStrip />
        <EarningsSection />
        <LocationsSection />
        <FrictionSection />
        <ProofSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
      <ScrollToTopFAB heroId="hero" ctaId="cta-section" />
    </div>
  )
}

export default App
