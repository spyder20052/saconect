import Container from './Container'
import Image from 'next/image'

export default function CoverageTeaser() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-saco-light/30 to-white">
      {/* Subtle animated grid overlay */}
      <div className="pointer-events-none absolute inset-0 animated-grid opacity-[0.12]" />

      <Container className="py-14">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Copy */}
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-saco-blue/10 text-saco-blue px-3 py-1 text-xs tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-saco-turquoise" />
              Couverture
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">Un réseau IoT fiable en Afrique de l’Ouest</h2>
            <p className="text-slate-600 mt-3 max-w-prose">Nous avons déjà atteint une large couverture de population en Côte d’Ivoire, au Sénégal et au Ghana et continuons d’étendre le réseau pour répondre aux besoins de nos clients et partenaires.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/couverture" className="inline-flex h-11 px-5 rounded-md bg-saco-blue text-white items-center justify-center shadow-sm shadow-saco-blue/30 hover:translate-y-[-1px] hover:shadow-md hover:shadow-saco-blue/30 transition">Voir la carte</a>
              <a href="/contact" className="inline-flex h-11 px-5 rounded-md border border-saco-blue/50 text-saco-blue items-center justify-center hover:border-saco-blue hover:bg-saco-blue/5 transition">Nous contacter</a>
            </div>
          </div>

          {/* Media card */}
          <div className="md:col-span-6">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-slate-200 via-slate-100 to-transparent">
              <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764b8a?q=80&w=1600&auto=format&fit=crop"
                  alt="Aperçu de la carte de couverture"
                  width={1200}
                  height={640}
                  className="w-full h-64 object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-xs text-slate-700 bg-gradient-to-t from-white/80 via-white/60 to-transparent">
                  <div className="inline-flex items-center gap-2">
                    <span className="inline-flex h-6 px-2 items-center rounded bg-saco-blue/10 text-saco-blue">CI • SN • GH</span>
                    <span>Couverture en expansion</span>
                  </div>
                  <a href="/couverture" className="inline-flex items-center gap-1 text-saco-blue hover:underline">
                    Ouvrir la carte
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5l7 7-7 7M5 12h14"/></svg>
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
