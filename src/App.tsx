import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import OnboardingPage from './pages/OnboardingPage'
import DashboardPage from './pages/DashboardPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import LgpdPage from './pages/LgpdPage'
import CookiesPage from './pages/CookiesPage'
import PlanPage from './pages/PlanPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-brand-white flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono-label text-brand-accent mb-4">404</p>
      <h1 className="font-serif text-3xl font-normal text-[#191919] mb-3">
        Página não encontrada
      </h1>
      <p className="text-sm text-[#191919]/50 max-w-sm leading-relaxed mb-8">
        A página que você procura não existe ou foi movida.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
      >
        Voltar para o início
      </a>
    </div>
  )
}

function AppLayout() {
  const location = useLocation()
  const hideNavbarOn = ['/entrar', '/cadastro', '/onboarding']
  const showNavbar = !hideNavbarOn.includes(location.pathname)

  return (
    <>
      <ScrollToTop />
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/entrar" element={<LoginPage />} />
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <OnboardingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/lgpd" element={<LgpdPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
