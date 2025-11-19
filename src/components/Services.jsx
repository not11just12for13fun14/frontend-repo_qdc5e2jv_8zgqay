import { motion } from 'framer-motion'
import { Shield, Droplets, Sparkles, SprayCan } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Käsinpesu',
    desc: 'Huolellinen, naarmuton pesu laadukkailla tuotteilla.',
    price: 'Alk. 39€'
  },
  {
    icon: Droplets,
    title: 'Sisäsiivous',
    desc: 'Imurointi, tekstiilien pesu ja pintojen desinfiointi.',
    price: 'Alk. 69€'
  },
  {
    icon: Shield,
    title: 'Keraaminen pinnoite',
    desc: 'Pitkäkestoinen suoja ja briljantti kiilto.',
    price: 'Alk. 349€'
  },
  {
    icon: SprayCan,
    title: 'Moottoritilan puhdistus',
    desc: 'Turvallinen ja siisti lopputulos.',
    price: 'Alk. 59€'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.08),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(56,189,248,0.07),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold sm:text-4xl"
        >
          Palvelumme
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-white/20"
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-red-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="mb-4 text-sm text-white/70">{item.desc}</p>
              <div className="text-sm font-semibold text-white/90">{item.price}</div>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
