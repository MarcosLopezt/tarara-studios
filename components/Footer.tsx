'use client'

import EqualizerBars from './EqualizerBars'

const WA_URL = 'https://wa.me/5491139128186'
const IG_URL = 'https://www.instagram.com/tararastudio'

const LINKS = [
  { href: '#quienes-somos', label: 'Nosotros' },
  { href: '#salas', label: 'Salas' },
  { href: '#escuela', label: 'Escuela' },
  { href: '#ensamble', label: 'Ensamble' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#inclusion', label: 'Comunidad' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-16 px-6"
      style={{ backgroundColor: '#1a0a2e' }}
      role="contentinfo"
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.4), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <EqualizerBars count={3} barWidth={3} barHeight={16} color="#8B5CF6" />
              <span className="font-display text-2xl font-bold text-cream">
                Tarar<span className="glow-accent text-2xl">á</span>
              </span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-5">
              Escuela de música y sala de ensayo en Palermo, Buenos Aires.
            </p>

            {/* Rating */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-amber-400 text-xs" aria-label="5 estrellas">★★★★★</span>
              <span className="font-mono text-[11px] text-cream/50">5.0 en Google · 47 reseñas</span>
            </div>

            {/* LGBTQ+ badge */}
            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-pink-500/20 bg-pink-500/5 text-pink-300"
                aria-label="Espacio LGBTQ+ amigable"
              >
                🏳️‍🌈 LGBTQ+ Friendly
              </span>
            </div>
          </div>

          {/* Links column */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cream/30 mb-5">
              Navegación
            </p>
            <nav aria-label="Pie de página">
              <ul className="space-y-2.5" role="list">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/50 hover:text-violet-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cream/30 mb-5">
              Información
            </p>
            <ul className="space-y-3" role="list">
              <li>
                <p className="font-mono text-xs text-cream/30 uppercase tracking-wider mb-0.5">
                  Dirección
                </p>
                <p className="text-sm text-cream/70">
                  Av. Raúl Scalabrini Ortiz 868
                  <br />
                  Palermo, CABA
                </p>
              </li>
              <li>
                <p className="font-mono text-xs text-cream/30 uppercase tracking-wider mb-0.5">
                  Horario
                </p>
                <p className="text-sm text-amber-400">Abierto hasta las 23:30hs</p>
              </li>
              <li>
                <p className="font-mono text-xs text-cream/30 uppercase tracking-wider mb-0.5">
                  Teléfono / WhatsApp
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-violet-400 transition-colors"
                  aria-label="Contactar por WhatsApp"
                >
                  011 3912-8186
                </a>
              </li>
              <li>
                <p className="font-mono text-xs text-cream/30 uppercase tracking-wider mb-0.5">
                  Instagram
                </p>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-violet-400 transition-colors"
                  aria-label="Visitar Instagram de Tarará Studio (abre nueva pestaña)"
                >
                  @tararastudio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Equalizer bars */}
        <div
          className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="font-mono text-xs text-cream/25 text-center md:text-left">
            © {new Date().getFullYear()} Tarará Studio · Palermo, Buenos Aires
          </p>

          {/* Equalizer bars signature */}
          <div className="flex items-center gap-3" aria-hidden="true">
            <EqualizerBars count={5} barWidth={4} barHeight={24} color="#8B5CF6" className="opacity-40" />
          </div>
        </div>
      </div>
    </footer>
  )
}
