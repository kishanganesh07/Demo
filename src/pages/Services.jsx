import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import { PageHero, SectionLabel, VerticalStepTimeline } from '../components/PageLayout'

import { servicesData } from '../data/servicesData'

const protocol = [
  { title: 'Initial Review',    desc: 'We look closely at how your business works today to find areas where technology can help.' },
  { title: 'Clear Planning',    desc: 'We create a clear, step-by-step plan to improve your systems safely and securely.' },
  { title: 'Smooth Setup',    desc: 'We build and turn on your new tools carefully so your daily work is never interrupted.' },
  { title: 'Ongoing Support', desc: 'We keep checking your systems to make sure everything runs fast and stays updated.' },
]

export default function Services() {
  return (
    <div className="text-on-background font-body-md min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* ── HERO ──────────────────────────── */}
        <PageHero
          eyebrow="Service Overview"
          title="Growing Your Business"
          highlight="Faster and Safer"
          body="We build reliable systems that help your business grow. Our team provides smart and secure technology solutions designed to make your daily work easier."
        />

        {/* ── SERVICE LIST ──────────────────── */}
        <section className="py-section-gap bg-white border-y border-secondary-fixed mt-10">
          <div className="max-w-container-max mx-auto px-margin-desktop">
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
          </div>
        </section>

        {/* ── METHODOLOGY (Vertical Timeline) ── */}
        <div className="bg-surface-container-low border-y border-secondary-fixed">
          <VerticalStepTimeline
            title="How We Work"
            subtitle="A simple, proven process to deliver the best results for your company."
            steps={protocol}
          />
        </div>

        {/* ── CTA ───────────────────────────── */}
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto text-center">
          <FadeIn direction="up">
            <SectionLabel>Ready to Begin?</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg mb-5 max-w-3xl mx-auto">
              Ready to grow your business?
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
              We always start with a free consultation to understand your needs. Let's talk about how we can help.
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
