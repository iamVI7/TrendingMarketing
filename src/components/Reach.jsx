import { useState, useRef } from 'react'

const accounts = [
  { handle: '@justindianlove', followers: '950', niche: 'Indian Content',    image: '/JUSTINDIANLOVE.jpeg' },
  { handle: '@ek_teri_kahani', followers: '560', niche: 'Emotional Stories', image: '/EKTERIKAHANI.jpg' },
  { handle: '@heartfelthumorr',followers: '550', niche: 'Humor & Lifestyle', image: '/HEARTFELT.jpg' },
  { handle: '@imgdedits',       followers: '250', niche: 'Creative Edits',   image: '/IMGEDITS.jpg' },
  { handle: '@7.07adwriter',    followers: '260', niche: 'Ad Writing',       image: '/ADWRITER.jpg' },
  { handle: '@heartxgram_',     followers: '220', niche: 'Lifestyle',        image: '/HEARTX.jpg' },
  { handle: '@piexelfy',       followers: '150', niche: 'Viral Content',    image: '/VIBECRAZE.jpg' },
  { handle: '@adultbhau_',      followers: '160', niche: 'Humor',            image: '/ADULTBHAU.jpg' },
  { handle: '@crazyypoints',    followers: '110', niche: 'Points & Tips',    image: '/CRAZYPOINTS.jpg' },
  { handle: '@adwriter777',     followers: '70',  niche: 'Ad Writing',       image: '/777.jpg' },
  { handle: '@imadwriter',      followers: '60',  niche: 'Copywriting',      image: '/IMADWRITER.jpg' },
  { handle: '@filmy.mojj',      followers: '50',  niche: 'Bollywood',        image: '/FILMYMOJJ.jpg' },
]

const platforms = [
  'Spotify','JioSaavn','Gaana','Apple Music','Amazon Music','YouTube Music',
  'Wynk Music','Hungama','SoundCloud','Pandora','Resso','Audiomack','Anghami','Napster',
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

function AccountCard({ account, index }) {
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
      style={{
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid #272421',
        aspectRatio: '3 / 4',
        background: '#181714',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        ...bgStyle,
        transform: hovered ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform 0.5s ease',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '45%',
        background: 'linear-gradient(to bottom, rgba(10,8,6,0.78) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 2,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '62%',
        background: 'linear-gradient(to top, rgba(8,6,4,0.97) 0%, rgba(8,6,4,0.6) 55%, transparent 100%)',
        pointerEvents: 'none', zIndex: 2,
      }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px', zIndex: 4 }}>
        <div style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 11, fontWeight: 600, color: '#d8d4cc',
          marginBottom: 3,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          textShadow: '0 1px 6px rgba(0,0,0,0.9)',
        }}>
          {account.handle}
        </div>
        <div style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontSize: 28, color: '#f0ede8', lineHeight: 1,
          marginBottom: 5, fontWeight: 700,
          textShadow: '0 2px 10px rgba(0,0,0,0.8)',
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
  const extraRef = useRef(null)
  const hiddenCount = accounts.length - VISIBLE_COUNT

  function handleExpand() {
    setExpanded(prev => !prev)
  }

  return (
    <section
      id="reach"
      className="py-14 sm:py-20 relative overflow-hidden"
      style={{ background: '#0f0e0c', margin: '0 12px', borderRadius: 28 }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="mb-10">

          {/* Label pill — centered on mobile, left on desktop */}
          <div
            className="flex justify-center sm:justify-start"
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 10, letterSpacing: '0.2em',
              color: '#ff5a3c', textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
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

          {/* Headline + body copy — stacked & centered on mobile, side-by-side on desktop */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left" style={{ gap: 48, flexWrap: 'wrap' }}>

            {/* Left — headline */}
            <div style={{ flex: '0 0 auto' }}>
              <h2 style={{
                fontFamily: "'Playfair Display',Georgia,serif",
                fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
                lineHeight: 0.95, letterSpacing: '-0.03em',
                color: '#f0ede8', fontWeight: 700, marginBottom: 10,
              }}>
                300M+<br />
                <em className="not-italic" style={{ color: '#ff5a3c' }}>followers.</em>
              </h2>
              <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontStyle: 'italic', fontWeight: 300,
                fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                color: '#ff5a3c', margin: 0,
              }}>
                Your audience is here.
              </p>
            </div>

            {/* Right — body copy */}
            <div className="mt-5 sm:mt-0 sm:ml-auto" style={{ maxWidth: 340 }}>
              <p
                className="text-center sm:text-right"
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: '1.05rem', fontWeight: 300,
                  color: 'rgba(240,237,232,0.45)',
                  lineHeight: 1.65, margin: 0,
                }}
              >
                We own and manage a network of high-engagement Instagram pages spanning entertainment, humor, lifestyle, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Grid — always-visible 4 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {accounts.slice(0, VISIBLE_COUNT).map((account, i) => (
            <AccountCard key={account.handle} account={account} index={i} />
          ))}
        </div>

        {/* Expandable extra rows */}
        <div
          ref={extraRef}
          style={{
            display: 'grid',
            gridTemplateRows: expanded ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                opacity: expanded ? 1 : 0,
                transform: expanded ? 'translateY(0)' : 'translateY(-6px)',
                transition: expanded
                  ? 'opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                  : 'opacity 0.25s ease, transform 0.25s ease',
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5" style={{ paddingTop: '10px' }}>
                {accounts.slice(VISIBLE_COUNT).map((account, i) => (
                  <AccountCard key={account.handle} account={account} index={i + VISIBLE_COUNT} />
                ))}
              </div>
            </div>
          </div>
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
              style={{ transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
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
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11.5, color: '#ff5a3c', background: 'rgba(255,90,60,0.08)', border: '1px solid rgba(255,90,60,0.25)', borderRadius: 100, padding: '5px 12px' }}>+32 more</span>
        </div>

      </div>
    </section>
  )
}