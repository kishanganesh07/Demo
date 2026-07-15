import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import { VerticalStepTimeline } from '../components/PageLayout'
import LogoTicker from '../components/LogoTicker'


/* ── DATA ─────────────────────────────────── */
import { servicesData } from '../data/servicesData'

const industries = ['Healthcare','Retail','Finance','Manufacturing','Government','Telecom','Education','Insurance','Energy','Logistics']
const industryImages = [
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400&h=400',
  'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=400&h=400',
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400&h=400',
  'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400&h=400',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=400&h=400',
  'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=400&h=400',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=400&h=400',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=400',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400&h=400',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400&h=400',
]
const steps = ['Discover','Strategy','Architecture','Design','Development','Testing','Deployment','Optimization','Support']
const logos = ['GLOBAL BANK','PHARMACORE','VORTEX AUTO','METRO RETAIL','AEROJET SYS','FINANCE ONE','NEXUS ENERGY']

const caseStudies = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvLX7mWzeJWMDGzD10uHI574aavFwyaAm0l2dytoX612FND-i1NfW3JLiX_lBtM75quxHAe7d6eDmMBeyCECsIy0JvszkXFzwNkfHJF4fTe4ZRM1EC6wB5MiFWlc9EXbX6J8QscZdacsk7ag-2Fus_LwNtAmHWzb458Ftv77Tl2BG1nyRiggYsTk6tJk7H-7znxKi_6kV1zGGWIlTCWI1ULBXPjXSnb86bQbzVWwoD6sSPDH6se7Z0',
    alt: 'Retail Analytics', cat: 'Retail', service: 'AI / Analytics',
    title: 'Retail Analytics Modernization',
    body: 'Real-time inventory optimization for a global Fortune 500 retailer.',
    kpi: '-40%', kpiLabel: 'Cost reduction',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMzKka--1jzhZHEzt0LsftKqhZ6pDA5L4PT1EJkPdWUlAVG6s-vE_vCEPjv3LAaUMvsyN8tAlGojrQtfdNpGdLL-pGmuQpQ1ixxKiAR3lbFkT6hWe8_EZndh_3t7kaWdtPwvHdb1zwRNpjRz2d070KUAJKeSRXlY2gYJdC7qM6GzMbTH7g8PCSBI4y04ntE7OFI7kw8M5b-z2Tqq-Zyyxt2aGaSZYIP1KUiobewV_-EmjrxdADnWQ7',
    alt: 'Cloud Migration', cat: 'Finance', service: 'Cloud',
    title: 'Cloud Migration Strategy',
    body: 'Scalable multi-cloud infrastructure for a leading fintech ecosystem.',
    kpi: '99.99%', kpiLabel: 'Uptime achieved',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRuAKaMBj8ZYkksJgJdC9cbDjXPxLbGhc5EVh2fTbN3KUfrkXuYib_PYGbDfQBu-B3Pk_WFyQOCOnIukJdigJX72xj3tmUHLxbT4Uw7vH0u5jxf1sAPSEoDiuV_LI9dbepkRFsUfZRcLJsTQz0BokXkUZaIYC5hf4wbI58Dmd8ipJXkN6Jz6xpsKXHPu8wWmawkdlzFwYEutWRtsmsYCH3PfotNgO0GDpEI58-iq0831TCP622Ujtp',
    alt: 'AI Fraud Detection', cat: 'Insurance', service: 'Gen AI',
    title: 'AI Fraud Detection System',
    body: 'Advanced neural networks identifying risk patterns in claim processing.',
    kpi: '3.5x', kpiLabel: 'Faster detection',
  },
]

const articles = [
  { type: 'WHITE PAPER',    title: 'The Future of AI in Enterprise Infrastructure',   body: 'Exploring the transition from experimental pilots to production-ready AI ecosystems.',  author: 'Dr. Sarah Jenkins', role: 'Chief AI Architect' },
  { type: 'STRATEGY GUIDE', title: 'Multi-Cloud Migration: Avoiding Vendor Lock-In',  body: 'Strategic frameworks for building resilient, portable cloud architectures.',             author: 'Mark Sterling',     role: 'VP of Engineering' },
  { type: 'TECHNICAL CASE', title: 'Generative AI for Legacy Code Refactoring',        body: 'How we used specialized LLMs to accelerate a legacy systems modernization project.',     author: 'Anita Rao',         role: 'Senior DevOps Lead' },
]

/* ── STAT COUNTER HOOK ─────────────────────── */
function useCountUp(refs, targets, suffixes) {
  useEffect(() => {
    const countUp = (el, end, sfx, dur = 2000) => {
      let s = null
      const step = (ts) => {
        if (!s) s = ts
        const p = Math.min((ts - s) / dur, 1)
        el.textContent = Math.floor(p * end) + sfx
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          refs.forEach((r, i) => { if (r.current) countUp(r.current, targets[i], suffixes[i]) })
          obs.disconnect()
        }
      })
    }, { threshold: 0.4 })
    if (refs[0].current) obs.observe(refs[0].current)
    return () => obs.disconnect()
  }, [])
}

