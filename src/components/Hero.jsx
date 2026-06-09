import { ArrowRight, Play, MapPin } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function Hero() {
  const { agency } = siteData

  return (
    <section className="relative min-h-screen bg-[#FAF9F6] flex flex-col justify-center overflow-hidden pt-16">

      {/* ── Soft warm blob top-right ── */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#E8470A]/8 blur-[100px] z-0" />

      {/* ── Lighter blob bottom-left ── */}
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-amber-100/60 blur-[80px] z-0" />

      {/* ── Dot grid decoration ── */}
      <svg className="pointer-events-none absolute top-24 right-[38%] opacity-[0.07] z-0 hidden lg:block" width="180" height="180" viewBox="0 0 180 180">
        {Array.from({ length: 9 }).map((_, i) =>
          Array.from({ length: 9 }).map((_, j) => (
            <circle key={`${i}-${j}`} cx={i * 20 + 10} cy={j * 20 + 10} r="1.5" fill="#1A1A1A" />
          ))
        )}
      </svg>

      {/* ── Main layout ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 w-full py-6 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center w-full">

          {/* ════════ LEFT COLUMN ════════ */}
          <div className="flex flex-col gap-7 order-2 lg:order-1 items-center lg:items-start text-center lg:text-left">

            {/* Label pill */}
            <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0.05s' }}>
              <span
                className="inline-flex items-center gap-2 border border-[#E8470A]/25 bg-[#E8470A]/6 text-[#E8470A] text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8470A]" />
                Digital Marketing
              </span>
              <span className="text-[#1A1A1A]/35 text-xs hidden sm:block" style={{ fontFamily: "'DM Mono', monospace" }}>
                {agency.location}
              </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <h1
                className="leading-[0.95] tracking-[-0.03em] text-[#111110]"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                  fontWeight: 700,
                }}
              >
                We Make <em className="not-italic text-[#E8470A]">Brands</em>
                <br />
                Go Viral<span className="text-[#E8470A]">.</span>
              </h1>
            </div>

            {/* Subtext */}
            <p
              className="text-[#1A1A1A]/55 text-[1.05rem] leading-relaxed max-w-[460px] font-light animate-fade-up"
              style={{ animationDelay: '0.28s', fontFamily: "'DM Sans', sans-serif" }}
            >
              {agency.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 animate-fade-up" style={{ animationDelay: '0.38s' }}>
              <button
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2.5 bg-[#111110] hover:bg-[#E8470A] text-white font-semibold text-sm px-7 py-4 rounded-full transition-all duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View Our Work
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2.5 border border-[#1A1A1A]/20 hover:border-[#E8470A]/40 hover:text-[#E8470A] text-[#1A1A1A]/70 font-medium text-sm px-7 py-4 rounded-full transition-all duration-200 bg-white/60"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Play size={12} fill="currentColor" />
                Get in Touch
              </button>
            </div>

          </div>

          {/* ════════ RIGHT COLUMN — Photo ════════ */}
          <div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[370px] xl:max-w-[460px]">

              {/* Photo */}
              <div
                className="relative rounded-[2rem] overflow-hidden border border-black/8 shadow-[0_24px_80px_rgba(0,0,0,0.10)]"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src="/IMAGE2.jpeg"
                  alt="Agency founder"
                  className="w-full h-full object-cover object-top"
                />

                {/* Dark gradient at bottom for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* ── Name & Location overlay ── */}
                <div className="absolute bottom-5 right-5 z-10 text-right">
                  <p
                    className="text-white font-bold text-base leading-tight drop-shadow-md"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Jogal Govind Ahir
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <MapPin size={10} className="text-white/70" />
                    <p
                      className="text-white/70 text-[11px] tracking-wide"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Jamnagar, Gujarat
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}