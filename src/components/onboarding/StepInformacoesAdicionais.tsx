import InputGroup from '../auth/InputGroup'
import { UF_OPTIONS } from './types'
import type { OnboardingFormState } from './types'

interface StepInformacoesAdicionaisProps {
  form: OnboardingFormState
  update: (patch: Partial<OnboardingFormState>) => void
}

const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const StepInformacoesAdicionais = ({ form, update }: StepInformacoesAdicionaisProps) => (
  <div className="space-y-5">
    <div>
      <h2 className="text-2xl font-serif font-normal text-[#191919] mb-1">
        Informações Adicionais
      </h2>
      <p className="text-sm text-[#191919]/50">
        Esses campos são opcionais. Preencha se quiser.
      </p>
    </div>

    <InputGroup
      label="Empresa/Escritório"
      name="companyName"
      placeholder="Nome da sua empresa (opcional)"
      value={form.companyName}
      onChange={(e) => update({ companyName: e.target.value })}
    />

    <InputGroup
      label="WhatsApp"
      name="phone"
      placeholder="(00) 00000-0000"
      type="tel"
      value={form.phone}
      onChange={(e) => update({ phone: formatPhone(e.target.value) })}
      autoComplete="tel"
    />

    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <InputGroup
          label="Cidade"
          name="city"
          placeholder="Sua cidade"
          value={form.city}
          onChange={(e) => update({ city: e.target.value })}
          autoComplete="address-level2"
        />
      </div>
      <div>
        <label className="font-mono-label font-medium text-[#191919] block mb-1.5">
          Estado
        </label>
        <select
          value={form.state}
          onChange={(e) => update({ state: e.target.value })}
          className="w-full border-b border-[#191919]/15 bg-transparent rounded-none py-3 text-[#191919] text-sm outline-none focus:border-brand-accent focus:ring-0 transition-colors duration-200"
        >
          <option value="">UF...</option>
          {UF_OPTIONS.map((uf) => (
            <option key={uf} value={uf}>{uf}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
)

export default StepInformacoesAdicionais
