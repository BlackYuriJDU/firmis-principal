const Logo = () => (
  <svg
    viewBox="0 0 256 256"
    fill="currentColor"
    className="w-6 h-6 text-[#191919]"
    aria-hidden="true"
  >
    {/* Left pillar (short) */}
    <rect x="44" y="140" width="40" height="96" rx="4" />
    {/* Center pillar (medium) */}
    <rect x="108" y="88" width="40" height="148" rx="4" />
    {/* Right pillar (tall) */}
    <rect x="172" y="36" width="40" height="200" rx="4" />
    {/* Base beam */}
    <rect x="32" y="224" width="192" height="12" rx="3" />
    {/* Top cap on right pillar */}
    <rect x="168" y="24" width="48" height="16" rx="3" />
  </svg>
)

export default Logo
