import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import { ClipboardCheck, Boxes, Send, Headphones, BadgeCheck, Activity, BookOpen, Building2, Factory, Landmark, Bolt, Truck, Stethoscope, ExternalLink, Sparkles } from 'lucide-react'

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
        {/* Le rôle des intégrateurs de solutions IoT */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-saco-blue to-saco-turquoise" />
            <div className="p-6 md:p-8">
              <div className="md:flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-slate-900">Le rôle des intégrateurs de solutions IoT</h2>
                  <p className="mt-2 text-slate-700">
                    L'IoT a dépassé le « quoi » pour se concentrer sur le « comment », et cela ne se produira pas à grande échelle sans une
                    implication massive des intégrateurs systèmes. L'écosystème IoT est multi‑entités ; aucun fournisseur IoT ne peut proposer une
                    solution complète, incluant réseau, plateforme, logique métier et applications. Si une plateforme propose des appareils, votre
                    application IoT sera limitée à leurs capacités spécifiques. Il en va de même pour les autres fournisseurs : si vous démarrez
                    avec un seul appareil, votre plateforme sera quelque peu limitée.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Conception', 'Déploiement', 'APIs & Intégrations', 'Support', 'Pilotage'].map((chip) => (
                      <span key={chip} className="text-xs rounded-md bg-slate-50 border px-2.5 py-1 text-slate-700">{chip}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <div className="rounded-xl border bg-gradient-to-br from-saco-blue/5 to-saco-turquoise/10 px-4 py-3 text-sm text-slate-700">
                    <div className="inline-flex items-center gap-2 font-medium text-slate-900"><Sparkles className="h-4 w-4 text-saco-turquoise" /> Bénéfices</div>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>Approche solution end‑to‑end</li>
                      <li>Interopérabilité et évolutivité</li>
                      <li>Réduction du risque projet</li>
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
                <p className="mt-1 text-slate-700 text-sm">Exemples d'intégrateurs et partenaires (placeholders à remplacer).</p>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {new Array(6).fill(0).map((_, i) => (
                <a key={i} href="#" className="group rounded-xl border bg-white p-4 hover:shadow-sm hover:border-saco-blue/30 transition relative">
                  <div className="absolute right-3 top-3 text-slate-400 group-hover:text-saco-blue transition" aria-hidden>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <div className="text-slate-900 font-medium">Partenaire intégrateur</div>
                  <div className="mt-1 text-slate-600 text-sm">Conseil, intégration, déploiement</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi devenir intégrateur de solutions IoT ? */}
        <section>
          <div className="rounded-2xl bg-slate-50 p-6 border">
            <h2 className="text-xl font-semibold text-slate-900">Pourquoi devenir intégrateur de solutions IoT&nbsp;?</h2>
            <p className="mt-2 text-slate-700">
              Chaque application IoT peut et doit connecter toutes les sources, permettant ainsi l'échange de règles et d'actions et l'accès aux
              informations corrélées. L'intégrateur système est idéalement placé pour bénéficier d'un accès transparent à plusieurs unités
              opérationnelles. Les intégrateurs système ont toujours assuré l'intégration avec des systèmes tels que CRM, ERP, BMS ou WMS
              existants. Les données IoT doivent être intégrées aux systèmes existants pour en tirer le meilleur parti.
            </p>
          </div>
        </section>

        {/* Rejoignez notre Écosystème IoT (CTA) */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-saco-blue/10 via-white to-saco-turquoise/10 p-6 md:p-8">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-saco-blue/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-saco-turquoise/10 blur-2xl" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
                  <Sparkles className="h-4 w-4" />
                </span>
                Rejoignez notre Écosystème IoT
              </h2>
              <p className="mt-2 text-slate-700">
                SACONECT invite les entreprises en quête de relais de croissance à rejoindre un écosystème innovant autour de l’IoT LPWA.
                Bénéficiez d’une mise en marché accélérée, d’un réseau de partenaires et d’un accompagnement de bout en bout.
              </p>
              <div className="mt-4">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-saco-blue px-4 py-2 text-white hover:bg-saco-blue/90 transition">
                  Devenir partenaire
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
