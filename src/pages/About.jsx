import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FadeIn, StaggerContainer, StaggerItem, RevealText, ParallaxImage } from '../components/Animations'

const leaders = [
  {
    name: 'Dr. Elara Vance', role: 'Chief Architect', code: 'CH_01',
    bio: 'Former Lead of AI Integrity at the Zurich Institute. Specialist in zero-trust infrastructure and structural neural scaling.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV4CIfjaYwBD-PpTcJuKXBpoFtaZxj7jb7saJf7Ii7me77o5udhzo9K92_wKDUyNL5ZNedQ5Pa6zpE2faWmZlNHt2tXX01oFfoAXOR9DlMXbuVq6zBC1OgpvrFy4NsnPSukLj8aGMubSBqYaUwDtsBwwFaxnrUoiJ3DKp34TorxYlCLKglax9oPX8L0mZH3geWb2OIdmjcSbz3R6mXKv4fn3UmgySU-2oyuAZ3DbMRfL6AtSUwRfIN',
  },
  {
    name: 'Marcus Chen', role: 'Head of Infrastructure', code: 'US_04',
    bio: 'Architect of the Global Resilience Network. 15 years in enterprise failure-mode analysis and data permanence.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAufk61lZIQYeQPuAhlTvQMC_YCrHIpqHG35Z9SKqkk2FBahyLLiadUfPHYyWagOFroVzefMNItRh_UffgpbxQ5RSs_Xl6zI_CcajkPNn__2qC-tuo2G-hAyC3ORs56cn-NquJVLi-5A4rfnz504jf0SSfYF-m1lXxLiYbz72FXjL0ZeW7mRc-SL8_00rlllR6XmRlGQs1ruUDlZ9Il_rZz0okAMUo8rFsZmneUcdabb711GC8S2jFd',
  },
  {
    name: 'Sarah Jenkins', role: 'Strategy Lead', code: 'UK_02',
    bio: 'Pioneer in the Ethics of Enterprise AI. Dedicated to the principle that intelligence must be bounded by structural integrity.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO_Dks7RfOy5u_xjq3fOHVIhFrEu9_Z7wp8hxYpCW-yjoaSkE8vH3IHQ1tnFv5cEvIwV1xtu9RNpHAwveVnBGWczm4dogmcIs6fFdXZuSqeNSHSIJ6xWAAV5iZXZcWakiXv8cGGSj5bnOucCVjRyaT5b7_n0cAsCfF7ICjDaP5Ie9cFTbyoHvlqTSDNckKExkF-3asOfMIffrahpRIsJC51UuxuT7THGnX5HS7T4rWA0szUUTcrlfA',
  },
]

export default function About() {
  return (
    <div className="text-on-background font-body-md min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        
        {/* ── HERO ───────────────────────────── */}
        <section className="relative pt-12 pb-24 overflow-hidden">
          {/* Subtle grid bg */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #c6c9ab 1px, transparent 1px), linear-gradient(to bottom, #c6c9ab 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="max-w-container-max mx-auto px-margin-desktop w-full relative z-10">
            <FadeIn direction="up">
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-[2px] bg-primary"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Est. MMXXIV</span>
                </div>
                <h1 className="mb-12 leading-[1.1] tracking-tight flex flex-col gap-2" style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 300, fontFamily: 'Space Grotesk' }}>
                  <RevealText text="Pioneering the" />
                  <span className="text-primary italic inline-block overflow-hidden"><RevealText text="Enterprise Future" delay={0.2} /></span>
                </h1>
                <p className="text-xl max-w-2xl text-on-surface-variant mb-12 leading-relaxed">
                  NovaTech is a high-precision architectural consultancy specialized in next-generation AI infrastructure and structural IT integrity. We build for permanence in a landscape of temporary solutions.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact" className="px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all active:scale-95" style={{ background: '#dfff00', color: '#1A1C1E' }}>
                    Explore Our Vision
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── MARQUEE TICKER ─────────────────── */}
        <div className="w-full bg-on-background py-6 overflow-hidden whitespace-nowrap border-y border-outline">
          <div className="flex animate-marquee gap-24 items-center">
            {['Precision Architecture', 'Swiss Minimalism', 'AI Integrity', 'Radical Transparency', 'Precision Architecture', 'Swiss Minimalism', 'AI Integrity', 'Radical Transparency'].map((text, i) => (
              <div key={i} className="flex items-center gap-24">
                <span className="text-2xl text-surface uppercase tracking-tighter" style={{ fontFamily: 'Space Grotesk', fontWeight: 300 }}>{text}</span>
                <span className="material-symbols-outlined text-primary text-lg">emergency</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── PHILOSOPHY ─────────────────────── */}
        <section className="px-margin-desktop py-section-gap max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <FadeIn direction="right" className="lg:col-span-5 mb-12 lg:mb-0">
              <h2 className="mb-8 leading-tight" style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, fontFamily: 'Space Grotesk' }}>
                Architecting <br />Absolute Integrity
              </h2>
              <p className="text-on-surface-variant leading-relaxed max-w-md text-lg">
                Our approach is rooted in the Swiss tradition of functional reduction. We believe that clarity is the ultimate form of security in digital infrastructure.
              </p>
            </FadeIn>
            <div className="lg:col-span-7 space-y-16">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <StaggerItem direction="up">
                  <div className="p-10 bg-surface-container-low border border-secondary-fixed rounded-2xl h-full shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                    <div className="text-primary font-bold text-xs uppercase tracking-widest mb-6">01 / REDUCTION</div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Functional Void</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      We eliminate the non-essential. In IT architecture, complexity is the enemy of security. Our Swiss-inspired approach focuses on the raw skeletal structure of systems.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem direction="up">
                  <div className="p-10 bg-on-background text-surface border border-on-background rounded-2xl h-full shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                    <div className="text-primary font-bold text-xs uppercase tracking-widest mb-6" style={{ color: '#dfff00' }}>02 / INTEGRITY</div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Structural Purity</h3>
                    <p className="opacity-70 text-sm leading-relaxed">
                      Every line of code, every server blade, every data packet must serve a defined architectural purpose. We do not hide failures behind layers of middleware.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
              <FadeIn direction="up">
                <div className="group overflow-hidden rounded-2xl aspect-[16/7] relative border border-secondary-fixed shadow-md hover:shadow-xl transition-all duration-500">
                  <ParallaxImage 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7uK_bofnTTNvjoYMVNx7MOOZgp4MJ0S9sCVl9q_zPKqWmt5UCdiKjzkakZGJIgfSz3dYbBKYmvcldlIzAG6oi8wz1uAlRDZysYXAkH_pe-dLQAjsPJ7GDhWJiGRpo11AfD0T3jqgMoT6RKxxjLig82nIhy4fS8mT2v4f0Aj-itSPVfXVsQtXH8M_hFrsO6AenjpfqPEDm4IVEOx-MqtnVQIO8J4tVqoWY5cJCoQYC-x9j1xFF8Vmf"
                    alt="Minimalist brutalist architecture"
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute top-8 left-8 bg-surface/95 backdrop-blur px-5 py-2 rounded-full border border-secondary-fixed text-xs font-bold uppercase tracking-widest text-on-surface">
                    V.01 CORE ARCHITECTURE
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP ─────────────────────── */}
        <section className="bg-surface-container-low px-margin-desktop py-section-gap border-y border-secondary-fixed">
          <div className="max-w-container-max mx-auto">
            <FadeIn direction="up" className="text-center mb-24 max-w-2xl mx-auto">
              <h2 className="mb-6" style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, fontFamily: 'Space Grotesk' }}>Leadership Architecture</h2>
              <p className="text-on-surface-variant text-lg">The minds behind NovaTech. A multidisciplinary collective dedicated to the permanence of digital structures.</p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {leaders.map((l, i) => (
                <StaggerItem key={l.name} direction="up">
                  <div className={`group ${i === 1 ? 'md:mt-16' : ''}`}>
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-8 border border-secondary-fixed shadow-sm hover:shadow-xl transition-shadow duration-500">
                      <img
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        alt={l.name}
                        src={l.img}
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: 'Space Grotesk' }}>{l.name}</h3>
                          <p className="text-xs font-bold text-primary uppercase tracking-widest">{l.role}</p>
                        </div>
                        <span className="text-xs font-mono text-on-surface-variant/50 border border-secondary-fixed px-2 py-0.5 rounded bg-surface">{l.code}</span>
                      </div>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {l.bio}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── CTA ────────────────────────────── */}
        <section className="px-margin-desktop py-section-gap max-w-container-max mx-auto text-center">
          <FadeIn direction="up">
            <div className="rounded-3xl p-16 md:p-24 relative overflow-hidden" style={{ background: '#dfff00' }}>
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #767960 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="mb-10 tracking-tighter leading-none" style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 300, fontFamily: 'Space Grotesk', color: '#1A1C1E' }}>
                  Ready to Build for Permanence?
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                  <Link to="/contact" className="bg-on-background px-12 py-5 rounded-full font-bold text-sm hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95" style={{ color: '#f9f9ff' }}>
                    Initial Audit
                    <span className="material-symbols-outlined text-base">analytics</span>
                  </Link>
                  <Link to="/contact" className="bg-surface text-on-background border-2 border-on-background px-12 py-5 rounded-full font-bold text-sm hover:bg-on-background hover:text-surface transition-all flex items-center justify-center gap-3 active:scale-95">
                    Contact Hub
                    <span className="material-symbols-outlined text-base">hub</span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  )
}
