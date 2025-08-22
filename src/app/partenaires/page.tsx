import PageHero from '@/components/PageHero'

export const metadata = { title: 'Partenaires | SACONECT', description: 'Notre réseau de partenaires technologiques et intégrateurs.' }

export default function PartenairesPage() {
  const logos = Array.from({ length: 8 }).map((_, i) => `https://placehold.co/240x120?text=Logo+${i+1}`)
  return (
    <main>
      <PageHero title="Partenaires" subtitle="Collaborations technologiques, intégrateurs et écosystème." />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {logos.map((src, i) => (
            <div key={i} className="border rounded-lg p-4 bg-white grid place-items-center">
              <img src={src} alt={`Logo ${i+1}`} className="max-h-20 object-contain" />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="/contact" className="px-4 h-11 inline-grid place-items-center bg-saco-blue text-white rounded hover:bg-saco-turquoise">
            Devenir partenaire
          </a>
        </div>
      </section>
    </main>
  )
}