export default function LogoTicker() {
  const logos = [
    { name: 'GLOBAL BANK', icon: 'account_balance' },
    { name: 'AEROJET SYS', icon: 'rocket_launch' },
    { name: 'NEXUS HEATH', icon: 'monitor_heart' },
    { name: 'OMNI RETAIL', icon: 'shopping_bag' },
    { name: 'SECURE GRID', icon: 'shield_locked' },
    { name: 'TELCO 2.0', icon: 'cell_tower' },
  ]

  // Duplicate for seamless infinite scrolling
  const tickerItems = [...logos, ...logos]

  return (
    <div className="w-full bg-white py-12 border-b border-t border-secondary-fixed overflow-hidden flex flex-col items-center">
      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-8 text-center">
        Trusted by global infrastructure leaders
      </div>
      
      <div className="relative w-full max-w-[100vw] overflow-hidden flex items-center">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused]">
          {tickerItems.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 mx-12 text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl">{logo.icon}</span>
              <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
