import { ChevronUp } from 'lucide-react'
import { useFabVisibility } from '../hooks/useFabVisibility'

type ScrollToTopFABProps = {
  heroId: string
  ctaId: string
}

const ScrollToTopFAB = ({ heroId, ctaId }: ScrollToTopFABProps) => {
  const showFab = useFabVisibility(heroId, ctaId)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        showFab
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="group flex flex-col items-center justify-center p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] rounded"
        aria-label="Scroll to top"
      >
        <div className="flex flex-col items-center justify-center -space-y-4">
          <ChevronUp className="w-6 h-6 animate-flow-up" style={{ animationDelay: '0.1s' }} />
          <ChevronUp className="w-6 h-6 animate-flow-up" style={{ animationDelay: '0.4s' }} />
        </div>
        <span className="mt-1 text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500/80 group-hover:text-white transition-colors">
          Top
        </span>
      </button>
    </div>
  )
}

export default ScrollToTopFAB
