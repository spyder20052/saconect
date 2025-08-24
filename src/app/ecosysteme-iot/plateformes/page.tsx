import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import { ExternalLink, Sparkles } from 'lucide-react'

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
        backHref="/ecosysteme-iot"
        backLabel="Retour à l’Écosystème IoT"
      />

      <Container className="py-12 space-y-12">
        {/* Le rôle des plateformes de gestion */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-saco-blue to-saco-turquoise" />
            <div className="p-6 md:p-8">
              <div className="md:flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-slate-900">Le rôle des plateformes de gestion</h2>
                  <p className="mt-2 text-slate-700">
                    Une plate-forme de gestion de solutions IoT joue un rôle central pour les fournisseurs d'appareils intelligents et les startups. Elle
                    permet d’ajouter le contrôle à distance, la surveillance en temps réel, des alertes configurables, des services cloud plug‑and‑play et
                    l’intégration avec les smartphones et autres appareils grand public.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Dashboards', 'Alertes', 'APIs & Webhooks', 'Intégrations SI', 'Mobile‑ready'].map((chip) => (
                      <span key={chip} className="text-xs rounded-md bg-slate-50 border px-2.5 py-1 text-slate-700">{chip}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <div className="rounded-xl border bg-gradient-to-br from-saco-blue/5 to-saco-turquoise/10 px-4 py-3 text-sm text-slate-700">
                    <div className="inline-flex items-center gap-2 font-medium text-slate-900"><Sparkles className="h-4 w-4 text-saco-turquoise" /> Bénéfices</div>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>Time‑to‑market réduit</li>
                      <li>Expérience utilisateur cohérente</li>
                      <li>Évolutivité et sécurité gérées</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ils font partie de notre écosystème IoT */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-saco-blue/5 via-saco-turquoise/5 to-white p-6 md:p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ils font partie de notre écosystème IoT</h3>
                <p className="mt-1 text-slate-700 text-sm">Quelques partenaires et plateformes compatibles.</p>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'www.iokub.com', href: 'http://www.iokub.com/' },
                { label: 'www.iofrog.com', href: 'http://www.iofrog.com/' },
                { label: 'www.holifresh.eu', href: 'http://www.holifresh.eu/' },
                { label: 'www.foxeriot.com', href: 'http://www.foxeriot.com/' },
                { label: 'www.ticatag.com', href: 'http://www.ticatag.com/' },
                { label: 'www.iothink.com', href: 'https://www.kheiron-sp.io/Access/Login?ReturnUrl=%2Fapp%2FMain' }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="group rounded-xl border bg-white p-4 hover:shadow-sm hover:border-saco-blue/30 transition relative">
                  <div className="absolute right-3 top-3 text-slate-400 group-hover:text-saco-blue transition" aria-hidden>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <div className="text-slate-900 font-medium">{item.label}</div>
                  <div className="mt-1 text-slate-600 text-sm">Plateforme IoT</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi devenir une plateforme de gestion ? */}
        <section>
          <div className="rounded-2xl bg-slate-50 p-6 border">
            <h2 className="text-xl font-semibold text-slate-900">Pourquoi devenir une plateforme de gestion&nbsp;?</h2>
            <p className="mt-2 text-slate-700">
              Une autre application importante de la plateforme IoT est l'optimisation des coûts pour les entreprises des secteurs industriel, agricole
              et des transports grâce à la surveillance à distance des appareils et des véhicules, à la maintenance prédictive des équipements, à la
              collecte de données de capteurs pour l'analyse et la sécurité de la production en temps réel ou au suivi de la livraison du fret de bout
              en bout. Devenir une plateforme de gestion de solutions IoT, c'est jouer un rôle central dans la chaîne de valeur de l'IoT.
            </p>
          </div>
        </section>

        

        {/* Rejoignez notre Écosystème IoT (CTA) */}
        <section>
          <div className="rounded-2xl border p-6 md:p-8 bg-gradient-to-br from-saco-blue/5 to-saco-turquoise/5">
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Rejoignez notre Écosystème IoT</h2>
                <p className="mt-2 text-slate-700 max-w-3xl">
                  SACONECT invite toutes les entreprises à la recherche de relais de croissance à un partenariat dans leurs domaines respectifs à rejoindre
                  notre écosystème émergent et innovant, avec la technologie IoT Sigfox Low Power Wide Area. Prenez le train de l’IoT en marche et ne vous
                  laissez pas distancer. SACONECT et Sigfox proposent des solutions IoT plug‑and‑play à faible coût permettant une réduction drastique des
                  coûts de déploiement. Rejoignez‑nous et bénéficiez de l’expérience des opérateurs Sigfox dans le monde.
                </p>
              </div>
              <a href="/contact" className="mt-4 md:mt-0 inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm font-medium items-center justify-center whitespace-nowrap hover:translate-y-[-1px] hover:shadow-md transition gap-2">
                <Sparkles className="h-4 w-4" /> Faire une demande d’inscription
              </a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
