import PageHero from '@/components/PageHero'
import { SolutionsGrid } from '@/components/SolutionsGrid'
import Container from '@/components/Container'
import WhySigfox from '@/components/WhySigfox'
import NewsletterSection from '@/components/NewsletterSection'
import Link from 'next/link'

export const metadata = {
  title: 'Solutions | SACONECT',
  description: 'Nos solutions IoT prêtes à déployer.',
}

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        title="Solutions"
        subtitle="Solutions IoT pour créer et contrôler vos objets connectés."
        image="https://images.unsplash.com/photo-1496259883144-512177a2d51b?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Nos solutions */}
      <section className="relative bg-white border-t">
        <Container className="py-12">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Nos solutions</h2>
          <p className="text-slate-600 text-sm mt-1 max-w-3xl">
            La capacité de l'IoT à fournir des informations de capteurs et à permettre la communication entre les appareils est à l'origine d'un large
            éventail d'applications. Voici quelques-unes des applications les plus populaires et leurs fonctionnalités.
          </p>
          <div className="mt-6">
            <SolutionsGrid />
          </div>
        </Container>
      </section>

      {/* Pourquoi choisir SIGFOX ? */}
      <WhySigfox />

      {/* Partnership CTA */}
      <section className="bg-white border-t">
        <Container className="py-12">
          <div className="rounded-2xl border bg-gradient-to-br from-saco-blue/5 to-saco-turquoise/5 p-6 md:p-8">
            <div className="md:flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Postulez pour un partenariat</h3>
                <p className="text-slate-700 mt-1">Rejoignez notre écosystème d’intégrateurs et partenaires pour construire des solutions IoT innovantes.</p>
              </div>
              <Link href="/contact" className="mt-4 md:mt-0 inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm font-medium items-center justify-center whitespace-nowrap hover:translate-y-[-1px] transition">
                Devenir partenaire
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  )
}