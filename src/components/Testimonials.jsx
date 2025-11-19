import { motion } from 'framer-motion'

const quotes = [
  {
    name: 'Mika',
    text: 'En ole koskaan nähnyt autoani näin kiiltävänä. Kokemus oli kuin elokuvasta.'
  },
  {
    name: 'Sara',
    text: 'Varaus oli helppoa ja paikan päällä tuntui kuin olisi astunut luksusloungeen.'
  },
  {
    name: 'Joni',
    text: 'Ammattilaiset viimeiseen asti. Joka yksityiskohta kohdallaan.'
  }
]

export default function Testimonials() {
  return (
    <section className="relative bg-slate-950 px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">Mitä asiakkaat sanovat</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <p className="text-white/90">“{q.text}”</p>
              <footer className="mt-4 text-sm text-white/60">— {q.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
