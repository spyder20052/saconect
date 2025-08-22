export type Post = {
  id: number
  slug: string
  title: string
  date: string // ISO YYYY-MM-DD
  img: string
  category: 'Produit' | 'Cas client' | 'Partenariat' | 'Événement'
  excerpt: string
  content: string[]
  // Optional video support
  videoEmbedUrl?: string // e.g. YouTube/Vimeo embed URL
  videoMp4Url?: string // direct mp4 if hosted
}

export const POSTS: Post[] = [
  {
    id: 1,
    slug: 'lancement-nouvelle-passerelle',
    title: 'Lancement d’une nouvelle passerelle',
    date: '2025-01-15',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    category: 'Produit',
    excerpt: "Une passerelle multi-réseaux, plus performante et simple à déployer pour vos projets IoT.",
    content: [
      "Nous dévoilons notre nouvelle passerelle multi‑réseaux, pensée pour des déploiements rapides et robustes.",
      "Elle intègre des fonctions de gestion à distance, une sécurité renforcée et une compatibilité élargie.",
    ],
    videoEmbedUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
  },
  {
    id: 2,
    slug: 'cas-client-suivi-flotte',
    title: 'Cas client : suivi de flotte',
    date: '2025-02-08',
    img: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop',
    category: 'Cas client',
    excerpt: "Visibilité temps réel, baisse des pertes et optimisation des tournées.",
    content: [
      "Grâce à notre solution, le client suit ses remorques et actifs en temps réel et réduit les pertes.",
      "Des alertes d’ouverture et de choc permettent d’agir vite et d’améliorer la traçabilité.",
    ],
  },
  {
    id: 3,
    slug: 'partenariat-strategique',
    title: 'Partenariat stratégique',
    date: '2025-03-12',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop',
    category: 'Partenariat',
    excerpt: "Accélérer l’innovation et la couverture de nos solutions IoT.",
    content: [
      "Ce partenariat renforce nos capacités d’intégration et élargit notre écosystème.",
      "Nos clients bénéficient d’une mise sur le marché plus rapide et d’une couverture étendue.",
    ],
  },
  {
    id: 4,
    slug: 'evenement-salon-iot',
    title: 'Nous serons présents au Salon IoT Europe',
    date: '2025-04-22',
    img: 'https://images.unsplash.com/photo-1529336953121-a0ce22b6b779?q=80&w=1600&auto=format&fit=crop',
    category: 'Événement',
    excerpt: "Rencontrez nos équipes et découvrez nos démonstrations en direct.",
    content: [
      "Passez nous voir sur notre stand pour tester nos dernières innovations.",
      "Des démonstrations seront organisées chaque jour.",
    ],
  },
  {
    id: 5,
    slug: 'mise-a-jour-plateforme',
    title: 'Mise à jour plateforme : nouvelles alertes intelligentes',
    date: '2025-05-30',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    category: 'Produit',
    excerpt: "Des règles d’alerting plus fines et un tableau de bord modernisé.",
    content: [
      "La nouvelle version introduit des scénarios d’alerte avancés et des vues personnalisables.",
      "La navigation est simplifiée pour gagner du temps au quotidien.",
    ],
  },
]
