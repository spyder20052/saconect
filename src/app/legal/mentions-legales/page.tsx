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
        subtitle="Les informations ci-dessous sont fournies à titre légal. Remplacez les champs “À compléter” par vos informations."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Éditeur</h2>
          <p className="mt-2 text-slate-700">
            Raison sociale : À compléter<br />
            Forme juridique : À compléter<br />
            Capital social : À compléter<br />
            Adresse : À compléter<br />
            RCS/SIREN : À compléter<br />
            TVA intracommunautaire : À compléter
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Directeur de la publication</h2>
          <p className="mt-2 text-slate-700">À compléter</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Hébergeur</h2>
          <p className="mt-2 text-slate-700">À compléter (Nom de l’hébergeur, adresse, téléphone)</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-700">contact@saconect.com — +212 6 00 00 00 00</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Propriété intellectuelle</h2>
          <p className="mt-2 text-slate-700">
            L’ensemble des contenus (textes, images, logos, marques) du site est protégé par le droit d’auteur.
            Toute reproduction ou représentation, totale ou partielle, sans autorisation est interdite.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Responsabilité</h2>
          <p className="mt-2 text-slate-700">
            Les informations publiées sont indicatives et non contractuelles. SACONECT ne saurait être tenu responsable
            d’éventuelles erreurs ou indisponibilités du service.
          </p>
        </div>
      </Container>
    </main>
  )
}