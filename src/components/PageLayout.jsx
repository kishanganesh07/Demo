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
 * VerticalStepTimeline — two-column layout: big sticky title on the left, animated steps on the right.
 * The vertical line progressively draws as the user scrolls through the steps.
 */
export function VerticalStepTimeline({ steps, title, subtitle }) {
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const line = lineRef.current
    if (!container || !line) return

    const updateLine = () => {
      const rect = container.getBoundingClientRect()
      const windowH = window.innerHeight
      const scrolled = Math.max(0, Math.min(1, (windowH - rect.top) / (rect.height + windowH * 0.3)))
      line.style.height = `${scrolled * 100}%`
    }

    window.addEventListener('scroll', updateLine, { passive: true })
    updateLine()
    return () => window.removeEventListener('scroll', updateLine)
  }, [])

  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* ── LEFT: Big sticky title ── */}
        <div className="lg:w-5/12 xl:w-2/5">
          <div className="lg:sticky lg:top-32">
            {/* Eyebrow accent */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px]" style={{ background: '#dfff00' }} />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Process</span>
            </div>

            {/* Large title */}
            {title && (
              <h2
                style={{
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  fontFamily: 'Space Grotesk',
                }}
                className="mb-6 text-on-background"
              >
                {title.split(' ').map((word, i, arr) =>
                  i === arr.length - 1
                    ? <span key={i} className="italic text-primary"> {word}</span>
                    : <span key={i}>{i > 0 ? ' ' : ''}{word}</span>
                )}
              </h2>
            )}

            {subtitle && (
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-sm">
                {subtitle}
              </p>
            )}

            {/* Step count badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
              style={{ background: '#1A1C1E', color: '#dfff00' }}
            >
              <span className="material-symbols-outlined text-base">checklist</span>
              {steps.length} Steps
            </div>
          </div>
        </div>

        {/* ── RIGHT: Animated steps ── */}
        <div className="lg:w-7/12 xl:w-3/5">
          <div className="relative" ref={containerRef}>
            {/* Track line (background) */}
            <div
              className="absolute top-6 bottom-6 w-px bg-secondary-fixed"
              style={{ left: '23px' }}
            />
            {/* Animated fill line */}
            <div
              className="absolute top-6 w-[2px] overflow-hidden"
              style={{ left: '22px', bottom: '24px' }}
            >
              <div
                ref={lineRef}
                className="w-full"
                style={{
                  height: '0%',
                  background: 'linear-gradient(to bottom, #dfff00, #a0b800)',
                  boxShadow: '0 0 8px rgba(223,255,0,0.6)',
                  transition: 'height 0.08s linear',
                }}
              />
            </div>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <StepItem key={i} index={i} step={step} isLast={i === steps.length - 1} total={steps.length} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function StepItem({ index, step, isLast, total }) {
  const ref = useRef(null)
  const bubbleRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [bubbleActive, setBubbleActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          // Slight delay before bubble pops in
          setTimeout(() => setBubbleActive(true), index * 80 + 100)
        }
      },
      { threshold: 0.25 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex gap-8 items-start"
      style={{ paddingBottom: isLast ? 0 : '52px' }}
    >
      {/* Number bubble — pops in with scale animation */}
      <div
        ref={bubbleRef}
        className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 border-4"
        style={{
          background: bubbleActive ? '#1A1C1E' : '#e8ead5',
          color: bubbleActive ? '#dfff00' : 'transparent',
          borderColor: bubbleActive ? '#dfff00' : '#c6c9ab',
          transform: bubbleActive ? 'scale(1)' : 'scale(0.5)',
          opacity: bubbleActive ? 1 : 0,
          transition: `transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s,
                       opacity 0.3s ease ${index * 0.08}s,
                       background 0.3s ease ${index * 0.08}s,
                       color 0.3s ease ${index * 0.08}s,
                       border-color 0.3s ease ${index * 0.08}s`,
          boxShadow: bubbleActive ? '0 0 16px rgba(223,255,0,0.35)' : 'none',
        }}
      >
        {index + 1}
      </div>

      {/* Content — slides in from left */}
      <div
        className="pt-2 flex-1"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transition: `opacity 0.55s ease ${index * 0.09 + 0.15}s, transform 0.55s ease ${index * 0.09 + 0.15}s`,
        }}
      >
        <h4 className="font-semibold text-xl mb-2">{typeof step === 'string' ? step : step.title}</h4>
        {typeof step !== 'string' && step.desc && (
          <p
            className="text-base leading-relaxed"
            style={{
              color: 'inherit',
              opacity: visible ? 0.65 : 0,
              transition: `opacity 0.55s ease ${index * 0.09 + 0.25}s`,
            }}
          >
            {step.desc}
          </p>
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
