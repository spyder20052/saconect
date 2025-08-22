import PageHero from '@/components/PageHero'
import { SolutionsGrid } from '@/components/SolutionsGrid'
import Container from '@/components/Container'

export const metadata = {
  title: 'Solutions | SACONECT',
  description: 'Nos solutions IoT prêtes à déployer.',
}

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="Solutions IoT"
        subtitle="Des cas d’usage concrets, de la captation à la donnée exploitable."
        image="https://images.unsplash.com/photo-1496259883144-512177a2d51b?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Nos solutions */}
      <section className="relative bg-white border-t">
        <Container className="py-12">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Nos solutions</h2>
          <div className="mt-6">
            <SolutionsGrid />
          </div>
        </Container>
      </section>

      {/* Pourquoi choisir ? */}
      <section className="relative bg-slate-50 border-t">
        <Container className="py-12">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Pourquoi choisir SACONECT ?</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <div className="text-saco-blue font-semibold">LPWAN adaptés à l’IoT</div>
              <p className="mt-1 text-sm text-slate-600">Réseau bas débit, longue portée et très faible consommation pour connecter des capteurs sur de grandes distances.</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <div className="text-saco-blue font-semibold">Couverture et expertise</div>
              <p className="mt-1 text-sm text-slate-600">Présence multi-pays et retour d’expérience terrain via notre écosystème de déploiement.</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <div className="text-saco-blue font-semibold">Fiabilité et scalabilité</div>
              <p className="mt-1 text-sm text-slate-600">Technologies éprouvées pour des millions de messages/jour et des milliers d’objets connectés.</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <div className="text-saco-blue font-semibold">Accompagnement</div>
              <p className="mt-1 text-sm text-slate-600">De la captation à la donnée exploitable: intégration, tableaux de bord et support.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}