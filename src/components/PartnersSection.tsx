"use client"
import Container from './Container'
import { ChevronRight } from 'lucide-react'
export default function PartnersSection() {
  const partners = [
    { name: 'Partner A', logo: 'https://placehold.co/180x60?text=Partner+A', href: '#' },
    { name: 'Partner B', logo: 'https://placehold.co/180x60?text=Partner+B', href: '#' },
    { name: 'Partner C', logo: 'https://placehold.co/180x60?text=Partner+C', href: '#' },
    { name: 'Partner D', logo: 'https://placehold.co/180x60?text=Partner+D', href: '#' },
    { name: 'Partner E', logo: 'https://placehold.co/180x60?text=Partner+E', href: '#' },
    { name: 'Partner F', logo: 'https://placehold.co/180x60?text=Partner+F', href: '#' },
    { name: 'Partner G', logo: 'https://placehold.co/180x60?text=Partner+G', href: '#' },
    { name: 'Partner H', logo: 'https://placehold.co/180x60?text=Partner+H', href: '#' },
  ]
  const row = [...partners]
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="pointer-events-none absolute inset-0 animated-grid opacity-10" />

      <div className="relative">
        <Container className="pt-12 pb-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-saco-blue/10 text-saco-blue px-3 py-1 text-xs tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-saco-turquoise" />
                Nos partenaires
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">Ils contribuent à notre écosystème</h2>
            </div>
            <a href="/partenaires" className="hidden sm:inline-flex h-10 px-4 rounded-md border border-slate-300/70 text-slate-700 text-sm items-center justify-center hover:border-slate-400 hover:bg-white transition">
              Tous les partenaires <ChevronRight className="h-4 w-4 ml-2" />
            </a>
          </div>
        </Container>

        <div className="relative overflow-hidden py-6">
          {/* Edge gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

          {/* Logos track */}
          <div className="track flex items-center gap-12 will-change-transform">
            {[...row, ...row].map((p, i) => (
              <a
                key={`${p.name}-${i}`}
                href={p.href}
                className="opacity-80 hover:opacity-100 transition"
                aria-label={p.name}
                title={p.name}
              >
                <img src={p.logo} alt={p.name} className="h-12 md:h-14 object-contain filter grayscale hover:grayscale-0 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .track { width: max-content; display: inline-flex; animation: scroll 28s linear infinite; }
        .track:hover { animation-play-state: paused; }
        @keyframes scroll {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
      `}</style>
    </section>
  )
}
