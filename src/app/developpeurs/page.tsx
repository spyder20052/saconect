import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import { Rocket, BookOpen, Code2, SquareCode, LayoutDashboard, Activity, Plug, Shield, KeyRound, ExternalLink, Sparkles } from 'lucide-react'

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
        {/* Le rôle des développeurs */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-saco-blue to-saco-turquoise" />
            <div className="p-6 md:p-8">
              <div className="md:flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-slate-900">Le rôle des développeurs</h2>
                  <p className="mt-2 text-slate-700">
                    Le rôle du développeur est de créer ou de modifier des logiciels par l'analyse, la conception et la programmation. Développer un
                    outil de gestion de solutions IoT revient à se donner un rôle central et ainsi à créer une plateforme de gestion de solutions IoT
                    ou à soutenir la plateforme de gestion du propriétaire.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['APIs', 'SDKs', 'Webhooks', 'Dashboards', 'CI/CD'].map((chip) => (
                      <span key={chip} className="text-xs rounded-md bg-slate-50 border px-2.5 py-1 text-slate-700">{chip}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <div className="rounded-xl border bg-gradient-to-br from-saco-blue/5 to-saco-turquoise/10 px-4 py-3 text-sm text-slate-700">
                    <div className="inline-flex items-center gap-2 font-medium text-slate-900"><Sparkles className="h-4 w-4 text-saco-turquoise" /> Bénéfices</div>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>Position centrale dans la chaîne de valeur</li>
                      <li>Interopérabilité avec les plateformes de gestion</li>
                      <li>Montée en compétences IoT accélérée</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commencer (Communauté) */}
        <section>
          <div className="rounded-2xl bg-slate-50 p-6 border">
            <h2 className="text-xl font-semibold text-slate-900">Commencer</h2>
            <p className="mt-2 text-slate-700">
              La communauté de développeurs Sigfox s'agrandit de jour en jour. Nous avons créé des programmes dédiés pour vous aider à démarrer
              avec Sigfox et à améliorer vos compétences IoT.
            </p>
            <div className="mt-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-saco-blue px-4 py-2 text-white hover:bg-saco-blue/90 transition">
                En savoir plus
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Kit de développement */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-white p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Kit de développement</h2>
            <p className="mt-2 text-slate-700">
              Un kit de développement, ou devkit, est une carte mère sans boîtier, parfaite pour découvrir la technologie Sigfox, ses applications
              dans tous les secteurs d'activité et pour se perfectionner.
            </p>
            <div className="mt-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-slate-900 hover:border-saco-blue hover:text-saco-blue transition">
                En savoir plus
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Ils font partie de notre écosystème IoT */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-saco-blue/5 via-saco-turquoise/5 to-white p-6 md:p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ils font partie de notre écosystème IoT</h3>
                <p className="mt-1 text-slate-700 text-sm">Exemples de projets et partenaires (placeholders à remplacer).</p>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {new Array(6).fill(0).map((_, i) => (
                <a key={i} href="#" className="group rounded-xl border bg-white p-4 hover:shadow-sm hover:border-saco-blue/30 transition relative">
                  <div className="absolute right-3 top-3 text-slate-400 group-hover:text-saco-blue transition" aria-hidden>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <div className="text-slate-900 font-medium">Projet / Partenaire</div>
                  <div className="mt-1 text-slate-600 text-sm">Librairie, exemple, intégration</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi devenir développeur IoT ? */}
        <section>
          <div className="rounded-2xl bg-slate-50 p-6 border">
            <h2 className="text-xl font-semibold text-slate-900">Pourquoi devenir développeur IoT&nbsp;?</h2>
            <p className="mt-2 text-slate-700">
              Devenir développeur dans notre écosystème, c'est prendre une place centrale dans la chaîne de valeur de l'IoT, créer son propre
              outil de gestion ou accompagner les plateformes de gestion de l'IoT.
            </p>
          </div>
        </section>
      </Container>
    </main>
  )
}