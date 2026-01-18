import { ShieldCheck } from 'lucide-react'
import { tokens } from '../styles/tokens'
import Container from './Container'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 relative z-10">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 opacity-60">
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          <span className={`font-semibold tracking-tight text-[10px] text-white uppercase tracking-widest ${tokens.fonts.heading}`}>
            HELMETPRO
          </span>
        </div>
        <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
          © 2026 HelmetPro — Prototype
        </div>
      </Container>
    </footer>
  )
}

export default Footer
