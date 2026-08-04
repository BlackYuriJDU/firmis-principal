import SignUpHero from '../components/auth/SignUpHero'
import SignUpForm from '../components/auth/SignUpForm'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

const SignUpPage = () => (
  <main className="flex min-h-screen w-full bg-white selection:bg-[#191919]/10 p-2 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4">
    {/* Left column — hero with video */}
    <SignUpHero />

    {/* Right column — form */}
    <div className="flex-1 flex flex-col items-center justify-center py-12 lg:py-6 px-4 sm:px-12 lg:px-16 xl:px-24 overflow-y-auto lg:overflow-hidden">
      {/* Mobile logo */}
      <Link to="/" className="lg:hidden flex items-center gap-2.5 mb-8">
        <Logo />
        <span className="font-semibold text-base tracking-tight text-[#191919]">
          Firmis
        </span>
      </Link>

      <SignUpForm />
    </div>
  </main>
)

export default SignUpPage
