import { useState } from 'react'
import { Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Reach', href: '#reach' },
]

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubbed(true)
  }

  return (
    <footer className="text-[#111110]" style={{ background: '#FAF9F6', margin: '0 12px', borderRadius: 28 }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">

        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12">

          {/* Brand block */}
          <div className="space-y-5 max-w-sm flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                J
              </div>
              <div>
                <div className="font-display font-semibold text-[#111110] text-lg">Jogal Govind Ahir</div>
              </div>
            </div>
            <p className="font-body text-sm text-[#1A1A1A]/50 leading-relaxed text-center sm:text-left">
              Helping brands, films, and artists go viral through data-driven campaigns and a 300M+ follower network.
            </p>

            {/* Social icons */}
            <div className="flex items-center justify-center sm:justify-start gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-black/15 hover:border-accent hover:text-accent text-[#1A1A1A]/50 flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-[#1A1A1A]/40 hover:text-[#111110] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* WhatsApp CTA strip */}
        <div className="bg-black/[0.04] border border-black/8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <div className="font-display font-semibold text-[#111110]">Ready to go viral?</div>
            <div className="font-body text-sm text-[#1A1A1A]/50 mt-0.5">Chat with us directly on WhatsApp for a quick quote.</div>
          </div>
          <a
            href="https://wa.me/+919664816180"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-5 py-2.5 font-body font-medium text-sm transition-colors flex-shrink-0"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#1A1A1A]/30">
            © {new Date().getFullYear()} Jogal Govind Ahir. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#1A1A1A]/30">
            Trending Marketing · <span className="text-[#1A1A1A]/40">@trendingmarketing1</span>
          </p>
        </div>
      </div>
    </footer>
  )
}