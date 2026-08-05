import { useState } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { Globe, Terminal } from 'lucide-react'
import SocialButton from './SocialButton'
import InputGroup from './InputGroup'
import { useAuth } from '../../contexts/AuthContext'

const SignUpForm = () => {
  const { signUp, signInWithOAuth } = useAuth()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const errors: Record<string, string> = {}

    if (!firstName.trim()) errors.firstName = 'Nome é obrigatório.'
    if (!lastName.trim()) errors.lastName = 'Sobrenome é obrigatório.'
    if (!email.trim()) errors.email = 'E-mail é obrigatório.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = 'E-mail inválido.'
    if (!password) errors.password = 'Senha é obrigatória.'
    else if (password.length < 8)
      errors.password = 'Mínimo de 8 caracteres.'
    if (password !== confirmPassword)
      errors.confirmPassword = 'Senhas não conferem.'

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setFieldErrors({})

    if (!validate()) return

    setLoading(true)
    const { error } = await signUp(email, password, {
      first_name: firstName.trim(),
      last_name: lastName.trim(),
    })
    setLoading(false)

    if (error) {
      if (error.message.includes('already registered')) {
        setError('Este e-mail já está cadastrado.')
      } else {
        setError(error.message)
      }
    } else {
      navigate('/onboarding')
    }
  }

  const handleGoogleLogin = async () => {
    await signInWithOAuth('google')
  }

  const handleGithubLogin = async () => {
    await signInWithOAuth('github')
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
          Criar Conta
        </h1>
        <p className="text-[#191919]/40 text-sm mt-1">
          Preencha seus dados para começar.
        </p>
      </div>

      {/* Social buttons */}
      <div className="grid grid-cols-2 gap-4">
        <SocialButton icon={Globe} label="Google" onClick={handleGoogleLogin} />
        <SocialButton icon={Terminal} label="GitHub" onClick={handleGithubLogin} />
      </div>

      {/* Divider */}
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-[#191919]/10" />
        <span className="flex-shrink px-4 text-xs font-medium text-[#191919]/40 uppercase tracking-widest bg-brand-white">
          Ou
        </span>
        <div className="flex-grow border-t border-[#191919]/10" />
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <InputGroup
            label="Nome"
            name="firstName"
            placeholder="Seu nome"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            error={fieldErrors.firstName}
          />
          <InputGroup
            label="Sobrenome"
            name="lastName"
            placeholder="Seu sobrenome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            error={fieldErrors.lastName}
          />
        </div>
        <InputGroup
          label="E-mail"
          name="email"
          placeholder="seu@email.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          error={fieldErrors.email}
        />
        <InputGroup
          label="Senha"
          name="password"
          placeholder="Mínimo de 8 caracteres"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
          helper="Requer no mínimo 8 caracteres."
          error={fieldErrors.password}
        />
        <InputGroup
          label="Confirmar Senha"
          name="confirmPassword"
          placeholder="Repita sua senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
          error={fieldErrors.confirmPassword}
        />

        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2.5">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full h-14 bg-[#191919] text-white font-semibold rounded-xl hover:bg-[#191919]/90 active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Criando conta...' : 'Criar Conta'}
        </button>
      </form>

      <p className="text-center text-sm text-[#191919]/40">
        Já tem conta?{' '}
        <a href="/entrar" className="text-brand-accent font-medium hover:underline">
          Entrar
        </a>
      </p>
    </motion.div>
  )
}

export default SignUpForm
