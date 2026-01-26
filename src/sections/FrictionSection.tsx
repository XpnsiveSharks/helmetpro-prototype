import { useRef } from 'react'
import { frictionTimelineData } from '../data/frictionTimeline'
import { useTimelineReveal } from '../hooks/useTimelineReveal'
import { tokens } from '../styles/tokens'
import Container from '../components/Container'

const FrictionSection = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const { lineHeight } = useTimelineReveal(timelineRef)

  return (
    <section id="friction" className={`${tokens.layout.section} relative z-10 overflow-hidden`}>
      <Container>
        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className={`${tokens.typeScale.h2} ${tokens.fonts.heading} text-white mb-2`}>
            Runs without friction.
          </h2>
          <p className={`${tokens.typeScale.body} max-w-md text-neutral-500 mx-auto leading-relaxed`}>
            Designed to operate quietly, autonomously, and reliably.
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-white/5 hidden md:block">
            <div
              className="w-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-all duration-[2.5s] ease-out origin-top"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          <div className="space-y-4">
            {frictionTimelineData.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              return (
                <div key={item.step} className="relative flex items-center md:h-32 timeline-step">
                  <div className="flex-1 hidden md:flex justify-end pr-10">
                    {isEven ? (
                      <div className="max-w-[240px] bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:border-blue-500/20 transition-all duration-500 group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">
                            Step {item.step}
                          </span>
                          <div className="text-zinc-600">
                            <Icon size={14} />
                          </div>
                        </div>
                        <h3 className={`text-xs font-semibold ${tokens.fonts.heading} mb-1 text-white uppercase tracking-wider`}>
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-zinc-400 leading-relaxed mb-2">
                          {item.description}
                        </p>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
                          {item.meta}
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 z-10 flex-shrink-0 rounded-full border border-zinc-900 bg-zinc-800 timeline-dot opacity-0 scale-0 transition-all duration-500 hidden md:block" />
                  <div className="flex-1 flex justify-start pl-10">
                    {!isEven ? (
                      <div className="max-w-[240px] bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:border-blue-500/20 transition-all duration-500 w-full group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">
                            Step {item.step}
                          </span>
                          <div className="text-zinc-600">
                            <Icon size={14} />
                          </div>
                        </div>
                        <h3 className={`text-xs font-semibold ${tokens.fonts.heading} mb-1 text-white uppercase tracking-wider`}>
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-zinc-400 leading-relaxed mb-2">
                          {item.description}
                        </p>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
                          {item.meta}
                        </div>
                      </div>
                    ) : (
                      <div className="md:hidden w-full max-w-[280px] bg-zinc-900/40 border border-white/5 rounded-xl p-5 mb-4 mx-auto">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">
                            Step {item.step}
                          </span>
                          <div className="text-zinc-600">
                            <Icon size={14} />
                          </div>
                        </div>
                        <h3 className={`text-xs font-semibold ${tokens.fonts.heading} mb-1 text-white uppercase tracking-wider`}>
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-zinc-400 leading-relaxed mb-2">
                          {item.description}
                        </p>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
                          {item.meta}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FrictionSection
