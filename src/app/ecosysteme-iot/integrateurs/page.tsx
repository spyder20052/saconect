import PageHero from '@/components/PageHero'
import Container from '@/components/Container'

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
      />

      <Container className="py-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Notre approche</h2>
          <ol className="mt-3 list-decimal list-inside text-slate-700 space-y-1">
            <li>Étude de besoin, cadrage et POC</li>
            <li>Conception solution et choix des partenaires</li>
            <li>Déploiement terrain et formation</li>
            <li>Exploitation, support et amélioration continue</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Engagements</h2>
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
            <li>Qualité de service et suivi des SLA</li>
            <li>Transparence et pilotage par la valeur</li>
            <li>Documentation et transfert de compétences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Domaines d’application</h2>
          <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="border rounded-lg p-4 bg-white">Smart building</div>
            <div className="border rounded-lg p-4 bg-white">Industrie & maintenance</div>
            <div className="border rounded-lg p-4 bg-white">Ville & territoires</div>
            <div className="border rounded-lg p-4 bg-white">Énergie & utilities</div>
            <div className="border rounded-lg p-4 bg-white">Logistique & supply chain</div>
            <div className="border rounded-lg p-4 bg-white">Santé & établissements</div>
          </div>
        </section>
      </Container>
    </main>
  )
}
