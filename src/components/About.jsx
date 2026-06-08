import { MapPin, Briefcase, Award, TrendingUp, Users, Star, Clock } from 'lucide-react'
import { siteData } from '../data/siteData'

export default function About() {
  const { agency, pastAgencies } = siteData

  return (
    <section id="about" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Photo + Stats ── */}
          <div className="flex flex-col gap-3">

            {/* Photo */}
            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden border border-black/8 shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src="/IMAGE2.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover object-top"
                />
                {/* Strong bottom gradient so name is always legible */}
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

              {/* Years badge */}
              <div className="absolute -top-3 -right-3 z-10 bg-[#E8470A] text-white rounded-2xl px-3 py-2.5 shadow-[0_6px_20px_rgba(232,71,10,0.35)] text-center">
                <div
                  className="font-bold text-base leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  5+
                </div>
                <div
                  className="text-white/75 text-[8px] tracking-widest uppercase mt-0.5"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Yrs Exp.
                </div>
              </div>
            </div>

            {/* Stats — 2×2 modern cards */}
            <div className="grid grid-cols-2 gap-2">
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

            {/* Pill label */}
            <span
              className="inline-flex items-center gap-2 border border-[#E8470A]/25 bg-[#E8470A]/6 text-[#E8470A] text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full w-fit"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8470A]" />
              About the Agency
            </span>

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

            {/* Body */}
            <p
              className="text-[#1A1A1A]/52 leading-relaxed text-[0.95rem] max-w-xl"
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
                      {/* Number indicator */}
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