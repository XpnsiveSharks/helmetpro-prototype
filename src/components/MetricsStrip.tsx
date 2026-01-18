import { metrics } from '../data/metrics'
import { tokens } from '../styles/tokens'
import Container from './Container'

const MetricsStrip = () => {
  return (
    <section className={`border-y border-white/5 bg-white/[0.02] ${tokens.layout.sectionTight} relative z-10`}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 reveal-on-scroll text-center">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className={`text-2xl font-semibold tracking-tight text-white ${tokens.fonts.heading}`}>
                {metric.value}
              </p>
              <p className={`${tokens.typeScale.caption} text-zinc-500`}>{metric.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default MetricsStrip
