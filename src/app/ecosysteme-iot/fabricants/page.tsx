import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import Image from 'next/image'
import { Layers, Users, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Fabricants de capteurs | SACONECT',
  description: 'Capteurs fiables, autonomes et certifiés pour tous les environnements et usages IoT.'
}

export default function FabricantsPage() {
  return (
    <main id="main">
      <PageHero
        title="Fabricants de capteurs"
        subtitle="Capteurs fiables, autonomes et certifiés. Nous vous aidons à sélectionner le bon matériel selon l’usage."
        image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
        backHref="/ecosysteme-iot"
        backLabel="Retour à l’Écosystème IoT"
      />

      <Container className="py-12 space-y-12">
        {/* Le rôle du fabricant de capteurs */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-saco-blue to-saco-turquoise" />
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-5 gap-6 items-start">
                <div className="md:col-span-3 flex items-start gap-4">
                  <span className="h-10 w-10 rounded-lg bg-saco-blue/10 text-saco-blue grid place-items-center">
                    <Layers className="h-5 w-5" />
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-slate-900">Le rôle du fabricant de capteurs</h2>
                    <ul className="text-slate-700 space-y-1.5 list-disc pl-5">
                      <li>Transformer des phénomènes réels en données fiables et exploitables.</li>
                      <li>Superviser et automatiser des processus simples ou complexes.</li>
                      <li>Créer des gains mesurables: productivité, coûts, sérénité.</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-xs rounded-md bg-slate-50 border px-2.5 py-1 text-slate-700">Mesure fiable</span>
                      <span className="text-xs rounded-md bg-slate-50 border px-2.5 py-1 text-slate-700">Surveillance continue</span>
                      <span className="text-xs rounded-md bg-slate-50 border px-2.5 py-1 text-slate-700">Décision data‑driven</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="relative h-40 md:h-48 w-full overflow-hidden rounded-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1555696958-c5049b866f6a?q=80&w=1600&auto=format&fit=crop"
                      alt="Capteurs IoT et électronique"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ils font partie de notre écosystème IoT - Logo wall */}
        <section>
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-saco-blue/5 via-saco-turquoise/5 to-white p-6 md:p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ils font partie de notre écosystème IoT</h3>
                <p className="mt-1 text-slate-700">Une sélection de fabricants partenaires. Remplacez les placeholders par vos logos.</p>
              </div>
            </div>

            {/* Grid of placeholder logos */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'Adeunis' },
                { name: 'Owasys' },
                { name: 'IoThink' },
                { name: 'Enless' },
                { name: 'Nke WATTECO' },
                { name: 'Sensedge' },
                { name: 'Invoxia' },
                { name: 'TD Next' },
                { name: 'Unabiz' },
                { name: 'Elsys' },
                { name: 'Kerlink' },
                { name: 'McThings' }
              ].map((p, i) => (
                <a key={i} href="#" className="group">
                  <div className="h-20 rounded-xl border bg-slate-50/60 hover:bg-white transition-colors grid place-items-center shadow-sm">
                    <div className="px-3 text-slate-500 group-hover:text-slate-900 transition-colors font-medium text-sm tracking-wide">
                      {p.name}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Featured partner links (inspired by archived page) */}
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <a href="https://www.simplehw.eu" target="_blank" rel="noopener noreferrer" className="group rounded-xl border bg-white p-4 hover:shadow-sm transition">
                <div className="text-slate-900 font-medium">simplehw.eu</div>
                <div className="mt-1 text-slate-600 group-hover:text-slate-700">Capteurs simples, abordables et fiables</div>
              </a>
              <a href="https://connectedfinland.fi/en/" target="_blank" rel="noopener noreferrer" className="group rounded-xl border bg-white p-4 hover:shadow-sm transition">
                <div className="text-slate-900 font-medium">connectedfinland.fi</div>
                <div className="mt-1 text-slate-600 group-hover:text-slate-700">Capteurs bas coûts pour maison et bureau</div>
              </a>
              <a href="http://www.codea.cz/" target="_blank" rel="noopener noreferrer" className="group rounded-xl border bg-white p-4 hover:shadow-sm transition">
                <div className="text-slate-900 font-medium">codea.cz</div>
                <div className="mt-1 text-slate-600 group-hover:text-slate-700">Capteurs de mesures</div>
              </a>
            </div>

            {/* CTA */}
            <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
              <div className="text-xs text-slate-600">Vous êtes fabricant de capteurs ? Rejoignez l’écosystème.</div>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-saco-blue to-saco-turquoise px-4 py-2 text-white text-sm font-medium shadow hover:opacity-95 transition">
                <Sparkles className="h-4 w-4" /> Demander une inscription
              </a>
            </div>
          </div>
        </section>

        <section className="text-slate-700">
          <div className="rounded-2xl bg-slate-50 p-6 border">
            <div className="grid md:grid-cols-5 gap-6 items-start">
              <div className="md:col-span-3">
                <h2 className="text-xl font-semibold text-slate-900">Pourquoi devenir fabricant de capteurs ?</h2>
                <ul className="mt-2 space-y-1.5 list-disc pl-5">
                  <li>Marché IoT en forte croissance, besoin massif de capteurs dédiés.</li>
                  <li>Réseau Sigfox quasi mondial pour des usages LPWAN à faible coût.</li>
                  <li>Différenciation par qualité, autonomie, robustesse et certification.</li>
                  <li>Accès à un écosystème actif: intégrateurs, plateformes, opérateurs.</li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <div className="rounded-xl border bg-white p-5 shadow-sm">
                  <div className="inline-flex items-center gap-2 text-slate-900 font-medium">
                    <Sparkles className="h-4 w-4 text-saco-turquoise" /> Opportunités clés
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    <li className="flex items-start gap-2"><TrendingUp className="h-4 w-4 text-saco-blue mt-0.5" /> Demande croissante en secteurs énergie, ville, industrie</li>
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-saco-blue mt-0.5" /> Différenciation par qualité, autonomie, certification</li>
                    <li className="flex items-start gap-2"><Users className="h-4 w-4 text-saco-blue mt-0.5" /> Accès à l’écosystème: intégrateurs, plateformes, réseaux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* CTA */}
        <section>
          <div className="rounded-2xl bg-slate-50 border p-6">
            <h2 className="text-xl font-semibold text-slate-900">Rejoignez notre écosystème IoT</h2>
            <p className="mt-2 text-slate-700">
              SACONECT invite toutes les entreprises en quête d'opportunités de croissance et de partenariat dans leurs domaines respectifs à
              rejoindre son écosystème émergent et innovant, grâce à la technologie IoT Sigfox Low Power Wide Area. Embarquez pour l'IoT et
              ne vous laissez pas distancer. SACONECT et Sigfox proposent des solutions IoT économiques et prêtes à l'emploi qui réduisent
              considérablement les coûts de déploiement. Rejoignez‑nous en tant que partenaire et bénéficiez de l'expérience de 72 opérateurs
              Sigfox dans le monde.
            </p>
            <a href="/contact" className="mt-4 inline-flex h-11 px-6 rounded-md bg-gradient-to-r from-saco-blue to-saco-turquoise text-white text-sm font-medium items-center justify-center shadow-sm hover:translate-y-[-1px] hover:shadow-md transition">
              Demander l'inscription
            </a>
          </div>
        </section>
      </Container>
    </main>
  )
}
