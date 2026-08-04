import LoginForm from '../components/auth/LoginForm'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

const LoginPage = () => (
  <main className="flex min-h-screen w-full bg-brand-white selection:bg-[#191919]/10 p-2 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4">
    {/* Left column — brand */}
    <div className="relative hidden lg:flex flex-col items-center justify-center rounded-3xl overflow-hidden shadow-2xl h-full w-[52%] bg-gradient-to-br from-[#191919] via-[#191919] to-brand-accent/10">
      <div className="relative z-10 text-center px-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          <svg
            viewBox="0 0 256 256"
            fill="currentColor"
            className="w-8 h-8 text-white"
            aria-hidden="true"
          >
            <path d="M 144 256 L 27.598 256 L 144 139.598 Z" />
            <path d="M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z" />
            <path d="M 0 204.402 L 0 112 L 92.402 112 Z" />
          </svg>
          <span className="text-2xl font-semibold tracking-tight text-white">
            Firmis
          </span>
        </div>
        <div className="w-16 h-[2px] bg-brand-accent mx-auto mb-8" />
        <h2 className="text-3xl font-serif font-normal text-white/90 leading-tight">
          Laudos técnicos
          <br />
          com fundamento.
        </h2>
        <p className="text-white/40 text-sm mt-4 max-w-xs mx-auto">
          Acesse sua conta para começar a emitir laudos com fundamentação
          técnica rastreável.
        </p>
      </div>
    </div>

    {/* Right column — form */}
    <div className="flex-1 flex flex-col items-center justify-center py-12 lg:py-6 px-4 sm:px-12 lg:px-16 xl:px-24 overflow-y-auto lg:overflow-hidden">
      {/* Mobile logo */}
      <Link to="/" className="lg:hidden flex items-center gap-2.5 mb-8">
        <Logo />
        <span className="font-semibold text-base tracking-tight text-[#191919]">
          Firmis
        </span>
      </Link>

      <LoginForm />
    </div>
  </main>
)

export default LoginPage
