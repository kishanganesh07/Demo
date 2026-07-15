import Header from '../components/Header'
import Footer from '../components/Footer'

const coreValues = [
  {
    icon: 'verified',
    title: 'Integrity',
    desc: 'Unwavering honesty in our technical assessments.',
  },
  {
    icon: 'engineering',
    title: 'Excellence',
    desc: 'Rigorous engineering standards in every deployment.',
  },
  {
    icon: 'groups',
    title: 'Collaboration',
    desc: 'Working seamlessly as an extension of your team.',
  },
  {
    icon: 'security',
    title: 'Security First',
    desc: 'Protecting your assets is our primary directive.',
  },
]

export default function OurStory() {
  return (
    <div className="text-on-background antialiased font-body-md min-h-screen flex flex-col">
      <Header />

      <main className="max-w-container-max mx-auto px-4 md:px-lg py-12 md:py-xl space-y-24 w-full">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-surface-container-high rounded-full text-label-sm font-label-sm text-on-surface-variant">
              Our Mission
            </span>
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface">
              Engineering Stability, Empowering Growth.
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Since 2010, TechSolutions has been the trusted partner for enterprise IT
              infrastructure. We build resilient systems that scale with your ambitions,
              ensuring technical excellence at every layer.
            </p>
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-surface-container shadow-level-1">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbWd483PzEbSTy3qTHeInXwYJmAL-sMSjsOnWWTx2b5QvTLgyV7PYRUnsjBYMiH7bReMRQ9oK2BJtnoeouP8jMN2mli1ZzHR7cAKeWCQQr86Pu6sLz786lLnrfa5pk2XMJszfEzUk1lV0syOZPIKgYxQFCEUEwkjZKEW-pqAib62NEhIL8FQC0aK1NAOdL02RSkxpenmLmrq6AsUDfUSY6sw_RWDS7lDaKvWNG0yF-uA0hxnPGFvMFhyRFvFalMA54UgNwHiQqNvQ"
              alt="Modern corporate office with diverse team collaborating"
            />
          </div>
        </section>

        {/* Company History Bento */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-headline-md font-headline-md text-on-surface">
              A Legacy of Innovation
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">
              From humble beginnings to global enterprise partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Item 1 - Wide */}
            <div className="col-span-1 md:col-span-2 bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl shadow-level-1 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-primary-fixed opacity-30 rounded-full blur-3xl" />
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                2010: The Foundation
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant relative z-10">
                Founded with a simple premise: enterprise IT shouldn't be overly complex.
                We started by simplifying server deployments for mid-market clients,
                focusing heavily on reliability and straightforward architecture.
              </p>
            </div>
            {/* Bento Item 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl shadow-level-1 flex flex-col justify-between">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                trending_up
              </span>
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                  1M+
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Deployments Managed
                </p>
              </div>
            </div>
            {/* Bento Item 3 */}
            <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl shadow-level-1">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                public
              </span>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
                Global Reach
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Expanding operations to 15 countries by 2018.
              </p>
            </div>
            {/* Bento Item 4 - Wide, Blue */}
            <div className="col-span-1 md:col-span-2 bg-primary text-on-primary p-8 rounded-2xl shadow-level-1 relative overflow-hidden">
              <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
              <h3 className="text-headline-sm font-headline-sm mb-2 relative z-10">
                2024: The Future of Cloud
              </h3>
              <p className="text-body-md font-body-md text-primary-fixed-dim relative z-10">
                Today, we pioneer sustainable cloud architectures, helping enterprises
                achieve carbon-neutral IT operations without compromising on performance or
                security.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-headline-md font-headline-md text-on-surface">
              Guiding Vision
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Meet the minds behind our technical strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* CEO */}
            <div className="text-center space-y-6">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-primary-fixed rounded-full transform -translate-x-4 translate-y-4" />
                <img
                  alt="Sarah Jenkins - CEO Portrait"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-surface-container-lowest shadow-level-1"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr2e1HVu7jEL6vdXWLiDW9mc1JXN3xsUdI1zBu86-Ucika8DUSsEAEIHhV78gLS_OAc6nhnNemcZQcGw6S-sOhcelp-5SYD_NWJ03KliNQMNnsMZp8KMpfK5jjZsW1vPOTjAkFpeEnNcQLTkUASOT68X3mpeFv_ZumWu--18UY33vkZKCBQl3E7uVfCi5NdLp9XEIAvnEHuadwJ4j2nhOCwyexhcly_Zb4KLIdPOuq77PkwJqFZ_UzMFiIT4K8Nwvr2B2zqomx8J8"
                />
              </div>
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Sarah Jenkins
                </h3>
                <p className="text-label-md font-label-md text-primary">
                  Chief Executive Officer
                </p>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant italic">
                "We don't just build systems; we build the trust required to run global
                operations."
              </p>
            </div>

            {/* CTO */}
            <div className="text-center space-y-6">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-secondary-container rounded-full transform translate-x-4 translate-y-4" />
                <div className="relative z-10 w-full h-full rounded-full border-4 border-surface-container-lowest shadow-level-1 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="David Chen - CTO Portrait"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo1f0_RTs1iWCq63SmBosb80CMBsXDsPdEpxYZVg3pbH1ZmpQkR9ABOKYv6S0QfbgvMnC5F9OAO61uBglZyRDSsZOlgqAbQve4kEHhoZVCvMRKu4b4i4nZPSJpP_AJJ574Q7PfrwtlrkQ2YM1eGnE8XWrDXeJ1Jrw7VArrNAuISwyW4V_wM-tUZzhlUiZRXYfTpaURtUeII7GCa1oHihXCec20BYZQhxVB0ToN1DrSXr5_dO3w1qgfspAPr0-ZtlLx2NeTLzu2-lI"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  David Chen
                </h3>
                <p className="text-label-md font-label-md text-secondary">
                  Chief Technology Officer
                </p>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant italic">
                "Architecture is about anticipating the problems of tomorrow, today."
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility Commitment */}
        <section className="relative rounded-2xl overflow-hidden p-8 md:p-12 shadow-level-1">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-surface-container-high" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZirgaq0WXJE22pZIV8_cO9LlQiKicTRdxjKfuvDvUbvzVo5oHOb5sVvX0wC7Bkxi1XR8gu2hR9v1J-Nu3O1Gq2xl08MVCd-qPFaDJRTF8VHp1b9pDOK9Apo9QM7QODn5ITb9GWHu-SZKvuLgZ689fN5jO2FhBl9qSB4vmIP4fw-pHBwQvr1rE_mWT9Lx9oQ6aGg-rOoOOwfRlg8Ffm0Zu2fnwASstvDG-gLMvVLaDKIfFPXxwzI2eoFRvJHfA4lu9E4rPEFGEhNg')",
            }}
          />
          <div className="relative z-10 glass-card p-8 rounded-xl max-w-3xl mx-auto text-center space-y-6">
            <span
              className="material-symbols-outlined text-5xl text-primary block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              accessibility_new
            </span>
            <h2 className="text-headline-md font-headline-md text-on-surface">
              Our Approach to Accessibility
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              We believe technology should empower everyone. Accessibility is not an
              afterthought or a compliance checkbox; it is a fundamental pillar of our
              design and engineering processes. Every solution we deliver is rigorously
              tested against WCAG 2.1 AA standards to ensure inclusive digital experiences
              for all users, regardless of ability.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-12 pb-12">
          <div className="text-center space-y-4">
            <h2 className="text-headline-md font-headline-md text-on-surface">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-level-1 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {val.icon}
                  </span>
                </div>
                <h3 className="text-label-md font-label-md text-on-surface">{val.title}</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer description="© 2024 TechSolutions Enterprise. All rights reserved." />
    </div>
  )
}
