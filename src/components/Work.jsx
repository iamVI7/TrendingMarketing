import { ArrowUpRight } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Work() {
  const { campaigns } = siteData

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header — centered, matching Industries Served style */}
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
            Selected Work
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
            Campaigns that<br />
            <em className="not-italic" style={{ color: '#ff5a3c' }}>moved the needle.</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {campaigns.map((campaign) => (
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
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight size={16} className="text-ink" />
                </div>
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

      </div>
    </section>
  )
}