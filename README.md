# Trending Marketing – Portfolio Website

A modern, minimal, and animated portfolio website for **Trending Marketing** digital marketing agency, founded by **Jogal Govind Ahir**.

## Stack
- **React 18** + **Vite 5** (fast builds, HMR)
- **Tailwind CSS 3** (utility-first styling)
- **Lucide React** (icons)
- Google Fonts: Playfair Display + DM Sans + DM Mono

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky navigation with mobile hamburger
│   ├── Hero.jsx           # Hero section with animated card
│   ├── Marquee.jsx        # Scrolling ticker banner
│   ├── About.jsx          # About + founder + agency experience
│   ├── Services.jsx       # Services grid (dark background)
│   ├── Work.jsx           # Campaign portfolio cards
│   ├── Reach.jsx          # Social accounts + platform coverage
│   ├── Testimonials.jsx   # Client testimonial cards
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer with links + socials
├── data/
│   └── siteData.js        # ← All content lives here. Edit this file.
├── hooks/
│   └── useScrollAnimation.js  # Intersection Observer for scroll reveals
├── App.jsx
├── main.jsx
└── index.css              # Global styles + Tailwind directives
```

## Customization

### Update Content
All text content (stats, services, campaigns, social accounts, etc.) lives in `src/data/siteData.js`. Edit that file to update anything.

### Replace Campaign Images
In `siteData.js`, update the `image` field in each campaign object with your own image URLs or local paths.

### Replace Founder Photo
In `About.jsx`, replace the `src` of the founder `<img>` tag with your actual photo.

### Contact Form
The form currently shows a success state on submit. Connect it to your backend or a service like **Formspree** / **EmailJS**:
```js
// In Contact.jsx handleSubmit():
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
})
```

## Design Tokens
Edit `tailwind.config.js` to change:
- **Colors**: `accent` (currently `#E8400C` orange-red), `ink`, `cream`, etc.
- **Fonts**: `display`, `body`, `mono`
- **Animations**: scroll reveal timings
