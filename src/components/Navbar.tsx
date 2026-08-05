import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Produto', href: '/#produto' },
  { label: 'Validação', href: '/#validacao' },
  { label: 'Planos', href: '/plan' },
  { label: 'Preços', href: '/#precos' },
  { label: 'Segurança', href: '/#seguranca' },
]

const Navbar = () => {
  const { user } = useAuth()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 md:px-14 py-4 sm:py-5 flex items-center justify-between bg-brand-white/90 backdrop-blur-sm ${
        !isHome ? 'border-b border-gray-100' : ''
      }`}
    >
      {/* Logo + wordmark */}
      <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2.5 flex-shrink-0">
        <Logo />
        <span className="font-semibold text-base tracking-tight text-[#191919]">
          Firmis
        </span>
      </Link>

      {/* Center links — only on landing page */}
      {isHome && (
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#191919]/70 hover:text-brand-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* CTA right */}
      {user ? (
        <Link
          to="/dashboard"
          className="px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200 flex-shrink-0"
        >
          Dashboard
        </Link>
      ) : (
        <div className="flex items-center gap-3">
          <Link
            to="/entrar"
            className="hidden sm:inline px-5 py-2.5 text-[#191919] text-sm font-medium rounded-lg hover:bg-brand-accent-subtle transition-colors duration-200 flex-shrink-0"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            className="px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200 flex-shrink-0"
          >
            Cadastre-se
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
