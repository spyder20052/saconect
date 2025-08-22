import PageHero from '@/components/PageHero'
import dynamic from 'next/dynamic'
import Container from '@/components/Container'

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