'use client'

import { motion } from 'framer-motion'

const VALUES = [
  {
    title: 'LGBTQ+ Friendly',
    desc: 'Un espacio de bienvenida para toda la comunidad, sin preguntas ni condiciones.',
    badge: (
      <span className="text-2xl" aria-label="Bandera del Orgullo LGBTQ+">
        🏳️‍🌈
      </span>
    ),
    bg: 'from-purple-900/30 to-pink-900/20',
    border: 'border-pink-500/20',
  },
  {
    title: 'Apto para niños',
    desc: 'Ambiente familiar y contenedor para los más chicos que quieran aprender música.',
    badge: (
      <span className="text-2xl" aria-label="Niños">
        🎵
      </span>
    ),
    bg: 'from-yellow-900/30 to-orange-900/20',
    border: 'border-yellow-500/20',
  },
  {
    title: 'Estacionamiento accesible',
    desc: 'Espacio de estacionamiento adaptado para personas con discapacidad motriz.',
    badge: (
      <span className="text-2xl" aria-label="Accesibilidad">
        ♿
      </span>
    ),
    bg: 'from-blue-900/30 to-teal-900/20',
    border: 'border-teal-400/20',
  },
]

export default function Inclusion() {
  return (
    <section
      id="inclusion"
      className="bg-cream py-24 px-6"
      aria-labelledby="inclusion-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-violet-600 mb-4"
          >
            Inclusión & Comunidad
          </motion.p>
          <motion.h2
            id="inclusion-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-eggplant leading-tight"
          >
            La diversidad es
            <br />
            <span className="text-violet-600">parte de la música</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-5 text-eggplant/70 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Tarará no es solo un estudio — es un espacio donde cada persona puede ser
            exactamente quien es mientras aprende a tocar.
          </motion.p>
        </div>

        {/* Values cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {VALUES.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className={`rounded-2xl p-6 border ${val.border} bg-gradient-to-br ${val.bg} bg-eggplant`}
              style={{ backgroundColor: '#2D1B3D' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  aria-hidden="true"
                >
                  {val.badge}
                </div>
                <div>
                  <h3 className="font-semibold text-cream text-base mb-1.5">{val.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-eggplant/60 text-base italic font-display">
            &ldquo;También hay mucha calidez humana en el trato de la escuela 🏫💜&rdquo;
          </p>
          <p className="font-mono text-xs text-violet-600 mt-2">— Reseña real de Google</p>
        </motion.div>
      </div>
    </section>
  )
}
