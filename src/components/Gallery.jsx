import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531934788018-08bb9eb2d396?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531934788018-08bb9eb2d396?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-slate-950 py-20 text-white sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-2xl font-bold sm:mb-10 sm:text-4xl"
        >
          Galleria
        </motion.h2>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="group glass relative overflow-hidden rounded-xl"
            >
              <img src={src} alt="Detail" className="h-32 w-full object-cover sm:h-48 md:h-56 lg:h-64" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
