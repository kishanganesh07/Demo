import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { servicesData } from '../data/servicesData'

const navLinks = [
  { label: 'Home',         to: '/' },
   { label: 'Services',     to: '/services' },
    { label: 'Case Studies', to: '/case-studies' },
  { label: 'About',        to: '/about' },

 
  { label: 'Contact',      to: '/contact' },
]


export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const isActive = (to) => location.pathname === to

  return (
    <header
      className="sticky top-0 w-full z-50 backdrop-blur-md border-b"
      style={{ background: 'rgba(250,251,229,0.92)', borderColor: 'rgba(198,201,171,0.3)' }}
    >
      <nav className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
        {/* Brand */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-on-background"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          MATRIX IT
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                <div key={link.label} className="group h-full flex items-center">
                  <Link
                    to={link.to}
                    className={
                      isActive(link.to)
                        ? 'text-sm font-bold text-primary border-b-2 border-primary pb-1 transition-colors h-full flex items-center'
                        : 'text-sm font-medium text-on-surface-variant hover:text-primary transition-colors h-full flex items-center'
                    }
                  >
                    {link.label}
                    <span className="material-symbols-outlined text-[16px] ml-1 group-hover:rotate-180 transition-transform duration-300">expand_more</span>
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-[80px] left-0 w-full bg-surface-container-lowest border-b border-secondary-fixed shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-40">
                    <div className="max-w-container-max mx-auto px-margin-desktop py-12 grid grid-cols-4 gap-8">
                      <div className="col-span-1">
                        <h3 className="text-xl font-bold font-['Space_Grotesk'] text-primary mb-4">Our Services</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                          We architect immutable IT infrastructure and sovereign AI systems for the world's most critical enterprises.
                        </p>
                        <Link to="/services" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                          View All Services <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                      <div className="col-span-3 grid grid-cols-3 gap-x-8 gap-y-6">
                        {servicesData.slice(0, 9).map(service => (
                          <Link key={service.id} to={`/services/${service.slug}`} className="group/item flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-surface-container-low transition-colors">
                            <span className="material-symbols-outlined text-primary bg-surface-container-high p-2 rounded-lg group-hover/item:bg-primary group-hover/item:text-[#1A1C1E] transition-colors">{service.icon}</span>
                            <div>
                              <div className="font-bold text-sm text-on-background group-hover/item:text-primary transition-colors mb-1">{service.title}</div>
                              <div className="text-xs text-on-surface-variant line-clamp-2">{service.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={link.label}
                to={link.to}
                className={
                  isActive(link.to)
                    ? 'text-sm font-bold text-primary border-b-2 border-primary pb-1 transition-colors'
                    : 'text-sm font-medium text-on-surface-variant hover:text-primary transition-colors'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
         
          <Link
            to="/contact"
            className="hidden lg:block px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-80 transition-all active:scale-95"
            style={{ background: '#dfff00', color: '#1A1C1E' }}
          >
            Schedule Consultation
          </Link>
          <button
            className="md:hidden material-symbols-outlined text-on-background"
            onClick={() => setOpen(!open)}
          >
            {open ? 'close' : 'menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-secondary-fixed px-margin-desktop py-6 flex flex-col gap-4 bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className={
                isActive(link.to)
                  ? 'text-sm font-bold text-primary py-2'
                  : 'text-sm font-medium text-on-surface-variant py-2 hover:text-primary transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="px-6 py-3 rounded-xl font-bold text-sm text-center mt-2"
            style={{ background: '#dfff00', color: '#1A1C1E' }}
          >
            Schedule Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
