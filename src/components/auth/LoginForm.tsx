import { useState } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const LoginForm = () => {
  const { signInWithPassword } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signInWithPassword(email, password)

    setLoading(false)

    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        setError('E-mail ou senha inválidos.')
      } else if (error.message.includes('Email not confirmed')) {
        setError('E-mail não confirmado. Verifique sua caixa de entrada.')
      } else {
        setError(error.message)
      }
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-xl space-y-6 sm:space-y-8"
    >
      <div>
        <h1 className="text-3xl font-medium tracking-tight text-[#191919]">
          Acessar plataforma
        </h1>
        <p className="text-[#191919]/40 text-sm mt-1">
          Entre com seu e-mail e senha.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="font-mono-label font-medium text-[#191919]">
            E-mail profissional
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
            autoComplete="email"
            className="w-full border-b border-[#191919]/15 bg-transparent rounded-none py-3 text-[#191919] placeholder:text-[#191919]/20 text-sm outline-none focus:border-brand-accent focus:ring-0 transition-colors duration-200"
          />
        </div>

        <div className="space-y-1.5">
          <label className="font-mono-label font-medium text-[#191919]">
            Senha
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
            required
            autoComplete="current-password"
            className="w-full border-b border-[#191919]/15 bg-transparent rounded-none py-3 text-[#191919] placeholder:text-[#191919]/20 text-sm outline-none focus:border-brand-accent focus:ring-0 transition-colors duration-200"
          />
        </div>

        <div className="flex justify-end">
          <a
            href="/recuperar-senha"
            className="text-xs text-[#191919]/40 hover:text-brand-accent transition-colors"
          >
            Esqueceu a senha?
          </a>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2.5">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !email || !password}
          className="w-full h-14 bg-[#191919] text-white font-semibold rounded-xl hover:bg-[#191919]/90 active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>

      <p className="text-center text-sm text-[#191919]/40">
        Ainda não tem conta?{' '}
        <a href="/cadastro" className="text-brand-accent font-medium hover:underline">
          Cadastre-se
        </a>
      </p>

      <p className="text-center text-xs text-[#191919]/30">
        Ao acessar, você concorda com nossa{' '}
        <a href="/privacidade" className="underline hover:text-brand-accent transition-colors">
          Política de Privacidade
        </a>
        . Seus dados e laudos são processados em ambiente isolado, nos termos da LGPD.
      </p>
    </motion.div>
  )
}

export default LoginForm
