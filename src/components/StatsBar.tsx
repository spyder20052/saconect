"use client"
import { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { Award, Users, Globe2, ShieldCheck } from 'lucide-react'

export default function StatsBar() {
  const stats = [
    { k: '10+', v: 'années', Icon: Award },
    { k: '50+', v: 'clients', Icon: Users },
    { k: '8', v: 'pays', Icon: Globe2 },
    { k: '99.9%', v: 'SLA', Icon: ShieldCheck },
  ]

  function CountUp({ value }: { value: string }) {
    // parse numeric part and suffix (e.g., 10+, 99.9%)
    const match = value.match(/([0-9]+(?:\.[0-9]+)?)(.*)/)
    const target = match ? parseFloat(match[1]) : 0
    const suffix = match ? match[2] : ''
    const decimals = match && match[1].includes('.') ? (match[1].split('.')[1]?.length || 0) : 0

    const [display, setDisplay] = useState(0)
    const ref = useRef<HTMLDivElement | null>(null)
    const started = useRef(false)

    useEffect(() => {
      if (!ref.current) return
      const el = ref.current
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !started.current) {
              started.current = true
              const duration = 1200
              const start = performance.now()
              const from = 0
              const to = target
              const step = (now: number) => {
                const t = Math.min(1, (now - start) / duration)
                // easeOutCubic
                const eased = 1 - Math.pow(1 - t, 3)
                const val = from + (to - from) * eased
                setDisplay(val)
                if (t < 1) requestAnimationFrame(step)
              }
              requestAnimationFrame(step)
            }
          })
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return () => obs.disconnect()
    }, [target])

    const formatted = target === 0 && !started.current
      ? 0
      : display.toFixed(decimals)

    return (
      <div ref={ref} className="text-3xl md:text-4xl font-semibold tracking-tight transition-opacity">
        {formatted}{suffix}
      </div>
    )
  }

  return (
    <section className="relative bg-saco-blue text-white">
      <Container className="py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.k}
              className={`text-center ${i > 0 ? 'sm:border-l sm:pl-6 border-white/20' : ''}`}
              aria-label={`${s.k} ${s.v}`}
            >
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-white/10 ring-1 ring-white/10 mb-2">
                <s.Icon className="h-4 w-4" />
              </div>
              <CountUp value={s.k} />
              <div className="text-white/85 text-xs md:text-sm mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
