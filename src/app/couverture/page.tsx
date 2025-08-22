import PageHero from '@/components/PageHero'
import dynamic from 'next/dynamic'
import Container from '@/components/Container'
import { Globe2, ExternalLink, MapPin, ChevronRight, Flag } from 'lucide-react'

export const metadata = { title: 'Couverture | SACONECT', description: 'Carte de couverture et disponibilité.' }

export default function CouverturePage() {
  const CoverageMap = dynamic(() => import('@/components/CoverageMap'), { ssr: false })
  return (
    <main>
      <PageHero title="Couverture" subtitle="Visualisez la disponibilité par région." />

      {/* KPI cards */}
      <section className="mt-8">
        <Container>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">Pays couverts</div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">10+</div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">Villes principales</div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">35+</div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">Disponibilité moyenne</div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">&gt; 95%</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro Sigfox */}
      <section className="mt-6">
        <Container>
          <div className="rounded-xl border bg-white p-5 flex items-start gap-4">
            <div className="shrink-0 h-10 w-10 rounded-lg bg-saco-blue/10 text-saco-blue grid place-items-center">
              <Globe2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Profitez du plus grand réseau IoT au monde</h3>
              <p className="text-slate-700 mt-1 text-sm">
                Sigfox offre une connectivité spécifique à l’IoT (Internet of Things) pour les objets connectés. Leader dans son domaine,
                Sigfox a construit un réseau mondial afin de connecter des milliards d’appareils à Internet tout en consommant le moins
                d’énergie possible. Aujourd’hui, Sigfox couvre plus de 72 pays autour du monde.
              </p>
              <a
                href="https://www.sigfox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-saco-blue mt-3 text-sm hover:underline"
              >
                En savoir plus sur le réseau 0G de Sigfox
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Map section */}
      <section className="py-10">
        <Container>
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-saco-blue/30 via-saco-turquoise/30 to-saco-blue/30">
            <div className="rounded-[15px] bg-white">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div>
                  <h2 className="text-base font-semibold text-slate-900">Carte de disponibilité</h2>
                  <p className="text-xs text-slate-600">Zones de service estimées (indicatif)</p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs">
                  <span className="px-2.5 h-7 inline-flex items-center rounded-full border bg-slate-50 text-slate-700">Toutes</span>
                  <span className="px-2.5 h-7 inline-flex items-center rounded-full border border-saco-blue/30 text-saco-blue bg-saco-blue/5">Sigfox</span>
                  <span className="px-2.5 h-7 inline-flex items-center rounded-full border bg-slate-50 text-slate-700">LTE-M</span>
                  <span className="px-2.5 h-7 inline-flex items-center rounded-full border bg-slate-50 text-slate-700">LoRa</span>
                </div>
              </div>
              <div className="px-2 pb-2 pt-2">
                <CoverageMap />
              </div>
              <div className="flex flex-wrap items-center gap-4 px-4 py-3 border-t text-sm text-slate-700">
                <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#131D68]"></span> Couverture signal</span>
                <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#1BDEDE]"></span> Zone estimée</span>
                <span className="text-slate-500 text-xs">Données à titre indicatif. Vérification requise pour des déploiements critiques.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Localités couvertes */}
      <section className="py-6">
        <Container>
          <h3 className="text-base font-semibold text-slate-900 inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-saco-blue" />
            Liste des localités couvertes
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            {/* Côte d'Ivoire */}
            <div className="rounded-xl border bg-white p-4">
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <Flag className="h-4 w-4 text-saco-blue" /> CÔTE D’IVOIRE
              </div>
              <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-700">
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> ABIDJAN</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> YAMOUSSOUKRO</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> BOUAKE</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> SANPEDRO</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> DALOA</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> ABENGOUROU</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> KORHOGO</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> ITY</li>
              </ul>
            </div>
            {/* Sénégal */}
            <div className="rounded-xl border bg-white p-4">
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <Flag className="h-4 w-4 text-saco-blue" /> SÉNÉGAL
              </div>
              <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-700">
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> DAKAR</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> THIES</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> MBOUR</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> TOUBA</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> DIAMNIADIO</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> MBORO</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> DIASS</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> NGUEKOKH</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> BAYAKH</li>
                <li className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saco-blue" /> POPENGUINE</li>
              </ul>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-sm text-slate-700">Votre région n'est pas encore couverte ?</p>
            <a href="/contact" className="mt-2 inline-flex items-center gap-2 h-10 px-4 rounded bg-saco-blue text-white text-sm">
              Faire une demande de couverture
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      {/* CTA strip */}
      <section className="bg-slate-50 border-t">
        <Container className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-900">Besoin d’une vérification de couverture précise ?</h3>
            <p className="text-slate-600 text-sm mt-1">Notre équipe peut réaliser une étude de site en 48h.</p>
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="inline-flex h-10 px-4 items-center justify-center rounded bg-saco-blue text-white text-sm">Contacter un expert</a>
            <a href="/ressources" className="inline-flex h-10 px-4 items-center justify-center rounded border text-slate-800 text-sm bg-white">Voir la documentation</a>
          </div>
        </Container>
      </section>
    </main>
  )
}