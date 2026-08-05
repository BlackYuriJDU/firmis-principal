import { REPORT_TYPE_OPTIONS, SEGMENT_OPTIONS } from './types'
import type { OnboardingFormState } from './types'

interface StepAreaAtuacaoProps {
  form: OnboardingFormState
  update: (patch: Partial<OnboardingFormState>) => void
  fieldErrors: Record<string, string>
}

const toggleItem = (arr: string[], item: string): string[] =>
  arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]

const CheckboxGroup = ({
  label,
  options,
  selected,
  onChange,
  error,
}: {
  label: string
  options: string[]
  selected: string[]
  onChange: (value: string[]) => void
  error?: string
}) => (
  <div>
    <label className="font-mono-label font-medium text-[#191919] block mb-3">
      {label}
    </label>
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <label
          key={option}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-sm cursor-pointer transition-colors duration-200 ${
            selected.includes(option)
              ? 'border-brand-accent bg-brand-accent-subtle text-[#191919]'
              : 'border-[#191919]/10 text-[#191919]/60 hover:border-[#191919]/20'
          }`}
        >
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onChange(toggleItem(selected, option))}
            className="sr-only"
          />
          <span
            className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
              selected.includes(option)
                ? 'bg-brand-accent border-brand-accent'
                : 'border-[#191919]/20 bg-transparent'
            }`}
          >
            {selected.includes(option) && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </span>
          {option}
        </label>
      ))}
    </div>
    {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
  </div>
)

const StepAreaAtuacao = ({ form, update, fieldErrors }: StepAreaAtuacaoProps) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-serif font-normal text-[#191919] mb-1">
        Área de Atuação
      </h2>
      <p className="text-sm text-[#191919]/50">
        Conte-nos sobre os tipos de laudo que você emite.
      </p>
    </div>

    <CheckboxGroup
      label="Tipos de Laudo"
      options={REPORT_TYPE_OPTIONS}
      selected={form.reportTypes}
      onChange={(value) => update({ reportTypes: value })}
      error={fieldErrors.reportTypes}
    />

    <CheckboxGroup
      label="Segmentos de Atuação"
      options={SEGMENT_OPTIONS}
      selected={form.segments}
      onChange={(value) => update({ segments: value })}
    />
  </div>
)

export default StepAreaAtuacao
