import PageHero from '@/components/PageHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import { Leaf, Layers, Sparkles, MapPin } from 'lucide-react'

type Detail = {
  title: string
  subtitle: string
  image: string
  why: string[]
  benefits: string[]
  useCases: string[]
  example?: { title: string; desc: string; bullets: string[] }
  coverageNote?: string
}

// Unified creative content per solution (for intro, solutions list, and example)
type Content = {
  introTitle?: string
  introParas: string[]
  solutionsItems: string[]
  example: { title: string; desc: string; bullets?: string[] }
}

const CONTENT: Record<string, Content> = {
  'smart-agriculture': {
    introTitle: 'L’IoT au cœur de l’Agriculture 4.0',
    introParas: [
      "Aujourd’hui, l’agro‑industrie est centrée sur les données et devient plus précise et intelligente. L’IoT modernise l’agriculture et l’élevage en connectant fermes et troupeaux en continu.",
      "Accédez aux mesures météo et de sol pour piloter irrigation et interventions, réduire les coûts et améliorer les rendements.",
    ],
    solutionsItems: [
      'Monitoring des conditions du sol',
      'Monitoring précis des conditions climatiques',
      'Monitoring de la température ambiante',
      'Monitoring des niveaux de cuves/réservoirs',
      'Clôture virtuelle et suivi du troupeau',
      'Sécurisation anti‑intrusion et anti‑vol',
      'Suivi de la chaîne du froid',
      'Gain de temps et de ressources',
    ],
    example: {
      title: 'Exemple : Élevage et colliers intelligents',
      desc: "Localisation, température corporelle et activité du bétail avec capteurs autonomes. Réduction des pertes et meilleure santé du cheptel.",
      bullets: ['Détection chaleurs / vélages', 'Anti‑vol et géorepérage', 'Historique d’activité'],
    },
  },
  'smart-logistique': {
    introParas: [
      "La logistique exige une visibilité bout‑en‑bout. Suivez flotte, remorques et actifs en temps réel, sécurisez les flux et fiabilisez les délais.",
      "Capteurs autonomes pour géolocalisation, chocs, ouverture et température : moins de pertes, plus de traçabilité.",
    ],
    solutionsItems: [
      'Géolocalisation de flotte et actifs',
      'Détection d’ouverture et de chocs',
      'Suivi de température / humidité',
      'Optimisation des tournées et ETA',
      'Anti‑vol et immobilisation préventive',
      'Traçabilité bout‑en‑bout',
    ],
    example: {
      title: 'Exemple : Chaîne du froid pharmaceutique',
      desc: "Enregistreurs connectés garantissent la conformité HACCP. Alertes en cas de dépassement de seuils et preuve de température à la livraison.",
    },
  },
  'smart-industrie': {
    introParas: [
      "Maintenance prédictive et télérelève facilitent l’exploitation. Mesurez vibrations, température et consommation pour éviter les arrêts.",
      "Capteurs robustes adaptés aux environnements sévères, alimentation sobre et longue portée.",
    ],
    solutionsItems: [
      'Vibrations et dérives mécaniques',
      'Température / pression / niveaux',
      'Comptage et télérelève multi‑énergie',
      'Détection de fuites',
      'Surveillance d’environnements sévères',
    ],
    example: {
      title: 'Exemple : Machines tournantes',
      desc: "Capteurs de vibration anticipent les défaillances (roulements, désalignements). OEE en hausse et maintenance ciblée.",
    },
  },
  'smart-commerce': {
    introParas: [
      "Dans le retail, qualité et conformité priment. Visualisez à distance températures, humidité et ouvertures en magasin et dépôt.",
      "Réduisez la casse, alertez tôt et automatisez les preuves d’audit.",
    ],
    solutionsItems: [
      'Suivi vitrines réfrigérées',
      'Chambres froides et stocks sensibles',
      'Ouverture de portes et intrusions',
      'Qualité d’air (CO2, humidité)',
      'Alertes temps réel et rapports',
    ],
    example: {
      title: 'Exemple : Supermarché multi‑sites',
      desc: "Tableau de bord centralise froid et ouvertures. Interventions rapides pour éviter les pertes et garantir la conformité.",
    },
  },
  'smart-home': {
    introParas: [
      "Un habitat plus sûr et économe : détection d’ouverture et présence, suivi des consommations et confort d’air.",
      "Automatisez des routines simples et recevez des alertes en temps réel.",
    ],
    solutionsItems: [
      'Détection d’ouverture et de présence',
      'Suivi des consommations',
      'Confort thermique et qualité d’air',
      'Scénarios et alertes intelligentes',
    ],
    example: {
      title: 'Exemple : Sécurité et confort',
      desc: "Notifications en cas d’ouverture anormale et ajustement automatique du chauffage selon présence et qualité d’air.",
    },
  },
  'smart-building': {
    introParas: [
      "Optimisez performance énergétique et confort. Mesurez température, CO2 et présence pour piloter vos bâtiments.",
      "Maintenance préventive et télérelève réduisent les coûts d’exploitation.",
    ],
    solutionsItems: [
      'Confort occupant (température / CO2)',
      'Présence et optimisation d’espaces',
      'Comptage énergétique et fuites',
      'Supervision multi‑sites',
    ],
    example: {
      title: 'Exemple : Bureau intelligent',
      desc: "Présence et CO2 pilotent ventilation/éclairage. Baisse de consommation et bien‑être des équipes.",
    },
  },
  'smart-city': {
    introParas: [
      "La ville connectée optimise mobilité, éclairage et collecte des déchets. Mesures environnementales continues pour des décisions éclairées.",
      "Des services urbains plus efficaces pour une meilleure qualité de vie.",
    ],
    solutionsItems: [
      'Stationnement intelligent',
      'Qualité de l’air et météo urbaine',
      'Eclairage public adaptatif',
      'Collecte optimisée des déchets',
    ],
    example: {
      title: 'Exemple : Stationnement',
      desc: "Capteurs d’occupation guident les conducteurs. Moins de congestion et meilleure expérience usager.",
    },
  },
  'smart-energies': {
    introParas: [
      "Compteurs et réseaux deviennent intelligents. Télérelève fiable et détection rapide des fuites et anomalies.",
      "Capteurs longue portée et sobres couvrent de vastes territoires.",
    ],
    solutionsItems: [
      'Télérelève eau / gaz / énergie',
      'Pression et niveaux',
      'Détection de fuites et intrusions',
      'Supervision de réseau',
    ],
    example: {
      title: 'Exemple : Réseau d’eau',
      desc: "Pression et débit détectent les fuites précocement. Interventions ciblées et réduction des pertes.",
    },
  },
}

