import type { OnboardingFormState } from './types'

interface StepRevisaoProps {
  form: OnboardingFormState
  update: (patch: Partial<OnboardingFormState>) => void
  fieldErrors: Record<string, string>
}

const StepRevisao = ({ form, update, fieldErrors }: StepRevisaoProps) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-serif font-normal text-[#191919] mb-1">
        Revisão Final
      </h2>
      <p className="text-sm text-[#191919]/50">
        Confira seus dados antes de finalizar o cadastro.
      </p>
    </div>

    {/* Summary card */}
    <div className="bg-brand-gray rounded-xl p-6 space-y-4">
      <Section title="Dados Profissionais">
        <Item label="CREA" value={form.creaNumber ? `${form.creaNumber}/${form.creaUf}` : '—'} />
        <Item label="Especialidade" value={form.specialty || '—'} />
      </Section>

      <Section title="Área de Atuação">
        <Item label="Tipos de Laudo" value={form.reportTypes.length > 0 ? form.reportTypes.join(', ') : '—'} />
        <Item label="Segmentos" value={form.segments.length > 0 ? form.segments.join(', ') : '—'} />
      </Section>

      <Section title="Contato">
        <Item label="Empresa" value={form.companyName || '—'} />
        <Item label="WhatsApp" value={form.phone || '—'} />
        <Item label="Cidade/UF" value={form.city ? `${form.city}${form.state ? `, ${form.state}` : ''}` : '—'} />
      </Section>
    </div>

    {/* Confirmations */}
    <div className="space-y-3">
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.confirmed}
          onChange={(e) => update({ confirmed: e.target.checked })}
          className="mt-0.5 w-4 h-4 rounded border-[#191919]/20 text-brand-accent focus:ring-brand-accent"
        />
        <span className="text-sm text-[#191919]/70">
          Confirmo que as informações acima são verdadeiras e correspondem ao meu registro profissional.
        </span>
      </label>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.acceptedTerms}
          onChange={(e) => update({ acceptedTerms: e.target.checked })}
          className="mt-0.5 w-4 h-4 rounded border-[#191919]/20 text-brand-accent focus:ring-brand-accent"
        />
        <span className="text-sm text-[#191919]/70">
          Aceito os{' '}
          <a href="/termos" target="_blank" className="text-brand-accent hover:underline">
            Termos de Uso
          </a>{' '}
          e a{' '}
          <a href="/privacidade" target="_blank" className="text-brand-accent hover:underline">
            Política de Privacidade
          </a>
          .
        </span>
      </label>

      {fieldErrors.confirmed && (
        <p className="text-xs text-red-500">{fieldErrors.confirmed}</p>
      )}
      {fieldErrors.acceptedTerms && (
        <p className="text-xs text-red-500">{fieldErrors.acceptedTerms}</p>
      )}
    </div>
  </div>
)

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <p className="text-[11px] uppercase tracking-wider text-[#191919]/40 mb-2 font-medium">
      {title}
    </p>
    <div className="space-y-1.5">{children}</div>
  </div>
)

const Item = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-[#191919]/50">{label}</span>
    <span className="text-[#191919] font-medium text-right max-w-[60%]">{value}</span>
  </div>
)

export default StepRevisao
