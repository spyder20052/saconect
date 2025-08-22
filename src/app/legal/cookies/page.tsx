import Container from '@/components/Container'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Cookies | SACONECT',
  description: 'Informations sur l’usage des cookies sur le site SACONECT.',
}

export default function CookiesPage() {
  return (
    <main>
      <PageHero
        title="Cookies"
        subtitle="Cette page décrit les types de cookies utilisés et vos options de gestion du consentement."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Types de cookies</h2>
          <ul className="mt-2 text-slate-700 list-disc list-inside space-y-1">
            <li>Cookies nécessaires au fonctionnement du site</li>
            <li>Cookies de mesure d’audience (analytiques)</li>
            <li>Cookies de fonctionnalité</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Gestion du consentement</h2>
          <p className="mt-2 text-slate-700">
            Vous pouvez accepter/refuser les cookies non nécessaires via les paramètres de votre navigateur.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Désactivation dans le navigateur</h2>
          <p className="mt-2 text-slate-700">
            Reportez‑vous à l’aide de votre navigateur pour supprimer ou bloquer les cookies. Certaines fonctionnalités
            peuvent être dégradées en cas de désactivation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Plus d’informations</h2>
          <p className="mt-2 text-slate-700">
            Consultez notre{' '}
            <Link href="/legal/politique-confidentialite" className="text-saco-blue hover:underline">
              Politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </Container>
    </main>
  )
}