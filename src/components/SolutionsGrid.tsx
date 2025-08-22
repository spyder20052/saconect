import Image from 'next/image'
import { Sprout, Truck, Factory, Store, Home as HomeIcon, Building2, Landmark, Zap, ChevronRight } from 'lucide-react'

const SOLUTIONS = [
  { slug: 'smart-agriculture', title: 'Smart Agriculture', desc: 'Capteurs, irrigation, qualité des sols.', img: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?q=80&w=1600&auto=format&fit=crop' },
  { slug: 'smart-logistique', title: 'Smart Logistique', desc: 'Suivi de flotte, actifs, chaîne logistique.', img: 'https://images.unsplash.com/photo-1554631221-f9603e6808be?q=80&w=1600&auto=format&fit=crop' },
  { slug: 'smart-industrie', title: 'Smart Industrie', desc: 'Maintenance prédictive, télérelève, supervision.', img: 'https://images.unsplash.com/photo-1581092580485-4c62f4d7e525?q=80&w=1600&auto=format&fit=crop' },
  { slug: 'smart-commerce', title: 'Smart Commerce', desc: 'Suivi froid, stocks, conditions d’environnement.', img: 'https://images.unsplash.com/photo-1515165562835-c3b8c8f3a3ea?q=80&w=1600&auto=format&fit=crop' },
  { slug: 'smart-home', title: 'Smart Home', desc: 'Sécurité, confort, efficacité énergétique.', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop' },
  { slug: 'smart-building', title: 'Smart Building', desc: 'Bâtiments intelligents, monitoring et optimisation.', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop' },
  { slug: 'smart-city', title: 'Smart City', desc: 'Mobilité, éclairage, déchets, environnement.', img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1600&auto=format&fit=crop' },
  { slug: 'smart-energies', title: 'Smart Energies', desc: 'Compteurs, réseaux, détection de fuites.', img: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1600&auto=format&fit=crop' },
]

export function SolutionsGrid() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SOLUTIONS.map((s) => (
          <a
            key={s.slug}
            href={`/solutions/${s.slug}`}
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
                        switch (s.slug) {
                          case 'smart-agriculture': return <Sprout className="h-4 w-4 text-saco-turquoise" />
                          case 'smart-logistique': return <Truck className="h-4 w-4 text-saco-turquoise" />
                          case 'smart-industrie': return <Factory className="h-4 w-4 text-saco-turquoise" />
                          case 'smart-commerce': return <Store className="h-4 w-4 text-saco-turquoise" />
                          case 'smart-home': return <HomeIcon className="h-4 w-4 text-saco-turquoise" />
                          case 'smart-building': return <Building2 className="h-4 w-4 text-saco-turquoise" />
                          case 'smart-city': return <Landmark className="h-4 w-4 text-saco-turquoise" />
                          case 'smart-energies': return <Zap className="h-4 w-4 text-saco-turquoise" />
                          default: return null
                        }
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
        ))}
      </div>
    </div>
  )
}
