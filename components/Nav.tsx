'use client'

import { useState, useEffect } from 'react'
import EqualizerBars from './EqualizerBars'

const NAV_LINKS = [
  { href: '#quienes-somos', label: 'Nosotros' },
  { href: '#salas', label: 'Salas' },
  { href: '#escuela', label: 'Escuela' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#contacto', label: 'Contacto' },
]

const WA_URL =
  'https://wa.me/5491139128186?text=Hola%21%20Quiero%20reservar%20una%20sala%20de%20ensayo.'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-eggplant/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2" aria-label="Tarará Studio — inicio">
          <EqualizerBars count={3} barWidth={3} barHeight={16} color="#8B5CF6" />
          <span className="font-display text-xl font-bold text-cream">
            Tarar<span className="glow-accent text-xl">á</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-cream/70 hover:text-cream transition-colors duration-200 hover:text-violet-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white font-semibold text-sm rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
          >
            Reservar sala
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-eggplant/98 backdrop-blur-md border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-4" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-mono text-base text-cream/80 hover:text-violet-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-violet-500 text-white font-semibold rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                Reservar sala
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
