import { Link } from 'react-router-dom'

const cols = [
  { heading: 'Company',    links: [['About', '/about'], ['Services', '/services'], ['Case Studies', '/case-studies'], ['Contact', '/contact']] },
  { heading: 'Services',   links: [['AI Strategy', '/services'], ['Cloud Architecture', '/services'], ['Data Analytics', '/services'], ['Cybersecurity', '/services']] },
  { heading: 'Industries', links: [['Financial Services', '/'], ['Healthcare', '/'], ['Retail', '/'], ['Energy', '/']] },
  { heading: 'Legal',      links: [['Privacy Policy', '/'], ['Terms of Service', '/'], ['Cookie Policy', '/']] },
]

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-secondary-fixed">
      {/* Main grid */}
      <div className="max-w-container-max mx-auto px-margin-desktop py-section-gap grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {/* Brand column */}
        <div className="col-span-2 sm:col-span-3 md:col-span-1">
          <Link to="/" className="inline-block font-extrabold text-xl mb-5 text-on-surface" style={{ fontFamily: 'Space Grotesk' }}>
            NovaTech
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 max-w-[220px]">
            Engineering precision for a data-driven future. Global HQ in New York.
          </p>
          <div className="flex gap-3">
            {['public', 'lan', 'hub'].map((icon) => (
              <button
                key={icon}
                className="w-9 h-9 rounded-lg border border-secondary-fixed flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label={icon}
              >
                <span className="material-symbols-outlined text-base">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
          <div key={col.heading}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-5">{col.heading}</h4>
            <ul className="space-y-3">
              {col.links.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="text-on-surface-variant text-sm hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-container-max mx-auto px-margin-desktop py-6 border-t border-secondary-fixed/40 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-on-surface-variant">
          © {new Date().getFullYear()} NovaTech Solutions. Engineering precision for a data-driven future.
        </p>
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Status: Systems Operational</span>
      </div>
    </footer>
  )
}
