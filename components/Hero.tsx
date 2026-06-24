'use client'

import { motion } from 'framer-motion'
import EqualizerBars from './EqualizerBars'

const WA_URL =
  'https://wa.me/5491139128186?text=Hola%21%20Quiero%20reservar%20una%20sala%20de%20ensayo.'

const BG_BARS = [55, 90, 70, 110, 60, 95, 50, 120, 75, 85]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grain-overlay"
      style={{
        background:
          'linear-gradient(135deg, #1a0a2e 0%, #2D1B3D 35%, #3B1F68 65%, #2D1B3D 100%)',
      }}
      aria-label="Bienvenida a Tarará Studio"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(139, 92, 246, 0.18)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(245, 158, 11, 0.12)' }}
        aria-hidden="true"
      />

      {/* Background equalizer bars — decorative large */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-center items-end gap-2 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ opacity: 0.15, paddingBottom: '0px' }}
      >
        {BG_BARS.map((h, i) => (
          <div
            key={i}
            className={`rounded-t-sm eq-bar-${((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}`}
            style={{
              width: 14,
              height: h,
              backgroundColor: '#8B5CF6',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-cream/80 text-sm" aria-hidden="true">📍</span>
          <span className="font-mono text-xs text-cream/70">
            Scalabrini Ortiz 868, Villa Crespo
          </span>
        </motion.div>

        {/* Studio name */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display font-black leading-none mb-4">
            <span
              className="block text-[clamp(72px,14vw,160px)] text-cream"
              aria-label="Tarará Studio"
            >
              Tarar<span className="glow-accent">á</span>
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="font-display italic text-[clamp(20px,3.5vw,32px)] text-cream/60 mb-4"
        >
          Recorrés el camino de la música
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base text-cream/50 mb-10"
        >
          De la primera clase hasta tu proyecto musical ✨
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-semibold text-base rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-400"
            aria-label="Reservar sala de ensayo vía WhatsApp"
          >
            <WAIcon />
            Reservar sala
          </a>
          <a
            href="#quienes-somos"
            className="inline-flex items-center gap-2 px-8 py-4 text-cream font-semibold text-base rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
          >
            Conocé la escuela
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 3l5 5-5 5M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Section nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex items-center justify-center gap-3 text-cream/40 text-sm font-mono"
          aria-label="Secciones"
        >
          <a href="#escuela" className="hover:text-cream/70 transition-colors">Clases</a>
          <span aria-hidden="true">·</span>
          <a href="#salas" className="hover:text-cream/70 transition-colors">Salas</a>
          <span aria-hidden="true">·</span>
          <a href="#contacto" className="hover:text-cream/70 transition-colors">Estudio</a>
        </motion.nav>
      </div>

      {/* Equalizer bars divider at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
        aria-hidden="true"
      >
        <EqualizerBars count={5} barWidth={5} barHeight={36} color="#8B5CF6" className="opacity-50" />
      </motion.div>
    </section>
  )
}

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
