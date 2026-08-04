import { motion } from 'motion/react'
import { Shield, Eye, Lock, UserCheck } from 'lucide-react'

const ITEMS = [
  {
    icon: UserCheck,
    title: 'O engenheiro no controle',
    desc: 'A IA sugere, o engenheiro decide. Cada parágrafo do laudo é editável e revisável antes da assinatura. Você mantém 100% da autoridade técnica.',
  },
  {
    icon: Lock,
    title: 'Dados isolados, LGPD em dia',
    desc: 'Seus laudos e os dados dos seus clientes nunca são usados para treinar modelos públicos. Processamento em ambiente isolado com criptografia.',
  },
  {
    icon: Eye,
    title: 'Rastreabilidade total',
    desc: 'Cada afirmação no laudo é vinculada à norma que a fundamenta. Em caso de questionamento judicial, a memória de cálculo está disponível para auditoria.',
  },
  {
    icon: Shield,
    title: 'Precedentes que nos guiam',
    desc: 'O CREA-RS foi condenado por usar IA que alucinou (2024). O TJSP anulou perícias sem memória de cálculo demonstrável. A Firmis foi construída para evitar exatamente estes riscos.',
  },
]

const SegurancaEticaSection = () => (
  <section id="seguranca" className="py-24 sm:py-32 px-6 sm:px-10 md:px-14 bg-[#F4F3F3]">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium mb-4">
          SEGURANÇA &amp; ÉTICA
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#191919]">
          Construída para a
          <br />
          responsabilidade real.
        </h2>
        <p className="mt-4 text-sm text-[#191919]/60 max-w-lg mx-auto">
          Sabemos que engenheiros desconfiam de IA — e com razão. A Firmis não
          esconde a tecnologia: cada laudo mostra exatamente o que a IA sugeriu
          e qual norma fundamenta cada trecho.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex gap-6 p-6 sm:p-8 rounded-2xl bg-white hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F4F3F3] group-hover:bg-brand-accent flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5">
              <item.icon className="w-6 h-6 text-[#191919] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-medium text-lg text-[#191919] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#191919]/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Competence penalty callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 p-6 sm:p-8 rounded-2xl border border-brand-accent/20 bg-white text-center"
      >
        <p className="text-sm text-[#191919]/50 uppercase tracking-wider mb-2">
          Transparência como princípio
        </p>
        <p className="font-serif text-xl sm:text-2xl text-[#191919] font-normal max-w-2xl mx-auto leading-relaxed">
          Estudos mostram que profissionais que usam IA podem sofrer uma queda de
          até <strong className="text-[#191919]">9% na percepção de competência</strong> pelos
          pares. Por isso cada laudo da Firmis deixa claro: a IA auxiliou, mas o
          engenheiro decidiu e assinou.
        </p>
      </motion.div>
    </div>
  </section>
)

export default SegurancaEticaSection
