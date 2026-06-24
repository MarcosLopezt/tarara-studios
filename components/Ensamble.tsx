'use client'

import { motion } from 'framer-motion'

const WA_URL =
  'https://wa.me/5491139128186?text=Hola%21%20Quiero%20m%C3%A1s%20info%20sobre%20el%20ensamble.'

const FEATURES = [
  {
    icon: '🎸',
    title: 'Músicos de distintos niveles',
    desc: 'El ensamble mezcla principiantes y avanzados — todos aportan.',
  },
  {
    icon: '🎵',
    title: 'Repertorio variado',
    desc: 'Rock, folclore, jazz, pop — elegimos el repertorio juntos.',
  },
  {
    icon: '🌱',
    title: 'Experiencia constructiva',
    desc: 'Cada encuentro es una oportunidad de crecer junto a otros.',
  },
]

export default function Ensamble() {
  return (
    <section
      id="ensamble"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #78350F 0%, #92400E 40%, #B45309 100%)',
      }}
      aria-labelledby="ensamble-heading"
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-widest text-amber-300 mb-4"
            >
              Ensamble
            </motion.p>

            <motion.h2
              id="ensamble-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-6"
            >
              Una experiencia
              <br />
              <span className="text-amber-300">grupal única</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-amber-100/80 text-lg leading-relaxed mb-8"
            >
              Tocar con otros músicos transforma la forma en que entendés la música. Nuestras
              clases de ensamble reúnen instrumentistas de distintos niveles para crear algo
              juntos — y el resultado siempre sorprende.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5 mb-10"
            >
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                    {f.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-cream">{f.title}</p>
                    <p className="text-amber-100/60 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
              aria-label="Consultar sobre el ensamble por WhatsApp"
            >
              Sumarme al ensamble
            </motion.a>
          </div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="rounded-2xl p-8 border border-amber-400/20 bg-amber-950/30 backdrop-blur-sm">
              {/* Music note quote mark */}
              <div className="mb-4" aria-hidden="true">
                <MusicNoteQuote />
              </div>
              <blockquote>
                <p className="font-display italic text-xl text-cream leading-relaxed">
                  &ldquo;La experiencia fue muy constructiva y gratificante. Aprendés muchísimo
                  tocando con otros músicos.&rdquo;
                </p>
                <cite className="block mt-4 font-mono text-xs text-amber-300 not-italic">
                  — Reseña de Google ★★★★★
                </cite>
              </blockquote>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-amber-400/20 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-display text-3xl font-bold text-amber-300">5.0★</p>
                  <p className="font-mono text-xs text-amber-100/50 mt-1">47 reseñas en Google</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-amber-300">Todos</p>
                  <p className="font-mono text-xs text-amber-100/50 mt-1">los niveles son bienvenidos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MusicNoteQuote() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M20 8v22M20 8l16-4v22M20 26a4 4 0 100 8 4 4 0 000-8zM36 22a4 4 0 100 8 4 4 0 000-8z"
        stroke="#FBBF24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  )
}
