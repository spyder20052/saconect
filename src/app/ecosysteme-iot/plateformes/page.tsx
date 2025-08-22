import PageHero from '@/components/PageHero'
import Container from '@/components/Container'

export const metadata = {
  title: 'Plateformes de gestion | SACONECT',
  description: 'Supervision, visualisation, alertes en temps réel et intégration SI via API.'
}

export default function PlateformesPage() {
  return (
    <main>
      <PageHero
        title="Plateformes de gestion"
        subtitle="Supervision centralisée, tableaux de bord, alertes intelligentes et gouvernance des données."
        image="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Fonctionnalités clés</h2>
          <div className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="border rounded-lg p-5 bg-white">
              <h3 className="text-sm font-semibold text-slate-900">Visualisation</h3>
              <p className="mt-1">Dashboards personnalisables, cartes, graphiques et rapports planifiés.</p>
            </div>
            <div className="border rounded-lg p-5 bg-white">
              <h3 className="text-sm font-semibold text-slate-900">Alerting</h3>
              <p className="mt-1">Règles multi‑conditions, notifications e‑mail/SMS/webhook.</p>
            </div>
            <div className="border rounded-lg p-5 bg-white">
              <h3 className="text-sm font-semibold text-slate-900">Intégrations</h3>
              <p className="mt-1">APIs REST, connecteurs SI, webhooks et export de données.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Sécurité & conformité</h2>
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
            <li>Gestion des accès, journalisation et traçabilité</li>
            <li>Chiffrement des données en transit et au repos</li>
            <li>Gouvernance des données et conformité (RGPD)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Déploiement</h2>
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
            <li>SaaS multi‑tenant, mises à jour continues</li>
            <li>On‑premise ou edge pour besoins spécifiques</li>
            <li>Haute disponibilité et scalabilité</li>
          </ul>
        </section>
      </Container>
    </main>
  )
}
