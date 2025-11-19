import { motion } from 'framer-motion'

const tiers = [
  { name: 'Perus Kiilto', desc: 'Pikainen puunaus arjen ajamiseen.', price: '79€', features: ['Käsinpesu', 'Pikavaha', 'Sisäpuhdistus kevyesti'] },
  { name: 'Signature', desc: 'Suosituin – tasapaino kiillon ja suojan välillä.', price: '189€', featured: true, features: ['Syväpuhdistus', 'Vahakäsittely', 'Sisätekstiilien pesu', 'Lasien käsittely'] },
  { name: 'Ultimate Ceramic', desc: 'Maksimaalinen suoja ja näyttävin kiilto.', price: '599€', features: ['Monivaiheinen kiillotus', 'Keraaminen pinnoite', 'Sisädetailointi', 'Moottoritilan viimeistely'] }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950 py-20 text-white sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-2xl font-bold sm:mb-10 sm:text-4xl"
        >
          Hinnasto
        </motion.h2>

        <div className="grid gap-4 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`${t.featured ? 'ring-2 ring-red-400/50' : ''} glass relative flex flex-col overflow-hidden rounded-2xl p-5 sm:p-6`}
            >
              {t.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-200">Suosituin</div>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-white/70">{t.desc}</p>
              <div className="mt-6 text-4xl font-extrabold">{t.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 font-semibold text-slate-900 transition hover:bg-white/90">Varaa</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
