import Container from '@/components/Container'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Mentions légales | SACONECT',
  description: 'Informations légales de SACONECT.',
}

export default function MentionsLegalesPage() {
  return (
    <main>
      <PageHero
        title="Mentions légales"
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-10">
        <article className="prose prose-slate max-w-none">
          <h2 className="sr-only">Mentions légales</h2>
          <p>
            SACONECT a ouvert ce site web pour l'information personnelle de ses utilisateurs. Les données présentées sur le site ne peuvent être
            utilisées à des fins commerciales, même partiellement, sans l'autorisation écrite préalable de SACONECT. La présentation et le contenu de ce
            site constituent, dans leur ensemble, une œuvre protégée par le droit de la propriété intellectuelle en vigueur. Toute reproduction et/ou
            représentation, totale ou partielle, est interdite sans l'autorisation écrite préalable de SACONECT. La dénomination sociale de SACONECT, le
            logo SACONECT, les dénominations sociales de ses filiales, les noms et logos de leurs produits et les slogans sont la propriété de SACONECT
            et/ou de ses filiales. Toute reproduction, utilisation et/ou modification de ceux-ci sans l'autorisation écrite préalable de SACONECT
            constitue une contrefaçon. De plus, SACONECT décline toute responsabilité. Les dessins, photographies, images, textes, séquences animées
            sonores ou non, ainsi que tout autre document représenté sur ce site sont protégés par des droits de propriété industrielle et/ou
            intellectuelle au nom de SACONECT ou de ses filiales. À ce titre, toute reproduction, représentation, adaptation, traduction et/ou
            transformation, en tout ou partie, ou tout transfert vers un autre site est interdit. La copie des différents objets protégés par la loi
            mentionnés ci-dessus est autorisée pour un usage privé, sous réserve d'en indiquer la source. Toute reproduction, totale ou partielle, sans
            l'autorisation écrite préalable de SACONECT est strictement interdite. Les pages de ce site web contiennent des informations et présentations
            de nature purement générale, susceptibles d'être modifiées à tout moment et sans préavis. SACONECT décline toute responsabilité quant à tout
            usage privé ou professionnel. SACONECT ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations fournies sur ce site web.
          </p>

          <p>En conséquence, SACONECT n'assume aucune responsabilité pour :</p>
          <ul>
            <li>Toute inexactitude, erreur ou omission dans les informations sur ce site</li>
            <li>
              Tout dommage direct et/ou indirect, quelles qu'en soient les causes, origines, natures ou conséquences, pouvant résulter de l'accès ou de
              l'impossibilité d'accès à ce site, de même que de toute utilisation de ce site et/ou du crédit accordé à une information provenant
              directement ou indirectement de ce site.
            </li>
            <li>Toute utilisation qui pourrait être faite des différentes informations précisées ci-dessus.</li>
          </ul>
        </article>
      </Container>
    </main>
  )
}