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
              <div className="font-medium text-slate-900 group-hover:text-saco-blue">{s.title}</div>
              <span className="text-saco-blue text-sm">→</span>
            </div>
            <div className="text-slate-600 text-sm mt-1">{s.desc}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