const DATA: Record<string, Detail> = {
  'smart-agriculture': {
    title: 'Smart Agriculture',
    subtitle: "L’IoT au cœur de l’Agriculture 4.0",
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
    why: [
      'Mesure en continu (sol, météo, actifs) pour des décisions basées données',
      'LPWAN longue portée et autonomie élevée',
      'Réduction des coûts (eau, intrants) et optimisation des rendements',
    ],
    benefits: ['Irrigation pilotée', 'Qualité des sols', 'Suivi météo', 'Traçabilité'],
    useCases: ['Serres et irrigation', 'Elevage connecté', 'Chaîne du froid', 'Surveillance parcellaire'],
    example: {
      title: 'Exemple : élevage et colliers intelligents',
      desc: "Suivi santé et localisation du bétail grâce à des capteurs autonomes.",
      bullets: ['Détection chaleurs / vélages', 'Localisation et anti-vol', 'Historique d’activité'],
    },
    coverageNote: 'Couverture étendue en zones rurales via LPWAN (Sigfox / LoRaWAN).',
  },
  'smart-logistique': {
    title: 'Smart Logistique',
    subtitle: 'Suivi de flotte, actifs et chaîne logistique.',
    image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984dd?q=80&w=1600&auto=format&fit=crop',
    why: ['Visibilité bout-en-bout', 'Alertes mouvement / chocs', 'Optimisation des tournées'],
    benefits: ['Géolocalisation', 'Température', 'Ouverture / Choc', 'Tableaux de bord'],
    useCases: ['Suivi palettes / bacs', 'Remorques', 'Chaîne du froid', 'Containers'],
  },
  'smart-industrie': {
    title: 'Smart Industrie',
    subtitle: 'Maintenance prédictive, supervision, télérelève.',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1600&auto=format&fit=crop',
    why: ['Réduction des arrêts', 'Télérelève simplifiée', 'Capteurs robustes'],
    benefits: ['Vibrations', 'Température', 'Comptages', 'Fuites'],
    useCases: ['Machines tournantes', 'Compteurs', 'Environnements sévères'],
  },
  'smart-commerce': {
    title: 'Smart Commerce',
    subtitle: 'Conditions d’environnement, stocks, chaîne du froid.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
    why: ['Qualité et conformité', 'Réduction pertes', 'Visibilité magasins / dépôts'],
    benefits: ['Température', 'Humidité', 'Ouverture', 'Alertes'],
    useCases: ['Vitrines réfrigérées', 'Chambres froides', 'Stock'],
  },
  'smart-home': {
    title: 'Smart Home',
    subtitle: 'Sécurité, confort, efficacité énergétique.',
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    why: ['Installation simple', 'Autonomie multi-années', 'Sécurité renforcée'],
    benefits: ['Présence', 'Ouverture', 'Conso énergétique'],
    useCases: ['Sécurité', 'Pilotage chauffage', 'Confort'],
  },
  'smart-building': {
    title: 'Smart Building',
    subtitle: 'Monitoring et optimisation des bâtiments.',
    image: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop',
    why: ['Efficacité énergétique', 'Confort occupant', 'Maintenance préventive'],
    benefits: ['Température / CO2', 'Présence', 'Compteurs'],
    useCases: ['Bureaux', 'Ecoles', 'Hôtellerie'],
  },
  'smart-city': {
    title: 'Smart City',
    subtitle: 'Mobilité, éclairage, déchets, environnement.',
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop',
    why: ['Services urbains rationalisés', 'Mesure environnementale', 'Optimisation coûts'],
    benefits: ['Stationnement', 'Qualité air', 'Eclairage public'],
    useCases: ['Parkings', 'Stations météo', 'Bennes'],
  },
  'smart-energies': {
    title: 'Smart Energies',
    subtitle: 'Compteurs, réseaux et détection de fuites.',
    image: 'https://images.unsplash.com/photo-1542601098-8fc114e148e8?q=80&w=1600&auto=format&fit=crop',
    why: ['Télérelève fiable', 'Réduction fuites', 'Supervision réseau'],
    benefits: ['Compteurs', 'Pression', 'Fuites'],
    useCases: ['Eau', 'Gaz', 'Energie'],
  },
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = DATA[params.slug] || { title: 'Solution', subtitle: '', image: '', why: [], benefits: [], useCases: [] }
  return { title: `${d.title} | Solutions`, description: d.subtitle }
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const d = DATA[params.slug] || DATA['smart-agriculture']
  const c = CONTENT[params.slug] || CONTENT['smart-agriculture']
  return (
    <main>
      <PageHero title={d.title} subtitle={d.subtitle} image={d.image} backHref="/solutions" backLabel="Retour aux solutions" />

      {/* Unified layout for all smart pages */}
      {/* Intro and context */}
      <section className="relative">
        <Container className="py-12">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 inline-flex items-center gap-2">
            <Leaf className="h-5 w-5 text-saco-blue" />
            {c.introTitle || d.subtitle || d.title}
          </h2>
          <div className="mt-4 space-y-3 text-slate-700">
            {c.introParas.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Applications / Nos solutions */}
      <section className="relative bg-slate-50/60">
        <Container className="py-12">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 inline-flex items-center gap-2">
            <Layers className="h-5 w-5 text-saco-blue" />
            Nos solutions
          </h3>
          <p className="mt-1 text-slate-600">La capacité de l’IoT à fournir des informations sur les capteurs et à permettre la communication entre les appareils est à l’origine d’un large éventail d’applications. Voici quelques‑unes des applications les plus populaires et leurs fonctions.</p>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {c.solutionsItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bénéfices et illustration (optional visual support) */}
      <section className="relative">
        <Container className="py-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold">Bénéfices clés</h3>
              <ul className="list-disc pl-5 text-slate-700">
                {d.benefits.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a href="/contact" className="inline-grid place-items-center px-4 h-11 bg-saco-blue text-white rounded hover:bg-saco-turquoise mt-4">
                Demander une démo
              </a>
            </div>
            <img src={d.image} alt={d.title} className="rounded-lg border object-cover w-full h-64 md:h-full transition-transform duration-300 hover:scale-[1.02]" />
          </div>
        </Container>
      </section>

      {/* Cas d’usage */}
      <section className="relative bg-slate-50/60">
        <Container className="py-12">
          <h3 className="text-lg md:text-xl font-semibold inline-flex items-center gap-2">
            <Layers className="h-5 w-5 text-saco-blue" />
            Cas d’usage
          </h3>
          <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.useCases.map((u) => (
              <div key={u} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">{u}</div>
            ))}
          </div>
        </Container>
      </section>

      {/* Exemple */}
      <section className="relative">
        <Container className="py-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold inline-flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-saco-blue" />
              {c.example.title}
            </h3>
            <p className="mt-1 text-slate-700">{c.example.desc}</p>
            {c.example.bullets && c.example.bullets.length > 0 && (
              <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-slate-700 list-disc pl-5">
                {c.example.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      {/* Couverture */}
      <section className="relative bg-gradient-to-b from-slate-50/70 to-white">
        <Container className="py-12">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-saco-blue font-semibold inline-flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Couverture
            </div>
            <p className="mt-1 text-slate-700">{d.coverageNote || 'SACONECT offre un réseau LPWAN fiable et large couverture pour répondre aux besoins IoT en zones urbaines et rurales.'}</p>
            <Link href="/couverture" className="mt-2 inline-flex text-saco-blue hover:underline">En savoir plus</Link>
          </div>
        </Container>
      </section>
    </main>
  )
}