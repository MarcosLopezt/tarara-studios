'use client'

import { motion } from 'framer-motion'
import EqualizerBars from './EqualizerBars'

const PILLS = [
  { label: 'Todos los niveles', icon: '🎵' },
  { label: 'Online y presencial', icon: '🌐' },
  { label: 'Espacio seguro 🏳️‍🌈', icon: null },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="bg-cream text-eggplant py-24 px-6"
      aria-labelledby="quienes-heading"
    >
      {/* Equalizer divider on top */}
      <div className="flex justify-center mb-16" aria-hidden="true">
        <EqualizerBars count={5} barWidth={4} barHeight={28} color="#8B5CF6" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest text-violet-600 mb-4"
        >
          Quiénes somos
        </motion.p>

        {/* Heading */}
        <motion.h2
          id="quienes-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-eggplant leading-tight mb-8"
        >
          Un estudio con alma,
          <br />
          <span className="text-violet-600">en el corazón de Palermo</span>
        </motion.h2>

        {/* Body text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-eggplant/80 text-lg leading-relaxed mb-12"
        >
          <p>
            Somos un estudio musical en el corazón de Palermo donde la música se enseña con
            pasión y se ensaya con libertad. No importa si estás empezando o si llevás años
            tocando — acá hay lugar para todos.
          </p>
          <p>
            La calidez humana es parte del curriculum. Nuestros profesores se adaptan a cada
            alumno, acompañándolos desde la primera nota hasta donde quieran llegar. Online o
            presencial, siempre con el mismo compromiso.
          </p>
          <p>
            Tarará es un espacio donde la diversidad es bienvenida sin condiciones, y donde la
            música conecta a personas de todos los mundos. Abrimos hasta las 23:30hs porque
            sabemos que la creatividad no tiene horario.
          </p>
        </motion.div>

        {/* Highlight pills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap gap-3"
          role="list"
          aria-label="Características destacadas"
        >
          {PILLS.map((pill) => (
            <div
              key={pill.label}
              role="listitem"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-violet-500 text-violet-700 font-semibold text-sm bg-violet-50"
            >
              {pill.icon && <span aria-hidden="true">{pill.icon}</span>}
              {pill.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
