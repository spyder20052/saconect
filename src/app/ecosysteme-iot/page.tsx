import Image from 'next/image'
import Container from '@/components/Container'
import PageHero from '@/components/PageHero'
import { Factory, Server, Wrench, Code, ChevronRight } from 'lucide-react'

export const metadata = { title: 'Écosystème IoT | SACONECT', description: 'Du capteur à la plateforme : fabricants, plateformes, intégrateurs, développeurs.' }

const CARDS = [
  { id: 'fabricants', href: '/ecosysteme-iot/fabricants', title: 'Fabricants de capteurs', desc: 'Capteurs fiables, autonomes et certifiés pour tous les environnements.' },
  { id: 'plateformes', href: '/ecosysteme-iot/plateformes', title: 'Plateformes de gestion', desc: 'Supervision, visualisation et alertes en temps réel.' },
  { id: 'integrateurs', href: '/ecosysteme-iot/integrateurs', title: 'Intégrateurs de solutions IoT', desc: 'De l’étude au déploiement, des projets clés en main.' },
  { id: 'developpeurs', href: '/developpeurs', title: 'Développeurs', desc: 'APIs, SDKs et documentation pour bâtir vite et bien.' },
]

const ICONS: Record<string, JSX.Element> = {
  fabricants: <Factory className="h-5 w-5 text-saco-blue" />,
  plateformes: <Server className="h-5 w-5 text-saco-blue" />,
  integrateurs: <Wrench className="h-5 w-5 text-saco-blue" />,
  developpeurs: <Code className="h-5 w-5 text-saco-blue" />,
}

export default function EcosystemePage() {
  return (
    <main>
      {/* Standard header */}
      <PageHero title="Écosystème IoT" subtitle="Du capteur à la plateforme, accédez à chaque acteur clé de l’écosystème." />

      {/* Cards below header */}
      <section className="mt-8 md:mt-12">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARDS.map(card => (
              <a key={card.id} href={card.href} className="group rounded-xl border bg-white shadow-sm px-4 py-5 hover:bg-white transition">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-9 w-9 rounded-lg bg-saco-blue/10 text-saco-blue grid place-items-center">
                      {ICONS[card.id]}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                  </div>
                  <ChevronRight className="h-4 w-4 text-saco-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                </div>
                <p className="text-sm text-slate-600 mt-2">{card.desc}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Concise intro */}
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