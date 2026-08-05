import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'

interface SocialButtonProps {
  icon: LucideIcon
  label: string
  onClick: () => Promise<void> | void
}

const SocialButton = ({ icon: Icon, label, onClick }: SocialButtonProps) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      await onClick()
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="flex items-center justify-center gap-3 w-full h-11 rounded-xl border border-gray-200 bg-brand-white hover:bg-brand-accent-subtle text-[#191919] text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Icon className="w-4 h-4" />
      {loading ? 'Redirecionando...' : label}
    </button>
  )
}

export default SocialButton
