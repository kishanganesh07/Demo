import { useEffect, useRef, useState } from 'react'

/**
 * ScrollProgressLine — thin lime vertical bar on the left edge that grows as user scrolls.
 * Fixed position, always visible on all pages.
 */
export function ScrollProgressLine() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total <= 0) return
      setProgress(window.scrollY / total)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed left-0 top-0 bottom-0 w-[3px] z-[9999] pointer-events-none" style={{ background: 'rgba(223,255,0,0.12)' }}>
      <div
        className="w-full transition-none"
        style={{ height: `${progress * 100}%`, background: '#dfff00', boxShadow: '0 0 8px rgba(223,255,0,0.5)' }}
      />
    </div>
  )
}

/**
 * VerticalStepTimeline — numbered steps displayed vertically with connecting line.
 * Used inside any page section to show a process/lifecycle.
 */
export function VerticalStepTimeline({ steps, title, subtitle }) {
  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      {(title || subtitle) && (
        <div className="mb-16">
          {title && <h2 className="font-headline-lg text-headline-lg mb-3">{title}</h2>}
          {subtitle && <p className="text-on-surface-variant text-lg max-w-2xl">{subtitle}</p>}
        </div>
      )}
      <div className="relative">
        {/* Vertical connecting line */}
        <div className="absolute left-6 top-8 bottom-8 w-px bg-secondary-fixed" style={{ left: '23px' }} />
        <div className="space-y-0">
          {steps.map((step, i) => (
            <StepItem key={i} index={i} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepItem({ index, step, isLast }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex gap-8 items-start"
      style={{
        paddingBottom: isLast ? 0 : '48px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Number bubble */}
      <div
        className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-4"
        style={{ background: '#1A1C1E', color: '#dfff00', borderColor: '#fafbe5' }}
      >
        {index + 1}
      </div>
      {/* Content */}
      <div className="pt-2 flex-1">
        <h4 className="font-semibold text-lg mb-2">{typeof step === 'string' ? step : step.title}</h4>
        {typeof step !== 'string' && step.desc && (
          <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
        )}
      </div>
    </div>
  )
}

/**
 * PageHero — consistent hero block for all inner pages.
 */
export function PageHero({ eyebrow, title, highlight, body, cta }) {
  return (
    <section className="relative px-margin-desktop max-w-container-max mx-auto pt-12 pb-24 md:pb-32">
      <div className="max-w-4xl">
        {eyebrow && (
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
          </div>
        )}
        <h1
          className="mb-8 text-on-background"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: 'Space Grotesk' }}
        >
          {title}
          {highlight && (
            <> <span className="text-primary italic">{highlight}</span></>
          )}
        </h1>
        {body && <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl mb-10">{body}</p>}
        {cta && cta}
      </div>
    </section>
  )
}

/**
 * SectionLabel — eyebrow label with accent line, consistent across all pages.
 */
export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-px" style={{ background: '#dfff00' }} />
      <span className="text-xs font-bold uppercase tracking-widest text-primary">{children}</span>
    </div>
  )
}

/**
 * PageSection — consistent padded section wrapper.
 */
export function PageSection({ children, dark = false, tinted = false, className = '' }) {
  let bg = 'bg-background'
  if (dark) bg = ''
  if (tinted) bg = 'bg-surface-container-low'

  return (
    <section
      className={`py-section-gap ${className}`}
      style={dark ? { background: '#303223', color: '#f2f2dc' } : {}}
    >
      <div className={`max-w-container-max mx-auto px-margin-desktop ${bg}`}>
        {children}
      </div>
    </section>
  )
}
