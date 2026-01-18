import { tokens } from '../styles/tokens'
import heroBackground from '../assets/helmetpro-bg.png'

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

      <div className="text-center max-w-3xl mx-auto px-6 relative z-10 pt-20">
        <h1
          className={`${tokens.typeScale.h1} ${tokens.fonts.heading} text-white mb-6`}
        >
          Turn idle space into
          <br />
          <span className={`${tokens.fonts.heading} text-zinc-400`}>
            recurring revenue.
          </span>
        </h1>
        <p className={`text-lg ${tokens.colors.muted} max-w-xl mx-auto mb-10 leading-relaxed`}>
          Automated helmet cleaning vending machines
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            className="group bg-blue-600 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center gap-2 uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
          >
            Get Pricing
          </button>
          <button
            type="button"
            className="relative group overflow-hidden rounded-xl p-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] transform transition-transform active:scale-95"
          >
            <span className="absolute inset-0 bg-white/10 rounded-xl" />
            <span className="relative flex items-center gap-2 h-full w-full bg-[#09090b] rounded-xl px-6 py-3 transition-all duration-300 group-hover:bg-[#09090b]/90">
              <span className="text-zinc-400 font-medium text-sm group-hover:text-white transition-colors relative z-20 uppercase tracking-wide">
                Estimate ROI
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
