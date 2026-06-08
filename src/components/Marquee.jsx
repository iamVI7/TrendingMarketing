const items = [
  'Movie Promotion', '✦', 'Song Promotion', '✦', 'Brand Promotion',
  'App Promotion', '✦', 'Influencer Marketing', '✦', 'Web Series',
  'Personal Branding', '✦', 'OTT Promotion', '✦', 'Startup Growth',
  'Celebrity PR', '✦', 'Event Marketing', '✦', 'Social Media',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-ink text-white py-4 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-6 font-body text-sm font-medium tracking-wide ${
              item === '✦' ? 'text-accent text-base' : 'text-white/80'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
