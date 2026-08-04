import { Link } from 'react-router-dom'
import Footer from '../components/sections/Footer'

const LgpdPage = () => (
  <div className="min-h-screen bg-brand-white">
    <div className="max-w-3xl mx-auto pt-32 pb-24 px-6 sm:px-10">
      <Link
        to="/"
        className="text-sm text-[#191919]/50 hover:text-[#191919] transition-colors duration-200 mb-8 inline-block"
      >
        &larr; Voltar para o início
      </Link>

      <h1 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-tight text-[#191919] mb-8">
        LGPD &mdash; Seus Direitos
      </h1>

      <div className="prose prose-sm max-w-none text-[#191919]/70 leading-relaxed space-y-6">
        <p><strong>Última atualização:</strong> Agosto de 2026</p>

        <p>
          A Firmis trata dados pessoais em conformidade com a Lei Geral de Proteção de
          Dados Pessoais (Lei 13.709/2018 &mdash; LGPD). Esta página resume seus direitos
          como titular de dados.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">Seus Direitos (Art. 18)</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Confirmação da existência de tratamento de dados</li>
          <li>Acesso aos dados</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço</li>
          <li>Eliminação dos dados pessoais tratados com consentimento</li>
          <li>Informação sobre compartilhamento de dados</li>
          <li>Revogação do consentimento</li>
        </ul>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">Dados de Laudos Técnicos</h2>
        <p>
          Fotos, observações de vistoria e dados de clientes inseridos nos laudos são
          tratados como dados profissionais sob sigilo. Não utilizamos esses dados para
          treinar modelos de IA públicos ou de terceiros. O processamento ocorre em
          ambiente isolado com criptografia.
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">Encarregado de Dados (DPO)</h2>
        <p>
          Para exercer seus direitos ou relatar incidentes de privacidade:{' '}
          <a href="mailto:privacidade@firmis.vercel.app" className="text-[#191919] underline">
            privacidade@firmis.vercel.app
          </a>
        </p>

        <h2 className="text-lg font-medium text-[#191919] mt-10 mb-3">Base Legal</h2>
        <p>
          O tratamento de dados na Firmis tem como base legal: (a) execução de contrato
          (para entrega do serviço); (b) obrigação legal (para dados de registro
          profissional CREA); (c) legítimo interesse (para melhoria da Plataforma e
          prevenção a fraudes).
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default LgpdPage
