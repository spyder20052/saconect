import { Rocket, BadgeCheck, ShieldCheck, Layers } from 'lucide-react'

export default function Features() {
  const items = [
    { h: 'Déploiement rapide', p: 'Capteurs pré-intégrés et configurations simplifiées.', Icon: Rocket },
    { h: 'Fiabilité', p: 'Haute disponibilité et supervision en continu.', Icon: BadgeCheck },
    { h: 'Sécurité', p: 'Données chiffrées, contrôle d’accès et traçabilité.', Icon: ShieldCheck },
    { h: 'Scalabilité', p: 'Plateforme conçue pour grandir avec vos usages.', Icon: Layers },
  ]
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.h} className="bg-white border rounded-lg p-6 hover:shadow">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-saco-blue/10 text-saco-blue mb-3">
                <it.Icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-slate-900">{it.h}</h3>
              <p className="text-slate-600 mt-2 text-sm">{it.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
