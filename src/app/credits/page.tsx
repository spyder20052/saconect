import Container from '@/components/Container'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Crédits | SACONECT',
  description: 'Crédits de conception, design, développement et ressources.',
}

export default function CreditsPage() {
  return (
    <main>
      <PageHero
        title="Crédits"
        subtitle="Informations sur la conception du site, les visuels et les ressources utilisées."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Conception & Design</h2>
          <p className="mt-2 text-slate-700">À compléter</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Développement</h2>
          <p className="mt-2 text-slate-700">À compléter</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Photos & Illustrations</h2>
          <p className="mt-2 text-slate-700">Sources, licences et attributions — À compléter.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Polices</h2>
          <p className="mt-2 text-slate-700">À compléter</p>
        </div>
      </Container>
    </main>
  )
}