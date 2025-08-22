import Container from './Container'
import { Battery, Banknote, Wifi, Users } from 'lucide-react'

export default function WhySigfox() {
  const items = [
    { title: 'Longue durée de vie', desc: 'Batteries des capteurs optimisées pour plusieurs années.', Icon: Battery },
    { title: 'Coûts réduits', desc: 'Matériel abordable et frais de connectivité bas.', Icon: Banknote },
    { title: 'Longue portée', desc: 'Réseau à grande capacité et couverture étendue.', Icon: Wifi },
    { title: 'Écosystème riche', desc: 'Le plus grand réseau de partenaires IoT.', Icon: Users },
  ]
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E153C] to-[#1d2a52]" />
      {/* Subtle animated grid overlay (CSS-only) */}
      <div className="pointer-events-none absolute inset-0 animated-grid opacity-10" />

      <div className="relative">
        <Container className="py-16 md:py-24 text-white">
          {/* Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-saco-turquoise" />
              Pourquoi choisir
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
              Sigfox avec <span className="bg-clip-text text-transparent bg-gradient-to-r from-saco-turquoise to-white">SACONECT</span>
            </h2>
            <p className="text-white/80 mt-3 max-w-2xl">Des solutions IoT bas débit, longue portée et basse consommation pour déployer vite, à moindre coût et à grande échelle.</p>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((it) => (
              <div key={it.title} className="group rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent">
                <div className="rounded-2xl h-full bg-white/5 backdrop-blur p-5 transition duration-300 group-hover:bg-white/10 group-hover:translate-y-[-2px]">
                  <div className="h-11 w-11 grid place-items-center rounded-xl bg-white/10 text-xl ring-1 ring-white/10">
                    <it.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-medium">{it.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
