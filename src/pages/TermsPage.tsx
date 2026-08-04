import { Link } from 'react-router-dom'
import Footer from '../components/sections/Footer'

const TermsPage = () => (
  <div className="min-h-screen bg-brand-white">
    <div className="max-w-3xl mx-auto pt-32 pb-24 px-6 sm:px-10">
      <Link
        to="/"
        className="text-sm text-[#191919]/50 hover:text-[#191919] transition-colors duration-200 mb-8 inline-block"
      >
        &larr; Voltar para o início
      </Link>

      <h1 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-tight text-[#191919] mb-8">
        Termos de Uso
      </h1>

      <div className="prose prose-sm max-w-none text-[#191919]/70 leading-relaxed space-y-6">
        <p><strong>Última atualização:</strong> Agosto de 2026</p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">1. Aceitação</h2>
        <p>
          Ao utilizar a plataforma Firmis (&ldquo;Plataforma&rdquo;), você concorda com
          estes Termos de Uso. Se não concordar, não utilize a Plataforma.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">2. Serviço</h2>
        <p>
          A Firmis é uma ferramenta de apoio à elaboração de laudos técnicos de engenharia.
          A Plataforma utiliza inteligência artificial como assistente de redação técnica,
          mas não substitui o julgamento profissional do engenheiro responsável.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">3. Responsabilidade Técnica</h2>
        <p>
          <strong>Importante:</strong> O engenheiro civil que assina a ART (Anotação de
          Responsabilidade Técnica) é o único responsável pelo conteúdo do laudo,
          independentemente da ferramenta utilizada para sua elaboração. A Firmis é uma
          ferramenta de apoio e não transfere, substitui ou mitiga a responsabilidade
          técnica do profissional, conforme Lei 5.194/1966 e Resolução 1.025/2009 do
          Confea.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">4. Uso da IA</h2>
        <p>
          A IA generativa da Firmis sugere conteúdo com base nas normas técnicas aplicáveis.
          Compete ao engenheiro revisar, validar e decidir sobre cada trecho do laudo antes
          da assinatura. A Firmis não se responsabiliza por laudos não revisados.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">5. Planos e Pagamento</h2>
        <p>
          Os planos são descritos na página de preços. O pagamento é recorrente e pode ser
          cancelado a qualquer momento, sem multa. Laudos avulsos têm validade de 30 dias
          após a compra.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">6. Contato</h2>
        <p>
          Dúvidas sobre estes termos:{' '}
          <a href="mailto:contato@firmis.vercel.app" className="text-[#191919] underline">
            contato@firmis.vercel.app
          </a>
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default TermsPage
