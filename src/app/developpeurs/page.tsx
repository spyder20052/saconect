import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import { Rocket, BookOpen, Code2, SquareCode, LayoutDashboard, Activity, Plug, Shield, KeyRound } from 'lucide-react'

export const metadata = { title: 'Développeurs | SACONECT', description: 'Guides de démarrage, SDK et APIs.' }

export default function DevPage() {
  return (
    <main>
      <PageHero
        title="Développeurs"
        subtitle="Intégrez rapidement nos services IoT : APIs REST, SDKs et exemples de bout en bout."
        image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
        backHref="/ecosysteme-iot"
        backLabel="Retour à l’Écosystème IoT"
      />

      <Container className="py-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
              <Rocket className="h-4 w-4" />
            </span>
            Commencer
          </h2>
          <div className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <a href="#" className="border rounded-lg p-5 bg-white hover:shadow transition">
              <div className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-saco-blue" /> Guide de démarrage</div>
              <p className="mt-1">Créer un token, effectuer un premier appel et recevoir des données.</p>
            </a>
            <a href="#" className="border rounded-lg p-5 bg-white hover:shadow transition">
              <div className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2"><Code2 className="h-4 w-4 text-saco-blue" /> SDK / Exemples</div>
              <p className="mt-1">Clients JS/TS, snippets et projets de référence.</p>
            </a>
            <a href="#" className="border rounded-lg p-5 bg-white hover:shadow transition">
              <div className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2"><SquareCode className="h-4 w-4 text-saco-blue" /> API REST</div>
              <p className="mt-1">Endpoints, schémas, pagination et webhooks.</p>
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
              <LayoutDashboard className="h-4 w-4" />
            </span>
            Cas d’usage
          </h2>
          <ul className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <li className="border rounded-lg p-4 bg-white inline-flex items-center gap-2"><Activity className="h-4 w-4 text-saco-blue" /> Monitoring temps réel et alertes</li>
            <li className="border rounded-lg p-4 bg-white inline-flex items-center gap-2"><LayoutDashboard className="h-4 w-4 text-saco-blue" /> Tableaux de bord personnalisés</li>
            <li className="border rounded-lg p-4 bg-white inline-flex items-center gap-2"><Plug className="h-4 w-4 text-saco-blue" /> Intégration SI via webhooks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
              <Shield className="h-4 w-4" />
            </span>
            Authentification & Sécurité
          </h2>
          <ul className="mt-3 text-slate-700 space-y-1">
            <li className="flex items-center gap-2"><KeyRound className="h-4 w-4 text-saco-blue" /> Tokens porteurs, scopes et rotation</li>
            <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-saco-blue" /> Limitation de débit, idempotence</li>
            <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-saco-blue" /> Bonnes pratiques et exemples sécurisés</li>
          </ul>
        </section>
      </Container>
    </main>
  )
}