import {
  Clapperboard, Music2, Shirt, UtensilsCrossed, Dumbbell, GraduationCap,
  Landmark, Building2, Plane, Tv2, HandHeart, Megaphone,
} from 'lucide-react'
import { siteData } from '../data/siteData'

const industryIcons = {
  'Bollywood & Film':     Clapperboard,
  'Independent Music':    Music2,
  'Fashion & Lifestyle':  Shirt,
  'Food & Restaurant':    UtensilsCrossed,
  'Fitness & Wellness':   Dumbbell,
  'EdTech & Courses':     GraduationCap,
  'FinTech & Apps':       Landmark,
  'Real Estate':          Building2,
  'Travel & Tourism':     Plane,
  'OTT & Web Series':     Tv2,
  'NGO & Social':         HandHeart,
  'Political Campaigns':  Megaphone,
}

export default function ClientIndustries() {
  const { clientIndustries } = siteData

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span
            className="inline-flex items-center gap-2 border border-[#E8470A]/25 bg-[#E8470A]/6 text-[#E8470A] text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8470A]" />
            Industries Served
          </span>
          <h2
            className="text-[#111110] leading-[1.05] tracking-[-0.03em]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
            }}
          >
            Worked with brands across
            <br />
            <em className="not-italic text-[#E8470A]">every major industry.</em>
          </h2>
        </div>

        {/* Industry grid — horizontal scroll on mobile, grid on sm+ */}
        <div
          className="flex sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-3 animate-on-scroll overflow-x-auto pb-2 sm:pb-0 snap-x snap-mandatory sm:snap-none"
          style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clientIndustries.map((industry, i) => {
            const Icon = industryIcons[industry.name] ?? Megaphone
            return (
              <div
                key={i}
                className="group relative bg-white border border-black/8 rounded-2xl px-3 py-6 flex flex-col items-center gap-3 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#E8470A]/30 hover:shadow-[0_8px_24px_rgba(232,71,10,0.08)] transition-all duration-300 cursor-default flex-shrink-0 w-[130px] sm:w-auto snap-start"
              >
                {/* Hover tint */}
                <div className="absolute inset-0 rounded-2xl bg-[#E8470A]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon container */}
                <div className="relative w-11 h-11 rounded-xl bg-[#F5F4F1] group-hover:bg-[#E8470A]/10 flex items-center justify-center transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-[#1A1A1A]/50 group-hover:text-[#E8470A] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Label */}
                <span
                  className="text-[#1A1A1A]/60 group-hover:text-[#111110] text-[11px] leading-tight font-medium transition-colors duration-200 relative"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {industry.name}
                </span>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-8 bg-[#E8470A] rounded-full transition-all duration-300" />
              </div>
            )
          })}
        </div>

        {/* Bottom tagline */}
        <p
          className="text-center text-[#1A1A1A]/35 text-sm mt-10 animate-on-scroll"
          style={{ fontFamily: "'DM Mono', monospace", letterSpacing: '0.05em' }}
        >
          Swipe to see more →
        </p>

      </div>
    </section>
  )
}