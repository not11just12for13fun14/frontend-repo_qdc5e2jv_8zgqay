import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight, PhoneCall } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  // Parallax tilt for CTA group
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-50, 50], [8, -8])
  const rotateY = useTransform(mx, [-50, 50], [-8, 8])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      mx.set(x); my.set(y)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-4 pt-28 pb-16 sm:px-6 md:gap-8 md:pt-40 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-400" />
          Premium-autodetailing Helsingissä
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Kunnossapitokundit Autonpesu
          <span className="block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Huippuluokan kiilto. Unohtumaton fiilis.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-pretty text-sm text-white/80 sm:text-base md:text-lg"
        >
          Futuristinen kokemus joka alkaa jo varauksen hetkestä. Me teemme autostasi näyttävän –
          sisätiloista ulkopintaan – tinkimättömällä laadulla ja käsityöllä.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          ref={ref}
          style={{ perspective: 1000 }}
          className="aura grid w-full grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4"
        >
          <motion.a
            style={{ rotateX, rotateY }}
            href="#contact"
            className="magnet group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/90 sm:px-6"
          >
            <span>Varaa aika</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            style={{ rotateX, rotateY }}
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 sm:px-6"
          >
            Palvelut
          </motion.a>
          <motion.a
            style={{ rotateX, rotateY }}
            href="tel:+358401234567"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 backdrop-blur-md transition hover:bg-emerald-400/20"
          >
            <PhoneCall className="h-4 w-4" /> 040 123 4567
          </motion.a>
        </motion.div>

        {/* Mobile helper cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pointer-events-none mt-6 hidden justify-center sm:flex"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/70 backdrop-blur">
            Vieritä alas
          </div>
        </motion.div>
      </div>

      {/* Subtle scanline for sci-fi vibe */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    </section>
  )
}
