import Container from '@/components/Container'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Politique de confidentialité | SACONECT',
  description: 'Gestion des données personnelles sur le site SACONECT.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main>
      <PageHero
        title="Politique de confidentialité"
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-10">
        <article className="prose prose-slate max-w-none">
          <h2 className="sr-only">Politique de confidentialité</h2>
          <p>
            Le site www.saconect.com collecte et traite vos données personnelles conformément aux dispositions du Règlement général sur la protection des
            données et de la législation française sur la protection des données. Nous vous informons que des cookies peuvent être utilisés pour suivre
            votre navigation sur le site www.saconect.com. Chaque formulaire et téléservice du site www.saconect.com limite la collecte des données
            personnelles au strict nécessaire (minimisation des données) et indique notamment
          </p>
          <p>
            Pour plus d'informations ou pour exercer vos droits concernant vos données personnelles détenues par notre société, vous pouvez nous
            contacter.
          </p>
        </article>
      </Container>
    </main>
  )
}