import PageHero from '@/components/PageHero'

export const metadata = { title: 'Ressources | SACONECT', description: 'Livres blancs, cas clients et vidéos.' }

const ITEMS = [
  { t: 'Livre blanc', title: 'Déployer une solution IoT en 2025', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop' },
  { t: 'Cas client', title: 'Suivi de flotte – ROI en 6 mois', img: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a52?q=80&w=1600&auto=format&fit=crop' },
  { t: 'Vidéo', title: 'Présentation de la plateforme', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop' },
]

export default function RessourcesPage() {
  return (
    <main>
      <PageHero title="Ressources" subtitle="Téléchargements et contenus pour aller plus loin." />
      <section className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((it) => (
          <article key={it.title} className="border rounded-lg overflow-hidden bg-white hover:shadow">
            <img src={it.img} alt={it.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="text-xs text-slate-500">{it.t}</div>
              <h3 className="text-sm font-medium mt-1">{it.title}</h3>
              <a href="#" className="mt-3 inline-block text-saco-blue hover:underline text-sm">Consulter</a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}