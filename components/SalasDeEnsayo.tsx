'use client'

import { motion } from 'framer-motion'
import { PRICES } from '@/config/prices'

const WA_URL =
  'https://wa.me/5491139128186?text=Hola%21%20Quiero%20reservar%20una%20sala%20de%20ensayo.'

export default function SalasDeEnsayo() {
  const salas = Object.values(PRICES.salas)

  return (
    <section
      id="salas"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #2D1B3D 0%, #1a0a2e 50%, #2D1B3D 100%)',
      }}
      aria-labelledby="salas-heading"
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(139, 92, 246, 0.08)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-4"
          >
            Salas de ensayo
          </motion.p>
          <motion.h2
            id="salas-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-cream"
          >
            Tu espacio para ensayar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-cream/60 text-lg max-w-xl mx-auto"
          >
            Salas equipadas y bien tratadas acústicamente, disponibles hasta las 23:30hs.
          </motion.p>
        </div>

        {/* Sala cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {salas.map((sala, i) => (
            <motion.div
              key={sala.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-600/20 to-violet-900/40 p-7 flex flex-col gap-5 backdrop-blur-sm"
            >
              <h3 className="font-display text-2xl font-bold text-cream">{sala.name}</h3>

              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-cream">
                  ${sala.pricePerHour.toLocaleString('es-AR')}
                </span>
                <span className="text-cream/60 text-sm"> / hora</span>
              </div>

              <ul className="space-y-2 flex-1" aria-label={`Detalles: ${sala.name}`}>
                <li className="flex items-center gap-2 text-sm text-cream/70">
                  <CheckIcon />
                  <span>Turno mínimo: {sala.minimumHours}hs</span>
                </li>
                {sala.extras.map((extra) => (
                  <li key={extra} className="flex items-center gap-2 text-sm text-cream/70">
                    <CheckIcon />
                    <span>{extra} 🥁</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-5 py-3 rounded-xl bg-violet-500 hover:bg-violet-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                aria-label={`Reservar ${sala.name} por WhatsApp`}
              >
                Reservar sala
              </a>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-6 text-sm italic text-cream/40"
        >
          * Los precios pueden variar. Consultá disponibilidad por WhatsApp.
        </motion.p>

        {/* Hours callout */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-6 font-mono text-sm text-amber-400/80"
        >
          🎸 Abrimos hasta las 23:30hs — porque la música no para
        </motion.p>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8B5CF6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}
