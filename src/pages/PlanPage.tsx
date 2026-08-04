import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Mail } from 'lucide-react'

const TIERS = [
  {
    name: 'Avulso',
    price: '79',
    period: '/laudo',
    desc: 'Ideal para uso esporádico ou avaliação inicial da plataforma.',
    features: [
      '1 laudo por compra',
      'IA generativa com NBRs',
      'Memória de cálculo rastreável',
      'Exportação em PDF profissional',
      'App de campo incluso',
      'Suporte por e-mail',
      'Sem assinatura recorrente',
    ],
    cta: 'Começar agora',
    href: '/cadastro',
    highlighted: false,
  },
  {
    name: 'Profissional',
    price: '149',
    period: '/mês',
    desc: 'Para engenheiros com volume mensal recorrente de vistorias.',
    features: [
      'Até 30 laudos por mês',
      'Tudo do Avulso',
      'Múltiplos tipos de laudo',
      'Templates personalizados',
      'Histórico completo',
      'Dashboard com analytics',
      'Suporte prioritário',
    ],
    cta: 'Assinar Profissional',
    href: '/cadastro',
    highlighted: true,
    badge: 'MAIS POPULAR',
  },
  {
    name: 'Escritório',
    price: '590',
    period: '/mês',
    desc: 'Para equipes e escritórios com múltiplos engenheiros.',
    features: [
      'Laudos ilimitados',
      'Tudo do Profissional',
      'Até 5 engenheiros',
      'Gestão de equipe',
      'ART/RRT integrado',
      'API de exportação',
      'Suporte dedicado (WhatsApp)',
    ],
    cta: 'Falar com vendas',
    href: 'mailto:contato@firmis.vercel.app',
    highlighted: false,
  },
]

const FAQ = [
  {
    q: 'Posso trocar de plano depois?',
    a: 'Sim. Você pode fazer upgrade ou downgrade a qualquer momento. No upgrade, o valor é proporcional aos dias restantes. No downgrade, a mudança vale a partir do ciclo seguinte.',
  },
  {
    q: 'O que acontece se eu ultrapassar o limite de laudos?',
    a: 'No plano Profissional, laudos excedentes são cobrados como Avulsos (R$ 79 cada). Você também pode fazer upgrade para o Escritório a qualquer momento.',
  },
  {
    q: 'Como funciona o período de avaliação?',
    a: 'O plano Avulso funciona como avaliação natural: compre um laudo, veja a qualidade, e assine quando estiver pronto. Não temos período de teste gratuito. ',
  },
]

const PlanPage = () => (
  <div className="min-h-screen bg-brand-white">
    {/* Hero */}
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 md:px-14">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-ink/50 font-medium mb-4">
            PLANOS
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-brand-ink">
            Escolha o plano certo
            <br />
            para seu volume de laudos.
          </h1>
          <p className="mt-4 text-sm text-brand-ink/60 max-w-md mx-auto">
            Assinatura mensal, sem taxa de setup. Cancele quando quiser.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Plan cards */}
    <section className="pb-24 sm:pb-32 px-6 sm:px-10 md:px-14">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative rounded-2xl p-8 sm:p-10 bg-brand-gray flex flex-col h-full ${
              tier.highlighted
                ? 'ring-2 ring-brand-accent/50 shadow-md bg-brand-white'
                : 'border border-transparent'
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-ink text-[11px] font-medium px-4 py-1 rounded-full uppercase tracking-wider">
                {tier.badge}
              </div>
            )}

            <h3 className="font-serif text-2xl font-normal text-brand-ink mb-2">
              {tier.name}
            </h3>
            <p className="text-sm text-brand-ink/60 mb-6">{tier.desc}</p>

            <div className="mb-8">
              <span className="text-5xl font-serif font-normal text-brand-ink">
                R$ {tier.price}
              </span>
              <span className="text-brand-ink/50 text-sm ml-1">{tier.period}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-brand-ink/70">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  {feat}
                </li>
              ))}
            </ul>

            {tier.href.startsWith('mailto:') ? (
              <a
                href={tier.href}
                className={`block text-center px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 mt-auto ${
                  tier.highlighted
                    ? 'bg-brand-ink text-white hover:bg-brand-ink/90'
                    : 'bg-brand-ink text-white hover:bg-brand-ink/90'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  {tier.cta}
                </span>
              </a>
            ) : (
              <Link
                to={tier.href}
                className={`block text-center px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 mt-auto ${
                  tier.highlighted
                    ? 'bg-brand-ink text-white hover:bg-brand-ink/90'
                    : 'bg-brand-ink text-white hover:bg-brand-ink/90'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-brand-ink/40 mt-8 max-w-lg mx-auto leading-relaxed">
        Todos os planos exigem responsabilidade técnica do engenheiro conforme Lei 5.194/1966.
        A IA é ferramenta de apoio — a revisão e assinatura são sempre do profissional.
      </p>
    </section>

    {/* FAQ */}
    <section className="pb-24 sm:pb-32 px-6 sm:px-10 md:px-14 bg-brand-gray">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-ink/50 font-medium mb-4">
            DÚVIDAS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-tight text-brand-ink">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-brand-white rounded-2xl p-6 sm:p-8"
            >
              <h3 className="font-medium text-brand-ink mb-2">{item.q}</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-sm text-brand-ink/50 mt-10"
        >
          Mais dúvidas?{' '}
          <a
            href="mailto:contato@firmis.vercel.app"
            className="text-brand-accent hover:underline"
          >
            contato@firmis.vercel.app
          </a>
        </motion.p>
      </div>
    </section>
  </div>
)

export default PlanPage
