import { Quote } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Testimonials() {
  const { testimonials } = siteData

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="section-label">Client Love</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-3 leading-tight">
            Brands trust us with<br />
            <span className="italic text-accent">their biggest moments.</span>
          </h2>
        </div>

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
