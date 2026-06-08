import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Reach', href: '#reach' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-4 pointer-events-none">

      {/* Floating pill navbar */}
      <div
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-xl shadow-ink/10 border border-border'
            : 'bg-white/60 backdrop-blur-md border border-white/80 shadow-lg shadow-ink/5'
        } rounded-full px-4 h-14 flex items-center justify-between`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 pointer-events-auto"
        >
          <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center text-white font-display font-bold text-base">
            J
          </div>
          <span className="font-display font-semibold text-ink text-base">
            Jogal<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-1.5 rounded-full text-sm font-body font-medium text-muted hover:text-ink hover:bg-tag transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 font-body font-medium text-xs transition-colors duration-200"
          >
            WhatsApp
          </a>
          <button
            onClick={() => handleNavClick('#contact')}
            className="bg-ink text-white rounded-full px-4 py-2 font-body font-medium text-xs hover:bg-accent transition-colors duration-200"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-full hover:bg-tag transition-colors pointer-events-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown — also floating pill */}
      <div
        className={`pointer-events-auto w-full max-w-5xl mt-2 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border border-border rounded-3xl shadow-xl shadow-ink/10 px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-2.5 rounded-full text-sm font-medium text-ink hover:bg-tag transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-3 pt-3 border-t border-border">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 text-white rounded-full py-2.5 font-body font-medium text-sm transition-colors hover:bg-green-600"
            >
              WhatsApp
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="flex-1 bg-ink text-white rounded-full py-2.5 font-body font-medium text-sm hover:bg-accent transition-colors"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}