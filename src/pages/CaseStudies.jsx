import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FadeIn, AnimatedCounter } from '../components/Animations'
import { PageHero, SectionLabel } from '../components/PageLayout'

import { caseStudiesData } from '../data/caseStudiesData'

export default function CaseStudies() {
  return (
    <div className="text-on-background font-body-md min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* ── HERO ──────────────────────────── */}
        <PageHero
          eyebrow="Our Work"
          title="Real results for"
          highlight="real businesses."
          body="See how we have helped companies solve their biggest challenges with smart and simple technology solutions."
        />

        {/* ── CASE STUDIES GRID ───────────────── */}
        <section className="py-section-gap bg-white border-y border-secondary-fixed mt-10">
          <div className="max-w-container-max mx-auto px-margin-desktop space-y-24">
            {caseStudiesData.map((cs, i) => (
              <FadeIn key={cs.id} direction="up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={`aspect-[4/3] rounded-2xl overflow-hidden swiss-shadow ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      alt={cs.title}
                      src={cs.image}
                      className="w-full h-full object-contain bg-white grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-3">
                      {cs.client} 
                      <span className="w-1 h-1 rounded-full bg-on-surface-variant"></span> 
                      {cs.tags.join(', ')}
                    </div>
                    <h2 className="font-semibold mb-6" style={{ fontSize: '32px', lineHeight: 1.2, fontFamily: 'Space Grotesk', fontWeight: 700 }}>
                      {cs.title}
                    </h2>
                    <p className="text-on-surface-variant text-lg leading-relaxed mb-8 border-l-2 border-primary pl-4 italic">
                      {cs.desc}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">The Problem</div>
                        <p className="text-sm leading-relaxed text-on-background">{cs.problem}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">The Solution</div>
                        <p className="text-sm leading-relaxed text-on-background">{cs.solution}</p>
                      </div>
                      <div className="bg-surface-container-low p-6 rounded-xl border border-secondary-fixed mt-4">
                        <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Impact Delivered</div>
                        <p className="text-sm font-medium leading-relaxed">{cs.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────── */}
        <section className="py-section-gap border-t border-secondary-fixed" style={{ background: '#1A1C1E', color: '#f2f2dc' }}>
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <h2 className="mb-5" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, lineHeight: 1.1, fontFamily: 'Space Grotesk' }}>
                Let's work together.
              </h2>
              <p className="text-lg mb-8" style={{ color: 'rgba(242,242,220,0.65)' }}>
                Ready to improve your business with technology? We would love to hear about your project and see how we can help.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all" style={{ background: '#dfff00', color: '#1A1C1E' }}>
                Contact Us Today <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </FadeIn>
            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[{ n: '500', s: '+', l: 'Projects Delivered' }, { n: '15', s: '+', l: 'Years Experience' }, { n: '18', s: '', l: 'Countries Served' }, { n: '99', s: '%', l: 'Client Satisfaction' }].map((s) => (
                  <div key={s.l} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: 40, fontWeight: 800, color: '#dfff00', fontFamily: 'Space Grotesk' }}>
                      <AnimatedCounter value={s.n} suffix={s.s} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest mt-2" style={{ color: 'rgba(242,242,220,0.5)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
