import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

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
          NovaTech
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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
          ))}
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
