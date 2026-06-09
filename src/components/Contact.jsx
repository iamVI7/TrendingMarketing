import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
import { siteData } from '../data/siteData'

const services = [
  'Movie Promotion', 'Song Promotion', 'Brand Promotion', 'App Promotion',
  'Influencer Marketing', 'Web Series', 'Personal Branding', 'Other',
]

export default function Contact() {
  const { agency } = siteData
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ink text-white relative overflow-hidden"
      style={{ margin: '0 12px', borderRadius: 28 }}>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="space-y-8">
            <div className="animate-on-scroll flex flex-col items-center text-center sm:items-start sm:text-left">

              {/* Pill label */}
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, letterSpacing: '0.2em',
                color: '#ff5a3c', textTransform: 'uppercase',
                border: '1px solid rgba(255,90,60,0.25)',
                background: 'rgba(255,90,60,0.06)',
                borderRadius: 100, padding: '6px 14px',
                marginBottom: 20,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff5a3c', display: 'block' }} />
                Get in Touch
              </span>

              {/* Headline */}
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                margin: 0,
              }}>
                Ready to make<br />
                <em className="not-italic" style={{ color: '#ff5a3c' }}>something viral?</em>
              </h2>
            </div>

            <p className="animate-on-scroll font-body text-white/50 leading-relaxed max-w-md text-center sm:text-left">
              Tell us about your project and we'll craft a custom strategy that puts your brand in front of the right audience, at the right time.
            </p>

            <div className="animate-on-scroll space-y-4 pt-4">
              {[
                { icon: Mail, label: 'Email', value: agency.email },
                { icon: Phone, label: 'Phone', value: agency.phone },
                { icon: MapPin, label: 'Location', value: agency.location },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-white/30 uppercase tracking-wide">{label}</div>
                    <div className="font-body text-sm text-white/80 mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form — untouched */}
          <div className="animate-on-scroll bg-white/5 border border-white/10 rounded-3xl p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-72 gap-4 text-center">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="font-display text-2xl font-semibold text-white">Message sent!</h3>
                <p className="font-body text-white/50 text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 font-body text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-white/40 uppercase tracking-wide mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jogal Govind"
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/60 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-white/40 uppercase tracking-wide mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Jogal@Govind.com"
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/60 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-white/40 uppercase tracking-wide mb-1.5 block">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white focus:outline-none focus:border-accent/60 transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="text-ink">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-ink">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs text-white/40 uppercase tracking-wide mb-1.5 block">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your campaign goals, timeline, and budget…"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent/60 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white rounded-full py-4 font-body font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}