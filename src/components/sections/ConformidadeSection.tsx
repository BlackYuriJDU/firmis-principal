import { motion } from 'motion/react'
import { Scale, FileText, AlertTriangle, Gavel } from 'lucide-react'

const ITEMS = [
  {
    icon: Scale,
    title: 'Lei 5.194/1966',
    desc: 'Regula o exercício profissional da engenharia. O engenheiro civil é o único responsável técnico pelo laudo que assina.',
  },
  {
    icon: FileText,
    title: 'Resolução 1.025/2009 do Confea',
    desc: 'Define a Anotação de Responsabilidade Técnica (ART). Toda ART é vinculada ao profissional — a ferramenta usada não transfere responsabilidade.',
  },
  {
    icon: AlertTriangle,
    title: 'IA é ferramenta de apoio',
    desc: 'Nenhuma resolução do Confea proíbe o uso de IA. Mas o engenheiro assume 100% da responsabilidade ao assinar. A Firmis foi projetada com isso em mente.',
  },
  {
    icon: Gavel,
    title: 'Precedentes que inspiram cautela',
    desc: 'CREA-RS foi condenado por litigância de má-fé após usar IA que alucinou (2024). TJSP anulou perícias baseadas em SisDEA sem memória de cálculo demonstrável. A rastreabilidade da Firmis existe para proteger você destes riscos.',
  },
]

const ConformidadeSection = () => (
  <section id="empresa" className="py-24 sm:py-32 px-6 sm:px-10 md:px-14 bg-white">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium mb-4">
          CONFORMIDADE
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#191919]">
          Responsabilidade técnica
          <br />
          é do engenheiro.
        </h2>
        <p className="mt-4 text-sm text-[#191919]/60 max-w-lg mx-auto">
          A Firmis é uma ferramenta de apoio — não substitui o julgamento
          profissional. Cada laudo gerado mantém memória de cálculo rastreável
          para auditoria e defesa técnica.
        </p>
      </motion.div>

      <div className="space-y-6">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`flex gap-6 p-6 sm:p-8 rounded-2xl ${
              i === 3
                ? 'bg-[#191919]'
                : 'bg-[#F4F3F3]'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                i === 3 ? 'bg-white/10' : 'bg-white'
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  i === 3 ? 'text-white' : 'text-[#191919]'
                }`}
              />
            </div>
            <div>
              <h3
                className={`font-medium mb-2 ${
                  i === 3 ? 'text-white' : 'text-[#191919]'
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  i === 3 ? 'text-white/70' : 'text-[#191919]/60'
                }`}
              >
                {item.desc}
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
        className="mt-12 p-6 sm:p-8 rounded-2xl border border-[#191919]/10 bg-white text-center"
      >
        <p className="font-serif text-xl sm:text-2xl text-[#191919] font-normal">
          &ldquo;O IBAPE recomenda o uso de ferramentas especializadas para
          elaboração de laudos técnicos.&rdquo;
        </p>
        <p className="mt-3 text-sm text-[#191919]/50">
          Instituto Brasileiro de Avaliações e Perícias de Engenharia
        </p>
      </motion.div>
    </div>
  </section>
)

export default ConformidadeSection
