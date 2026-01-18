import { locations } from '../data/locations'
import { tokens } from '../styles/tokens'
import Container from '../components/Container'

const LocationsSection = () => {
  return (
    <section id="model" className="xl:pt-24 xl:pb-16 pt-24 pb-16 relative z-10">
      <Container>
        <div className="text-center md:text-left mb-10">
          <h2 className={`${tokens.typeScale.h2} ${tokens.fonts.heading} text-white mb-1 reveal-on-scroll`}>
            Designed for high traffic.
          </h2>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 reveal-on-scroll font-medium">
            Where HelmetPro units perform best.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-[340px] w-full reveal-on-scroll">
          {locations.map((location) => {
            const Icon = location.icon
            return (
              <article
                key={location.label}
                className="card group relative w-full md:flex-1 min-w-0 overflow-hidden transition-all duration-500 ease-out bg-neutral-900 border border-white/10 rounded-2xl hover:grow-[1.5] hover:flex-[1.5]"
              >
                <img
                  src={location.image}
                  alt={location.label}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.02] opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-col gap-2">
                    <div className="opacity-65 text-white">
                      <Icon size={18} />
                    </div>
                    <span className={`text-[10px] font-semibold ${tokens.fonts.heading} text-white/90 tracking-widest uppercase`}>
                      {location.label}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default LocationsSection
