import InputGroup from '../auth/InputGroup'
import { UF_OPTIONS, SPECIALTY_OPTIONS } from './types'
import type { OnboardingFormState } from './types'

interface StepDadosProfissionaisProps {
  form: OnboardingFormState
  update: (patch: Partial<OnboardingFormState>) => void
  fieldErrors: Record<string, string>
}

const StepDadosProfissionais = ({ form, update, fieldErrors }: StepDadosProfissionaisProps) => (
  <div className="space-y-5">
    <div>
      <h2 className="text-2xl font-serif font-normal text-[#191919] mb-1">
        Dados Profissionais
      </h2>
      <p className="text-sm text-[#191919]/50">
        Informações do seu registro no CREA.
      </p>
    </div>

    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <InputGroup
          label="Número do CREA"
          name="creaNumber"
          placeholder="Ex: 123456"
          value={form.creaNumber}
          onChange={(e) => update({ creaNumber: e.target.value })}
          required
          error={fieldErrors.creaNumber}
        />
      </div>
      <div>
        <label className="font-mono-label font-medium text-[#191919] block mb-1.5">
          UF
        </label>
        <select
          value={form.creaUf}
          onChange={(e) => update({ creaUf: e.target.value })}
          className={`w-full border-b bg-transparent rounded-none py-3 text-[#191919] text-sm outline-none focus:ring-0 transition-colors duration-200 ${
            fieldErrors.creaUf
              ? 'border-red-400 focus:border-red-500'
              : 'border-[#191919]/15 focus:border-brand-accent'
          }`}
        >
          <option value="">UF...</option>
          {UF_OPTIONS.map((uf) => (
            <option key={uf} value={uf}>{uf}</option>
          ))}
        </select>
        {fieldErrors.creaUf && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.creaUf}</p>
        )}
      </div>
    </div>

    <div>
      <label className="font-mono-label font-medium text-[#191919] block mb-1.5">
        Especialidade Principal
      </label>
      <select
        value={form.specialty}
        onChange={(e) => update({ specialty: e.target.value })}
        className={`w-full border-b bg-transparent rounded-none py-3 text-[#191919] text-sm outline-none focus:ring-0 transition-colors duration-200 ${
          fieldErrors.specialty
            ? 'border-red-400 focus:border-red-500'
            : 'border-[#191919]/15 focus:border-brand-accent'
        }`}
      >
        <option value="">Selecione...</option>
        {SPECIALTY_OPTIONS.map((spec) => (
          <option key={spec} value={spec}>{spec}</option>
        ))}
      </select>
      {fieldErrors.specialty && (
        <p className="text-xs text-red-500 mt-1">{fieldErrors.specialty}</p>
      )}
    </div>
  </div>
)

export default StepDadosProfissionais
