import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import ClientIndustries from './components/ClientIndustries'
import Services from './components/Services'
import Work from './components/Work'
import Reach from './components/Reach'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollAnimation } from './hooks/useScrollAnimation'

export default function App() {
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <ClientIndustries />
        
        <Reach />
        <Work />
        {/* <Pricing /> */}
        
        <Testimonials />
       {/*  <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
