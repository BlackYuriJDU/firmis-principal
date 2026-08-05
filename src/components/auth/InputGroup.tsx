import { useState } from 'react'

interface InputGroupProps {
  label: string
  placeholder: string
  type?: string
  helper?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  id?: string
  required?: boolean
  error?: string
  autoComplete?: string
}

const InputGroup = ({
  label,
  placeholder,
  type = 'text',
  helper,
  value,
  onChange,
  name,
  id,
  required = false,
  error,
  autoComplete,
}: InputGroupProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const effectiveType = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id || name}
        className="font-mono-label font-medium text-[#191919]"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id || name}
          name={name}
          type={effectiveType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className={`w-full border-b bg-transparent rounded-none py-3 text-[#191919] placeholder:text-[#191919]/20 text-sm outline-none focus:ring-0 transition-colors duration-200 ${
            error
              ? 'border-red-400 focus:border-red-500'
              : 'border-[#191919]/15 focus:border-brand-accent'
          }`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#191919]/30 hover:text-[#191919]/60 transition-colors duration-200"
            tabIndex={-1}
          >
            {showPassword ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
      {helper && !error && (
        <p className="text-xs text-[#191919]/40">{helper}</p>
      )}
    </div>
  )
}

export default InputGroup
