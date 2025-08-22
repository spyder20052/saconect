import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Entreprise | SACONECT',
  description: 'Présentation de SACONECT, mission, valeurs et chiffres clés.',
}

export default function EntreprisePage() {
  return (
    <main>
      <PageHero
        title="SACONECT"
        subtitle="Nous connectons les objets pour créer de la valeur durable."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Notre mission</h2>
          <p className="mt-4 text-slate-600">
            Offrir des solutions IoT simples, fiables et scalables pour le suivi, la mesure et l’optimisation
            des activités industrielles, logistiques et urbaines.
          </p>
          <p className="mt-4 text-slate-600">
            Nous allions expertise métier et innovation pour transformer la donnée en décisions opérationnelles.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop"
            alt="Notre mission"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-3 gap-6">
          {[
            { k: '10+ ans', v: 'd’expérience' },
            { k: '50+ clients', v: 'dans 8 pays' },
            { k: '99.9%', v: 'disponibilité service' },
          ].map((i) => (
            <div key={i.k} className="p-6 bg-white border rounded-lg">
              <div className="text-xl font-semibold text-saco-blue">{i.k}</div>
              <div className="text-slate-600 mt-1">{i.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Nos valeurs</h3>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-5">
              <li>Simplicité d’usage</li>
              <li>Fiabilité technique</li>
              <li>Impact durable</li>
            </ul>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-4 h-11 bg-saco-blue text-white rounded hover:bg-saco-turquoise"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  )
}