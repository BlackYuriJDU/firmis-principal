import Hero from '../components/Hero'
import ComoFuncionaSection from '../components/sections/ComoFuncionaSection'
import DiferenciaisSection from '../components/sections/DiferenciaisSection'
import ValidacaoSection from '../components/sections/ValidacaoSection'
import PrecosSection from '../components/sections/PrecosSection'
import SegurancaEticaSection from '../components/sections/SegurancaEticaSection'
import ConformidadeSection from '../components/sections/ConformidadeSection'
import Footer from '../components/sections/Footer'

const LandingPage = () => (
  <div className="min-h-screen bg-brand-white overflow-x-hidden">
    <Hero />
    <ComoFuncionaSection />
    <DiferenciaisSection />
    <ValidacaoSection />
    <PrecosSection />
    <SegurancaEticaSection />
    <ConformidadeSection />
    <Footer />
  </div>
)

export default LandingPage
