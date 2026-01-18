import { ShieldCheck } from 'lucide-react'
import { navLinks } from '../data/navLinks'
import { tokens } from '../styles/tokens'
import Container from './Container'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] rounded'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 glass-panel">
      <Container className="h-14 flex items-center justify-between relative">
        <a
          href="#hero"
          className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${focusRing}`}
        >
          <ShieldCheck className="w-5 h-5 text-blue-500" />
          <span className={`font-semibold tracking-tight text-sm text-zinc-100 uppercase ${tokens.fonts.heading}`}>
            HELMETPRO
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${tokens.typeScale.caption} text-zinc-400 hover:text-white transition-colors ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
