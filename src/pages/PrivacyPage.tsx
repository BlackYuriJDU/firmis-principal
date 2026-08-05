import { Link } from 'react-router-dom'
import Footer from '../components/sections/Footer'

const PrivacyPage = () => (
  <div className="min-h-dvh bg-brand-white">
    <div className="max-w-3xl mx-auto pt-32 pb-24 px-6 sm:px-10">
      <Link
        to="/"
        className="text-sm text-[#191919]/50 hover:text-[#191919] transition-colors duration-200 mb-8 inline-block"
      >
        &larr; Voltar para o início
      </Link>

      <h1 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-tight text-[#191919] mb-8">
        Política de Privacidade
      </h1>

      <div className="prose prose-sm max-w-none text-[#191919]/70 leading-relaxed space-y-6">
        <p><strong>Última atualização:</strong> Agosto de 2026</p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">1. Introdução</h2>
        <p>
          A Firmis (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo;) está comprometida com a proteção
          dos dados pessoais de seus usuários (&ldquo;você&rdquo;, &ldquo;seu&rdquo;), em
          conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD &mdash; Lei
          13.709/2018).
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">2. Dados Coletados</h2>
        <p>
          Coletamos apenas os dados estritamente necessários para a prestação do serviço:
          nome, e-mail, número de registro no CREA, e dados técnicos dos laudos que você
          gera na plataforma. Nenhum dado de laudo é utilizado para treinamento de modelos
          de IA públicos.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">3. Finalidade</h2>
        <p>
          Seus dados são utilizados exclusivamente para: (a) identificação e autenticação
          na plataforma; (b) geração e armazenamento dos laudos técnicos; (c) comunicação
          de suporte e atualizações do produto.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">4. Compartilhamento</h2>
        <p>
          Não compartilhamos dados pessoais com terceiros, exceto quando exigido por lei
          ou mediante sua autorização explícita. Os laudos técnicos são de sua propriedade
          exclusiva.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">5. Contato</h2>
        <p>
          Para exercer seus direitos como titular de dados ou esclarecer dúvidas sobre
          esta política, entre em contato pelo e-mail:{' '}
          <a href="mailto:privacidade@firmis.vercel.app" className="text-[#191919] underline">
            privacidade@firmis.vercel.app
          </a>
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default PrivacyPage
