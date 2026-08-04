import VideoBg from './VideoBg'
import BottomInfoPanel from './BottomInfoPanel'

const Hero = () => (
  <section className="relative flex flex-col items-center overflow-hidden h-screen">
    <VideoBg />

    <div className="relative z-10 flex flex-col items-center flex-1 w-full">
      <div className="pt-24 sm:pt-26 md:pt-32 px-4 sm:px-6 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter text-[#191919] font-normal">
          Laudos técnicos
          <br />
          com fundamento.
        </h1>
        <p className="max-w-sm sm:max-w-md mx-auto mt-5 sm:mt-6 md:mt-8 text-sm md:text-base text-[#191919]/70 leading-relaxed">
          Plataforma com IA para engenheiros civis — gere laudos de inspeção
          predial, estrutural e ART com fundamentação técnica rastreável e
          conformidade regulatória.
        </p>
        <a
          href="/cadastro"
          className="inline-block mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
        >
          Solicitar Demonstração
        </a>
      </div>

      <BottomInfoPanel />
    </div>
  </section>
)

export default Hero
