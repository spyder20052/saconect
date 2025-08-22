import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import { Thermometer, Droplets, Package, Activity, Wind, Zap, Eye, Droplet, Wrench, Rss, Radio, Network, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Fabricants de capteurs | SACONECT',
  description: 'Capteurs fiables, autonomes et certifiés pour tous les environnements et usages IoT.'
}

export default function FabricantsPage() {
  return (
    <main>
      <PageHero
        title="Fabricants de capteurs"
        subtitle="Capteurs fiables, autonomes et certifiés pour tous les environnements. Nous vous aidons à sélectionner le bon matériel selon l’usage."
        image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop"
        backHref="/ecosysteme-iot"
        backLabel="Retour à l’Écosystème IoT"
      />

      <Container className="py-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
              <Package className="h-4 w-4" />
            </span>
            Usages couverts
          </h2>
          <ul className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700">
            <li className="border rounded-lg p-4 bg-white flex items-center gap-2"><Thermometer className="h-4 w-4 text-saco-blue" /><Droplets className="h-4 w-4 text-saco-blue/70" /> Température & humidité</li>
            <li className="border rounded-lg p-4 bg-white flex items-center gap-2"><Package className="h-4 w-4 text-saco-blue" /><Activity className="h-4 w-4 text-saco-blue/70" /> Ouverture / choc • Suivi d’actifs</li>
            <li className="border rounded-lg p-4 bg-white flex items-center gap-2"><Wind className="h-4 w-4 text-saco-blue" /> Qualité de l’air • CO₂, COV</li>
            <li className="border rounded-lg p-4 bg-white flex items-center gap-2"><Zap className="h-4 w-4 text-saco-blue" /> Énergie • Comptage & sous-comptage</li>
            <li className="border rounded-lg p-4 bg-white flex items-center gap-2"><Eye className="h-4 w-4 text-saco-blue" /> Présence • Occupation d’espaces</li>
            <li className="border rounded-lg p-4 bg-white flex items-center gap-2"><Droplet className="h-4 w-4 text-saco-blue" /><Wrench className="h-4 w-4 text-saco-blue/70" /> Niveau & fuites • Maintenance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
              <Rss className="h-4 w-4" />
            </span>
            Protocoles & connectivité
          </h2>
          <div className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="border rounded-lg p-5 bg-white">
              <h3 className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2"><Rss className="h-4 w-4 text-saco-blue" /> LPWAN</h3>
              <p className="mt-1">LoRaWAN, Sigfox, NB‑IoT, LTE‑M pour les environnements étendus et basse conso.</p>
            </div>
            <div className="border rounded-lg p-5 bg-white">
              <h3 className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2"><Radio className="h-4 w-4 text-saco-blue" /> Courte portée</h3>
              <p className="mt-1">BLE, Zigbee, Thread pour bâtiments intelligents et réseaux mesh.</p>
            </div>
            <div className="border rounded-lg p-5 bg-white">
              <h3 className="text-sm font-semibold text-slate-900 inline-flex items-center gap-2"><Network className="h-4 w-4 text-saco-blue" /> IP & Filaire</h3>
              <p className="mt-1">Wi‑Fi, Ethernet, Modbus/RS‑485 pour intégrations industrielles.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-saco-blue/10 text-saco-blue grid place-items-center">
              <CheckCircle className="h-4 w-4" />
            </span>
            Critères de sélection
          </h2>
          <ul className="mt-3 text-slate-700 space-y-1">
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-saco-blue" /> Autonomie énergétique et facilité de maintenance</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-saco-blue" /> Certifications et robustesse environnementale</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-saco-blue" /> Qualité des mesures et étendue des gammes</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-saco-blue" /> Interopérabilité et documentation</li>
          </ul>
        </section>
      </Container>
    </main>
  )
}
