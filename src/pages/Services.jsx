import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import { PageHero, SectionLabel, VerticalStepTimeline } from '../components/PageLayout'

import { servicesData } from '../data/servicesData'

const protocol = [
  { title: 'Architectural Audit',    desc: 'Deep inspection of existing infrastructure. Identifying single points of failure, latency bottlenecks, and structural weaknesses.' },
  { title: 'Blueprint Synthesis',    desc: 'Zero-trust, multi-AZ blueprint development. Every component is modeled for failure resistance and autonomous recovery.' },
  { title: 'Parallel Deployment',    desc: 'Phased rollout with real-time shadow traffic testing. We guarantee zero downtime and zero data loss during transitions.' },
  { title: 'Continuous Optimisation', desc: 'Post-deployment monitoring loops ensure performance benchmarks are continuously met and improved upon.' },
]

export default function Services() {
  return (
    <div className="text-on-background font-body-md min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* ── HERO ──────────────────────────── */}
        <PageHero
          eyebrow="Service Overview"
          title="Scalable Innovation"
          highlight="at Enterprise Speed"
          body="We don't just build systems — we architect permanence. Our multidisciplinary squads deploy high-precision AI and infrastructure designed for the world's most demanding technical environments."
        />

        {/* ── SERVICE LIST ──────────────────── */}
        <section className="pb-section-gap px-margin-desktop max-w-container-max mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => (
              <StaggerItem key={svc.slug} direction="up">
                <Link to={`/services/${svc.slug}`} className="group flex flex-col h-full bg-surface p-10 rounded-2xl border border-secondary-fixed hover:border-primary transition-all duration-300 swiss-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">{svc.icon}</span>
                    <h3 className="font-semibold text-xl" style={{ fontFamily: 'Space Grotesk' }}>{svc.title}</h3>
                  </div>
                  <p className="text-on-surface-variant text-base leading-relaxed flex-grow mb-8">{svc.desc}</p>
                  
                  <div className="pt-6 border-t border-secondary-fixed flex justify-between items-center mt-auto">
                    <div>
                      <span className="text-sm font-bold text-primary block">{svc.stats.projectsCompleted}</span>
                      <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1 block">Deployments</span>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ── METHODOLOGY (Vertical Timeline) ── */}
        <div className="bg-surface-container-low border-y border-secondary-fixed">
          <VerticalStepTimeline
            title="The NovaTech Protocol"
            subtitle="A rigorous, end-to-end delivery framework designed for velocity and precision."
            steps={protocol}
          />
        </div>

        {/* ── CTA ───────────────────────────── */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto text-center">
          <FadeIn direction="up">
            <SectionLabel>Ready to Begin?</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg mb-5 max-w-3xl mx-auto">
              Ready to build the foundation of your legacy?
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
              Every engagement starts with a no-cost architecture consultation. Let's map your transformation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="px-10 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90" style={{ background: '#dfff00', color: '#1A1C1E' }}>
                Schedule Consultation
              </Link>
              <Link to="/case-studies" className="px-10 py-4 rounded-xl font-bold text-base border-2 border-secondary-fixed hover:border-primary hover:text-primary transition-all">
                View Case Studies
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  )
}
