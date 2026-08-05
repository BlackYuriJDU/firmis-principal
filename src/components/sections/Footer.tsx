import Logo from '../Logo'

const COLUMNS = [
  {
    title: 'Produto',
    links: ['Como funciona', 'Diferenciais', 'Validação', 'Planos', 'Preços'],
    hrefs: ['#produto', '#solucoes', '#validacao', '/plan', '#precos'],
  },
  {
    title: 'Soluções',
    links: ['Inspeção Predial', 'Laudo Estrutural', 'ART/RRT', 'App de Campo'],
    hrefs: ['#produto', '#produto', '#produto', '#produto'],
  },
  {
    title: 'Empresa',
    links: ['Conformidade', 'Segurança e Ética', 'Contato'],
    hrefs: ['#empresa', '#seguranca', 'mailto:contato@firmis.vercel.app'],
  },
  {
    title: 'Legal',
    links: ['Privacidade', 'Termos de Uso', 'LGPD', 'Cookies'],
    hrefs: ['/privacidade', '/termos', '/lgpd', '/cookies'],
  },
]

const Footer = () => (
  <footer className="bg-[#191919] text-white py-16 sm:py-20 px-6 sm:px-10 md:px-14">
    <div className="max-w-6xl mx-auto">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent mb-12" />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        {/* Brand column */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <Logo />
            <span className="font-semibold text-base tracking-tight text-white">
              Firmis
            </span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed">
            Feito para engenheiros civis brasileiros.
          </p>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-medium text-sm text-white/80 mb-4">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link, i) => (
                <li key={link}>
                  <a
                    href={col.hrefs[i]}
                    className="text-sm text-white/40 hover:text-brand-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} Firmis. Todos os direitos reservados.
        </p>
        <p className="text-sm text-white/30">
          Projetado no Brasil 🇧🇷
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
