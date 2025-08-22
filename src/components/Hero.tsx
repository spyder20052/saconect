"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const slides = [
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2400&auto=format&fit=crop',
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)

  useEffect(() => {
    const id = setInterval(() => next(), 5000)
    return () => clearInterval(id)
  }, [])

  const next = () => {
    if (animating) return
    setAnimating(true)
    setIndex((i) => (i + 1) % slides.length)
    setTimeout(() => setAnimating(false), 650)
  }
  const prev = () => {
    if (animating) return
    setAnimating(true)
    setIndex((i) => (i - 1 + slides.length) % slides.length)
    setTimeout(() => setAnimating(false), 650)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    const threshold = 60
    if (touchDeltaX.current > threshold) prev()
    else if (touchDeltaX.current < -threshold) next()
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  return (
    <section className="relative flex items-center overflow-hidden min-h-[calc(100svh-96px)] max-h-[calc(100svh-96px)]">
      {/* Slider background */}
      <div className="absolute inset-0 overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div
          className="h-full flex"
          style={{ width: `${slides.length * 100}%`, transform: `translateX(-${index * (100 / slides.length)}%)`, transition: 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1)' }}
        >
          {slides.map((src) => (
            <div key={src} className="relative h-full" style={{ width: `${100 / slides.length}%` }}>
              <Image src={src} alt="Visuel IoT" fill priority className="object-cover" sizes="100vw" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs mb-4">
            <span className="h-2 w-2 rounded-full bg-saco-turquoise" />
            Plateforme IoT prêt-à-déployer
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Connectez. Mesurez. Décidez.</h1>
          <p className="mt-4 text-white/90 text-base md:text-lg">Des solutions IoT simples et fiables pour suivre vos actifs, réduire vos coûts et accélérer votre prise de décision.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="inline-flex items-center justify-center h-11 px-5 rounded bg-saco-turquoise text-saco-blue font-medium">Demander une démo</a>
            <a href="/solutions" className="inline-flex items-center justify-center h-11 px-5 rounded bg-white/10 border border-white/20 hover:bg-white/15">Voir les solutions</a>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'} transition`}
            aria-label={`Aller au slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
