import { useState } from 'react'
import { motion } from 'motion/react'
import { supabase } from '../../lib/supabase'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-xl space-y-6 text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-[#F4F3F3] flex items-center justify-center mx-auto mb-6">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#191919]"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl font-normal text-[#191919]">
          Link enviado!
        </h2>
        <p className="text-sm text-[#191919]/60 max-w-sm mx-auto">
          Enviamos um link de acesso para <strong>{email}</strong>. Clique no
          link do e-mail para acessar sua conta.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-sm text-[#191919]/50 hover:text-[#191919] transition-colors mt-4"
        >
          Usar outro e-mail
        </button>
      </motion.div>
    )
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
          Digite seu e-mail para receber um link de acesso.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#191919]">
            E-mail profissional
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
            className="w-full h-11 px-4 rounded-xl bg-[#F4F3F3] border-none text-[#191919] placeholder:text-[#191919]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#191919]/20 transition-shadow duration-200"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2.5">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !email}
          className="w-full h-14 bg-[#191919] text-white font-semibold rounded-xl hover:bg-[#191919]/90 active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Enviando link...' : 'Enviar link de acesso'}
        </button>
      </form>

      <p className="text-center text-sm text-[#191919]/40">
        Ainda não tem conta?{' '}
        <a href="/cadastro" className="text-[#191919] font-medium hover:underline">
          Cadastre-se
        </a>
      </p>

      <p className="text-center text-xs text-[#191919]/30">
        Ao acessar, você concorda com nossa{' '}
        <a href="/privacidade" className="underline hover:text-[#191919]/50 transition-colors">
          Política de Privacidade
        </a>
        . Seus dados e laudos são processados em ambiente isolado, nos termos da LGPD.
      </p>
    </motion.div>
  )
}

export default LoginForm
