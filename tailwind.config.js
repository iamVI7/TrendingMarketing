/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        cream: '#FAF8F4',
        ink: '#1A1A1A',
        accent: '#E8400C',
        muted: '#6B6B6B',
        border: '#E5E0D8',
        card: '#FFFFFF',
        tag: '#F0EDE7',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-left':  'marqueeLeft 28s linear infinite',
        'marquee-right': 'marqueeRight 32s linear infinite',
      },
      keyframes: {
        marqueeLeft:  { from: { transform: 'translateX(0)' },    to: { transform: 'translateX(-50%)' } },
      marqueeRight: { from: { transform: 'translateX(-50%)' }, to: { transform: 'translateX(0)' } },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },

        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

