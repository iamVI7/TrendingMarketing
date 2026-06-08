import { useState, useRef } from 'react'

const accounts = [
  { handle: '@justindianlove', followers: '950', niche: 'Indian Content',    image: '/JUSTINDIANLOVE.jpeg' },
  { handle: '@ek_teri_kahani', followers: '560', niche: 'Emotional Stories', image: 'https://placehold.co/400x533/1a1228/ff5a3c?text=@ek_teri_kahani' },
  { handle: '@heartfelthumorr',followers: '550', niche: 'Humor & Lifestyle', image: 'https://placehold.co/400x533/1a2012/ff5a3c?text=@heartfelthumorr' },
  { handle: '@imgdedits',       followers: '250', niche: 'Creative Edits',   image: 'https://placehold.co/400x533/28201a/ff5a3c?text=@imgdedits' },
  { handle: '@7.07adwriter',    followers: '260', niche: 'Ad Writing',       image: 'https://placehold.co/400x533/201a28/ff5a3c?text=@7.07adwriter' },
  { handle: '@heartxgram_',     followers: '220', niche: 'Lifestyle',        image: 'https://placehold.co/400x533/281a1a/ff5a3c?text=@heartxgram_' },
  { handle: '@vibecraze',       followers: '150', niche: 'Viral Content',    image: 'https://placehold.co/400x533/1a1228/ff5a3c?text=@vibecraze' },
  { handle: '@adultbhau_',      followers: '160', niche: 'Humor',            image: 'https://placehold.co/400x533/2d1a12/ff5a3c?text=@adultbhau_' },
  { handle: '@crazyypoints',    followers: '110', niche: 'Points & Tips',    image: 'https://placehold.co/400x533/1a2012/ff5a3c?text=@crazyypoints' },
  { handle: '@adwriter777',     followers: '70',  niche: 'Ad Writing',       image: 'https://placehold.co/400x533/28201a/ff5a3c?text=@adwriter777' },
  { handle: '@imadwriter',      followers: '60',  niche: 'Copywriting',      image: 'https://placehold.co/400x533/201a28/ff5a3c?text=@imadwriter' },
  { handle: '@filmy.mojj',      followers: '50',  niche: 'Bollywood',        image: 'https://placehold.co/400x533/281a1a/ff5a3c?text=@filmy.mojj' },
]

const platforms = [
  'Spotify','JioSaavn','Gaana','Apple Music','Amazon Music','YouTube Music',
  'Wynk Music','Hungama','SoundCloud','TIDAL','Deezer','Pandora','Resso',
  'Boomplay','Audiomack','KKBOX','Anghami','Napster','Qobuz','iHeartRadio',
  'TikTok','Instagram','Facebook','Snapchat',
]

const placeholderGradients = [
  'linear-gradient(135deg, #2d1a12 0%, #1a120e 60%, #0f0e0c 100%)',
  'linear-gradient(135deg, #1a1228 0%, #120e1a 60%, #0f0e0c 100%)',
  'linear-gradient(135deg, #1a2012 0%, #121a0e 60%, #0f0e0c 100%)',
  'linear-gradient(135deg, #28201a 0%, #1a1612 60%, #0f0e0c 100%)',
  'linear-gradient(135deg, #201a28 0%, #16121a 60%, #0f0e0c 100%)',
  'linear-gradient(135deg, #281a1a 0%, #1a1212 60%, #0f0e0c 100%)',
]

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ width: 14, height: 14 }}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
    </svg>
  )
}

function AccountCard({ account, index, isNew }) {
  const [hovered, setHovered] = useState(false)

  const bgStyle = account.image
    ? { backgroundImage: `url(${account.image})`, backgroundSize: 'cover', backgroundPosition: 'center top' }
    : { background: placeholderGradients[index % placeholderGradients.length] }

  function handleClick() {
    const handle = account.handle.replace('@', '')
    window.open(`https://instagram.com/${handle}`, '_blank')
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={isNew ? 'card-reveal' : ''}
      style={{
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'pointer',
        border: `1px solid ${hovered ? 'rgba(255,90,60,0.35)' : '#272421'}`,
        aspectRatio: '3 / 4',
        background: '#181714',
        boxShadow: hovered ? '0 10px 32px rgba(255,90,60,0.10)' : 'none',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        ...bgStyle,
        transform: hovered ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform 0.5s ease',
      }} />

      {/* Top vignette */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '45%',
        background: 'linear-gradient(to bottom, rgba(10,8,6,0.78) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 2,
      }} />

      {/* Bottom vignette */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '62%',
        background: 'linear-gradient(to top, rgba(8,6,4,0.97) 0%, rgba(8,6,4,0.6) 55%, transparent 100%)',
        pointerEvents: 'none', zIndex: 2,
      }} />

      {/* Hover glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(255,90,60,0.08) 0%, transparent 60%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s',
        pointerEvents: 'none', zIndex: 3,
      }} />

      {/* IG icon — top left */}
      <div style={{ position: 'absolute', top: 12, left: 14, zIndex: 4 }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: 'linear-gradient(135deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <IgIcon />
        </div>
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px',
        zIndex: 4,
      }}>
        <div style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 11, fontWeight: 600,
          color: '#d8d4cc',
          marginBottom: 3,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          textShadow: '0 1px 6px rgba(0,0,0,0.9)',
        }}>
          {account.handle}
        </div>

        <div style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontSize: 28, color: '#f0ede8', lineHeight: 1,
          marginBottom: 5,
          textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          fontWeight: 700,
        }}>
          {account.followers}
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 13, color: '#ff5a3c' }}>K</span>
        </div>

        <div style={{
          display: 'inline-block',
          fontFamily: "'DM Mono',monospace",
          fontSize: 9, color: '#bab6ae',
          background: 'rgba(0,0,0,0.60)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 4, padding: '2px 7px',
          backdropFilter: 'blur(4px)',
        }}>
          {account.niche}
        </div>
      </div>
    </div>
  )
}