/* ── PAGE ──────────────────────────────────── */
export default function Home() {
  const s1 = useRef(null), s2 = useRef(null), s3 = useRef(null), s4 = useRef(null)
  useCountUp([s1, s2, s3, s4], [15, 300, 500, 99], ['+', '+', '+', '%'])

  return (
    <div className="text-on-background font-body-md min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">

        {/* ══ HERO ══════════════════════════════ */}
        <section className="relative pt-12 pb-24 overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop grid lg:grid-cols-2 gap-16 items-center pb-24 pt-4">
            {/* Left – Copy */}
            <FadeIn direction="up" className="max-w-2xl">
              <h1 className="mb-6 text-on-background" style={{ fontSize: 'clamp(48px, 6vw, 72px)', lineHeight: '1.1', fontWeight: 300, letterSpacing: '-0.03em', fontFamily: 'Space Grotesk' }}>
                Accelerating Digital Transformation with{' '}
                <span className="text-primary italic">AI, Cloud &amp; Data Engineering</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                Helping enterprises modernize through Artificial Intelligence, Cloud Platforms,
                Data Engineering, Business Intelligence and Digital Transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95" style={{ background: '#dfff00', color: '#1A1C1E' }}>
                  Get Started
                </Link>
                <Link to="/services" className="border-2 border-on-background text-on-background px-10 py-4 rounded-xl font-bold text-lg hover:bg-on-background hover:text-background transition-all active:scale-95">
                  Explore Services
                </Link>
              </div>
            </FadeIn>

            {/* Right – Mock UI Card */}
            <FadeIn direction="left" className="relative hidden lg:block">
              <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'rgba(223,255,0,0.18)', filter: 'blur(60px)' }} />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'rgba(87,101,0,0.1)', filter: 'blur(40px)' }} />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe0xU6Ki6QHst3EcqubwQPvWfFc_E6Fy8ww74bkwkoyyO94ofx1lMBd5wETqPrhe4bdkkyNQhNBMluiOcZvNg8zs5L7lMg16NWxwg_d1uaYdwg8xUYeqNd_PZgmuwoEv-9_j_uwiqRKqtXhiiLV3ToeejyrpxvSwZ5vXvRTfHnwDCPUG2sqYKnWIUesv-1DfDLOep3a2Yvy1Gdm51S1ABtBC8MVO8jaCPfJZx1rnysYBCQL09o7-OY" 
                alt="Dashboard Mockup" 
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </FadeIn>
          </div>
        </section>

        {/* ══ CLIENT LOGO TICKER ════════════════ */}
        <LogoTicker />

        {/* ══ SERVICES ══════════════════════════ */}
        <section className="py-section-gap bg-white border-y border-secondary-fixed">
          <div className="max-w-container-max mx-auto px-margin-desktop">
          <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg mb-4">World-Class Digital Services</h2>
              <p className="text-on-surface-variant text-lg">
                Our cross-disciplinary teams blend strategic consulting with deep technical expertise to deliver transformative results.
              </p>
            </div>
           
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((s) => (
              <StaggerItem key={s.title} direction="up">
                <div className="group bg-surface p-8 rounded-2xl border border-secondary-fixed hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 swiss-shadow flex flex-col h-full">
                  <span className="material-symbols-outlined text-4xl mb-6 group-hover:text-primary transition-colors">{s.icon}</span>
                  <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed flex-grow mb-6">{s.desc}</p>
                  <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 font-bold text-sm">
                    Learn More
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          </div>
        </section>

        {/* ══ WHY US ════════════════════════════ */}
        <section className="py-section-gap overflow-hidden" style={{ background: '#303223', color: '#f2f2dc' }}>
          <div className="max-w-container-max mx-auto px-margin-desktop grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="up">
              <h2 className="font-headline-lg text-headline-lg mb-6">
                Why Strategic Leaders <span style={{ color: '#dfff00' }}>Partner With Us</span>
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(242,242,220,0.7)' }}>
                MATRIX IT combines the agility of a tech firm with the strategic rigor of a global consultancy. We don't just build technology; we engineer business outcomes.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Execution Excellence', body: 'Proven methodology for complex migrations and integrations.' },
                  { title: 'Talent Density',        body: 'Access to PhD-level researchers and senior engineers.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#dfff00' }}>
                      <span className="material-symbols-outlined text-sm" style={{ color: '#1A1C1E' }}>check</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">{item.title}</h4>
                      <p className="text-sm" style={{ color: 'rgba(242,242,220,0.6)' }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              {[
                { ref: s1, label: 'Years Experience', init: '0+' },
                { ref: s2, label: 'Experts',          init: '0+', mt: true },
                { ref: s3, label: 'Projects',         init: '0+', neg: true },
                { ref: s4, label: 'Satisfaction',     init: '0%' },
              ].map((c, i) => (
                <StaggerItem key={i} direction="up">
                  <div className={`p-8 rounded-2xl backdrop-blur-sm${c.mt ? ' mt-8' : ''}${c.neg ? ' -mt-8' : ''}`} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div ref={c.ref} className="mb-2" style={{ fontSize: 48, fontWeight: 800, color: '#dfff00', fontFamily: 'Space Grotesk' }}>{c.init}</div>
                    <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(242,242,220,0.5)' }}>{c.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ══ VERTICAL EXPERTISE ════════════════ */}
        <section className="py-section-gap bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">Vertical Expertise</h2>
              <p className="text-on-surface-variant text-lg">
                Solving industry-specific challenges through deep domain knowledge and specialized technology frameworks.
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {industries.map((ind, i) => (
                <StaggerItem key={ind} direction="up">
                  <div className="group relative h-56 rounded-xl overflow-hidden cursor-pointer border border-secondary-fixed">
                    <div className="absolute inset-0 z-10 bg-on-background/20 group-hover:bg-on-background/50 transition-colors duration-300" />
                    <img src={industryImages[i]} alt={ind} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 p-5 z-20">
                      <h4 className="text-white font-semibold text-base">{ind}</h4>
                      <div className="h-0.5 w-6 mt-2 transition-all duration-300 group-hover:w-20" style={{ background: '#dfff00' }} />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ══ RESULTS DELIVERED ════════════════ */}
        <section className="py-section-gap bg-white border-y border-secondary-fixed mt-10">
          <div className="max-w-container-max mx-auto px-margin-desktop">
          <FadeIn direction="up">
            <h2 className="font-headline-lg text-headline-lg mb-14">Results Delivered</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.title} direction="up">
                <div className="group flex flex-col h-full">
                  <div className="h-72 rounded-2xl overflow-hidden mb-6 border border-secondary-fixed">
                    <img src={cs.img} alt={cs.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-surface border border-secondary-fixed text-on-surface-variant">{cs.cat}</span>
                    <span className="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-on-background" style={{ background: '#dfff00' }}>{cs.service}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{cs.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">{cs.body}</p>
                  <div className="border-t border-secondary-fixed pt-5 flex justify-between items-center mt-auto">
                    <div>
                      <span className="text-2xl font-black text-primary">{cs.kpi}</span>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-0.5">{cs.kpiLabel}</span>
                    </div>
                    <span className="material-symbols-outlined text-on-background group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform">arrow_outward</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ══ ENGINEERING LIFECYCLE (Vertical) ════════════ */}
        <div className="bg-surface-container-low border-y border-secondary-fixed">
          <VerticalStepTimeline
            title="Our Engineering Lifecycle"
            subtitle="A rigorous, end-to-end framework designed for velocity and precision."
            steps={steps.map((s, i) => ({
              title: s,
              desc: [
                'Deep discovery sessions to understand your business goals, constraints, and existing systems.',
                'Crafting a tailored digital transformation roadmap aligned to ROI objectives.',
                'Designing scalable, secure system architectures with zero-trust principles.',
                'UX-led interface design with accessibility and brand consistency baked in.',
                'Agile sprint-based delivery with daily standups and transparent progress tracking.',
                'Rigorous QA including load testing, security scanning, and regression suites.',
                'Zero-downtime deployment with shadow traffic testing and automated rollbacks.',
                'Continuous performance tuning, cost optimisation and feature iteration.',
                '24/7 monitoring, SLA-backed support and quarterly architecture reviews.',
              ][i],
            }))}
          />
        </div>

        {/* ══ STRATEGIC INSIGHTS ═══════════════ */}
        <section className="py-section-gap border-y border-secondary-fixed" style={{ backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          <div className="max-w-container-max mx-auto px-margin-desktop">
          <FadeIn direction="up" className="flex flex-col sm:flex-row justify-between items-baseline mb-12 gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-3">Strategic Insights</h2>
              <p className="text-on-surface-variant text-lg">Thought leadership from our team of senior architects and AI researchers.</p>
            </div>
           
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <StaggerItem key={art.title} direction="up">
                <article className="bg-white border border-secondary-fixed rounded-2xl p-8 flex flex-col h-full hover:-translate-y-1.5 transition-all duration-300 swiss-shadow">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">{art.type}</span>
                  <h3 className="font-semibold text-xl leading-snug mb-4">{art.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">{art.body}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold">{art.author}</div>
                      <div className="text-[10px] text-on-surface-variant">{art.role}</div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
