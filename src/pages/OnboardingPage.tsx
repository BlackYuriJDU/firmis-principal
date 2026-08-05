import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Logo from '../components/Logo'
import ProgressBar from '../components/onboarding/ProgressBar'
import ProfilePreview from '../components/onboarding/ProfilePreview'
import StepDadosProfissionais from '../components/onboarding/StepDadosProfissionais'
import StepAreaAtuacao from '../components/onboarding/StepAreaAtuacao'
import StepInformacoesAdicionais from '../components/onboarding/StepInformacoesAdicionais'
import StepRevisao from '../components/onboarding/StepRevisao'
import {
  INITIAL_FORM_STATE,
  TOTAL_STEPS,
} from '../components/onboarding/types'
import type { OnboardingFormState } from '../components/onboarding/types'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

const DRAFT_KEY = 'firmis_onboarding_draft'

const OnboardingPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [form, setForm] = useState<OnboardingFormState>(INITIAL_FORM_STATE)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')

  // Load draft from localStorage
  useEffect(() => {
    if (!user) return
    try {
      const raw = localStorage.getItem(`${DRAFT_KEY}_${user.id}`)
      if (raw) {
        const draft = JSON.parse(raw) as OnboardingFormState
        setForm(draft)
      }
    } catch {
      // ignore corrupted draft
    }
  }, [user])

  // Save draft to localStorage on every form change
  const update = useCallback(
    (patch: Partial<OnboardingFormState>) => {
      setForm((prev) => {
        const next = { ...prev, ...patch }
        if (user) {
          localStorage.setItem(`${DRAFT_KEY}_${user.id}`, JSON.stringify(next))
        }
        return next
      })
    },
    [user],
  )

  // Validation per step
  const validateStep = (s: number): boolean => {
    const errors: Record<string, string> = {}

    if (s === 1) {
      if (!form.creaNumber.trim()) errors.creaNumber = 'Número do CREA é obrigatório.'
      if (!form.creaUf) errors.creaUf = 'UF é obrigatória.'
      if (!form.specialty) errors.specialty = 'Especialidade é obrigatória.'
    }

    if (s === 2) {
      if (form.reportTypes.length === 0) errors.reportTypes = 'Selecione pelo menos 1 tipo de laudo.'
    }

    if (s === 4) {
      if (!form.confirmed) errors.confirmed = 'Confirme as informações.'
      if (!form.acceptedTerms) errors.acceptedTerms = 'Aceite os termos de uso.'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const next = () => {
    if (!validateStep(step)) return
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1)
      setFieldErrors({})
    }
  }

  const back = () => {
    if (step > 1) {
      setStep((s) => s - 1)
      setFieldErrors({})
    }
  }

  const finish = async () => {
    if (!validateStep(4)) return
    if (!user) return

    setSaving(true)
    setSaveError('')

    const { error } = await supabase.from('profiles').upsert({
      id: user.id,
      nome: user.user_metadata?.first_name || '',
      sobrenome: user.user_metadata?.last_name || '',
      crea_numero: form.creaNumber.trim(),
      crea_uf: form.creaUf,
      especialidade: form.specialty,
      report_types: form.reportTypes,
      segments: form.segments,
      empresa: form.companyName.trim() || null,
      telefone: form.phone || null,
      city: form.city.trim() || null,
      state: form.state || null,
      onboarding_completed: true,
      updated_at: new Date().toISOString(),
    })

    setSaving(false)

    if (error) {
      setSaveError(error.message)
      return
    }

    // Clear draft
    localStorage.removeItem(`${DRAFT_KEY}_${user.id}`)
    navigate('/dashboard')
  }

  // Redirect if not logged in
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-white">
        <p className="text-sm text-[#191919]/50">Redirecionando...</p>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen w-full bg-brand-white selection:bg-[#191919]/10 p-2 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4">
      {/* Left column — dynamic preview */}
      <div className="relative hidden lg:flex flex-col items-center justify-center rounded-3xl overflow-hidden shadow-2xl h-full w-[42%] bg-gradient-to-br from-[#191919] via-[#191919] to-brand-accent/10">
        <ProfilePreview step={step} form={form} />
      </div>

      {/* Right column — steps */}
      <div className="flex-1 flex flex-col lg:overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="font-semibold text-base tracking-tight text-[#191919]">
              Firmis
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#191919]/40">Configuração Inicial</span>
            <span className="text-sm font-medium text-[#191919]">
              {step}/{TOTAL_STEPS}
            </span>
          </div>
        </header>

        <ProgressBar step={step} totalSteps={TOTAL_STEPS} />

        {/* Step content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 py-8">
          {/* Mobile preview (collapsed) */}
          <div className="lg:hidden mb-8 p-4 rounded-xl bg-gradient-to-br from-[#191919] via-[#191919] to-brand-accent/10 text-center">
            <ProfilePreview step={step} form={form} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {step === 1 && (
                <StepDadosProfissionais
                  form={form}
                  update={update}
                  fieldErrors={fieldErrors}
                />
              )}
              {step === 2 && (
                <StepAreaAtuacao
                  form={form}
                  update={update}
                  fieldErrors={fieldErrors}
                />
              )}
              {step === 3 && (
                <StepInformacoesAdicionais
                  form={form}
                  update={update}
                />
              )}
              {step === 4 && (
                <StepRevisao
                  form={form}
                  update={update}
                  fieldErrors={fieldErrors}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <footer className="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 border-t border-gray-100 flex-shrink-0 bg-brand-white">
          <button
            type="button"
            onClick={back}
            disabled={step === 1}
            className="flex items-center gap-2 text-sm text-[#191919]/50 hover:text-[#191919] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </button>

          <span className="text-xs text-[#191919]/30">
            Passo {step} de {TOTAL_STEPS}
          </span>

          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={next}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
            >
              Próximo
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={finish}
              disabled={saving}
              className="px-6 py-2.5 bg-brand-accent text-[#191919] text-sm font-medium rounded-lg hover:bg-brand-accent/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Salvando...' : 'Finalizar Cadastro'}
            </button>
          )}
        </footer>

        {saveError && (
          <div className="px-4 sm:px-8 lg:px-12 pb-4">
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2.5">
              {saveError}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default OnboardingPage
