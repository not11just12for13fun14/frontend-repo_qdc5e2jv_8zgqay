import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-red-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <footer className="border-t border-white/10 bg-gradient-to-b from-black/40 to-black/80 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Kunnossapitokundit Autonpesu • Kaikki oikeudet pidätetään
      </footer>
    </div>
  )
}

export default App
