function MarqueeRow({ items, direction = 'left' }) {
  const doubled = [...items, ...items]
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
  return (
    <div className="bg-ink overflow-hidden w-full py-1.5">
      <div
        className={`flex whitespace-nowrap ${animClass}`}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-4 ${
              item === '✦'
                ? 'text-accent text-base'
                : 'text-white text-[13px] sm:text-[14px] uppercase font-semibold tracking-[0.18em]'
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  const allServices = [
    'Movie Promotion',
    'Song Promotion',
    'Brand Promotion',
    'App Promotion',
    'Web Series',
    'Personal Branding',
    'OTT Promotion',
    'Startup Growth',
    'Celebrity PR',
    'Event Marketing',
    'Social Media',
  ]

  const half = Math.ceil(allServices.length / 2)
  const topServices = allServices.slice(0, half)
  const bottomServices = allServices.slice(half)

  const interleave = (arr) => arr.flatMap((item) => [item, '✦'])

  const topItems = interleave(topServices)
  const bottomItems = interleave(bottomServices)

  return (
    <div className="bg-cream overflow-hidden select-none flex flex-col gap-[3px] py-[3px]">
      <MarqueeRow items={topItems} direction="left" />
      <MarqueeRow items={bottomItems} direction="right" />
    </div>
  )
}