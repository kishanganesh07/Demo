const items = [
  'Systems Integrity', 'Quantum Readiness', 'Neural Optimization',
  'Sovereign Data', 'Zero Trust', 'Edge Intelligence',
  'Systems Integrity', 'Quantum Readiness', 'Neural Optimization',
  'Sovereign Data', 'Zero Trust', 'Edge Intelligence',
]

export default function Ticker({ dark = false }) {
  return (
    <div
      className={`border-y py-5 overflow-hidden flex whitespace-nowrap ${
        dark
          ? 'border-white/10 bg-inverse-surface'
          : 'border-secondary-fixed bg-surface-container-low'
      }`}
    >
      <div className="ticker-track flex items-center gap-12">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span
              className={`font-label-md text-label-md uppercase tracking-[0.15em] text-xs ${
                dark ? 'text-white/40' : 'text-on-surface-variant/60'
              }`}
            >
              {item}
            </span>
            <span
              className={`w-1 h-1 rounded-full flex-shrink-0 ${
                dark ? 'bg-inverse-primary/40' : 'bg-primary/30'
              }`}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
