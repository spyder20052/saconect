import PageHero from '@/components/PageHero'
import Container from '@/components/Container'

export const metadata = { title: 'Développeurs | SACONECT', description: 'Guides de démarrage, SDK et APIs.' }

export default function DevPage() {
  return (
    <main>
      <PageHero
        title="Développeurs"
        subtitle="Intégrez rapidement nos services IoT : APIs REST, SDKs et exemples de bout en bout."
        image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Commencer</h2>
          <div className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <a href="#" className="border rounded-lg p-5 bg-white hover:shadow transition">
              <div className="text-sm font-semibold text-slate-900">Guide de démarrage</div>
              <p className="mt-1">Créer un token, effectuer un premier appel et recevoir des données.</p>
            </a>
            <a href="#" className="border rounded-lg p-5 bg-white hover:shadow transition">
              <div className="text-sm font-semibold text-slate-900">SDK / Exemples</div>
              <p className="mt-1">Clients JS/TS, snippets et projets de référence.</p>
            </a>
            <a href="#" className="border rounded-lg p-5 bg-white hover:shadow transition">
              <div className="text-sm font-semibold text-slate-900">API REST</div>
              <p className="mt-1">Endpoints, schémas, pagination et webhooks.</p>
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Cas d’usage</h2>
          <ul className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <li className="border rounded-lg p-4 bg-white">Monitoring temps réel et alertes</li>
            <li className="border rounded-lg p-4 bg-white">Tableaux de bord personnalisés</li>
            <li className="border rounded-lg p-4 bg-white">Intégration SI via webhooks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Authentification & Sécurité</h2>
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
            <li>Tokens porteurs, scopes et rotation</li>
            <li>Limitation de débit, idempotence</li>
            <li>Bonnes pratiques et exemples sécurisés</li>
          </ul>
        </section>
      </Container>
    </main>
  )
}