import Container from '@/components/Container'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Recherche | SACONECT',
  description: 'Résultats de recherche sur le site SACONECT.',
}

type SearchParams = {
  q?: string | string[]
}

export default function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const raw = searchParams?.q
  const q = Array.isArray(raw) ? raw[0] : (raw ?? '')

  return (
    <main id="main">
      <PageHero
        title="Recherche"
        image="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2000&auto=format&fit=crop"
      />
      <Container className="py-10 space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">{q ? `Résultats pour "${q}"` : 'Tapez une requête dans la barre de recherche'}</h2>
        {!q && (
          <p className="text-slate-700">Entrez un mot-clé (ex: capteurs, Sigfox, solutions, agriculture...).</p>
        )}
        {q && (
          <div className="text-slate-700">
            <p>
              Aucun moteur d’indexation n’est encore configuré. Cette page affiche simplement votre requête.
              Dites‑moi si vous souhaitez que j’indexe les pages (Solutions, Actualités, etc.) pour offrir une recherche complète.
            </p>
          </div>
        )}
      </Container>
    </main>
  )
}
