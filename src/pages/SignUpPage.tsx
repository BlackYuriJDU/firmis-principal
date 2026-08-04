import SignUpHero from '../components/auth/SignUpHero'
import LoginForm from '../components/auth/LoginForm'
import { Link } from 'react-router-dom'

const SignUpPage = () => (
  <main className="flex min-h-screen w-full bg-white selection:bg-[#191919]/10 p-2 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4">
    {/* Left column — hero with video */}
    <SignUpHero />

    {/* Right column — form */}
    <div className="flex-1 flex flex-col items-center justify-center py-12 lg:py-6 px-4 sm:px-12 lg:px-16 xl:px-24 overflow-y-auto lg:overflow-hidden">
      {/* Mobile logo */}
      <Link to="/" className="lg:hidden flex items-center gap-2.5 mb-8">
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

      <LoginForm />
    </div>
  </main>
)

export default SignUpPage
