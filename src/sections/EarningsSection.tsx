import { earningsSteps } from '../data/earningsSteps'
import { tokens } from '../styles/tokens'
import Container from '../components/Container'

const EarningsSection = () => {
  return (
    <section id="earnings" className={`${tokens.layout.section} relative z-10`}>
      <Container>
        <header className="mb-16 flex flex-col items-center text-center reveal-on-scroll">
          <h2 className={`${tokens.typeScale.h2} ${tokens.fonts.heading} text-white mb-3`}>
            How it Earns
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-white/10" />
            <p className={`${tokens.typeScale.body} text-neutral-500`}>
              3-step automated revenue flow
            </p>
            <div className="h-px w-12 bg-white/10" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 relative reveal-on-scroll z-10 mb-8">
          {earningsSteps.map((step) => {
            const Icon = step.icon
            return (
              <article
                key={step.step}
                className="step-card group relative flex flex-col items-center flex-1 w-full p-6 rounded-xl border border-white/10 bg-neutral-900 overflow-hidden transition-all duration-300 cursor-pointer hover:border-white/20"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={step.image}
                    alt=""
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="relative z-10 w-full">
                  <div className="flex items-center justify-between w-full mb-8">
                    <div className="p-2 rounded-md bg-neutral-900/80 backdrop-blur-sm border border-white/10 text-neutral-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500 transition-colors group-hover:text-blue-500">
                      {step.step}
                    </span>
                  </div>
                  <h3
                    className={`${tokens.typeScale.h3} ${tokens.fonts.heading} text-neutral-200 mb-1 group-hover:text-white`}
                  >
                    {step.title}
                  </h3>
                  <p className={`${tokens.typeScale.label} text-neutral-500 font-semibold group-hover:text-neutral-400`}>
                    {step.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="flex flex-row items-center justify-between w-full border-t border-white/5 pt-8 px-2 md:px-12 reveal-on-scroll gap-2 md:gap-6">
          <div className="timeline-item flex items-center w-full px-1 group cursor-pointer">
            <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors whitespace-nowrap">Install</span>
            <div className="step-link"><span className="step-link__line"></span><span className="step-link__arrow"><span></span><span></span></span></div>
          </div>
          <div className="timeline-item flex items-center w-full px-1 group cursor-pointer">
            <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors whitespace-nowrap">Run</span>
            <div className="step-link"><span className="step-link__line"></span><span className="step-link__arrow"><span></span><span></span></span></div>
          </div>
          <div className="timeline-item flex items-center px-1 group cursor-pointer flex-none">
            <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">Earn</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EarningsSection
