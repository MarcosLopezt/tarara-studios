'use client'

import { motion } from 'framer-motion'

const REVIEWS = [
  {
    text: 'Excelentes instalaciones y un staff de primera, los profes todos muy dispuestos y con un conocimiento importante.',
    author: 'Rafael V.',
    stars: 5,
  },
  {
    text: 'También hay mucha calidez humana en el trato de la escuela 🏫💜 Un lugar donde te sentís bienvenido desde el primer día.',
    author: 'Reseña de Google',
    stars: 5,
  },
  {
    text: 'Excelente profe, aprendo mucho de ella y es imposible no quererla 💕 Cada clase es una motivación para seguir.',
    author: 'Reseña de Google',
    stars: 5,
  },
  {
    text: 'Excelente lugar para aprender sobre canto, buen ambiente y van adaptando clases según cada alumno.',
    author: 'Mercedes R.',
    stars: 5,
  },
]

export default function Resenas() {
  return (
    <section
      id="resenas"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #2D1B3D 0%, #1a0a2e 100%)',
      }}
      aria-labelledby="resenas-heading"
    >
      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(139, 92, 246, 0.06)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-4"
          >
            Reseñas
          </motion.p>
          <motion.h2
            id="resenas-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-cream"
          >
            Lo que dice la comunidad
          </motion.h2>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-white/5 border border-white/10"
          >
            <span className="text-amber-400 text-sm" aria-label="5 estrellas">★★★★★</span>
            <span className="font-mono text-xs text-cream/60">5.0 en Google · 47 opiniones</span>
            <span aria-hidden="true" className="text-sm">🇦🇷</span>
          </motion.div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {REVIEWS.map((review, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl p-7 border border-violet-500/20 bg-white/5 backdrop-blur-sm flex flex-col gap-4"
              aria-label={`Reseña de ${review.author}`}
            >
              {/* Quote icon */}
              <div aria-hidden="true">
                <MusicNoteQuoteSmall />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${review.stars} estrellas`}>
                {Array.from({ length: review.stars }).map((_, si) => (
                  <span key={si} className="text-amber-400 text-sm" aria-hidden="true">★</span>
                ))}
              </div>

              {/* Review text */}
              <blockquote>
                <p className="text-cream/80 text-base leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <footer>
                <cite className="font-mono text-xs text-violet-400 not-italic">
                  — {review.author}
                </cite>
              </footer>
            </motion.article>
          ))}
        </div>

        {/* CTA to Google */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/maps/search/Tarará+Studio+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
            aria-label="Ver todas las reseñas en Google (abre nueva pestaña)"
          >
            Ver las 47 reseñas en Google
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function MusicNoteQuoteSmall() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M13 5v15M13 5l11-3v15M13 17a3 3 0 100 6 3 3 0 000-6zM24 14a3 3 0 100 6 3 3 0 000-6z"
        stroke="#8B5CF6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  )
}
