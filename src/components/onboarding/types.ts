export interface OnboardingFormState {
  // Step 1: Dados Profissionais
  creaNumber: string
  creaUf: string
  specialty: string

  // Step 2: Área de Atuação
  reportTypes: string[]
  segments: string[]

  // Step 3: Informações Adicionais
  companyName: string
  phone: string
  city: string
  state: string

  // Step 4: Revisão (não salva no form state, é só confirmação)
  confirmed: boolean
  acceptedTerms: boolean
}

export const INITIAL_FORM_STATE: OnboardingFormState = {
  creaNumber: '',
  creaUf: '',
  specialty: '',
  reportTypes: [],
  segments: [],
  companyName: '',
  phone: '',
  city: '',
  state: '',
  confirmed: false,
  acceptedTerms: false,
}

export const UF_OPTIONS = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
  'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
]

export const SPECIALTY_OPTIONS = [
  'Estrutural',
  'Geotecnia',
  'Hidráulica',
  'Transportes',
  'Ambiental',
  'Segurança do Trabalho',
  'Fundações',
  'Patologia das Construções',
  'Avaliações e Perícias',
  'Construção Civil',
  'Saneamento',
  'Outra',
]

export const REPORT_TYPE_OPTIONS = [
  'Vistoria',
  'Avaliação',
  'Perícia',
  'Inspeção',
  'Parecer Técnico',
  'Auditoria',
  'ART/RRT',
  'Laudo Estrutural',
]

export const SEGMENT_OPTIONS = [
  'Residencial',
  'Comercial',
  'Industrial',
  'Infraestrutura',
  'Obras Públicas',
  'Mineração',
  'Energia',
  'Saneamento',
]

export const TOTAL_STEPS = 4
