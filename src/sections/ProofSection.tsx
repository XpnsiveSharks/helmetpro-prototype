import { tokens } from '../styles/tokens'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'

const barHeights = [40, 60, 45, 70, 55, 85, 95]

const ProofSection = () => {
  return (
    <section id="proof" className="py-24 border-t border-white/5 bg-zinc-900/20 relative z-10">
      <Container>
        <SectionHeader
          title="Complete visibility."
          subtitle="Monitor fleet health from anywhere."
          className="mb-16 reveal-on-scroll"
          subtitleClassName="text-xs"
        />
        <div className="max-w-4xl mx-auto bg-[#0F0F11] rounded-2xl shadow-2xl border border-white/10 overflow-hidden reveal-on-scroll">
          <div className="border-b border-white/5 px-6 py-4 flex items-center justify-between bg-white/[0.01]">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              Partner Portal v2.0
            </div>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-8">
            <div className="col-span-2 space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-widest text-zinc-300">
                  Revenue Stream
                </span>
                <span className="text-[10px] text-blue-500 font-medium uppercase tracking-widest">
                  +18.4%
                </span>
              </div>
              <div className="h-24 w-full flex items-end gap-1">
                {barHeights.map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className={`w-full ${
                      index === barHeights.length - 1
                        ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]'
                        : 'bg-zinc-800'
                    } rounded-t-sm`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                  Active Units
                </p>
                <p className={`text-xl font-semibold text-white ${tokens.fonts.heading}`}>
                  12 Units
                </p>
              </div>
              <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)] animate-pulse" />
                  <p className="text-[10px] font-medium text-zinc-300 uppercase tracking-widest">
                    Systems Normal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProofSection
