// Items are split so each row shows different content simultaneously.
// Odd-indexed service items → row 1 (left), even-indexed → row 2 (right).
// Separators (✦) are kept in both rows independently.

const allServices = [
  'Movie Promotion',
  'Song Promotion',
  'Brand Promotion',
  'App Promotion',
  'Influencer Marketing',
  'Web Series',
  'Personal Branding',
  'OTT Promotion',
  'Startup Growth',
  'Celebrity PR',
  'Event Marketing',
  'Social Media',
]

// Split services into two halves — top row gets first half, bottom gets second half
const half = Math.ceil(allServices.length / 2)
const topServices = allServices.slice(0, half)   // 6 items
const bottomServices = allServices.slice(half)    // 6 items

// Interleave ✦ separators back in
const interleave = (arr) =>
  arr.flatMap((item) => [item, '✦'])

const topItems = interleave(topServices)
const bottomItems = interleave(bottomServices)

function MarqueeRow({ items, direction = 'left' }) {
  const doubled = [...items, ...items]
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="bg-ink overflow-hidden w-full py-3">
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
  return (
    <div className="bg-cream overflow-hidden select-none flex flex-col gap-[6px] py-[6px]">
      <MarqueeRow items={topItems} direction="left" />
      <MarqueeRow items={bottomItems} direction="right" />
    </div>
  )
}