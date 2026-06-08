import { ArrowUpRight } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Work() {
  const { campaigns } = siteData

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="animate-on-scroll">
            <span className="section-label">Selected Work</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-3 leading-tight">
              Campaigns that<br />
              <span className="italic text-accent">moved the needle.</span>
            </h2>
          </div>
          <p className="animate-on-scroll font-body text-muted max-w-xs leading-relaxed text-sm">
            A curated look at some of our most impactful campaigns across industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {campaigns.map((campaign, i) => (
            <div
              key={campaign.id}
              className="animate-on-scroll card-base group overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
                {/* Arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight size={16} className="text-ink" />
                </div>
                {/* Category pill */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-ink rounded-full px-3 py-1 font-body text-xs font-medium">
                    {campaign.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-ink group-hover:text-accent transition-colors duration-200">
                  {campaign.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-body text-sm text-muted">{campaign.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="font-body text-muted mb-5 text-sm">Want to see more? We have 800+ campaigns in our portfolio.</p>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="pill-btn-outline"
          >
            Request Full Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
