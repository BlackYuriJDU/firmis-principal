import { Link } from 'react-router-dom'
import Footer from '../components/sections/Footer'

const CookiesPage = () => (
  <div className="min-h-dvh bg-brand-white">
    <div className="max-w-3xl mx-auto pt-32 pb-24 px-6 sm:px-10">
      <Link
        to="/"
        className="text-sm text-[#191919]/50 hover:text-[#191919] transition-colors duration-200 mb-8 inline-block"
      >
        &larr; Voltar para o início
      </Link>

      <h1 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-tight text-[#191919] mb-8">
        Política de Cookies
      </h1>

      <div className="prose prose-sm max-w-none text-[#191919]/70 leading-relaxed space-y-6">
        <p><strong>Última atualização:</strong> Agosto de 2026</p>

        <p>
          Esta Política de Cookies explica como a Firmis utiliza cookies e
          tecnologias similares para reconhecer você quando visita nossa
          plataforma.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">O que são cookies?</h2>
        <p>
          Cookies são pequenos arquivos de texto armazenados no seu navegador
          quando você visita um site. Eles permitem que o site se lembre de
          suas ações e preferências ao longo do tempo.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">Cookies que utilizamos</h2>

        <h3 className="text-base font-medium text-[#191919] mt-6 mb-2">Cookies Essenciais (Necessários)</h3>
        <p>
          São indispensáveis para o funcionamento da Plataforma. Sem eles,
          serviços como autenticação (login) e segurança da sessão não
          funcionariam.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><code>sb-access-token</code> — autenticação Supabase (sessão)</li>
          <li><code>sb-refresh-token</code> — renovação de sessão</li>
        </ul>

        <h3 className="text-base font-medium text-[#191919] mt-6 mb-2">Cookies de Preferência</h3>
        <p>
          Permitem que a Plataforma memorize escolhas que você faz (como
          preferências de tema ou idioma) para personalizar sua experiência.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><code>firmis_prefs</code> — preferências de interface</li>
        </ul>

        <h3 className="text-base font-medium text-[#191919] mt-6 mb-2">Cookies Analíticos (Opcionais)</h3>
        <p>
          Ajudam a entender como os engenheiros utilizam a Plataforma,
          permitindo melhorias. Não utilizamos cookies de publicidade ou
          rastreamento de terceiros.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Nenhum cookie de terceiros atualmente ativo.</li>
        </ul>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">Como gerenciar cookies</h2>
        <p>
          Você pode configurar seu navegador para recusar cookies ou alertar
          quando um cookie estiver sendo enviado. No entanto, se você
          desabilitar cookies essenciais, partes da Plataforma podem não
          funcionar corretamente.
        </p>
        <p>
          Consulte a seção de ajuda do seu navegador para instruções
          específicas:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Apple Safari</li>
          <li>Microsoft Edge</li>
        </ul>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">Atualizações desta política</h2>
        <p>
          Podemos atualizar esta Política de Cookies periodicamente para
          refletir mudanças nos cookies que utilizamos ou por razões
          operacionais, legais ou regulatórias.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">Contato</h2>
        <p>
          Dúvidas sobre esta política:{' '}
          <a href="mailto:privacidade@firmis.vercel.app" className="text-[#191919] underline">
            privacidade@firmis.vercel.app
          </a>
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default CookiesPage
