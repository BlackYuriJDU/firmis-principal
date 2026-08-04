import Hero from '../components/Hero'
import ComoFuncionaSection from '../components/sections/ComoFuncionaSection'
import DiferenciaisSection from '../components/sections/DiferenciaisSection'
import PrecosSection from '../components/sections/PrecosSection'
import ConformidadeSection from '../components/sections/ConformidadeSection'
import Footer from '../components/sections/Footer'

const LandingPage = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    <Hero />
    <ComoFuncionaSection />
    <DiferenciaisSection />
    <PrecosSection />
    <ConformidadeSection />
    <Footer />
  </div>
)

export default LandingPage
