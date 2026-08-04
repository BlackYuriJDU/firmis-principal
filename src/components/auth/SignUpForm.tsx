import { motion } from 'motion/react'
import { Globe, Terminal } from 'lucide-react'
import SocialButton from './SocialButton'
import InputGroup from './InputGroup'

const SignUpForm = () => (
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
      <SocialButton icon={Globe} label="Google" />
      <SocialButton icon={Terminal} label="GitHub" />
    </div>

    {/* Divider */}
    <div className="relative flex items-center">
      <div className="flex-grow border-t border-[#191919]/10" />
      <span className="flex-shrink px-4 text-xs font-medium text-[#191919]/40 uppercase tracking-widest bg-white">
        Ou
      </span>
      <div className="flex-grow border-t border-[#191919]/10" />
    </div>

    {/* Form */}
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-4">
        <InputGroup label="Nome" placeholder="Seu nome" />
        <InputGroup label="Sobrenome" placeholder="Seu sobrenome" />
      </div>
      <InputGroup label="E-mail" placeholder="seu@email.com" type="email" />
      <InputGroup
        label="Senha"
        placeholder="Mínimo de 8 caracteres"
        type="password"
        helper="Requer no mínimo 8 caracteres."
      />

      <button
        type="submit"
        className="w-full h-14 bg-[#191919] text-white font-semibold rounded-xl hover:bg-[#191919]/90 active:scale-[0.98] transition-all duration-200 mt-2"
      >
        Criar Conta
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

export default SignUpForm
