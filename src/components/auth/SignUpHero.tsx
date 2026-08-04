import { motion } from 'motion/react'
import { Circle } from 'lucide-react'
import StepItem from './StepItem'

const AUTH_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4'

const STEPS = [
  { number: 1, text: 'Cadastre seu CREA', active: true },
  { number: 2, text: 'Configure seu perfil técnico' },
  { number: 3, text: 'Comece a emitir laudos' },
]

const SignUpHero = () => (
  <div className="relative hidden lg:flex flex-col items-center justify-end pb-32 px-12 rounded-3xl overflow-hidden shadow-2xl h-full w-[52%]">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={AUTH_VIDEO_URL} type="video/mp4" />
    </video>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
      }}
      className="relative z-10 w-full max-w-xs space-y-6"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="flex items-center gap-3"
      >
        <Circle className="w-5 h-5 fill-white text-white" />
        <span className="text-xl font-semibold tracking-tight text-white">
          Firmis
        </span>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <h2 className="text-4xl font-medium tracking-tight text-white whitespace-nowrap">
          Junte-se à Firmis
        </h2>
        <p className="text-white/60 text-sm leading-relaxed mt-3">
          3 passos para começar a emitir laudos técnicos com fundamento.
        </p>
      </motion.div>

      <div className="space-y-2">
        {STEPS.map((step) => (
          <motion.div
            key={step.number}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <StepItem number={step.number} text={step.text} active={step.active} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
)

export default SignUpHero
