import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold sm:text-4xl"
        >
          Varaa aika
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="grid gap-4">
              <input required className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Nimi" />
              <input required type="tel" className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Puhelin" />
              <input required type="email" className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Sähköposti" />
              <select className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none text-white/80">
                <option className="bg-slate-900">Käsinpesu</option>
                <option className="bg-slate-900">Sisäsiivous</option>
                <option className="bg-slate-900">Keraaminen pinnoite</option>
              </select>
              <textarea rows={4} className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Viesti (valinnainen)" />
              <button className="rounded-full bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-white/90">Lähetä</button>
            </div>
          </form>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-white/80">Aukioloajat</div>
              <div className="mt-2 text-sm text-white/60">Ma–Pe 9:00–18:00 • La 10:00–16:00</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-white/80">Osoite</div>
              <div className="mt-2 text-sm text-white/60">Kauppakatu 10, Helsinki</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-white/80">Puhelin</div>
              <div className="mt-2 text-sm text-white/60">040 123 4567</div>
            </div>
          </div>
        </div>

        {sent && (
          <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-300">Kiitos! Otamme yhteyttä pian.</div>
        )}
      </div>
    </section>
  )
}
