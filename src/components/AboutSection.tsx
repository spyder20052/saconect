import Image from 'next/image'
import Link from 'next/link'
import Container from './Container'

export default function AboutSection() {
  return (
    <section className="relative bg-white">
      {/* decorative gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-40 bg-gradient-to-b from-saco-blue/10 via-saco-turquoise/10 to-transparent blur-2xl" />

      <Container className="py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-saco-blue/10 text-saco-blue px-3 py-1 text-xs font-medium tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-saco-turquoise" />
              Qui sommes-nous ?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
              SACONECT, filiale du groupe <span className="bg-clip-text text-transparent bg-gradient-to-r from-saco-blue to-saco-turquoise">SAGAM INTERNATIONAL</span>
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              À travers un réseau basé sur la technologie <strong>Sigfox</strong>, nous déployons des solutions IoT innovantes au Sénégal, en Côte d’Ivoire et au Ghana.
              Nos connectivités <em>bas débit, longue portée et basse consommation</em> ouvrent de nouvelles perspectives pour réduire vos coûts d’opération et accélérer votre prise de décision.
            </p>

            {/* Benefits */}
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                'Couverture nationale et régionale',
                'Infrastructure LPWAN optimisée',
                'Coûts d’exploitation réduits',
                'Intégration simple et sécurisée',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <svg className="mt-0.5 h-4 w-4 text-saco-turquoise shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/entreprise" className="inline-flex h-11 px-5 rounded-md bg-saco-blue text-white items-center justify-center shadow-sm shadow-saco-blue/30 hover:translate-y-[-1px] hover:shadow-md hover:shadow-saco-blue/30 transition">
                En savoir plus
              </Link>
              <Link href="/contact" className="inline-flex h-11 px-5 rounded-md border border-saco-blue/50 text-saco-blue items-center justify-center hover:border-saco-blue hover:bg-saco-blue/5 transition">
                Nous contacter
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 max-w-md gap-3 text-center">
              <div className="rounded-lg border border-slate-200 px-3 py-3">
                <div className="text-xl font-semibold text-slate-900">3</div>
                <div className="text-xs text-slate-500">Pays couverts</div>
              </div>
              <div className="rounded-lg border border-slate-200 px-3 py-3">
                <div className="text-xl font-semibold text-slate-900">LPWAN</div>
                <div className="text-xs text-slate-500">Sigfox 0G</div>
              </div>
              <div className="rounded-lg border border-slate-200 px-3 py-3">
                <div className="text-xl font-semibold text-slate-900">24/7</div>
                <div className="text-xs text-slate-500">Supervision</div>
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* back card */}
              <div className="absolute -left-6 -top-6 right-6 h-40 rounded-2xl bg-gradient-to-r from-saco-blue/10 to-saco-turquoise/10 blur-xl" />

              <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-lg shadow-slate-900/5">
                <Image
                  src="https://images.unsplash.com/photo-1558347163-9220ac3f7b31?q=80&w=1600&auto=format&fit=crop"
                  alt="Capteurs et réseau IoT"
                  width={640}
                  height={420}
                  className="h-60 w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>

              <div className="relative mt-4 ml-10 rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-lg shadow-slate-900/5">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
                  alt="Données et supervision"
                  width={640}
                  height={420}
                  className="h-48 w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>

              {/* floating badge */}
              <div className="absolute -right-3 -bottom-3 rounded-xl border border-white/20 bg-white/70 backdrop-blur px-3 py-2 text-[11px] text-slate-800 shadow-sm">
                SAGAM INTERNATIONAL • IoT 0G
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
