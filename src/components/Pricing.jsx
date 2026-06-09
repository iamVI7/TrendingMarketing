import { Check, MessageCircle } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Pricing() {
  const { pricing } = siteData

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="section-label">Pricing</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-3 leading-tight">
            Transparent plans,<br />
            <span className="italic text-accent">real results.</span>
          </h2>
          <p className="font-body text-muted mt-5 max-w-xl mx-auto leading-relaxed">
            Every campaign is custom — these are our starting packages. We'll tailor a plan to your goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pricing.map((plan, i) => (
            <div
              key={i}
              className={`animate-on-scroll relative rounded-3xl border p-7 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? 'bg-ink text-white border-ink shadow-2xl scale-[1.02] lg:scale-[1.04]'
                  : 'bg-white border-border hover:border-accent/30 hover:shadow-lg'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white rounded-full px-4 py-1 font-body text-xs font-semibold tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className={`font-mono text-xs uppercase tracking-[0.15em] mb-3 ${plan.highlight ? 'text-accent' : 'text-muted'}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1">
                  <span className={`font-display font-bold text-4xl ${plan.highlight ? 'text-white' : 'text-ink'}`}>
                    {plan.price}
                  </span>
                  <span className={`font-body text-sm mb-1.5 ${plan.highlight ? 'text-white/50' : 'text-muted'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`font-body text-sm mt-3 leading-relaxed ${plan.highlight ? 'text-white/60' : 'text-muted'}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-7">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlight ? 'bg-accent' : 'bg-accent/10'
                    }`}>
                      <Check size={10} className={plan.highlight ? 'text-white' : 'text-accent'} strokeWidth={3} />
                    </div>
                    <span className={`font-body text-sm ${plan.highlight ? 'text-white/80' : 'text-muted'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/+919664816180"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 rounded-full py-3.5 font-body font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlight
                    ? 'bg-accent text-white hover:bg-accent/90'
                    : 'bg-ink text-white hover:bg-accent'
                }`}
              >
                <MessageCircle size={15} />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-sm text-muted mt-8 animate-on-scroll">
          Need something custom? <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="text-accent hover:underline font-medium"
          >
            Let's talk
          </button> — we build campaigns for every budget.
        </p>
      </div>
    </section>
  )
}
