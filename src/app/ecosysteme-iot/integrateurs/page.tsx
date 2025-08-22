import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import { ClipboardCheck, Boxes, Send, Headphones, BadgeCheck, Activity, BookOpen, Building2, Factory, Landmark, Bolt, Truck, Stethoscope } from 'lucide-react'

export const metadata = {
  title: 'Intégrateurs de solutions IoT | SACONECT',
  description: 'De l’étude au déploiement : projets clés en main, support et exploitation.'
}

export default function IntegrateursPage() {
  return (
    <main>
      <PageHero
        title="Intégrateurs de solutions IoT"
        subtitle="De la conception au déploiement, orchestration matériel, connectivité et plateforme pour une solution opérationnelle."
        image="https://images.unsplash.com/photo-1581093588401-16ec1f0278ab?q=80&w=2000&auto=format&fit=crop"
        backHref="/ecosysteme-iot"
        backLabel="Retour à l’Écosystème IoT"
      />

      <Container className="py-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
              <ClipboardCheck className="h-4 w-4" />
            </span>
            Notre approche
          </h2>
          <ol className="mt-3 text-slate-700 space-y-2">
            <li className="flex items-center gap-2"><ClipboardCheck className="h-4 w-4 text-saco-blue" /> Étude de besoin, cadrage et POC</li>
            <li className="flex items-center gap-2"><Boxes className="h-4 w-4 text-saco-blue" /> Conception solution et choix des partenaires</li>
            <li className="flex items-center gap-2"><Send className="h-4 w-4 text-saco-blue" /> Déploiement terrain et formation</li>
            <li className="flex items-center gap-2"><Headphones className="h-4 w-4 text-saco-blue" /> Exploitation, support et amélioration continue</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
              <BadgeCheck className="h-4 w-4" />
            </span>
            Engagements
          </h2>
          <ul className="mt-3 text-slate-700 space-y-2">
            <li className="flex items-center gap-2"><Activity className="h-4 w-4 text-saco-blue" /> Qualité de service et suivi des SLA</li>
            <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-saco-blue" /> Transparence et pilotage par la valeur</li>
            <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-saco-blue" /> Documentation et transfert de compétences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
              <Building2 className="h-4 w-4" />
            </span>
            Domaines d’application
          </h2>
          <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="border rounded-lg p-4 bg-white inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-saco-blue" /> Smart building</div>
            <div className="border rounded-lg p-4 bg-white inline-flex items-center gap-2"><Factory className="h-4 w-4 text-saco-blue" /> Industrie & maintenance</div>
            <div className="border rounded-lg p-4 bg-white inline-flex items-center gap-2"><Landmark className="h-4 w-4 text-saco-blue" /> Ville & territoires</div>
            <div className="border rounded-lg p-4 bg-white inline-flex items-center gap-2"><Bolt className="h-4 w-4 text-saco-blue" /> Énergie & utilities</div>
            <div className="border rounded-lg p-4 bg-white inline-flex items-center gap-2"><Truck className="h-4 w-4 text-saco-blue" /> Logistique & supply chain</div>
            <div className="border rounded-lg p-4 bg-white inline-flex items-center gap-2"><Stethoscope className="h-4 w-4 text-saco-blue" /> Santé & établissements</div>
          </div>
        </section>
      </Container>
    </main>
  )
}
