import { Quote } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Testimonials() {
  const { testimonials } = siteData

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 animate-on-scroll">

          {/* Pill label */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: "'DM Mono', monospace",
            fontSize: 10, letterSpacing: '0.2em',
            color: '#ff5a3c', textTransform: 'uppercase',
            border: '1px solid rgba(255,90,60,0.25)',
            background: 'rgba(255,90,60,0.06)',
            borderRadius: 100, padding: '6px 14px',
            marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff5a3c', display: 'block' }} />
            Client Love
          </span>

          {/* Headline */}
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#1a1714',
            margin: 0,
          }}>
            Brands trust us with<br />
            <em className="not-italic" style={{ color: '#ff5a3c' }}>their biggest moments.</em>
          </h2>
        </div>

        {/* Grid — untouched */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="animate-on-scroll card-base p-7 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <Quote size={24} className="text-accent/30" />
                <span className="bg-accent/10 text-accent rounded-full px-3 py-1 font-mono text-xs font-semibold">
                  {testimonial.result}
                </span>
              </div>

              <p className="font-body text-muted leading-relaxed flex-1 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-body font-semibold text-sm text-ink">{testimonial.name}</div>
                  <div className="font-body text-xs text-muted mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}