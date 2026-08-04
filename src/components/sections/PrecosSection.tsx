import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const TIERS = [
  {
    name: 'Avulso',
    price: '79',
    desc: 'Para quem precisa de um laudo eventual.',
    features: [
      '1 laudo por compra',
      'IA generativa completa',
      'Citação de normas (NBR)',
      'Memória de cálculo',
      'Exportação em PDF',
      'Válido por 30 dias',
    ],
    highlighted: false,
  },
  {
    name: 'Profissional',
    price: '149',
    desc: 'Para engenheiros autônomos que emitem laudos regularmente.',
    features: [
      '1 engenheiro',
      'Laudos ilimitados',
      'App de campo incluso',
      'Citação de normas (NBR)',
      'Assinatura digital',
      'Suporte por e-mail',
    ],
    highlighted: true,
  },
  {
    name: 'Escritório',
    price: '590',
    desc: 'Para empresas de engenharia com múltiplos profissionais.',
    features: [
      'Até 5 engenheiros',
      'Laudos ilimitados',
      'App de campo para todos',
      'Marca própria nos laudos',
      'Relatórios de equipe',
      'Suporte prioritário',
    ],
    highlighted: false,
  },
]

const PrecosSection = () => (
  <section id="precos" className="py-24 sm:py-32 px-6 sm:px-10 md:px-14 bg-[#F4F3F3]">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium mb-4">
          PREÇOS
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#191919]">
          Simples e previsível.
        </h2>
        <p className="mt-4 text-sm text-[#191919]/60 max-w-md mx-auto">
          Assinatura mensal, sem taxa de setup. Cancele quando quiser.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative rounded-2xl p-8 sm:p-10 bg-white shadow-sm ${
              tier.highlighted
                ? 'ring-2 ring-[#191919] shadow-md'
                : 'border border-gray-100'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#191919] text-white text-[11px] font-medium px-4 py-1 rounded-full uppercase tracking-wider">
                Mais popular
              </div>
            )}
            <h3 className="font-serif text-2xl font-normal text-[#191919] mb-2">
              {tier.name}
            </h3>
            <p className="text-sm text-[#191919]/60 mb-6">{tier.desc}</p>
            <div className="mb-8">
              <span className="text-5xl font-serif font-normal text-[#191919]">
                R$ {tier.price}
              </span>
              <span className="text-[#191919]/50 text-sm ml-1">/mês</span>
            </div>
            <ul className="space-y-3 mb-8">
              {tier.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-[#191919]/70">
                  <Check className="w-4 h-4 text-[#191919] flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
            <Link
              to="/cadastro"
              className={`block text-center px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                tier.highlighted
                  ? 'bg-[#191919] text-white hover:bg-[#191919]/90'
                  : 'bg-[#F4F3F3] text-[#191919] hover:bg-[#eaeaea]'
              }`}
            >
              Começar agora
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default PrecosSection
