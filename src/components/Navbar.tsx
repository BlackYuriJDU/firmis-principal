import { Link } from 'react-router-dom'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Produto', href: '#produto' },
  { label: 'Comparativo', href: '#comparativo' },
  { label: 'Preços', href: '#precos' },
  { label: 'Segurança', href: '#seguranca' },
]

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 md:px-14 py-4 sm:py-5 flex items-center justify-between">
    {/* Logo + wordmark */}
    <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
      <Logo />
      <span className="font-semibold text-base tracking-tight text-[#191919]">
        Firmis
      </span>
    </Link>

    {/* Center links — hidden below md */}
    <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm text-[#191919]/70 hover:text-[#191919] transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
    </div>

    {/* CTA right */}
    <Link
      to="/cadastro"
      className="px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200 flex-shrink-0"
    >
      Solicitar Demonstração
    </Link>
  </nav>
)

export default Navbar
