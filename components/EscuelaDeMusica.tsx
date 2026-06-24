'use client'

import { motion } from 'framer-motion'
import { PRICES } from '@/config/prices'

const WA_URL =
  'https://wa.me/5491139128186?text=Hola%21%20Me%20gustar%C3%ADa%20m%C3%A1s%20info%20sobre%20las%20clases.'

export default function EscuelaDeMusica() {
  return (
    <section
      id="escuela"
      className="bg-cream py-24 px-6"
      aria-labelledby="escuela-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-widest text-violet-600 mb-4"
            >
              Escuela de música
            </motion.p>

            <motion.h2
              id="escuela-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-eggplant leading-tight mb-6"
            >
              Aprendé música
              <br />
              <span className="text-violet-600">a tu ritmo</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-eggplant/70 text-lg leading-relaxed mb-8"
            >
              Desde el primer acorde hasta el escenario. Nuestros profesores acompañan a cada
              alumno con dedicación y metodología clara — online o presencial, siempre con el
              mismo nivel.
            </motion.p>

            {/* Canto cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5"
            >
              {/* Individual */}
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 flex flex-col gap-3">
                <div>
                  <h3 className="font-semibold text-eggplant text-base">Canto Individual</h3>
                  <span className="inline-block mt-1.5 text-[10px] font-mono bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Primera clase GRATIS ✨
                  </span>
                </div>
                <p className="text-eggplant/70 text-sm leading-relaxed flex-1">
                  {PRICES.clases.canto.individual.duration} personalizada según tu nivel y objetivos
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors"
                >
                  Consultá por precio →
                </a>
              </div>

              {/* Compartida */}
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 flex flex-col gap-3">
                <div>
                  <h3 className="font-semibold text-eggplant text-base">Canto Compartida</h3>
                  <span className="inline-block mt-1.5 text-[10px] font-mono bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Primera clase GRATIS ✨
                  </span>
                </div>
                <p className="text-eggplant/70 text-sm leading-relaxed flex-1">
                  {PRICES.clases.canto.compartida.description}
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors"
                >
                  Consultá por precio →
                </a>
              </div>
            </motion.div>

            {/* Instrument badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-sm font-semibold text-eggplant/60 mb-3">
                También damos clases de instrumento
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Instrumentos disponibles">
                {[
                  { label: 'Guitarra', emoji: '🎸' },
                  { label: 'Bajo', emoji: '🎸' },
                  { label: 'Piano', emoji: '🎹' },
                  { label: 'Batería', emoji: '🥁' },
                ].map((inst) => (
                  <span
                    key={inst.label}
                    role="listitem"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-eggplant/10 text-eggplant text-sm font-medium"
                  >
                    <span aria-hidden="true">{inst.emoji}</span>
                    {inst.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Review quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-l-4 border-violet-500 pl-5 py-1 mb-8"
            >
              <p className="text-eggplant/80 italic text-base leading-relaxed">
                &ldquo;No importa si eres profesional o quieres empezar a practicar algún
                instrumento. Tienen atención para todos los niveles.&rdquo;
              </p>
              <cite className="font-mono text-xs text-violet-600 not-italic mt-2 block">
                — Reseña de Google
              </cite>
            </motion.blockquote>

            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-eggplant hover:bg-violet-900 text-cream font-semibold rounded-full transition-all duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500"
              aria-label="Consultar sobre clases por WhatsApp"
            >
              Consultar sobre clases
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 3l5 5-5 5M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
                alt="Clase de música en Tarará Studio — alumnas cantando y tocando guitarra"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(45,27,61,0.6) 0%, transparent 50%)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-eggplant px-5 py-3 rounded-2xl shadow-xl border border-violet-500/20">
              <p className="font-display text-2xl font-bold text-cream">Todos los niveles</p>
              <p className="font-mono text-xs text-violet-400 mt-0.5">del principiante al profesional</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
