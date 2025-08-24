import Container from './Container'
import Image from 'next/image'
import { Users2, ShieldCheck, Network, ArrowRight, ChevronRight } from 'lucide-react'

export default function JoinEcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-saco-light/30 to-white">
      <div className="pointer-events-none absolute inset-0 animated-grid opacity-[0.12]" />
      <Container className="py-14">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Copy */}
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-saco-blue/10 text-saco-blue px-3 py-1 text-xs tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-saco-turquoise" />
              Écosystème IoT
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">Rejoignez notre écosystème IoT au Sénégal</h2>
            <p className="text-slate-600 mt-3 max-w-prose">Rejoindre notre communauté IoT est une occasion unique de rencontrer les principaux acteurs de l'écosystème IoT en Afrique de l'Ouest et de découvrir les projets IoT les plus innovants.</p>

            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <Users2 className="h-5 w-5 text-saco-blue" />
                <div className="mt-2 text-sm font-medium text-slate-900">Business & réseau</div>
                <div className="text-xs text-slate-600">Deals, co‑selling, visibilité.</div>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <Network className="h-5 w-5 text-saco-blue" />
                <div className="mt-2 text-sm font-medium text-slate-900">Tech & intégration</div>
                <div className="text-xs text-slate-600">Guides, APIs, support.</div>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <ShieldCheck className="h-5 w-5 text-saco-blue" />
                <div className="mt-2 text-sm font-medium text-slate-900">Qualité & confiance</div>
                <div className="text-xs text-slate-600">Références & QA.</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/ecosysteme-iot" className="inline-flex h-11 px-5 rounded-md bg-saco-blue text-white items-center justify-center shadow-sm shadow-saco-blue/30 hover:translate-y-[-1px] hover:shadow-md hover:shadow-saco-blue/30 transition">
                Rejoindre l’écosystème
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="/contact" className="inline-flex h-11 px-5 rounded-md border border-saco-blue/50 text-saco-blue items-center justify-center hover:border-saco-blue hover:bg-saco-blue/5 transition">
                Nous contacter
              </a>
            </div>
          </div>

          {/* Media card */}
          <div className="md:col-span-6">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-slate-200 via-slate-100 to-transparent">
              <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
                  alt="Rejoindre l’écosystème IoT"
                  width={1200}
                  height={640}
                  className="w-full h-64 object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-xs text-slate-700 bg-gradient-to-t from-white/80 via-white/60 to-transparent">
                  <div className="inline-flex items-center gap-2">
                    <span className="inline-flex h-6 px-2 items-center rounded bg-saco-blue/10 text-saco-blue gap-1">
                      <Users2 className="h-3.5 w-3.5" />
                      Partenaires
                    </span>
                    <span>Un réseau en croissance</span>
                  </div>
                  <a href="/ecosysteme-iot" className="inline-flex items-center gap-1 text-saco-blue hover:underline">
                    Découvrir
                    <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
