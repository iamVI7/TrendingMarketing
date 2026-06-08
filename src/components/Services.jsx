import { useRef } from 'react'
import { siteData } from '../data/siteData'

const row1 = siteData.services.slice(0, 6)
const row2 = siteData.services.slice(6, 12)

export default function Services() {
  const track1Ref = useRef(null)
  const track2Ref = useRef(null)

  const pause  = () => {
    if (track1Ref.current) track1Ref.current.style.animationPlayState = 'paused'
    if (track2Ref.current) track2Ref.current.style.animationPlayState = 'paused'
  }
  const resume = () => {
    if (track1Ref.current) track1Ref.current.style.animationPlayState = 'running'
    if (track2Ref.current) track2Ref.current.style.animationPlayState = 'running'
  }

  return (
    <section
      id="services"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background: '#141210',
        margin: '0 12px',
        borderRadius: 28,
      }}
    >
      <style>{`
        @keyframes marqueeLeft  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0); }    }
        .track-left  { display: flex; gap: 20px; animation: marqueeLeft  28s linear infinite; }
        .track-right { display: flex; gap: 20px; animation: marqueeRight 32s linear infinite; }

        @media (max-width: 639px) {
          .track-left, .track-right {
            animation: none !important;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 8px;
          }
          .track-left::-webkit-scrollbar,
          .track-right::-webkit-scrollbar { display: none; }
          .track-left  { scrollbar-width: none; }
          .track-right { scrollbar-width: none; }
        }
      `}</style>

      {/* Background glows */}
      <div className="pointer-events-none absolute" style={{ top: '-80px', right: '-60px', width: 380, height: 380, background: 'radial-gradient(circle, rgba(255,90,60,0.08) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute" style={{ bottom: '-60px', left: '-40px', width: 300, height: 300, background: 'radial-gradient(circle, rgba(150,50,255,0.06) 0%, transparent 70%)' }} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 mb-14">

        {/* Label pill */}
        <div style={{
          display: 'flex', alignItems: 'center',
          fontFamily: "'DM Mono',monospace",
          fontSize: 10, letterSpacing: '0.2em',
          color: '#ff5a3c', textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid rgba(255,90,60,0.25)',
            background: 'rgba(255,90,60,0.06)',
            borderRadius: 100, padding: '6px 14px',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff5a3c', display: 'block' }} />
            What We Do
          </span>
        </div>

        {/* Two-column: headline left, body copy right */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 48, flexWrap: 'wrap' }}>
          {/* Left — headline */}
          <div style={{ flex: '0 0 auto' }}>
            <h2 style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#f0ede8',
              fontWeight: 700,
              marginBottom: 0,
            }}>
              Full-spectrum<br />
              <em className="not-italic" style={{ color: '#ff5a3c' }}>promotion.</em>
            </h2>
          </div>

          {/* Right — body copy, far right, bottom-aligned */}
          <div style={{ marginLeft: 'auto', maxWidth: 340, paddingBottom: 6, textAlign: 'right' }}>
            <p style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'rgba(240,237,232,0.45)',
              lineHeight: 1.65,
              margin: 0,
            }}>
              From single releases to year-long campaigns — with precision.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-5" onMouseEnter={pause} onMouseLeave={resume}>
        <div className="overflow-hidden">
          <div ref={track1Ref} className="track-left px-5 sm:px-0">
            {[...row1, ...row1].map((item, i) => (
              <MarqueeCard key={i} item={item} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div ref={track2Ref} className="track-right px-5 sm:px-0">
            {[...row2, ...row2].map((item, i) => (
              <MarqueeCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      <p className="sm:hidden text-center font-mono text-[10px] tracking-widest uppercase text-white/20 mt-6">
        swipe to explore →
      </p>
    </section>
  )
}

function MarqueeCard({ item }) {
  return (
    <div
      className="relative flex-shrink-0 w-64 h-40 sm:w-72 sm:h-44 rounded-2xl overflow-hidden border border-white/10 cursor-default group/card transition-all duration-500 hover:border-white/25 hover:scale-[1.03]"
      style={{ scrollSnapAlign: 'start' }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/card:opacity-75 group-hover/card:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-3 left-4 font-mono text-[11px] tracking-widest uppercase text-white/90 opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
        {item.title}
      </span>
    </div>
  )
}