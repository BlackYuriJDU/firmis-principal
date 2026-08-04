import { motion } from 'motion/react'
import { Check, Minus } from 'lucide-react'

const COMPETITORS = [
  { name: 'Firmis', ia: true, normas: true, multiTipos: true, memoria: true },
  { name: 'PROTO AI', ia: false, normas: true, multiTipos: false, memoria: false },
  { name: 'Nottun', ia: false, normas: false, multiTipos: true, memoria: false },
  { name: 'VistoPred', ia: false, normas: false, multiTipos: true, memoria: false },
  { name: 'Produttivo', ia: false, normas: false, multiTipos: true, memoria: false },
  { name: 'Inspeção Pro', ia: false, normas: false, multiTipos: true, memoria: false },
  { name: 'Flash Vistoria', ia: false, normas: false, multiTipos: true, memoria: false },
]

const COLUMNS = [
  { key: 'ia' as const, label: 'IA Generativa' },
  { key: 'normas' as const, label: 'Citação de NBRs' },
  { key: 'multiTipos' as const, label: 'Múltiplos laudos' },
  { key: 'memoria' as const, label: 'Memória de cálculo' },
]

const ComparativoSection = () => (
  <section id="comparativo" className="py-24 sm:py-32 px-6 sm:px-10 md:px-14 bg-white">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium mb-4">
          COMPARATIVO
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#191919]">
          Nenhum concorrente
          <br />
          usa IA generativa.
        </h2>
        <p className="mt-4 text-sm text-[#191919]/60 max-w-lg mx-auto">
          Os softwares brasileiros de vistoria são digitalizadores de checklist.
          A Firmis é a única plataforma que <strong>redige a fundamentação
          técnica</strong> com citação rastreável da norma aplicável.
        </p>
      </motion.div>

      {/* Desktop table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block overflow-x-auto"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 pr-6 font-medium text-sm text-[#191919]/50">
                Plataforma
              </th>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className="text-center py-4 px-4 font-medium text-sm text-[#191919]/50"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPETITORS.map((comp) => (
              <tr
                key={comp.name}
                className={`border-b border-gray-100 ${
                  comp.name === 'Firmis'
                    ? 'bg-brand-accent-subtle'
                    : ''
                }`}
              >
                <td className="py-4 pr-6">
                  <span
                    className={`text-sm font-medium ${
                      comp.name === 'Firmis'
                        ? 'text-[#191919]'
                        : 'text-[#191919]/70'
                    }`}
                  >
                    {comp.name}
                  </span>
                  {comp.name === 'Firmis' && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider text-[#191919]/40 font-medium">
                      Você está aqui
                    </span>
                  )}
                </td>
                {COLUMNS.map((col) => (
                  <td key={col.key} className="text-center py-4 px-4">
                    {comp[col.key] ? (
                      <Check className="w-5 h-5 text-brand-accent mx-auto" />
                    ) : (
                      <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {COMPETITORS.map((comp, i) => (
          <motion.div
            key={comp.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className={`rounded-xl p-5 ${
              comp.name === 'Firmis'
                ? 'bg-[#191919] text-white ring-2 ring-[#191919] ring-brand-accent/30'
                : 'bg-[#F4F3F3]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`font-medium text-sm ${comp.name === 'Firmis' ? 'text-white' : 'text-[#191919]'}`}>
                {comp.name}
              </span>
              {comp.name === 'Firmis' && (
                <span className="text-[10px] uppercase tracking-wider text-white/50 font-medium">
                  Você está aqui
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {COLUMNS.map((col) => (
                <div key={col.key} className="flex items-center gap-2">
                  {comp[col.key] ? (
                    <Check className={`w-4 h-4 ${comp.name === 'Firmis' ? 'text-white' : 'text-[#191919]'}`} />
                  ) : (
                    <Minus className={`w-4 h-4 ${comp.name === 'Firmis' ? 'text-white/30' : 'text-gray-300'}`} />
                  )}
                  <span className={`text-xs ${comp.name === 'Firmis' ? 'text-white/70' : 'text-[#191919]/50'}`}>
                    {col.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 text-center text-xs text-[#191919]/40"
      >
        Dados baseados em pesquisa de mercado pública — agosto/2026.{' '}
        <a href="/informativo" className="underline hover:text-[#191919]/60 transition-colors">
          Ver metodologia
        </a>
      </motion.p>
    </div>
  </section>
)

export default ComparativoSection
