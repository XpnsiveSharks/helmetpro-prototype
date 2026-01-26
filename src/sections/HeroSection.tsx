import { tokens } from '../styles/tokens'
import heroBackground from '../assets/helmetpro-bg.png'
import Button from '../components/ui/Button'

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
      </div>
      <div className="absolute inset-0 z-0 subtle-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="text-center max-w-7xl mx-auto px-6 relative z-10 pt-20">
        <h1
          className={`${tokens.typeScale.h1} ${tokens.fonts.heading} text-white mb-6`}
        >
          Turn idle space into 
          <br />
          <span className={`${tokens.fonts.heading} text-zinc-400`}>
            recurring revenue.
          </span>
        </h1>
        <p className={`text-sm md:text-xl sm:text-2xl ${tokens.colors.muted} max-w-xl mx-auto mb-10 leading-relaxed`}>
          Automated helmet cleaning vending machines
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="md">
            Get Pricing
          </Button>
          <Button variant="secondary" size="md">
            Estimate ROI
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
