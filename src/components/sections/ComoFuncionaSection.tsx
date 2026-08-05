import { motion } from 'motion/react'
import { ClipboardList, ScanSearch, ClipboardPenLine } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Vistoria em campo',
    desc: 'Capture fotos e registre observações diretamente do celular durante a inspeção técnica.',
  },
  {
    num: '02',
    icon: ScanSearch,
    title: 'IA gera o laudo',
    desc: 'Nossa IA redige a fundamentação técnica com citação rastreável das NBRs e resoluções aplicáveis.',
  },
  {
    num: '03',
    icon: ClipboardPenLine,
    title: 'Revisão e assinatura',
    desc: 'Revise o laudo gerado, faça ajustes se necessário e registre a ART no CREA com um clique.',
  },
]

const ComoFuncionaSection = () => (
  <section id="produto" className="py-24 sm:py-32 px-6 sm:px-10 md:px-14 bg-brand-gray">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium mb-4">
          COMO FUNCIONA
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#191919]">
          Do campo ao CREA
          <br />
          em três passos.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group bg-brand-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ perspective: '1000px' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8
              const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8
              e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)'
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-brand-gray flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
              <step.icon className="w-6 h-6 text-[#191919] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-[11px] font-medium text-brand-accent/60 mb-3">
              {step.num}
            </div>
            <h3 className="font-serif text-xl font-normal text-[#191919] mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-[#191919]/60 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default ComoFuncionaSection
