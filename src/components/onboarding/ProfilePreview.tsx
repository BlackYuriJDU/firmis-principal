import { ClipboardList, Building2, Contact, CheckCircle2 } from 'lucide-react'
import type { OnboardingFormState } from './types'

interface ProfilePreviewProps {
  step: number
  form: OnboardingFormState
}

const PANELS = [
  {
    icon: ClipboardList,
    title: 'Registro Profissional',
    subtitle: 'Seus dados de registro no CREA são a base da sua credibilidade técnica.',
  },
  {
    icon: Building2,
    title: 'Área de Atuação',
    subtitle: 'Quanto mais específico for seu perfil, melhores serão os laudos gerados.',
  },
  {
    icon: Contact,
    title: 'Quase lá',
    subtitle: 'Informações de contato para personalizarmos sua experiência.',
  },
  {
    icon: CheckCircle2,
    title: 'Confirmação',
    subtitle: 'Revise seus dados antes de finalizar.',
  },
]

const ProfilePreview = ({ step, form }: ProfilePreviewProps) => {
  const panel = PANELS[step - 1]
  const Icon = panel.icon

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 py-12">
      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-brand-accent" />
      </div>

      <h2 className="text-2xl font-serif font-normal text-white/90 mb-3">
        {panel.title}
      </h2>
      <p className="text-white/40 text-sm max-w-xs leading-relaxed mb-8">
        {panel.subtitle}
      </p>

      {/* Live preview based on filled data */}
      {step >= 1 && (form.creaNumber || form.specialty) && (
        <div className="w-full max-w-xs space-y-2 text-left">
          {form.creaNumber && (
            <div className="bg-white/5 rounded-lg px-4 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">CREA</p>
              <p className="text-sm text-white/70 font-medium">
                {form.creaNumber}/{form.creaUf || 'UF'}
              </p>
            </div>
          )}
          {form.specialty && (
            <div className="bg-white/5 rounded-lg px-4 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Especialidade</p>
              <p className="text-sm text-white/70 font-medium">{form.specialty}</p>
            </div>
          )}
        </div>
      )}

      {step >= 2 && form.reportTypes.length > 0 && (
        <div className="w-full max-w-xs mt-4 space-y-2 text-left">
          <div className="bg-white/5 rounded-lg px-4 py-2.5">
            <p className="text-[10px] uppercase tracking-wider text-white/30 mb-1.5">Tipos de Laudo</p>
            <div className="flex flex-wrap gap-1.5">
              {form.reportTypes.map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-brand-accent/20 text-brand-accent">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {step >= 3 && (form.city || form.phone) && (
        <div className="w-full max-w-xs mt-4 space-y-2 text-left">
          {form.city && (
            <div className="bg-white/5 rounded-lg px-4 py-2.5">
              <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Localização</p>
              <p className="text-sm text-white/70 font-medium">
                {form.city}{form.state ? `, ${form.state}` : ''}
              </p>
            </div>
          )}
        </div>
      )}

      {step === 4 && (
        <div className="mt-6">
          <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 text-brand-accent" />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfilePreview
