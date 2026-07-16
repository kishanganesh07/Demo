import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FadeIn, StaggerContainer, StaggerItem, RevealText } from '../components/Animations'

/* ── DATA ───────────────────────────────── */
const offices = [
  {
    city: 'San Francisco',
    badge: 'HQ',
    contactName: 'Marcus Chen, US Lead',
    address: '44 Montgomery St, Floor 12\nSan Francisco, CA 94104',
    phone: '+1 (415) 555-0123',
    href: 'tel:+14155550123',
  },
  {
    city: 'London',
    contactName: 'Sarah Jenkins, UK Lead',
    address: '30 St Mary Axe, Level 15\nLondon EC3A 8BF',
    phone: '+44 20 7946 0000',
    href: 'tel:+442079460000',
  },
  {
    city: 'Singapore',
    contactName: 'David Chen, APAC Lead',
    address: '79 Robinson Rd, Level 22\nSingapore 068897',
    phone: '+65 6789 0000',
    href: 'tel:+6567890000',
  },
]

const faqs = [
  {
    q: 'Legacy Refactoring Logic',
    a: 'Our "Clean Room" strategy isolates technical debt within modern abstraction layers, allowing immediate performance gains while systematically decommissioning old infrastructure.',
  },
  {
    q: 'Timeline Estimation',
    a: 'Audits take 10–15 business days. Transformative migrations operate on tight 12-week cycles with bi-weekly deployments.',
  },
  {
    q: 'Do you take on startups?',
    a: 'We engage organisations that require enterprise-grade systems. That includes well-funded Series B+ startups operating at scale.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We operate on a value-based, fixed-fee model for architecture and deployment phases — aligning our incentives with your actual delivery, not hours billed.',
  },
  {
    q: 'How do you handle classified or NDA work?',
    a: 'We operate under mutual NDAs as standard. Our team holds relevant security clearances for sensitive government engagements.',
  },
  {
    q: 'How long does a typical cloud migration take?',
    a: 'Highly dependent on legacy constraints, a standard monolithic-to-microservices transition is architected and executed within a 6-to-9-month timeframe.',
  },
]

const services = [
  'AI Infrastructure',
  'Cloud Architecture',
  'Security Audit',
  'Data Engineering & Analytics',
  'Legacy System Modernization',
  'Managed IT Services',
]

/* ── ACCORDION ITEM ─────────────────────── */
function AccordionItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-secondary-fixed last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-8 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-lg uppercase tracking-tight group-hover:text-primary transition-colors pr-8" style={{ fontFamily: 'Space Grotesk' }}>
          {q}
        </span>
        <span
          className="material-symbols-outlined text-2xl flex-shrink-0 transition-transform duration-300 text-on-surface-variant"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          add
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <p className="pb-8 text-on-surface-variant text-base leading-relaxed max-w-2xl">{a}</p>
      </div>
    </div>
  )
}

/* ── PAGE ───────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', scope: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-white text-on-background font-body-md min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* ══ HERO ══════════════════════════════ */}
        <section className="relative pt-12 pb-24 px-margin-desktop border-b border-secondary-fixed overflow-hidden">
          {/* Subtle grid bg */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(to right, #c6c9ab 1px, transparent 1px), linear-gradient(to bottom, #c6c9ab 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="max-w-container-max mx-auto relative z-10">
            <FadeIn direction="up">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
                System.init(contact_v2)
              </div>
              <h1
                className="uppercase mb-10 max-w-4xl flex flex-col gap-2"
                style={{ fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: 1.05, fontWeight: 300, letterSpacing: '-0.02em', fontFamily: 'Space Grotesk' }}
              >
                <RevealText text="Collaborative" />
                <span className="text-on-surface-variant inline-block overflow-hidden"><RevealText text="Engineering" delay={0.2} /></span>
                <span className="inline-block overflow-hidden"><RevealText text="Through " delay={0.4} /><em className="not-italic italic text-primary"><RevealText text="Precision." delay={0.4} /></em></span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                Transforming enterprise infrastructure into digital steel. Connect with our principal architects to begin the architectural audit.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ══ MAIN GRID — Form + Hubs ═══════════ */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* ── CONTACT FORM (left 7 cols) ─────── */}
          <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-3xl border border-secondary-fixed shadow-sm">
            <FadeIn direction="up">
              <div className="mb-14">
                <h2 className="uppercase mb-4 tracking-tight" style={{ fontSize: '32px', fontWeight: 700, fontFamily: 'Space Grotesk' }}>
                  Contact Us
                </h2>
                <div className="h-1 w-20" style={{ background: '#dfff00' }} />
              </div>
            </FadeIn>

            {sent ? (
              <FadeIn direction="up">
                <div className="rounded-2xl p-16 text-center border border-secondary-fixed" style={{ background: '#dfff00' }}>
                  <span className="material-symbols-outlined text-5xl mb-4 block" style={{ color: '#1A1C1E' }}>check_circle</span>
                  <h3 className="font-bold text-2xl mb-3" style={{ fontFamily: 'Space Grotesk', color: '#1A1C1E' }}>Message Sent</h3>
                  <p style={{ color: '#1A1C1E', opacity: 0.7 }}>Our team will review your message and respond within 2 business days.</p>
                </div>
              </FadeIn>
            ) : (
              <FadeIn direction="up" delay={0.1}>
                <form className="space-y-10" onSubmit={handleSubmit}>
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-secondary-fixed px-0 py-3 text-base focus:ring-0 focus:border-primary transition-all outline-none placeholder:text-on-surface-variant/30"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="jane@enterprise.com"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-secondary-fixed px-0 py-3 text-base focus:ring-0 focus:border-primary transition-all outline-none placeholder:text-on-surface-variant/30"
                      />
                    </div>
                  </div>

                  {/* Row 2: Service + Scope */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                        Service Required
                      </label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-secondary-fixed px-0 py-3 text-base focus:ring-0 focus:border-primary transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select a service…</option>
                        {services.map(s => (
                          <option key={s} value={s}>{s.toUpperCase()}</option>
                        ))}
                      </select>
                    </div>
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                        Budget / Scope
                      </label>
                      <input
                        type="text"
                        placeholder="Estimated scope / budget"
                        value={form.scope}
                        onChange={e => setForm({ ...form, scope: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-secondary-fixed px-0 py-3 text-base focus:ring-0 focus:border-primary transition-all outline-none placeholder:text-on-surface-variant/30"
                      />
                    </div>
                  </div>

                  {/* Technical context */}
                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you?"
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-secondary-fixed px-0 py-3 text-base focus:ring-0 focus:border-primary transition-all outline-none resize-none placeholder:text-on-surface-variant/30"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex items-center gap-4 font-bold uppercase tracking-widest text-primary hover:gap-6 transition-all duration-200 py-4"
                  >
                    Send Message
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </form>
              </FadeIn>
            )}
          </div>

          {/* ── OFFICE HUBS (right 5 cols) ─────── */}
          <div className="lg:col-span-5 lg:border-l border-secondary-fixed lg:pl-16">
            <FadeIn direction="left">
              <h2 className="uppercase mb-12 tracking-tight" style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'Space Grotesk' }}>
                Global Hubs
              </h2>
            </FadeIn>

            <StaggerContainer className="space-y-12">
              {offices.map((o) => (
                <StaggerItem key={o.city} direction="up">
                  <div className="group">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold uppercase tracking-tight text-xl" style={{ fontFamily: 'Space Grotesk' }}>
                        {o.city}
                      </h3>
                      {o.badge && (
                        <span className="text-[10px] font-mono border border-secondary-fixed px-2 py-0.5 text-on-surface-variant">
                          {o.badge}
                        </span>
                      )}
                    </div>
                    {o.contactName && (
                      <p className="text-sm font-semibold mb-2 text-primary">
                        <span className="material-symbols-outlined text-[14px] align-middle mr-1">person</span>
                        {o.contactName}
                      </p>
                    )}
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-3 whitespace-pre-line">
                      {o.address}
                    </p>
                    <a
                      href={o.href}
                      className="text-xs font-mono text-primary hover:underline underline-offset-4 transition-all"
                    >
                      {o.phone}
                    </a>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Priority Support CTA */}
            <FadeIn direction="up" delay={0.3}>
             

              {/* Direct contact */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  <a href="mailto:audit@matrixit.com" className="text-sm text-on-surface-variant hover:text-primary transition-colors">audit@matrixit.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">call</span>
                  <a href="tel:+18005550199" className="text-sm text-on-surface-variant hover:text-primary transition-colors">+1 (800) 555-0199</a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══ FAQ ═══════════════════════════════ */}
        <section className="border-t border-secondary-fixed bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-desktop py-24">
            <div className="flex flex-col lg:flex-row gap-20">

              {/* Left label */}
              <FadeIn direction="up" className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px" style={{ background: '#dfff00' }} />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Knowledge Base</span>
                </div>
                <h2 className="uppercase mb-5" style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.1, fontFamily: 'Space Grotesk' }}>
                  FAQ
                </h2>
                <p className="text-on-surface-variant text-base leading-relaxed max-w-xs">
                  Protocols and methodologies explained for radical transparency.
                </p>
              </FadeIn>

              {/* Right accordion */}
              <FadeIn direction="up" delay={0.1} className="lg:w-2/3">
                <div>
                  {faqs.map((item, i) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══ BOTTOM CTA BANNER ═════════════════ */}
        <section className="py-20 px-margin-desktop max-w-container-max mx-auto text-center">
          <FadeIn direction="up">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-6">Ready when you are</p>
            <h2 className="uppercase mb-6" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.1, fontFamily: 'Space Grotesk' }}>
              Let's build something permanent.
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-lg mx-auto">
              We only take projects that redefine industries. If your infrastructure demands precision, we should talk.
            </p>
            <a
              href="mailto:audit@matrixit.com"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all active:scale-95"
              style={{ background: '#dfff00', color: '#1A1C1E' }}
            >
              Start an Engagement
              <span className="material-symbols-outlined">east</span>
            </a>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  )
}
