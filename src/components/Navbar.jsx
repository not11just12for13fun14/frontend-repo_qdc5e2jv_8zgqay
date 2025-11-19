import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = (href, label) => (
    <a href={href} className="text-sm font-medium text-white/80 hover:text-white transition">
      {label}
    </a>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="relative">
            <span className="absolute -inset-2 rounded-full bg-red-500/20 blur-xl" />
            <Sparkles className="relative h-6 w-6 text-red-400" />
          </div>
          <span className="text-white font-semibold tracking-tight">Kunnossapitokundit</span>
          <span className="hidden text-white/60 sm:inline">Autonpesu</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {link('#services', 'Palvelut')}
          {link('#pricing', 'Hinnasto')}
          {link('#gallery', 'Galleria')}
          {link('#contact', 'Yhteys')}
          <a href="#contact" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90 transition">Varaa aika</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
            {link('#services', 'Palvelut')}
            {link('#pricing', 'Hinnasto')}
            {link('#gallery', 'Galleria')}
            {link('#contact', 'Yhteys')}
            <a href="#contact" className="rounded-full bg-white px-5 py-2 text-center text-sm font-semibold text-slate-900">Varaa aika</a>
          </div>
        </div>
      )}
    </header>
  )
}
