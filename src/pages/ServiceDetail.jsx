import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FadeIn, StaggerContainer, StaggerItem, RevealText } from '../components/Animations'
import { PageHero, SectionLabel } from '../components/PageLayout'
import { useEffect } from 'react'

export default function ServiceDetail() {
  const { slug } = useParams()
  
  // Find the exact service
  const service = servicesData.find((s) => s.slug === slug)
  
  // Handle 404
  if (!service) {
    return (
      <div className="bg-background text-on-background min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 font-['Space_Grotesk']">404 - Service Not Found</h1>
        <Link to="/services" className="text-primary hover:underline">Return to Services</Link>
      </div>
    )
  }

  return (
    <div className="text-on-background font-body-md min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        
        {/* ── HERO ──────────────────────────── */}
        <PageHero
          eyebrow="Service Detail"
          title={service.title}
          body={service.desc}
        />

        {/* ── STATS SECTION ─────────────────── */}
        <section className="px-margin-desktop py-12 max-w-container-max mx-auto border-t border-secondary-fixed">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-2">Projects</div>
              <div className="text-4xl font-bold font-['Space_Grotesk'] text-primary">{service.stats.projectsCompleted}</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-2">Engineers</div>
              <div className="text-4xl font-bold font-['Space_Grotesk'] text-primary">{service.stats.activeEngineers}</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-2">Success Rate</div>
              <div className="text-4xl font-bold font-['Space_Grotesk'] text-primary">{service.stats.successRate}</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-2">Avg Cost Red.</div>
              <div className="text-4xl font-bold font-['Space_Grotesk'] text-primary">{service.stats.avgCostReduction}</div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* ── THEORY SECTION ────────────────── */}
        <section className="bg-white border-y border-secondary-fixed py-24 px-margin-desktop">
          <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <SectionLabel>Methodology</SectionLabel>
              <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-light mb-8 leading-tight">
                Architectural <br/>
                <span className="text-primary italic font-bold">Philosophy</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up">
              <p className="text-xl text-on-surface-variant leading-relaxed">
                {service.theory}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── DUMMY PROJECTS SHOWCASE ───────── */}
        <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16">
            <SectionLabel>Project Portfolio</SectionLabel>
            <h2 className="font-['Space_Grotesk'] text-4xl font-light">Recent Deployments</h2>
          </div>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {service.projects.map((proj) => (
              <StaggerItem key={proj.id} className="p-8 border border-secondary-fixed bg-surface hover:border-primary transition-all rounded-2xl group flex flex-col h-full">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{proj.sector}</div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold mb-4">{proj.name}</h3>
                <p className="text-on-surface-variant leading-relaxed flex-1">{proj.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
                  View Data <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ── CTA ───────────────────────────── */}
        <section className="py-24 text-on-primary-fixed text-center px-margin-desktop" style={{ backgroundColor: '#798C00' }}>
          <FadeIn direction="up" className="max-w-3xl mx-auto">
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Initialize Your Project
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Engage our {service.title.toLowerCase()} architects to audit your current infrastructure and map the transformation.
            </p>
            <Link to="/contact" className="inline-block bg-[#1A1C1E] text-[#dfff00] px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all">
              Schedule Consultation
            </Link>
          </FadeIn>
        </section>

      </main>
      
      <Footer />
    </div>
  )
}
