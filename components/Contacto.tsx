'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const WA_URL =
  'https://wa.me/5491139128186?text=Hola%21%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20Tatar%C3%A1%20Studio.'
const IG_URL = 'https://www.instagram.com/tararastudio'
const MAP_URL =
  'https://maps.google.com/maps?q=Av+Raul+Scalabrini+Ortiz+868+Buenos+Aires+Argentina&output=embed&z=16&hl=es'

type Interest = 'sala' | 'clases' | 'ensamble' | 'online' | ''

interface FormState {
  name: string
  interest: Interest
  instrument: string
  message: string
}

export default function Contacto() {
  const [form, setForm] = useState<FormState>({
    name: '',
    interest: '',
    instrument: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const buildWAMessage = () => {
    const lines = [
      `Hola! Me llamo ${form.name}.`,
      form.interest && `Me interesa: ${INTEREST_LABELS[form.interest] ?? form.interest}.`,
      form.instrument && `Instrumento: ${form.instrument}.`,
      form.message && form.message,
    ].filter(Boolean)
    return encodeURIComponent(lines.join(' '))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) return
    const url = `https://wa.me/5491139128186?text=${buildWAMessage()}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section
      id="contacto"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1a0a2e 0%, #2D1B3D 60%, #1a0a2e 100%)',
      }}
      aria-labelledby="contacto-heading"
    >
      {/* Glow blob */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
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
            Contacto & Reservas
          </motion.p>
          <motion.h2
            id="contacto-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-cream"
          >
            Empezá hoy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-3 text-cream/60 text-lg"
          >
            Por WhatsApp es más fácil y rápido 🎸
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info + Primary CTA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            {/* Big WhatsApp CTA */}
            <div className="rounded-2xl p-8 border border-violet-500/20 bg-white/5">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-5 rounded-xl text-white font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
                style={{ backgroundColor: '#25D366' }}
                aria-label="Contactar a Tarará Studio por WhatsApp"
              >
                <WAIconLarge />
                <div>
                  <p className="text-xl font-bold">WhatsApp</p>
                  <p className="text-sm font-mono font-normal opacity-80">011 3912-8186</p>
                </div>
              </a>

              <div className="mt-6 space-y-4">
                {/* Hours */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <span className="text-xl" aria-hidden="true">⏰</span>
                  <div>
                    <p className="font-semibold text-cream text-sm">Abrimos hasta las 23:30hs</p>
                    <p className="text-cream/50 text-xs font-mono mt-0.5">
                      Lunes a domingo — siempre disponibles
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xl mt-0.5" aria-hidden="true">📍</span>
                  <div>
                    <p className="font-semibold text-cream text-sm">
                      Av. Raúl Scalabrini Ortiz 868
                    </p>
                    <p className="text-cream/50 text-xs font-mono mt-0.5">Palermo, CABA</p>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-colors"
                  aria-label="Seguir a Tarará Studio en Instagram (abre nueva pestaña)"
                >
                  <IGIcon />
                  <div>
                    <p className="font-semibold text-cream text-sm">@tararastudio</p>
                    <p className="text-cream/50 text-xs font-mono mt-0.5">Instagram</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9]">
              <iframe
                src={MAP_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Tarará Studio en Google Maps"
                aria-label="Mapa con la ubicación de Tarará Studio, Av. Raúl Scalabrini Ortiz 868, Buenos Aires"
              />
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl p-8 border border-violet-500/20 bg-white/5 h-full">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                  <span className="text-5xl" aria-hidden="true">🎸</span>
                  <h3 className="font-display text-2xl font-bold text-cream">¡Nos vemos pronto!</h3>
                  <p className="text-cream/60">
                    Tu mensaje fue enviado por WhatsApp. Te respondemos enseguida.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-mono text-violet-400 hover:text-violet-300 underline underline-offset-4"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                  <h3 className="font-display text-2xl font-bold text-cream mb-6">
                    Mandanos un mensaje
                  </h3>

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-cream/50 mb-1.5"
                      >
                        Nombre *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-cream placeholder-cream/30 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                        style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                        autoComplete="name"
                      />
                    </div>

                    {/* Interest */}
                    <div>
                      <label
                        htmlFor="interest"
                        className="block font-mono text-xs uppercase tracking-wider text-cream/50 mb-1.5"
                      >
                        Me interesa
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 text-cream focus:outline-none focus:border-violet-500 transition-colors text-sm appearance-none cursor-pointer"
                        style={{ backgroundColor: 'rgba(45,27,61,0.95)' }}
                      >
                        <option value="">Seleccioná una opción</option>
                        <option value="sala">Sala de ensayo</option>
                        <option value="clases">Clases de música</option>
                        <option value="ensamble">Ensamble grupal</option>
                        <option value="online">Clases online</option>
                      </select>
                    </div>

                    {/* Instrument */}
                    <div>
                      <label
                        htmlFor="instrument"
                        className="block font-mono text-xs uppercase tracking-wider text-cream/50 mb-1.5"
                      >
                        Instrumento / disciplina
                      </label>
                      <input
                        id="instrument"
                        name="instrument"
                        type="text"
                        value={form.instrument}
                        onChange={handleChange}
                        placeholder="Ej: guitarra, canto, piano..."
                        className="w-full px-4 py-3 rounded-xl border border-white/15 text-cream placeholder-cream/30 focus:outline-none focus:border-violet-500 transition-colors text-sm"
                        style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-mono text-xs uppercase tracking-wider text-cream/50 mb-1.5"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Contanos algo más..."
                        className="w-full px-4 py-3 rounded-xl border border-white/15 text-cream placeholder-cream/30 focus:outline-none focus:border-violet-500 transition-colors text-sm resize-none"
                        style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!form.name.trim()}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-violet-500/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-400"
                      style={{ backgroundColor: '#8B5CF6' }}
                    >
                      Enviar por WhatsApp 💬
                    </button>

                    <p className="text-center font-mono text-[11px] text-cream/30">
                      Al enviar, se abre WhatsApp con tu mensaje
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const INTEREST_LABELS: Record<string, string> = {
  sala: 'Sala de ensayo',
  clases: 'Clases de música',
  ensamble: 'Ensamble grupal',
  online: 'Clases online',
}

function WAIconLarge() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="white"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function IGIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-violet-400 flex-shrink-0"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
