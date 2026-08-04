import Logo from '../Logo'

const COLUMNS = [
  {
    title: 'Produto',
    links: ['Como funciona', 'Diferenciais', 'Preços', 'Conformidade'],
    hrefs: ['#produto', '#solucoes', '#precos', '#empresa'],
  },
  {
    title: 'Soluções',
    links: ['Inspeção Predial', 'Laudo Estrutural', 'ART/RRT', 'App de Campo'],
    hrefs: ['#', '#', '#', '#'],
  },
  {
    title: 'Empresa',
    links: ['Sobre', 'Blog', 'Carreiras', 'Contato'],
    hrefs: ['#', '#', '#', '#'],
  },
  {
    title: 'Legal',
    links: ['Privacidade', 'Termos de Uso', 'LGPD', 'Confea'],
    hrefs: ['#', '#', '#', '#'],
  },
]

const Footer = () => (
  <footer className="bg-[#191919] text-white py-16 sm:py-20 px-6 sm:px-10 md:px-14">
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        {/* Brand column */}
        <div className="lg:col-span-1">
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
            <ul className="space-y-2.5">
              {col.links.map((link, i) => (
                <li key={link}>
                  <a
                    href={col.hrefs[i]}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
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
