import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const services = [
  {
    icon: 'cloud',
    iconBg: 'bg-primary-container',
    iconColor: 'text-primary',
    checkColor: 'text-primary',
    title: 'Cloud Computing',
    description:
      'Scalable, secure, and resilient cloud infrastructure design and migration services to modernize your operational capabilities.',
    features: [
      'Architecture Design & Migration',
      'Multi-Cloud Strategies',
      'Cost Optimization & Governance',
    ],
  },
  {
    icon: 'shield',
    iconBg: 'bg-error-container',
    iconColor: 'text-error',
    checkColor: 'text-error',
    title: 'Cybersecurity',
    description:
      'Protect critical assets with robust, intelligence-driven security protocols, risk assessments, and compliance management.',
    features: [
      'Threat Detection & Response',
      'Vulnerability Assessments',
      'Zero Trust Implementation',
    ],
  },
  {
    icon: 'code',
    iconBg: 'bg-tertiary-container',
    iconColor: 'text-on-tertiary-container',
    checkColor: 'text-tertiary',
    title: 'Software Development',
    description:
      'Custom enterprise application development tailored to streamline workflows, enhance customer experiences, and drive innovation.',
    features: [
      'Full-Stack Development',
      'API Integration & Microservices',
      'Legacy System Modernization',
    ],
  },
  {
    icon: 'lightbulb',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
    checkColor: 'text-secondary',
    title: 'IT Consulting',
    description:
      'Strategic advisory services to align your technology investments with long-term business objectives and ensure competitive advantage.',
    features: [
      'Digital Transformation Strategy',
      'IT Infrastructure Audits',
      'Vendor Management',
    ],
  },
]

export default function Solutions() {
  return (
    <div className="text-on-background font-body-md antialiased flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-lg py-xl flex flex-col gap-xl">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto flex flex-col gap-md items-center">
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface">
            Enterprise IT Solutions
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Transform your business infrastructure with our comprehensive suite of managed
            services and technical consulting designed for scale, security, and reliability.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col gap-md shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-2`}
              >
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {service.title}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant flex-grow">
                {service.description}
              </p>
              <ul className="flex flex-col gap-2 mt-4">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-body-sm font-body-sm text-on-surface-variant"
                  >
                    <span
                      className={`material-symbols-outlined ${service.checkColor} text-sm mt-0.5`}
                    >
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-surface-container-low rounded-xl p-xl flex flex-col md:flex-row items-center justify-between gap-lg mt-lg">
          <div className="flex flex-col gap-sm max-w-xl">
            <h2 className="text-headline-md font-headline-md text-on-surface">
              Ready to transform your IT infrastructure?
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Connect with our senior technical advisors to discuss your unique challenges
              and explore tailored solutions.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-8 py-4 rounded font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors active:scale-95 whitespace-nowrap shadow-sm"
          >
            Schedule a Consultation
          </Link>
        </section>
      </main>

      <Footer description="© 2024 TechSolutions Enterprise. All rights reserved." />
    </div>
  )
}
