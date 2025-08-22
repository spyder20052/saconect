import PageHero from '@/components/PageHero'

export const metadata = { title: 'Pays couverts | SACONECT', description: 'Disponibilité géographique des services.' }

export default function PaysPage() {
  const countries = ['France', 'Espagne', 'Portugal', 'Allemagne', 'Italie', 'Maroc', 'Sénégal', 'Côte d’Ivoire']
  return (
    <main>
      <PageHero title="Pays couverts" subtitle="Vérifiez la disponibilité par pays et région." />
      <section className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {countries.map(c => (
          <div key={c} className="border rounded-lg p-4 bg-white">
            <div className="font-medium">{c}</div>
            <div className="text-slate-600 text-sm mt-1">Couverture urbaine et périurbaine</div>
            <a href="/couverture" className="text-saco-blue text-sm mt-3 inline-block hover:underline">Voir la carte</a>
          </div>
        ))}
      </section>
    </main>
  )
}