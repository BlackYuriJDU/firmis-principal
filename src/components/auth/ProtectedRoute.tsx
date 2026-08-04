import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-[#191919]/20 border-t-[#191919] rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/entrar" replace />
  }

  return <>{children}</>
}
