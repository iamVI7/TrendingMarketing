import { MapPin, Briefcase, Award, TrendingUp, Users, Star, Clock } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function About() {
  const { agency, pastAgencies } = siteData

  return (
    <section id="about" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">

        {/* ── Mobile-only: Logo + Pill — centered ── */}
        <div className="flex items-center justify-center gap-3 mb-8 lg:hidden">
          <div className="w-14 h-14 rounded-full border-2 border-[#E8470A]/25 bg-white shadow-[0_4px_16px_rgba(232,71,10,0.18)] overflow-hidden flex items-center justify-center flex-shrink-0">
            <img
              src="/TRENDINGMARKETING_LOGO.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="inline-flex items-center border border-[#E8470A]/25 bg-[#E8470A]/6 text-[#E8470A] text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 rounded-full font-medium"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Trending Marketing
          </span>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Photo + Stats ── */}
          <div className="flex flex-col gap-3">

            {/* Photo */}
            <div className="relative mx-6 sm:mx-0">
              <div
                className="relative rounded-3xl overflow-hidden border border-black/8 shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src="/IMAGE.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Nameplate */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="text-white font-bold text-lg leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
                  >
                    {agency.founder}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin size={10} className="text-white/60" />
                    <span
                      className="text-white/60 text-[10px]"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {agency.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── 300M+ chip — top-left ── */}
              <div className="absolute -top-3 -left-3 z-10 bg-white rounded-2xl px-3 py-2 shadow-[0_6px_18px_rgba(0,0,0,0.13)] flex items-center gap-2 border border-black/6">
                <div className="w-7 h-7 rounded-lg bg-[#E8470A]/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={12} className="text-[#E8470A]" strokeWidth={2} />
                </div>
                <div>
                  <div
                    className="text-[#111110] font-bold text-[13px] leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    300M+
                  </div>
                  <div
                    className="text-[#1A1A1A]/45 text-[8px] tracking-widest uppercase mt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Total Reach
                  </div>
                </div>
              </div>

              {/* ── 800+ chip — bottom-right ── */}
              <div className="absolute -bottom-3 -right-3 z-10 bg-white rounded-2xl px-3 py-2 shadow-[0_6px_18px_rgba(0,0,0,0.13)] flex items-center gap-2 border border-black/6">
                <div className="w-7 h-7 rounded-lg bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0">
                  <Star size={12} className="text-[#22c55e]" strokeWidth={2} />
                </div>
                <div>
                  <div
                    className="text-[#111110] font-bold text-[13px] leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    800+
                  </div>
                  <div
                    className="text-[#1A1A1A]/45 text-[8px] tracking-widest uppercase mt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Campaigns
                  </div>
                </div>
              </div>

              {/* ── Years badge — top-right ── */}
              <div className="absolute -top-3 -right-3 z-10 bg-[#E8470A] text-white rounded-2xl px-3.5 py-3 shadow-[0_6px_20px_rgba(232,71,10,0.38)] text-center">
                <div
                  className="font-bold text-[15px] leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  5+
                </div>
                <div
                  className="text-white/75 text-[8px] tracking-widest uppercase mt-1"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Yrs Exp.
                </div>
              </div>
            </div>

            {/* Stats — 2×2 */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {[
                { icon: TrendingUp, value: agency.stats[0]?.value ?? '800+',  label: agency.stats[0]?.label ?? 'Campaigns Delivered' },
                { icon: Users,      value: agency.stats[1]?.value ?? '300M+', label: agency.stats[1]?.label ?? 'Follower Reach' },
                { icon: Star,       value: agency.stats[2]?.value ?? '10M+',  label: agency.stats[2]?.label ?? 'Owner Base' },
                { icon: Clock,      value: agency.stats[3]?.value ?? '5+',    label: agency.stats[3]?.label ?? 'Years of Experience' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl border border-black/8 px-3 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:border-[#E8470A]/20 transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#E8470A]/8 group-hover:bg-[#E8470A]/14 flex items-center justify-center mb-2 transition-colors duration-200">
                    <stat.icon size={13} className="text-[#E8470A]" strokeWidth={1.8} />
                  </div>
                  <div
                    className="font-bold text-[#111110] text-[1.1rem] leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[#1A1A1A]/38 text-[9px] tracking-wide uppercase mt-1 leading-tight"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex flex-col gap-6 pt-2">

            {/* Logo + Pill — desktop only */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-[#E8470A]/25 bg-white shadow-[0_4px_16px_rgba(232,71,10,0.18)] overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src="/TRENDINGMARKETING_LOGO.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="inline-flex items-center border border-[#E8470A]/25 bg-[#E8470A]/6 text-[#E8470A] text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 rounded-full font-medium"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Trending Marketing
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-[#111110] leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                fontWeight: 700,
              }}
            >
              Built on strategy,
              <br />
              <em className="not-italic text-[#E8470A]">powered by culture.</em>
            </h2>

            {/* Body — justified */}
            <p
              className="text-[#1A1A1A]/52 leading-relaxed text-[0.95rem] max-w-xl text-justify"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Founded by <strong className="text-[#111110] font-semibold">{agency.founder}</strong>, Trending Marketing emerged from a passion for storytelling and a sharp eye for what makes content spread. Over 5 years, we've grown into a full-service agency trusted by Bollywood production houses, independent artists, and consumer brands alike.
            </p>

            {/* Agency Experience */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-lg bg-[#E8470A]/10 flex items-center justify-center">
                  <Briefcase size={12} className="text-[#E8470A]" strokeWidth={1.8} />
                </div>
                <span
                  className="text-[#111110] text-[9px] tracking-[0.2em] uppercase font-semibold"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Agency Experience
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {pastAgencies.map((ag, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl border border-black/7 px-5 py-3.5 flex items-center justify-between hover:border-[#E8470A]/22 hover:shadow-[0_4px_16px_rgba(232,71,10,0.06)] transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[#E8470A]/40 text-[11px] font-bold tabular-nums"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        0{i + 1}
                      </span>
                      <div>
                        <div
                          className="text-[#111110] font-medium text-sm"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {ag.name}
                        </div>
                        <div
                          className="text-[#1A1A1A]/35 text-[10px] mt-0.5"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {ag.location} Office
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-[#E8470A]/6 border border-[#E8470A]/12 rounded-full px-3 py-1">
                      <Award size={11} className="text-[#E8470A]" strokeWidth={1.8} />
                      <span
                        className="text-[#E8470A] text-[10px] font-medium"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {ag.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}