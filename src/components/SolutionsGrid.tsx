import { Sprout, Truck, Factory, Store, Home as HomeIcon, Building2, Landmark, Zap, ChevronRight } from 'lucide-react'

const SOLUTIONS = [
  { slug: 'smart-agriculture', title: 'Smart Agriculture', desc: 'Capteurs, irrigation, qualité des sols.' },
  { slug: 'smart-logistique', title: 'Smart Logistique', desc: 'Suivi de flotte, actifs, chaîne logistique.' },
  { slug: 'smart-industrie', title: 'Smart Industrie', desc: 'Maintenance prédictive, télérelève, supervision.' },
  { slug: 'smart-commerce', title: 'Smart Commerce', desc: 'Suivi froid, stocks, conditions d’environnement.' },
  { slug: 'smart-home', title: 'Smart Home', desc: 'Sécurité, confort, efficacité énergétique.' },
  { slug: 'smart-building', title: 'Smart Building', desc: 'Bâtiments intelligents, monitoring et optimisation.' },
  { slug: 'smart-city', title: 'Smart City', desc: 'Mobilité, éclairage, déchets, environnement.' },
  { slug: 'smart-energies', title: 'Smart Energies', desc: 'Compteurs, réseaux, détection de fuites.' },
]

export function SolutionsGrid() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SOLUTIONS.map((s) => (
          <a
            key={s.slug}
            href={`/solutions/${s.slug}`}
            className="group block rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="font-medium text-slate-900 group-hover:text-saco-blue inline-flex items-center gap-2">
                {(() => {
                  switch (s.slug) {
                    case 'smart-agriculture': return <Sprout className="h-4 w-4 text-saco-blue" />
                    case 'smart-logistique': return <Truck className="h-4 w-4 text-saco-blue" />
                    case 'smart-industrie': return <Factory className="h-4 w-4 text-saco-blue" />
                    case 'smart-commerce': return <Store className="h-4 w-4 text-saco-blue" />
                    case 'smart-home': return <HomeIcon className="h-4 w-4 text-saco-blue" />
                    case 'smart-building': return <Building2 className="h-4 w-4 text-saco-blue" />
                    case 'smart-city': return <Landmark className="h-4 w-4 text-saco-blue" />
                    case 'smart-energies': return <Zap className="h-4 w-4 text-saco-blue" />
                    default: return null
                  }
                })()}
                {s.title}
              </div>
              <ChevronRight className="text-saco-blue h-4 w-4" />
            </div>
            <div className="text-slate-600 text-sm mt-1">{s.desc}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
