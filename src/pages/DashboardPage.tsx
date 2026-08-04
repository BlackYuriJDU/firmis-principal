import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { Link, useNavigate } from 'react-router-dom'
import {
  FileText,
  LogOut,
  User,
  Plus,
  Clock,
  CheckCircle,
} from 'lucide-react'

const DashboardPage = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [crea, setCrea] = useState('')
  const [uf, setUf] = useState('')
  const [saved, setSaved] = useState(false)

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user!.id,
        crea_numero: crea,
        crea_uf: uf,
        updated_at: new Date().toISOString(),
      })

    if (!error) {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  // Mock data — will come from DB later
  const stats = [
    {
      icon: FileText,
      label: 'Laudos emitidos',
      value: '0',
    },
    {
      icon: Clock,
      label: 'Laudos em andamento',
      value: '0',
    },
    {
      icon: CheckCircle,
      label: 'ARTs registradas',
      value: '0',
    },
  ]

  return (
    <div className="min-h-screen bg-[#F4F3F3]">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 256 256"
                fill="currentColor"
                className="w-6 h-6 text-[#191919]"
                aria-hidden="true"
              >
                <path d="M 144 256 L 27.598 256 L 144 139.598 Z" />
                <path d="M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z" />
                <path d="M 0 204.402 L 0 112 L 92.402 112 Z" />
              </svg>
              <span className="font-semibold text-base tracking-tight text-[#191919]">
                Firmis
              </span>
            </Link>
          </div>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm text-[#191919]/50 hover:text-[#191919] transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-normal text-[#191919]">
            Bem-vindo{user?.user_metadata?.nome ? `, ${user.user_metadata.nome}` : ''}
          </h1>
          <p className="text-sm text-[#191919]/50 mt-1">
            {user?.email}
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 shadow-sm border-l-2 border-brand-accent"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F4F3F3] flex items-center justify-center mb-4">
                <stat.icon className="w-5 h-5 text-brand-accent" />
              </div>
              <p className="text-3xl font-serif font-normal text-[#191919] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#191919]/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Profile section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#F4F3F3] flex items-center justify-center">
              <User className="w-5 h-5 text-[#191919]" />
            </div>
            <h2 className="font-medium text-lg text-[#191919]">
              Perfil profissional
            </h2>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4 max-w-md">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#191919]">
                Número do CREA
              </label>
              <input
                type="text"
                value={crea}
                onChange={(e) => setCrea(e.target.value)}
                placeholder="Ex: 1234567890"
                className="w-full h-11 px-4 rounded-xl bg-[#F4F3F3] border-none text-[#191919] placeholder:text-[#191919]/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 transition-shadow duration-200"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#191919]">
                UF do CREA
              </label>
              <select
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-[#F4F3F3] border-none text-[#191919] text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 transition-shadow duration-200"
              >
                <option value="">Selecione...</option>
                {[
                  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
                  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
                  'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
                ].map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className={`px-6 py-2.5 text-white text-sm font-medium rounded-lg transition-colors duration-200 ${
                saved
                  ? 'bg-brand-accent hover:bg-brand-accent/90'
                  : 'bg-[#191919] hover:bg-[#191919]/90'
              }`}
            >
              {saved ? 'Salvo ✓' : 'Salvar perfil'}
            </button>
          </form>
        </div>

        {/* New laudo CTA */}
        <div className="bg-[#191919] rounded-2xl p-8 sm:p-10 text-center">
          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
            <Plus className="w-7 h-7 text-brand-accent" />
          </div>
          <h2 className="font-serif text-2xl font-normal text-white mb-3">
            Novo laudo
          </h2>
          <p className="text-sm text-white/50 max-w-sm mx-auto mb-6">
            Inicie uma nova vistoria e gere um laudo técnico com fundamentação
            em normas em minutos.
          </p>
          <button
            disabled
            className="px-6 py-2.5 bg-white text-[#191919] text-sm font-medium rounded-lg opacity-50 cursor-not-allowed"
          >
            Em breve
          </button>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
