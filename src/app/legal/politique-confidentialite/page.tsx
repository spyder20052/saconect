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
        subtitle="Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Données collectées</h2>
          <p className="mt-2 text-slate-700">
            Formulaire de contact (nom, e‑mail, message) et données techniques de navigation (logs, cookies).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Finalités et base légale</h2>
          <p className="mt-2 text-slate-700">
            Réponse aux demandes (intérêt légitime/exécution précontractuelle), amélioration du service (intérêt légitime),
            obligations légales (conservation minimale).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Durées de conservation</h2>
          <p className="mt-2 text-slate-700">
            Les données sont conservées pour la durée strictement nécessaire aux finalités ci‑dessus, puis supprimées ou anonymisées.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Vos droits</h2>
          <p className="mt-2 text-slate-700">
            Accès, rectification, effacement, limitation, opposition, portabilité. Vous pouvez exercer vos droits à l’adresse :
            <br />contact@saconect.com (DPO : À compléter).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">Sécurité</h2>
          <p className="mt-2 text-slate-700">
            Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données contre les accès non autorisés.
          </p>
        </div>
      </Container>
    </main>
  )
}