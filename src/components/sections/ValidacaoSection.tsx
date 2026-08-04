import { motion } from 'motion/react'
import { BookOpen, Link2, Calculator } from 'lucide-react'

const CARDS = [
  {
    num: '01',
    icon: BookOpen,
    title: 'NBRs Citadas',
    desc: 'Cada laudo referencia as normas técnicas pertinentes com numeração e trecho aplicável, garantindo fundamentação normativa completa.',
  },
  {
    num: '02',
    icon: Link2,
    title: 'ART/RRT Rastreável',
    desc: 'Cada afirmação técnica é vinculada a uma norma NBR específica. A rastreabilidade permite auditoria completa do laudo.',
  },
  {
    num: '03',
    icon: Calculator,
    title: 'Memória de Cálculo',
    desc: 'Todo número tem origem rastreável e auditável. Fórmulas, variáveis e resultados intermediários são documentados.',
  },
]

const ValidacaoSection = () => (
  <section id="validacao" className="py-24 sm:py-32 px-6 sm:px-10 md:px-14 bg-brand-gray">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium mb-4">
          VALIDAÇÃO TÉCNICA
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#191919]">
          Fundamentação que sustenta
          <br />
          seu laudo no CREA.
        </h2>
        <p className="mt-4 text-sm text-[#191919]/60 max-w-lg mx-auto">
          Cada laudo Firmis é construído sobre três pilares de validação
          técnica que garantem conformidade e rastreabilidade.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-brand-white rounded-2xl p-8 sm:p-10 shadow-sm border-t-2 border-brand-accent relative overflow-hidden"
          >
            {/* Watermark number */}
            <div className="absolute -top-4 -right-2 text-[120px] font-bold text-brand-accent/[0.06] font-mono select-none pointer-events-none leading-none">
              {card.num}
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-gray flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-brand-ink" />
              </div>
              <div className="font-mono-label text-brand-accent/60 mb-3">
                {card.num}
              </div>
              <h3 className="font-serif text-xl font-normal text-brand-ink mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-6 sm:p-8 rounded-2xl border-l-4 border-brand-accent bg-brand-white text-center max-w-3xl mx-auto"
      >
        <p className="font-serif text-xl sm:text-2xl text-brand-ink font-normal">
          &ldquo;O IBAPE recomenda o uso de ferramentas especializadas para
          elaboração de laudos técnicos.&rdquo;
        </p>
        <p className="mt-3 text-sm text-brand-ink/50">
          Instituto Brasileiro de Avaliações e Perícias de Engenharia
        </p>
      </motion.div>
    </div>
  </section>
)

export default ValidacaoSection
