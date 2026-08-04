import { motion } from 'motion/react'
import { BookOpen, Calculator, Layers, ShieldCheck } from 'lucide-react'

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Citação rastreável de normas',
    desc: 'Cada laudo referencia a NBR ou resolução específica que fundamenta a análise técnica.',
  },
  {
    icon: Calculator,
    title: 'Memória de cálculo demonstrável',
    desc: 'Cálculos estruturais com passo a passo auditável — preparado para judicialização.',
  },
  {
    icon: Layers,
    title: 'Múltiplos tipos de laudo',
    desc: 'Inspeção predial, laudo estrutural, ART e RRT — uma plataforma para todas as necessidades.',
  },
  {
    icon: ShieldCheck,
    title: 'LGPD e sigilo profissional',
    desc: 'Seus dados e os do cliente processados com criptografia. Nada é compartilhado com IAs públicas.',
  },
]

const DiferenciaisSection = () => (
  <section id="solucoes" className="py-24 sm:py-32 px-6 sm:px-10 md:px-14 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium mb-4">
          DIFERENCIAIS
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#191919]">
          Por que a Firmis é
          <br />
          diferente.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {FEATURES.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex gap-6 p-6 sm:p-8 rounded-2xl hover:bg-brand-accent-subtle transition-colors duration-300"
            style={{ perspective: '800px' }}
          >
            <div className="w-12 h-12 rounded-xl bg-[#F4F3F3] group-hover:bg-brand-accent flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5">
              <feat.icon className="w-6 h-6 text-[#191919] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-medium text-lg text-[#191919] mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-[#191919]/60 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default DiferenciaisSection
