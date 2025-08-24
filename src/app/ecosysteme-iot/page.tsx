import Image from 'next/image'
import Container from '@/components/Container'
import PageHero from '@/components/PageHero'
import { Factory, Server, Wrench, Code, ChevronRight, Check } from 'lucide-react'

export const metadata = { title: 'Écosystème IoT | SACONECT', description: 'Du capteur à la plateforme : fabricants, plateformes, intégrateurs, développeurs.' }

const CARDS = [
  { id: 'fabricants', href: '/ecosysteme-iot/fabricants', title: 'Fabricants de capteurs', desc: 'Capteurs fiables, autonomes et certifiés pour tous les environnements.' },
  { id: 'plateformes', href: '/ecosysteme-iot/plateformes', title: 'Plateformes de gestion', desc: 'Supervision, visualisation et alertes en temps réel.' },
  { id: 'integrateurs', href: '/ecosysteme-iot/integrateurs', title: 'Intégrateurs de solutions IoT', desc: 'De l’étude au déploiement, des projets clés en main.' },
  { id: 'developpeurs', href: '/developpeurs', title: 'Développeurs', desc: 'APIs, SDKs et documentation pour bâtir vite et bien.' },
]

const FEATURES: Record<string, string[]> = {
  fabricants: [
    'Autonomie longue durée',
    'Certifications industrielles',
    'Capteurs multi‑environnements',
  ],
  plateformes: [
    'Dashboards temps réel',
    'Alertes & workflows',
    'Sécurité et conformité',
  ],
  integrateurs: [
    'Conception à déploiement',
    'Installation sur site',
    'SLA & maintenance',
  ],
  developpeurs: [
    'APIs & webhooks',
    'SDKs & exemples',
    'Sandbox & docs',
  ],
}
const ICONS: Record<string, JSX.Element> = {
  fabricants: <Factory className="h-5 w-5 text-saco-blue" />,
  plateformes: <Server className="h-5 w-5 text-saco-blue" />,
  integrateurs: <Wrench className="h-5 w-5 text-saco-blue" />,
  developpeurs: <Code className="h-5 w-5 text-saco-blue" />,
}

export default function EcosystemePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-saco-turquoise/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-24 h-72 w-72 rounded-full bg-saco-blue/10 blur-3xl" />
      {/* Standard header */}
      <PageHero title="Écosystème IoT" subtitle="Trouvez des solutions IoT pour votre entreprise" />

      {/* Intro text */}
      <section className="mt-6">
        <Container>
          <div className="max-w-4xl text-slate-700 space-y-3">
            <p>
              SACONECT invite toutes les entreprises en quête d'opportunités de croissance et de partenariat dans leurs domaines
              respectifs à rejoindre son écosystème émergent et innovant grâce à la technologie IoT Sigfox Low Power Wide Area.
              Embarquez pour l'IoT et ne vous laissez pas distancer.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats band */}
      <section className="mt-6">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-4 text-center shadow-sm">
              <div className="text-2xl font-semibold text-slate-900">7172</div>
              <div className="text-xs text-slate-600 mt-1">Opérateurs Sigfox</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-4 text-center shadow-sm">
              <div className="text-2xl font-semibold text-slate-900">50+</div>
              <div className="text-xs text-slate-600 mt-1">Partenaires écosystème</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-4 text-center shadow-sm">
              <div className="text-2xl font-semibold text-slate-900">10x</div>
              <div className="text-xs text-slate-600 mt-1">Déploiement plus rapide</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-4 text-center shadow-sm">
              <div className="text-2xl font-semibold text-slate-900">-30%</div>
              <div className="text-xs text-slate-600 mt-1">Coût total d’intégration</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partenaires de distribution */}
      <section className="mt-8">
        <Container>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">Partenaires de distribution</h2>
          <p className="mt-2 text-slate-700 max-w-3xl">
            SACONECT et Sigfox proposent des solutions IoT plug‑and‑play à faible coût qui réduisent considérablement les coûts de
            déploiement.
          </p>
        </Container>
      </section>

      {/* Catégories */}
      <section className="mt-8 md:mt-12">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARDS.map(card => (
              <a
                key={card.id}
                href={card.href}
                className="group relative rounded-xl border border-slate-200 bg-white shadow-sm px-4 py-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-saco-blue/20" />
                <div className="flex items-start justify-between gap-3 relative">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-9 w-9 rounded-lg bg-saco-blue/10 text-saco-blue grid place-items-center group-hover:scale-110 transition-transform">
                      {ICONS[card.id]}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                  </div>
                  <ChevronRight className="h-4 w-4 text-saco-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                </div>
                <p className="text-sm text-slate-600 mt-2">{card.desc}</p>
                <ul className="mt-3 space-y-1.5">
                  {FEATURES[card.id].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="h-3.5 w-3.5 text-saco-turquoise mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Rejoignez notre écosystème */}
      <section className="relative">
        <Container className="py-12">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-900">Rejoignez notre écosystème IoT</h2>
            <p className="mt-3 text-slate-700">
              Rejoignez‑nous en tant que partenaire et bénéficiez de l'expérience des 72 opérateurs Sigfox dans le monde.
            </p>
            <a href="/contact" className="mt-5 inline-flex h-11 px-6 rounded-md bg-gradient-to-r from-saco-blue to-saco-turquoise text-white text-sm font-medium items-center justify-center shadow-sm hover:translate-y-[-1px] hover:shadow-md transition">
              Demander l'inscription
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}