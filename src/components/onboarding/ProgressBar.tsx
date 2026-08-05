import { motion } from 'motion/react'

interface ProgressBarProps {
  step: number
  totalSteps: number
}

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const progress = (step / totalSteps) * 100

  return (
    <div className="w-full h-1 bg-brand-gray">
      <motion.div
        className="h-full bg-brand-accent"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </div>
  )
}

export default ProgressBar
