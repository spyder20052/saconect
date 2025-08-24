import Container from './Container'
import Image from 'next/image'
import { Sprout, Truck, Factory, Store, Home as HomeIcon, Building2, Landmark, Zap, ChevronRight } from 'lucide-react'
const USE_CASES = [
  { href: '/solutions/smart-agriculture', title: 'Smart Agriculture', desc: 'Capteurs, irrigation intelligente, qualité des sols.', img: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?q=80&w=1600&auto=format&fit=crop' },
  { href: '/solutions/smart-logistique', title: 'Smart Logistics', desc: 'Suivi de flotte, chaîne du froid, traçabilité.', img: 'https://images.unsplash.com/photo-1554631221-f9603e6808be?q=80&w=1600&auto=format&fit=crop' },
  { href: '/solutions/smart-industrie', title: 'Smart Industry', desc: 'Maintenance prédictive, sécurité et productivité.', img: 'https://images.unsplash.com/photo-1581092580485-4c62f4d7e525?q=80&w=1600&auto=format&fit=crop' },
  { href: '/solutions/smart-retail', title: 'Smart Retail', desc: 'Comptage, monitoring énergie et environnement.', img: 'https://images.unsplash.com/photo-1515165562835-c3b8c8f3a3ea?q=80&w=1600&auto=format&fit=crop' },
  { href: '/solutions/smart-home', title: 'Smart Home', desc: 'Sécurité, confort, maîtrise énergétique.', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop' },
  { href: '/solutions/smart-building', title: 'Smart Building', desc: 'Pilotage et supervision des bâtiments.', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop' },
  { href: '/solutions/smart-city', title: 'Smart City', desc: 'Ville connectée: stationnement, éclairage, déchets.', img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1600&auto=format&fit=crop' },
  { href: '/solutions/smart-energies', title: 'Smart Energies', desc: 'Comptage, réseaux, efficacité énergétique.', img: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1600&auto=format&fit=crop' },
]

export default function UseCasesGrid() {
  const items = USE_CASES.slice(0, 8)
  return (
    <section className="bg-white">
      <Container className="py-12">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-saco-blue/10 text-saco-blue px-3 py-1 text-xs tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-saco-turquoise" />
              Cas d’usage
            </span>
            <h2 className="mt-2 text-xl md:text-2xl font-semibold text-slate-900">Cas d'usage</h2>
            <p className="text-slate-600 text-sm mt-1">L’IoT ouvre un large éventail d’applications. Découvrez quelques cas concrets et leurs bénéfices.</p>
          </div>
          <a href="/solutions" className="hidden sm:inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm items-center justify-center shadow-sm shadow-saco-blue/30 hover:translate-y-[-1px] hover:shadow-md hover:shadow-saco-blue/30 transition">En savoir plus <ChevronRight className="h-4 w-4 ml-2" /></a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((s) => {
            return (
            <a
              key={s.href}
              href={s.href}
              className={`group relative rounded-2xl p-[1px] bg-gradient-to-br from-slate-200 via-slate-100 to-transparent transition focus:outline-none focus:ring-2 focus:ring-saco-blue/40`}
            >
              <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm group-hover:shadow-lg transition`}> 
                <Image src={s.img} alt={s.title} fill className="absolute inset-0 object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-white text-sm md:text-base font-semibold drop-shadow-sm inline-flex items-center gap-2">
                        {(() => {
                          if (s.href.includes('smart-agriculture')) return <Sprout className="h-4 w-4 text-saco-turquoise" />
                          if (s.href.includes('smart-logistique')) return <Truck className="h-4 w-4 text-saco-turquoise" />
                          if (s.href.includes('smart-industrie')) return <Factory className="h-4 w-4 text-saco-turquoise" />
                          if (s.href.includes('smart-retail')) return <Store className="h-4 w-4 text-saco-turquoise" />
                          if (s.href.includes('smart-home')) return <HomeIcon className="h-4 w-4 text-saco-turquoise" />
                          if (s.href.includes('smart-building')) return <Building2 className="h-4 w-4 text-saco-turquoise" />
                          if (s.href.includes('smart-city')) return <Landmark className="h-4 w-4 text-saco-turquoise" />
                          if (s.href.includes('smart-energies')) return <Zap className="h-4 w-4 text-saco-turquoise" />
                          return null
                        })()}
                        {s.title}
                      </div>
                      <p className="text-white/85 text-xs md:text-xs mt-0.5 line-clamp-2">{s.desc}</p>
                    </div>
                    <span aria-hidden className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-saco-blue border border-white/50 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-md transition">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          )})}
        </div>
        <div className="sm:hidden mt-6">
          <a href="/solutions" className="inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm w-full items-center justify-center shadow-sm shadow-saco-blue/30 hover:translate-y-[-1px] hover:shadow-md hover:shadow-saco-blue/30 transition">En savoir plus <ChevronRight className="h-4 w-4 ml-2" /></a>
        </div>
      </Container>
    </section>
  )
}
