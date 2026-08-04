interface StepItemProps {
  number: number
  text: string
  active?: boolean
}

const StepItem = ({ number, text, active = false }: StepItemProps) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors duration-300 ${
      active
        ? 'bg-[#191919] text-white border border-[#191919]'
        : 'bg-brand-gray text-[#191919]/60 border border-transparent'
    }`}
  >
    <span
      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
        active ? 'bg-brand-accent text-brand-ink' : 'bg-[#191919]/10 text-[#191919]/40'
      }`}
    >
      {number}
    </span>
    <span className="font-medium">{text}</span>
  </div>
)

export default StepItem
