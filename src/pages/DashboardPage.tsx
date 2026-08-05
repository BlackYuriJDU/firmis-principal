import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { Construction, LogOut, ArrowLeft } from 'lucide-react'

const DashboardPage = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-brand-white flex flex-col">
      {/* Top bar */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 256 256"
              fill="currentColor"
              className="w-6 h-6 text-[#191919]"
              aria-hidden="true"
            >
              <rect x="44" y="140" width="40" height="96" rx="4" />
              <rect x="108" y="88" width="40" height="148" rx="4" />
              <rect x="172" y="36" width="40" height="200" rx="4" />
              <rect x="32" y="224" width="192" height="12" rx="3" />
              <rect x="168" y="24" width="48" height="16" rx="3" />
            </svg>
            <span className="font-semibold text-base tracking-tight text-[#191919]">
              Firmis
            </span>
          </Link>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm text-[#191919]/50 hover:text-[#191919] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="w-20 h-20 rounded-2xl bg-brand-gray flex items-center justify-center mb-8">
          <Construction className="w-10 h-10 text-brand-accent" />
        </div>

        <h1 className="font-serif text-3xl font-normal text-[#191919] mb-3">
          Em construção
        </h1>

        <p className="text-sm text-[#191919]/50 max-w-sm leading-relaxed mb-10">
          O dashboard da Firmis está sendo preparado para você. Em breve você
          poderá criar, gerenciar e exportar seus laudos técnicos por aqui.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
      </main>
    </div>
  )
}

export default DashboardPage
