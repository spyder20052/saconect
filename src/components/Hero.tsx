"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Play, Zap, ChevronRight } from 'lucide-react'

type Slide = { src: string; title: string; subtitle: string }
const slides: Slide[] = [
  {
    src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2400&auto=format&fit=crop',
    title: 'Le spécialiste du design\net de la distribution\nd’objets connectés',
    subtitle: 'En Afrique de l’Ouest — du capteur à la plateforme, prêt à déployer.'
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop',
    title: 'Conception, intégration\net logistique locale',
    subtitle: 'Des kits IoT fiables, testés sur le terrain, livrés rapidement.'
  },
  {
    src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2400&auto=format&fit=crop',
    title: 'Du prototype\nà l’industrialisation',
    subtitle: 'De l’idéation à la production: capteurs, réseau et dashboards.'
  },
  {
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2400&auto=format&fit=crop',
    title: 'Couverture multi-pays\net déploiement express',
    subtitle: 'Mise en service en 48h et ROI mesurable dès les premières semaines.'
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0) // 0..100
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)
  const lastChangeRef = useRef<number>(Date.now())
  const isAnimatingRef = useRef<boolean>(false)
  const DURATION = 5000

  // autoplay + progress (single interval on mount)
  useEffect(() => {
    lastChangeRef.current = Date.now()
    setProgress(0)
    const id = setInterval(() => {
      const elapsed = Date.now() - lastChangeRef.current
      if (elapsed >= DURATION && !isAnimatingRef.current) {
        next()
        lastChangeRef.current = Date.now()
        setProgress(0)
      } else {
        setProgress(Math.min(100, (elapsed / DURATION) * 100))
      }
    }, 50)
    return () => clearInterval(id)
  }, [])

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const next = () => {
    if (animating) return
    setAnimating(true)
    isAnimatingRef.current = true
    setIndex((i) => (i + 1) % slides.length)
    setTimeout(() => {
      setAnimating(false)
      isAnimatingRef.current = false
      lastChangeRef.current = Date.now()
      setProgress(0)
    }, 720)
  }
  const prev = () => {
    if (animating) return
    setAnimating(true)
    isAnimatingRef.current = true
    setIndex((i) => (i - 1 + slides.length) % slides.length)
    setTimeout(() => {
      setAnimating(false)
      isAnimatingRef.current = false
      lastChangeRef.current = Date.now()
      setProgress(0)
    }, 720)
  }

  const goTo = (targetIndex: number) => {
    if (animating || targetIndex === index) return
    setAnimating(true)
    isAnimatingRef.current = true
    setIndex(targetIndex)
    setTimeout(() => {
      setAnimating(false)
      isAnimatingRef.current = false
      lastChangeRef.current = Date.now()
      setProgress(0)
    }, 720)
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
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-40 top-[-20%] h-[60vmax] w-[60vmax] rounded-full bg-saco-blue/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-[-20%] h-[60vmax] w-[60vmax] rounded-full bg-saco-turquoise/30 blur-[120px]" />

      {/* Slider background (crossfade stacked) */}
      <div className="absolute inset-0 overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {slides.map((s, i) => (
          <div key={s.src} className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={s.src}
              alt="Visuel IoT"
              fill
              priority={i === 0}
              className={`object-cover will-change-transform ${i === index ? 'animate-kenburns' : ''}`}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/60" />
          </div>
        ))}
        {/* glass grid overlay */}
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl text-white -ml-2 sm:-ml-4 md:-ml-8 lg:-ml-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[11px] md:text-xs mb-4 border border-white/10">
            <span className="h-2 w-2 rounded-full bg-saco-turquoise animate-pulse" />
            <Zap className="h-3.5 w-3.5 text-saco-turquoise" />
            Plateforme IoT prêt-à-déployer
          </div>
          {/* Slide text with smooth transition */}
          <div key={index} className="will-change-transform text-left">
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight animate-textIn">
              {slides[index].title.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <p className="mt-4 text-white/90 text-base md:text-lg max-w-2xl animate-subIn text-left">
              {slides[index].subtitle}
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="inline-flex items-center justify-center h-11 px-5 rounded bg-saco-turquoise text-saco-blue font-medium shadow-[0_10px_30px_-10px_rgba(27,222,222,0.7)] hover:brightness-110">
              <Play className="h-4 w-4 mr-2" /> Demander une démo
            </a>
            <a href="/solutions" className="inline-flex items-center justify-center h-11 px-5 rounded bg-white/10 border border-white/20 hover:bg-white/15">
              Voir les solutions <ChevronRight className="h-4 w-4 ml-2" />
            </a>
          </div>

          {/* Micro stats */}
          <div className="mt-6 hidden md:flex gap-6 text-sm text-white/80">
            <div className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#1BDEDE]" /> Déploiements en 48h</div>
            <div className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#131D68]" /> 95% disponibilité</div>
            <div className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-white/80" /> Couverture multi-pays</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button aria-label="Précédent" onClick={prev} className="group absolute left-4 md:left-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur text-white">
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button aria-label="Suivant" onClick={next} className="group absolute right-4 md:right-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur text-white">
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
            aria-label={`Aller au slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div className="h-full bg-gradient-to-r from-saco-turquoise to-cyan-300" style={{ width: `${progress}%`, transition: 'width 50ms linear' }} />
      </div>

      {/* local styles */}
      <style jsx>{`
        @keyframes kenburns {
          0% { transform: scale(1) translateZ(0); }
          100% { transform: scale(1.08) translateZ(0); }
        }
        .animate-kenburns { animation: kenburns 6s ease-out both; }
        @keyframes textIn {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes subIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-textIn { animation: textIn 600ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .animate-subIn { animation: subIn 700ms 60ms cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>
    </section>
  )
}
