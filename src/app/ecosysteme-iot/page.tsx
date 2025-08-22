import Image from 'next/image'
import Container from '@/components/Container'

export const metadata = { title: 'Écosystème IoT | SACONECT', description: 'Du capteur à la plateforme : fabricants, plateformes, intégrateurs, développeurs.' }

const CARDS = [
  { id: 'fabricants', href: '/ecosysteme-iot/fabricants', title: 'Fabricants de capteurs', desc: 'Capteurs fiables, autonomes et certifiés pour tous les environnements.' },
  { id: 'plateformes', href: '/ecosysteme-iot/plateformes', title: 'Plateformes de gestion', desc: 'Supervision, visualisation et alertes en temps réel.' },
  { id: 'integrateurs', href: '/ecosysteme-iot/integrateurs', title: 'Intégrateurs de solutions IoT', desc: 'De l’étude au déploiement, des projets clés en main.' },
  { id: 'developpeurs', href: '/developpeurs', title: 'Développeurs', desc: 'APIs, SDKs et documentation pour bâtir vite et bien.' },
]

export default function EcosystemePage() {
  return (
    <main>
      {/* Custom hero with overlay cards */}
      <section className="relative">
        <div className="relative h-[320px] md:h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2000&auto=format&fit=crop"
            alt="Écosystème IoT"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
          <Container>
            <div className="absolute left-0 right-0 md:left-auto md:right-auto top-1/2 -translate-y-1/2 px-4 md:px-0">
              <h1 className="text-white text-3xl md:text-4xl font-semibold">Écosystème IoT</h1>
              <p className="text-white/90 mt-3 max-w-2xl">Du capteur à la plateforme, un continuum fiable et simple. Accédez rapidement à chaque acteur clé de l’écosystème.</p>
            </div>
          </Container>
        </div>
        {/* Floating cards overlapping the photo */}
        <Container>
          <div className="-mt-10 md:-mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARDS.map(card => (
              <a key={card.id} href={card.href} className="group rounded-xl border border-white/60 bg-white/90 backdrop-blur shadow-sm px-4 py-5 hover:bg-white transition">
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                  <span className="text-saco-blue opacity-0 group-hover:opacity-100 transition">→</span>
                </div>
                <p className="text-sm text-slate-600 mt-2">{card.desc}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Concise intro only (avoid duplicate cards) */}
      <section className="relative">
        <Container className="py-12">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-900">Un écosystème cohérent</h2>
            <p className="mt-3 text-slate-700">
              Nous collaborons avec des fabricants reconnus, opérons des plateformes sécurisées et nous appuyons sur des intégrateurs
              spécialisés. Selon votre profil, accédez directement à la page dédiée via les cartes ci‑dessus.
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}