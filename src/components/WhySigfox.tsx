import Container from './Container'
import Link from 'next/link'
import { Battery, Banknote, Wifi, Users, ChevronRight, Globe2, Radio, MessageSquare } from 'lucide-react'

export default function WhySigfox() {
  const items = [
    { title: 'Longue autonomie des capteurs', desc: '', Icon: Battery },
    { title: 'Faible coût et faibles frais de connectivité', desc: '', Icon: Banknote },
    { title: 'Grande capacité réseau et longue portée', desc: '', Icon: Wifi },
    { title: 'Le plus grand réseau de partenaires IoT', desc: '', Icon: Users },
  ]
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E153C] to-[#1d2a52]" />
      {/* Subtle animated grid overlay (CSS-only) */}
      <div className="pointer-events-none absolute inset-0 animated-grid opacity-10" />

      <div className="relative">
        <Container className="py-16 md:py-24 text-white">
          {/* Header */}
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-widest text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-saco-turquoise" />
                Pourquoi choisir SIGFOX ?
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Technologie LPWAN 0G pour connecter à grande échelle</h2>
              <div className="text-white/85 mt-3 max-w-3xl space-y-3 text-sm leading-relaxed">
                <p>
                  SIGFOX est une technologie propriétaire, basée sur le LPWAN (Low Power Wide Area Network), créée par l'entreprise française du même nom fondée en 2009. Elle est spécialisée dans le M2M via des réseaux bas débit. Sa technologie radio UNB (Ultra Narrow Band) lui permet de construire un réseau cellulaire bas débit, basse consommation et longue portée.
                </p>
                <p>
                  Les réseaux LPWAN permettent la communication entre objets connectés sur plusieurs dizaines de kilomètres, pour un faible volume d'informations et une très faible consommation énergétique. Leur objectif est de démocratiser et généraliser la connexion des objets dans les domaines de l'industrie, de la ville intelligente, des services publics, de l'agriculture intelligente, de la domotique, de la maintenance prédictive, de la géolocalisation, de la santé, du suivi de la chaîne du froid, etc. Grâce à notre partenariat technique et commercial avec Sigfox, nous bénéficions de l'expérience d'autres « opérateurs Sigfox » à travers le monde.
                </p>
              </div>
            </div>
            <Link href="/contact" className="hidden sm:inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm font-medium items-center justify-center whitespace-nowrap hover:translate-y-[-1px] transition">
              Postulez pour un partenariat <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
          {/* Mobile CTA */}
          <div className="sm:hidden mt-4">
            <Link href="/contact" className="inline-flex h-11 px-5 rounded-md bg-saco-blue text-white text-sm font-medium w-full items-center justify-center whitespace-nowrap hover:translate-y-[-1px] transition">
              Postulez pour un partenariat <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          {/* Stats band */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/10 flex items-center gap-3">
              <Globe2 className="h-5 w-5" />
              <div>
                <div className="text-base font-semibold">72 pays</div>
                <div className="text-white/80 text-xs">Présence SIGFOX</div>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/10 flex items-center gap-3">
              <Radio className="h-5 w-5" />
              <div>
                <div className="text-base font-semibold">17,2 M+</div>
                <div className="text-white/80 text-xs">Objets connectés</div>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/10 flex items-center gap-3">
              <MessageSquare className="h-5 w-5" />
              <div>
                <div className="text-base font-semibold">63 M+/jour</div>
                <div className="text-white/80 text-xs">Messages traités</div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {items.map((it) => (
              <div key={it.title} className="group rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent">
                <div className="rounded-2xl h-full bg-white/5 backdrop-blur p-5 transition duration-300 group-hover:bg-white/10 group-hover:translate-y-[-2px]">
                  <div className="h-11 w-11 grid place-items-center rounded-xl bg-white/10 text-xl ring-1 ring-white/10">
                    <it.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-medium">{it.title}</h3>
                  {it.desc ? <p className="text-sm text-white/80 mt-1">{it.desc}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
