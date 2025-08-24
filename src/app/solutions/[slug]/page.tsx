import PageHero from '@/components/PageHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import { Leaf, Layers, Sparkles, MapPin, ChevronRight, Thermometer, Droplets, Wind, ShieldCheck, Map, Gauge, Snowflake, CheckCircle2, Truck, Package, Boxes, AlertTriangle, Users, BarChart3, TrendingUp, ClipboardCheck, Route, Navigation, Clock, Lightbulb, Plug, Bell, Waves, LifeBuoy, Mail, Bug, PawPrint, Briefcase, Activity, Flame, Battery, Trash2, Lock, Calendar, UserCheck, ArrowUpDown, Sun, Zap } from 'lucide-react'

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
  gallery?: string[]
}

const CONTENT: Record<string, Content> = {
  'smart-agriculture': {
    introTitle: "L'IoT au cœur de l'Agriculture 4.0",
    introParas: [
      "L'agroalimentaire d'aujourd'hui est axé sur les données, précis et plus intelligent que jamais.",
      "L'IoT a considérablement modernisé l'agriculture et l'élevage grâce à des techniques innovantes de collecte, d'analyse et de visualisation des données. Il permet aux agriculteurs et aux éleveurs de rester connectés à leurs champs et à leur bétail comme jamais auparavant. Chaque agriculteur peut désormais bénéficier rapidement de données fiables, en quantité et en qualité, à des intervalles de temps prédéfinis ou par événement. Avec l'avènement de la technologie SIGFOX, les capteurs sont devenus beaucoup plus économes en énergie et la puissance du signal permet d'atteindre les zones reculées ou isolées. Ainsi, le nombre limité de messages à envoyer permet aux piles des capteurs d'avoir une autonomie de plusieurs années sans avoir à les remplacer, ce qui simplifie considérablement la maintenance.",
      "Accédez à des informations à distance et en temps réel sur les précipitations, la température, les conditions de vent (force et direction), la pression atmosphérique et l'humidité de votre région. Optimisez vos opérations agricoles, votre consommation d'eau, votre utilisation de l'eau et la qualité de vos récoltes. Passez à l'agriculture de précision.",
    ],
    solutionsItems: [
      "Surveillance de l'état du sol",
      'Surveillance précise des conditions climatiques',
      'Surveillance de la température ambiante',
      'Surveillance du niveau des cuves',
      'Enclos virtuel, suivi et gestion du troupeau',
      'Sécurisation des barrières et prévention des vols de bétail',
      'Surveillance de la température des aliments tout au long de la chaîne du froid',
      'Gain de temps et de ressources',
    ],
    example: {
      title: 'Exemple : Élevage et colliers intelligents',
      desc: "Dans un élevage (bovins, caprins et porcins), il est crucial d'avoir une vue d'ensemble du troupeau, à tout moment et en tout lieu. Les colliers intelligents pour bovins permettent aux éleveurs de clôturer virtuellement et de suivre les animaux par GPS, ainsi que de collecter des informations cruciales pour mieux gérer la santé et la sécurité de leurs troupeaux. Grâce à ces colliers, les éleveurs peuvent connaître la localisation, la vitesse, la température corporelle et le niveau de stress de leurs animaux en temps quasi réel. Via le réseau Sigfox (par SACONECT), ces données peuvent être utilisées pour optimiser les coûts de production ainsi que la santé et la sécurité du troupeau.",
      bullets: ['Localisation et suivi GPS', 'Vitesse et activité', 'Température corporelle et niveau de stress', 'Optimisation des coûts et sécurité du troupeau'],
    },
    gallery: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518705131576-01b2051a76e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500937386664-56f3d81aa8bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  'smart-logistique': {
    introTitle: "Optimisation des ressources de la chaîne d'approvisionnement",
    introParas: [
      "Les retards constituent l'un des enjeux majeurs de la logistique. Avec SIGFOX, surveiller et protéger vos actifs de valeur n'a jamais été aussi simple. La nouvelle génération de capteurs SIGFOX comble le vide laissé par les technologies de suivi traditionnelles et vous offre une chaîne d'approvisionnement plus connectée.",
      "Ces solutions IoT offrent plus de flexibilité, d'accessibilité et une vision à 360° de la chaîne d'approvisionnement en temps réel. De plus, elles renforcent la sécurité des entrepôts et des flottes. Par exemple, les capteurs transmettent les données de localisation des flottes de conteneurs consignés, ainsi que des informations précieuses sur la localisation des autres livraisons (palettes, colis, chariots).",
    ],
    solutionsItems: [
      "Suivi des actifs pour optimiser la chaîne d'approvisionnement",
      "Suivi des conditions de transport tout au long de la chaîne d'approvisionnement",
      'Récupération rapide des véhicules/marchandises volés',
      'Réduction des coûts liés aux retards',
      'Stocks permanents et productivité accrue',
      "Efficacité accrue de la préparation des commandes (optimisation des itinéraires)",
      'Fluidité accrue des processus logistiques',
      'Sécurité accrue des employés, des systèmes de stockage et des marchandises',
      'Augmentation de la capacité de stockage (optimisation des stocks)',
      "Mise à jour automatique des indicateurs clés de performance logistiques",
      "Contrôle total de l'état (traçabilité, niveaux de stock) des marchandises",
      "Anticipation plus précise de la demande",
      'Traçabilité automatisée et complète des produits',
    ],
    example: {
      title: 'Exemple : Suivi des conditions de transport de denrées alimentaires ou de médicaments',
      desc: "Suivez plus facilement la localisation et l'état des marchandises lors de déplacements aériens, maritimes et terrestres. Les produits sensibles (médicaments, vaccins, denrées réfrigérées) doivent respecter des conditions strictes pour garantir la sécurité et la qualité. Les traceurs connectés au réseau SIGFOX collectent température, humidité, chocs et inclinaison pour améliorer le contrôle qualité, la traçabilité et la responsabilité. Le réseau IoT de SACONECT permet d'assurer le respect des procédures de sécurité alimentaire en surveillant précisément les installations de stockage, camions et conteneurs frigorifiques, et en déclenchant des alertes en cas d'anomalies.",
      bullets: ['Température en continu', 'Humidité', 'Chocs et inclinaison', 'Alertes dépassement de seuils', 'Preuves de conformité et traçabilité'],
    },
  },
  'smart-industrie': {
    introTitle: 'La nouvelle révolution industrielle',
    introParas: [
      "L'IoT transforme les usines, les entrepôts, la logistique et l'ensemble de la chaîne de valeur industrielle. Véritable moteur de la nouvelle révolution industrielle, il accélère l'innovation et la performance.",
      "L’IoT joue déjà un rôle clé face aux perturbations de la chaîne d'approvisionnement et aux enjeux associés : déclin de la production, manque de visibilité sur les données de l'environnement de production, mauvaise gestion des pannes.",
      "Associée à l’Intelligence Artificielle, la puissance des objets connectés révolutionne les environnements industriels et urbains, en fournissant des informations exploitables en temps réel ou quasi réel.",
    ],
    solutionsItems: [
      'Surveillance intelligente des machines (sécurité et production)',
      'Tableaux de bord : anomalies de performance et alertes',
      'Comptage et télérelève automatique (multi‑énergie)',
      'Niveaux de réservoirs et silos (notifications)',
      'Suivi de présence des employés à distance (horloges connectées)',
      'Analyse de production : cluster de capteurs et optimisation OEE',
      'Récupération rapide des véhicules volés (anti‑brouillage)',
      'Gestion des stocks et visibilité temps réel entrepôts',
      'Digitalisation des processus (pression, vibrations, température, humidité, commutateurs, tension)',
      'Intégrité des infrastructures : fissures et déformations',
      'Suivi des batteries et sources d’urgence (niveau de charge)',
      'Surveillance des fuites et ruptures de canalisations',
      'Sécurisation des sites et alarmes résistantes au brouillage',
      'Sécurité alimentaire (température des installations)',
      'Sécurité et sûreté au travail (conditions environnementales, alertes)',
    ],
    example: {
      title: 'Exemple : Ligne de production connectée',
      desc: "Un cluster de capteurs (vibrations, température, consommation) surveille une ligne de production. Le tableau de bord visualise les données, détecte les dérives et déclenche des alertes, permettant maintenance prédictive et amélioration de l’OEE.",
      bullets: [
        'Surveillance vibrations / température des machines',
        'Télérelève automatique des compteurs',
        'Alertes seuils et dérives de performance',
        'Maintenance prédictive et réduction des pannes',
        'Tableau de bord temps réel et décisions data‑driven',
      ],
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
  'smart-retail': {
    introTitle: 'Contrôle des flux et suivi de la satisfaction',
    introParas: [
      "Dans le secteur du commerce de détail, l'IoT contribue à améliorer les prévisions, la précision et la production dans les magasins, les entrepôts et les commerces. Il est essentiel de disposer d'une vision et d'un contrôle complets de l'environnement commercial : flux de stocks, satisfaction client et fréquentation.",
      "Tout en surveillant la performance des fournisseurs ou de la chaîne de production, avec SIGFOX, l'entreprise garantit la disponibilité de produits de qualité, en quantité suffisante et à la date souhaitée, pour un besoin précis.",
      "L'analyse décisionnelle prend une nouvelle dimension grâce au traitement d'un flux d'informations en temps réel ou quasi réel d'un bout à l'autre de la chaîne logistique et commerciale.",
      "Après traitement, les données collectées permettent de se rapprocher de l'optimum entre le coût des ruptures de stock, la qualité du service client, le niveau de stock et le coût logistique.",
    ],
    solutionsItems: [
      'Gestion de la chaîne du froid',
      'Chambres froides et réfrigérateurs',
      'Suivi température et humidité en temps réel',
      'Détection d’ouverture et d’anomalies des équipements',
      'Boutons intelligents pour déclencher la collecte de colis',
      'Réapprovisionnement et services sans file d’attente (bouton)',
      'Boutons de feedback et mesure de la satisfaction client',
      'Tableaux de bord cloud et alertes instantanées',
      'Optimisation des tournées de collecte',
    ],
    example: {
      title: 'Exemple : Bouton intelligent',
      desc: "Un bouton intelligent installé (boîte aux lettres, comptoir, rayon) permet de déclencher la collecte de colis, d'optimiser les tournées et de fluidifier le service client (réapprovisionnement, assistance, rappel). Les retours clients peuvent être saisis en un geste et consolidés dans le cloud.",
      bullets: [
        'Déclenchement de la collecte de colis',
        'Optimisation des tournées de collecte',
        'Réapprovisionnement et demandes de service en un clic',
        'Traitement VIP (rappel, assistance dédiée)',
        'Mesure de la satisfaction client en sortie de magasin',
        'Visualisation cloud et alertes temps réel',
      ],
    },
  },
  'smart-home': {
    introTitle: 'Parlez à votre maison, améliorez votre qualité de vie',
    introParas: [
      "La sécurité et la maîtrise des dépenses familiales sont essentielles pour améliorer le confort domestique. La maison connectée n’est plus un rêve : communiquez avec votre maison via SACONECT sur le réseau Sigfox.",
      "Surveillez et contrôlez éclairage, chauffage, climatisation, ventilation, ouvertures, systèmes de sécurité, conduites d’eau et prises électriques. Les appareils peuvent aussi interagir entre eux (ex. déclencher un arrosage quand un réservoir passe sous 10 %).",
      "L’IA et l’IoT, intégrés aux énergies renouvelables (solaire/éolien), optimisent stockage et usage de l’énergie en s’appuyant sur des capteurs positionnés aux points de consommation.",
    ],
    solutionsItems: [
      "Pilotage de l'éclairage et gestion de l’énergie",
      'Alarmes connectées résistantes au brouillage (secours Sigfox)',
      "Détection de fuite d'eau et notifications en temps réel",
      "Surveillance de la qualité de l'eau de la piscine (pH, chlore, t°)",
      'Sports/outdoor: suivi d’itinéraires et SOS sans smartphone',
      'Suivi de prestataires de soins à domicile (lecteur de pointage)',
      'Bouton d’urgence et détection de chute (personnes âgées)',
      'Détection de présence (CO2) et scénarios domotiques',
      'Boîtes aux lettres connectées (notification colis)',
      'Surveillance d’activité des rongeurs (infra‑rouge)',
      'Collier connecté animaux (sorties, activité, repos)',
      'Bagages connectés (localisation voyages)',
    ],
    example: {
      title: "Exemple : Détection de fuite d'eau",
      desc: "Des capteurs Thermal Flow détectent toute fuite dans la plomberie domestique et envoient une alerte immédiate (mobile/email). Combiné à un service d’intervention, cela apporte une tranquillité d’esprit, même en cas d’absence prolongée.",
      bullets: [
        'Alerte temps réel en cas de fuite',
        'Suivi et historique dans le cloud',
        'Option service de réparation automatique',
      ],
    },
  },
  'smart-building': {
    introTitle: 'Et si un bâtiment pouvait parler ? Grâce à l\'IoT, c\'est désormais possible.',
    introParas: [
      "La rentabilité d’un actif immobilier dépend des coûts d’exploitation, de l’optimisation des surfaces, des consommables (électricité, eau, gaz, papier) et des services (restauration, conciergerie).",
      "L’objectif d’un bâtiment intelligent est d’améliorer confort et productivité en exploitant des données fiables pour la décision et l’automatisation : gain de temps, réduction des coûts, meilleure sécurité, plus de confort et visibilité sur la stabilité de l’infrastructure.",
      "Connectez vos bâtiments au réseau IoT de SACONECT et collectez des données essentielles quasi en temps réel. Avec des règles ou de l’IA (apprentissage automatique), orchestrez équipements, environnement et usages de façon beaucoup plus efficace.",
    ],
    solutionsItems: [
      'Détection et notification de fumée/incendie',
      'Relevés de température et qualité d’air (CO2)',
      'Temps de réaction plus rapide (alertes temps réel)',
      'Détection du niveau de batterie des équipements',
      'Réduction des coûts de maintenance (préventive)',
      'Bouton panique / service (sécurité & assistance)',
      'Sécurisation des chantiers et zones sensibles',
      'Efficacité opérationnelle accrue (tableaux de bord)',
      'Optimisation des espaces (présence, flex office)',
      'Comptage de personnes et sécurité évacuation',
      'Gestion des salles de réunion (présence/réservation)',
      'Casiers connectés (disponibilité, verrouillage)',
      'Poubelles connectées (alerte de remplissage)',
      'Ascenseurs : surveillance pannes et alertes',
      "Détection de fuite d'eau (toilettes, locaux techniques)",
      'Télérelève compteurs (eau/élec/gaz)',
    ],
    example: {
      title: 'Exemple : Bâtiment intelligent au quotidien',
      desc: "Les capteurs agrègent présence, température, CO2 et états d’équipements. L’application propose des actions et automatise : parking, espaces libres, salles de réunion, confort (éclairage/T°), comptage personnes, casiers, et interventions (poubelles pleines, ascenseur en panne, fuite d’eau).",
      bullets: [
        'Parking et espaces de travail disponibles en temps réel',
        'Régulation automatique lumière et température',
        'Réservation/occupation salles via capteurs de présence',
        'Comptage personnes pour sécurité et services (restauration)',
        'Casiers connectés : disponibilité, verrouillage/déverrouillage',
        'Alertes opérationnelles: poubelles pleines, panne ascenseur, fuite d’eau',
      ],
    },
  },
  'smart-city': {
    introTitle: "Comment une ville peut être intelligente : l'avenir des entités urbaines",
    introParas: [
      "Grâce au réseau 0G Sigfox, la ville collecte, analyse et exploite des données issues du mobilier urbain, des services et des infrastructures pour optimiser l’usage et améliorer le bien‑être des citoyens.",
      "Une ville intelligente est collaborative (open data, interopérabilité des services) mais aussi résiliente et préventive (anticipation crues, pénuries, incidents).",
    ],
    solutionsItems: [
      'Suivi à distance du taux de remplissage des poubelles',
      'Réduction des coûts et tournées de collecte des déchets',
      'Impact environnemental réduit (optimisation des trajets)',
      'Localisation des places de stationnement disponibles',
      "Surveillance de la qualité de l'air (cartographie temps réel)",
      "Bornes d'incendie : pression, fuites et pannes en temps réel",
      'Eclairage public : maintenance et gradation à distance',
      'Amélioration de la satisfaction usagers (feedbacks instantanés)',
      'Télérelève des compteurs (EAU, GAZ, ELECTRICITÉ)',
      'Surveillance à distance des installations d’eau (niveau/pression/pH)',
      'Gestion de l’espace public (signalisation connectée, impacts)',
      'Suivi présence employés (horloges connectées chantier)',
      'Défibrillateurs connectés : état et batteries',
      'Ville résiliente : crues, ressources, accidents/effondrements',
    ],
    example: {
      title: 'Exemple : Stationnement et déchets intelligents',
      desc: "Capteurs de stationnement guident automatiquement vers les places libres et réduisent la pollution. Capteurs de remplissage optimisent les tournées : seules les bennes pleines sont collectées, avec alertes et tableaux de bord pour la planification.",
      bullets: [
        'Places libres en temps réel et guidage',
        'Moins de congestion et émissions',
        'Collecte déclenchée sur seuils de remplissage',
        'Tableaux de bord et planification optimisée',
      ],
    },
  },
  'smart-energies': {
    introTitle: 'Fonctionnement et consommation plus efficaces',
    introParas: [
      "La transformation numérique s’impose pour optimiser exploitation et consommation d’énergie. Avec le LPWAN Sigfox et la baisse des coûts capteurs, des solutions de gestion énergétique avancées deviennent accessibles à tous.",
      "Opérateurs, services publics et fournisseurs de kits solaires gagnent en visibilité temps réel pour facturer au plus juste, équilibrer offre/demande (tarification dynamique) et réduire les pertes.",
    ],
    solutionsItems: [
      'Mesure et surveillance à distance en temps réel',
      'Gestion simplifiée des équipements et appareils',
      'Gestion des pannes : anticipation et maintenance corrective',
      'Aide à la décision par analyse de données',
      "Définition des profils d’utilisation (heures / zones / quantités)",
      'Télérelève automatique des compteurs (EAU / GAZ / ELECTRICITÉ)',
      'Détection des défauts et pertes sur le réseau de transport',
      'Suivi des kits solaires et production photovoltaïque',
    ],
    example: {
      title: 'Exemple : Smart Grid (Lyon) et kits solaires',
      desc: "Compteurs intelligents et capteurs agrègent consommation et production pour optimiser l’énergie. Les kits solaires (La Réunion) sont supervisés à distance : régulation, alarmes et maintenance prédictive améliorent disponibilité et rendement.",
      bullets: [
        'Télérelève et facturation précises',
        'Optimisation consommation et effacement/DR',
        'Détection de défauts et pertes réseau',
        'Supervision PV : régulation et alertes automatiques',
      ],
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
    subtitle: 'La nouvelle révolution industrielle',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1600&auto=format&fit=crop',
    why: ['Réduction des arrêts', 'Télérelève simplifiée', 'Capteurs robustes'],
    benefits: ['Maintenance prédictive', 'Télérelève automatisée', 'Réduction des pannes', 'Optimisation OEE'],
    useCases: ['Surveillance machines', 'Télérelève compteurs', 'Niveaux / silos', 'Sécurité site'],
  },
  'smart-commerce': {
    title: 'Smart Commerce',
    subtitle: 'Conditions d’environnement, stocks, chaîne du froid.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
    why: ['Qualité et conformité', 'Réduction pertes', 'Visibilité magasins / dépôts'],
    benefits: ['Température', 'Humidité', 'Ouverture', 'Alertes'],
    useCases: ['Vitrines réfrigérées', 'Chambres froides', 'Stock'],
  },
  'smart-retail': {
    title: 'Smart Retail',
    subtitle: 'Contrôle des flux et suivi de la satisfaction',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
    why: ['Qualité et conformité', 'Réduction des pertes', 'Visibilité magasins / dépôts'],
    benefits: ['Température', 'Humidité', 'Ouverture', 'Alertes'],
    useCases: ['Chaîne du froid', 'Boutons intelligents', 'Satisfaction client'],
  },
  'smart-home': {
    title: 'Smart Home',
    subtitle: "Parlez à votre maison et améliorez votre qualité de vie",
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    why: ['Installation simple', 'Autonomie multi‑années', 'Sécurité renforcée'],
    benefits: ['Sécurité', 'Maîtrise énergétique', 'Confort', 'Alertes temps réel'],
    useCases: ["Alarmes connectées", "Détection de fuite", "Qualité d’eau piscine", "Suivi seniors"],
  },
  'smart-building': {
    title: 'Smart Building',
    subtitle: "Et si un bâtiment pouvait parler ?",
    image: 'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop',
    why: ['Efficacité énergétique', 'Confort occupant', 'Maintenance préventive'],
    benefits: ['Sécurité incendie', 'Qualité d’air & température', 'Maintenance réduite', 'Optimisation espaces'],
    useCases: ['Parking & flex office', 'Salles & comptage', 'Fuites & ascenseurs', 'Poubelles & casiers'],
  },
  'smart-city': {
    title: 'Smart City',
    subtitle: "Ville collaborative, résiliente et préventive",
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop',
    why: ['Services optimisés', 'Qualité de vie', 'Décisions data‑driven'],
    benefits: ['Stationnement intelligent', "Gestion des déchets", "Qualité de l’air", 'Télérelève'],
    useCases: ['Parkings connectés', 'Poubelles & tournées', "Bornes incendie & éclairage", 'Eau & compteurs'],
  },
  'smart-energies': {
    title: 'Smart Energies',
    subtitle: 'Gestion énergétique connectée et télérelève',
    image: 'https://images.unsplash.com/photo-1542601098-8fc114e148e8?q=80&w=1600&auto=format&fit=crop',
    why: ['Visibilité temps réel', 'Réduction des pertes', 'Optimisation consommation'],
    benefits: ['Télérelève automatique', 'Maintenance prédictive', 'Facturation précise', 'Equilibrage offre/demande'],
    useCases: ['Compteurs eau/gaz/élec', 'Kits solaires PV', 'Défauts & pertes réseau', 'Aide à la décision'],
  },
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = DATA[params.slug] || { title: 'Solution', subtitle: '', image: '', why: [], benefits: [], useCases: [] }
  return { title: `${d.title} | Solutions`, description: d.subtitle }
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const d = DATA[params.slug] || DATA['smart-agriculture']
  const c = CONTENT[params.slug] || CONTENT['smart-agriculture']
  const isAgri = params.slug === 'smart-agriculture'

  // Heuristic icon resolver per item text/slug
  const iconFor = (text: string, slug: string, idx: number) => {
    const t = text.toLowerCase()
    // Common mappings by keywords
    if (/(temp|chaîne du froid|réfrig|froid)/.test(t)) return Snowflake
    if (/(temp|température)/.test(t)) return Thermometer
    if (/(humidité|sol|pluie|eau|précip)/.test(t)) return Droplets
    if (/(niveau|cuve|réservoir|pression|jauge)/.test(t)) return Gauge
    if (/(suivi|géolocal|localis|gps|parcours|itinéraire|route)/.test(t)) return Route
    if (/(carte|zone|parcellaire|map)/.test(t)) return Map
    if (/(choc|inclinaison|alerte|anomalie|vol|sécurité|anti\-?intrusion)/.test(t)) return AlertTriangle
    if (/(sécurité|protection|barrières)/.test(t)) return ShieldCheck
    if (/(flotte|camion|transport|logistique|remorque)/.test(t)) return Truck
    if (/(palette|colis|conteneur|marchandise|produit)/.test(t)) return Package
    if (/(stock|stocks|capacité)/.test(t)) return Boxes
    if (/(kpi|indicateur|performance)/.test(t)) return BarChart3
    if (/(demande|prévision)/.test(t)) return TrendingUp
    if (/(qualité|conformité|traçabilité|audit)/.test(t)) return ClipboardCheck
    if (/(employé|équipe|occupant|sécurité des employés)/.test(t)) return Users
    if (/(temps réel|retards|délais)/.test(t)) return Clock
    // Smart Home specific
    if (/(éclairage|lumière|lumiere)/.test(t)) return Lightbulb
    if (/(énergie|energie|prise|consommation)/.test(t)) return Plug
    if (/(alarme|sécurité|sirène|siren)/.test(t)) return Bell
    if (/(fuite|plomberie)/.test(t)) return Droplets
    if (/(piscine|ph|chlore|qualité de l'eau|qualite de l'eau)/.test(t)) return Waves
    if (/(sos|urgence|secours|bouton d’urgence|bouton d'urgence)/.test(t)) return LifeBuoy
    if (/(boîte aux lettres|boite aux lettres|courriel|mail)/.test(t)) return Mail
    if (/(rongeur|rats|souris)/.test(t)) return Bug
    if (/(collier|animal|chien|chat)/.test(t)) return PawPrint
    if (/(bagage|valise|voyage)/.test(t)) return Briefcase
    if (/(sport|outdoor|performance|itinéraire|itineraire)/.test(t)) return Activity
    // Smart City specific (placed before generic 'qualité' mapping below)
    if (/(stationnement|parking|places? (disponibles|libres?))/.test(t)) return MapPin
    if (/(qualité de l'air|qualite de l'air|pollution|air)/.test(t)) return Wind
    if (/(borne(s)? d'incendie|hydrant(s)?)/.test(t)) return Flame
    if (/(éclairage public|eclairage public|lampadaire|luminaire)/.test(t)) return Lightbulb
    if (/(signalisation|panneaux|panneau)/.test(t)) return Map
    if (/(défibrillateur|defibrillateur|dae)/.test(t)) return Battery
    // Smart Energies specific
    if (/(solaire|photo ?volta(ï|i)que|photovolta(ï|i)que|\bpv\b|panneaux? (solaires?)?|kits? solaires?)/.test(t)) return Sun
    if (/(smart ?grid|réseau (électrique|d'?énergie)|reseau (electrique|d'?energie)|grille (électrique|electrique)|électri|electri|courant)/.test(t)) return Zap
    // Smart Building specific
    if (/(fumée|fumee|incendie|feu)/.test(t)) return Flame
    if (/(batterie|pile|niveau de batterie)/.test(t)) return Battery
    if (/(poubelle|déchet|dechet)/.test(t)) return Trash2
    if (/(casier|locker|verrouillage|déverrouillage|deverrouillage)/.test(t)) return Lock
    if (/(salle de réunion|réservation|reservation|meeting)/.test(t)) return Calendar
    if (/(comptage de personnes|comptage|présence|presence)/.test(t)) return UserCheck
    if (/(ascenseur|élévateur|elevateur)/.test(t)) return ArrowUpDown
    if (/(télérelève|tele relève|tele-relève|tele relève|tele relève|telerelève|compteur)/.test(t)) return Gauge
    // Agriculture-specific fallbacks by index
    if (slug === 'smart-agriculture') {
      const agri = [Droplets, Wind, Thermometer, Gauge, Map, ShieldCheck, Snowflake, Sparkles]
      return agri[idx] || Sparkles
    }
    return Sparkles
  }
  return (
    <main className="overflow-x-hidden">
      <PageHero title={d.title} subtitle={d.subtitle} image={d.image} backHref="/solutions" backLabel="Retour aux solutions" />

      {/* Unified layout for all smart pages */}
      {/* Intro and context */}
      <section className="relative overflow-hidden">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 animated-grid opacity-[0.05]" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-saco-turquoise/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-24 h-72 w-72 rounded-full bg-saco-blue/10 blur-3xl" />
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
            {c.solutionsItems.map((item, idx) => (
              <div
                key={item}
                className="group rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-grid place-items-center h-9 w-9 rounded-lg bg-saco-blue/10 text-saco-blue border border-saco-blue/20 shrink-0 group-hover:scale-110 transition-transform">
                    {(() => { const Icon = iconFor(item, params.slug, idx); return <Icon className="h-5 w-5" /> })()}
                  </span>
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Illustrations section intentionally removed per feedback */}

      {/* Bénéfices et illustration (optional visual support) */}
      <section className="relative overflow-hidden">
        <Container className="py-12">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            <div className="h-full min-h-[420px] sm:min-h-[460px] md:min-h-[520px]">
              <div className="relative h-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm flex flex-col">
                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-saco-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-saco-turquoise/10 blur-3xl" />
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">Bénéfices clés</h3>
                <p className="mt-1 text-slate-600 text-sm">Des gains mesurables grâce à l’IoT bas‑débit longue portée.</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {d.benefits.map((b) => (
                    <div key={b} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800 shadow-sm hover:shadow transition">
                      <span className="inline-grid place-items-center h-6 w-6 rounded-md bg-saco-blue/10 text-saco-blue border border-saco-blue/20">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{b}</span>
                    </div>
                  ))}
                </div>
                <a href="/contact" className="mt-5 inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm font-medium items-center justify-center shadow-sm shadow-saco-blue/30 hover:translate-y-[-1px] hover:shadow-md hover:shadow-saco-blue/30 transition mt-auto">
                  Demander une démo
                </a>
              </div>
            </div>
            <div className="h-full min-h-[420px] sm:min-h-[460px] md:min-h-[520px]">
              <img src={d.image} alt={d.title} className="rounded-2xl border object-cover w-full h-full transition-transform duration-300 hover:scale-[1.02]" />
            </div>
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
            <Link href="/couverture" className="mt-2 inline-flex h-11 px-5 rounded-md bg-saco-blue text-white items-center justify-center shadow-sm shadow-saco-blue/30 hover:translate-y-[-1px] hover:shadow-md hover:shadow-saco-blue/30 transition">
              En savoir plus <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}