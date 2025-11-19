import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Contact />
      <footer className="border-t border-white/10 bg-black/50 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Kunnossapitokundit Autonpesu • Kaikki oikeudet pidätetään
      </footer>
    </div>
  )
}

export default App
