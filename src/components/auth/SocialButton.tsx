import type { LucideIcon } from 'lucide-react'

interface SocialButtonProps {
  icon: LucideIcon
  label: string
}

const SocialButton = ({ icon: Icon, label }: SocialButtonProps) => (
  <button
    type="button"
    className="flex items-center justify-center gap-3 w-full h-11 rounded-xl border border-gray-200 bg-white hover:bg-[#F4F3F3] text-[#191919] text-sm font-medium transition-colors duration-200"
  >
    <Icon className="w-4 h-4" />
    {label}
  </button>
)

export default SocialButton