const VISIBLE_COUNT = 4

export default function Reach() {
  const [expanded, setExpanded] = useState(false)
  const gridRef = useRef(null)

  const hiddenCount = accounts.length - VISIBLE_COUNT

  function handleExpand() {
    if (expanded) {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => setExpanded(false), 300)
    } else {
      setExpanded(true)
    }
  }

  return (
    <section
      id="reach"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: '#0f0e0c', margin: '0 12px', borderRadius: 28 }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute" style={{ top: '-100px', right: '-60px', width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,90,60,0.10) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute" style={{ bottom: '-60px', left: '-40px', width: 300, height: 300, background: 'radial-gradient(circle, rgba(150,50,255,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="mb-10">
          {/* Label pill */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
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
              Our Network
            </span>
          </div>

          {/* Two-column row: headline left, body copy right */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 48, flexWrap: 'wrap' }}>
            {/* Left — headline + subline */}
            <div style={{ flex: '0 0 auto' }}>
              <h2 style={{
                fontFamily: "'Playfair Display',Georgia,serif",
                fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: '#f0ede8',
                fontWeight: 700,
                marginBottom: 10,
              }}>
                300M+<br />
                <em className="not-italic" style={{ color: '#ff5a3c' }}>followers.</em>
              </h2>
              <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                color: '#ff5a3c',
                margin: 0,
              }}>
                Your audience is here.
              </p>
            </div>

            {/* Right — body copy pushed to far right, bottom-aligned */}
            <div style={{ marginLeft: 'auto', maxWidth: 340, paddingBottom: 6, textAlign: 'right' }}>
              <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'rgba(240,237,232,0.45)',
                lineHeight: 1.65,
                margin: 0,
              }}>
                We own and manage a network of high-engagement Instagram pages spanning entertainment, humor, lifestyle, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Accounts grid — original 4-col but slightly tighter */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {accounts.map((account, i) => {
            const isHidden = !expanded && i >= VISIBLE_COUNT
            const isNew = expanded && i >= VISIBLE_COUNT
            return (
              <div
                key={account.handle}
                style={{ display: isHidden ? 'none' : 'block' }}
              >
                <AccountCard account={account} index={i} isNew={isNew} />
              </div>
            )
          })}
        </div>

        {/* Expand button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20 }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #2a2724, transparent)' }} />
          <button
            onClick={handleExpand}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#181714', border: '1px solid #2e2b26',
              borderRadius: 100, padding: '9px 20px',
              fontFamily: "'DM Mono',monospace", fontSize: 11,
              color: '#9a9690', cursor: 'pointer',
              transition: 'all 0.25s', whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,90,60,0.35)'; e.currentTarget.style.color = '#ff5a3c'; e.currentTarget.style.background = '#1e1b17' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2e2b26'; e.currentTarget.style.color = '#9a9690'; e.currentTarget.style.background = '#181714' }}
          >
            <span>{expanded ? 'Show less' : `View ${hiddenCount} more accounts`}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg" width="14" height="14"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ transition: 'transform 0.3s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #2a2724, transparent)' }} />
        </div>

        {/* Platform section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '40px 0 20px' }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #2a2724, transparent)' }} />
          <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, letterSpacing: '0.15em', color: '#3d3a35', whiteSpace: 'nowrap' }}>Platform Distribution</span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #2a2724, transparent)' }} />
        </div>

        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: '#4a4640', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 4 }}>Coverage</div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, fontWeight: 500, color: '#c0bdb5', marginBottom: 14 }}>We distribute across 50+ platforms</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {platforms.map((p, i) => (
            <span
              key={i}
              style={{ fontSize: 11.5, color: '#6b6860', background: '#181714', border: '1px solid #252320', borderRadius: 100, padding: '5px 12px', cursor: 'default', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#d4d0c8'; e.currentTarget.style.borderColor = '#3a3632'; e.currentTarget.style.background = '#1e1c18' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6b6860'; e.currentTarget.style.borderColor = '#252320'; e.currentTarget.style.background = '#181714' }}
            >
              {p}
            </span>
          ))}
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11.5, color: '#ff5a3c', background: 'rgba(255,90,60,0.08)', border: '1px solid rgba(255,90,60,0.25)', borderRadius: 100, padding: '5px 12px' }}>+26 more</span>
        </div>

      </div>

      <style>{`
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-reveal {
          opacity: 0;
          animation: cardReveal 0.32s ease forwards;
        }
      `}</style>
    </section>
  )
}