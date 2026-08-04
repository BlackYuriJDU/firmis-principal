import { ArrowRight } from 'lucide-react'

const FEATURES = [
  { num: '01', label: 'Precisão normativa' },
  { num: '02', label: 'Multi-formato' },
  { num: '03', label: 'Conformidade' },
]

const BottomInfoPanel = () => (
  <div className="mt-auto w-full max-w-5xl px-4 sm:px-6">
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 border-b-0 pt-8 sm:pt-12 md:pt-16 px-5 sm:px-8 md:px-12 pb-0 shadow-sm">

      {/* Row 1 — 2 cols */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16">
        {/* Left */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
            O QUE FAZEMOS?
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-tight tracking-tight text-[#191919]">
            Laudos que<br className="hidden sm:block" /> sustentam decisões.
          </h2>
        </div>

        {/* Right — bottom-aligned body */}
        <div className="flex items-end">
          <p className="text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
            IA generativa desenvolvida para engenheiros civis. Laudos com citação
            rastreável da norma aplicável, memória de cálculo demonstrável e
            responsabilidade técnica preservada — exatamente como o CREA exige.
          </p>
        </div>
      </div>

      {/* Hairline divider */}
      <div className="mt-6 sm:mt-8 md:mt-10 h-px bg-gray-200 w-full" />

      {/* Row 2 — 3 interactive feature rows */}
      <div className="grid sm:grid-cols-3 gap-2 sm:gap-3">
        {FEATURES.map((feat) => (
          <div
            key={feat.num}
            className="group bg-brand-gray hover:bg-brand-accent-subtle transition-all duration-200 cursor-pointer px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="text-[#191919]/40 text-sm">{feat.num}</span>
              <span className="mx-2 text-[#191919]/30">/</span>
              <span className="font-medium text-sm text-[#191919]">
                {feat.label}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default BottomInfoPanel
