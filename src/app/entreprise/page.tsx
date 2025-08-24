import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { ChevronRight, Globe2, Radio, MessageSquare } from 'lucide-react'
import Container from '@/components/Container'

export const metadata = {
  title: 'Entreprise | À propos de nous',
  description: "SACONECT, opérateur SIGFOX pour le Sénégal, la Côte d'Ivoire et le Ghana. Vision, missions, équipe et réseau IoT 0G.",
}

export default function EntreprisePage() {
  return (
    <main>
      <PageHero
        title="À PROPOS DE NOUS"
        subtitle="Spécialiste de la conception et de la distribution d'objets connectés en Afrique de l'Ouest"
        image="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Intro complète */}
      <section className="bg-white">
        <Container className="py-12">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h2 className="text-left text-2xl md:text-3xl font-semibold text-slate-900">SACONECT, opérateur SIGFOX en Afrique de l’Ouest</h2>
            <p className="mt-4 text-left text-slate-700 leading-relaxed">
              SACONECT est un opérateur de télécommunications pour l'Internet des Objets (IoT). Il est l'« Opérateur SIGFOX » pour le Sénégal, la Côte d'Ivoire et le Ghana. Filiale du groupe SAGAM INTERNATIONAL, SACONECT est présent dans plusieurs pays de la sous-région.
            </p>
            <p className="mt-4 text-left text-slate-700 leading-relaxed">
              SACONECT, grâce à son réseau basé sur la technologie SIGFOX, permet la mise en œuvre d'innombrables solutions IoT innovantes, souvent difficiles à aborder par les réseaux de télécommunications traditionnels. Les solutions de connectivité bas débit, longue portée et basse consommation proposées par SACONECT ouvrent de nouvelles perspectives aux entreprises de tous les secteurs d'activité. Elles permettent notamment de réduire les coûts d'exploitation, d'élargir les frontières du marché et d'accroître considérablement le flux et la qualité de l'information. Les possibilités et les domaines d'application sont immenses.
            </p>
            <p className="mt-4 text-left text-slate-700 leading-relaxed">
              Le réseau IoT de SACONECT offrira une couverture nationale permettant à des millions d'appareils et de capteurs de collecter et de transmettre des données consommateurs applicables à tous les secteurs d'activité. De plus, grâce à notre écosystème d'intégrateurs et de partenaires, nous proposons des solutions IoT innovantes qui permettent aux PME et aux particuliers de résoudre leurs problèmes quotidiens.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm font-medium items-center justify-center whitespace-nowrap hover:translate-y-[-1px] transition">
                Nous contacter <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
              <Link href="/solutions" className="inline-flex h-11 px-5 rounded-md border border-saco-blue/50 text-saco-blue text-sm items-center justify-center hover:border-saco-blue hover:bg-saco-blue/5 transition">
                Découvrir nos solutions <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-lg shadow-slate-900/5">
              <img
                src="https://images.unsplash.com/photo-1558347163-9220ac3f7b31?q=80&w=1600&auto=format&fit=crop"
                alt="Capteurs et réseau IoT"
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
        </Container>
      </section>

      {/* Bandeau chiffres SIGFOX */}
      <section className="relative bg-slate-50 border-y border-slate-200">
        <Container className="py-10">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white border p-5 flex items-center gap-3">
            <Globe2 className="h-5 w-5 text-saco-blue" />
            <div>
              <div className="text-lg font-semibold text-slate-900">72 pays</div>
              <div className="text-slate-600 text-sm">Présence SIGFOX</div>
            </div>
          </div>
          <div className="rounded-xl bg-white border p-5 flex items-center gap-3">
            <Radio className="h-5 w-5 text-saco-blue" />
            <div>
              <div className="text-lg font-semibold text-slate-900">17,2 M+</div>
              <div className="text-slate-600 text-sm">Objets connectés</div>
            </div>
          </div>
          <div className="rounded-xl bg-white border p-5 flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-saco-blue" />
            <div>
              <div className="text-lg font-semibold text-slate-900">63 M+/jour</div>
              <div className="text-slate-600 text-sm">Messages traités</div>
            </div>
          </div>
        </div>
        </Container>
      </section>

      {/* Sections interactives (accordions) */}
      <section className="bg-white">
        <Container className="py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <details className="group rounded-xl border p-5 open:shadow-sm transition">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="text-left text-slate-900 font-semibold">Vision et Missions</span>
              <span className="text-saco-blue group-open:rotate-90 transition">›</span>
            </summary>
            <div className="mt-3 text-left text-slate-700 leading-relaxed">
              Notre vision est de démocratiser l’IoT en Afrique de l’Ouest par des solutions fiables, simples et économes en énergie, au service de l’efficacité opérationnelle et de l’impact durable.
            </div>
          </details>

          <details className="group rounded-xl border p-5 open:shadow-sm transition">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="text-left text-slate-900 font-semibold">Le mot du PDG</span>
              <span className="text-saco-blue group-open:rotate-90 transition">›</span>
            </summary>
            <div className="mt-3 text-left text-slate-700 leading-relaxed">
              L’IoT 0G est une opportunité unique pour connecter ce qui ne l’était pas et créer de la valeur dans tous les secteurs. Notre engagement: qualité de service, proximité client et innovation continue.
            </div>
          </details>

          <details className="group rounded-xl border p-5 open:shadow-sm transition">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="text-left text-slate-900 font-semibold">L’équipe</span>
              <span className="text-saco-blue group-open:rotate-90 transition">›</span>
            </summary>
            <div className="mt-3 text-left text-slate-700 leading-relaxed">
              Une équipe pluridisciplinaire alliant télécoms, réseaux, data et métiers, soutenue par l’écosystème du groupe SAGAM INTERNATIONAL.
            </div>
          </details>

          <details className="group rounded-xl border p-5 open:shadow-sm transition">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="text-left text-slate-900 font-semibold">Pourquoi choisir SIGFOX ?</span>
              <span className="text-saco-blue group-open:rotate-90 transition">›</span>
            </summary>
            <div className="mt-3 text-left text-slate-700 leading-relaxed space-y-3">
              <p>
                SIGFOX est une technologie propriétaire, basée sur le LPWAN (Low Power Wide Area Network), spécialisée dans le M2M via des réseaux bas débit. Sa technologie radio UNB (Ultra Narrow Band) permet un réseau cellulaire bas débit, basse consommation et longue portée.
              </p>
              <p>
                Les LPWAN permettent la communication entre objets connectés sur plusieurs dizaines de kilomètres, pour un faible volume d'informations et une très faible consommation d'énergie. Objectif: démocratiser et généraliser la connexion des objets dans l’industrie, la ville, les services publics, l’agriculture, la domotique, la maintenance prédictive, la géolocalisation, la santé, la chaîne du froid, etc.
              </p>
              <p>
                Grâce à notre partenariat technique et commercial avec Sigfox, nous bénéficions de l'expérience d'autres « opérateurs Sigfox » à travers le monde.
              </p>
              <Link href="/couverture" className="inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm font-medium items-center justify-center whitespace-nowrap hover:translate-y-[-1px] transition">
                Voir la couverture <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </details>
        </div>
        </Container>
      </section>

      {/* Appel à partenariat */}
      <section className="bg-white">
        <Container className="pb-14">
        <div className="rounded-2xl border bg-gradient-to-br from-saco-blue/5 to-saco-turquoise/5 p-6 md:p-8">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="text-left text-xl font-semibold text-slate-900">Postulez pour un partenariat</h3>
              <p className="text-left text-slate-700 mt-1">Rejoignez notre écosystème d’intégrateurs et partenaires pour construire des solutions IoT innovantes.</p>
            </div>
            <Link href="/contact" className="mt-4 md:mt-0 inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm font-medium items-center justify-center whitespace-nowrap hover:translate-y-[-1px] transition">
              Devenir partenaire <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
        </Container>
      </section>
    </main>
  )
}