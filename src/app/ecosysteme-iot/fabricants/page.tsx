import PageHero from '@/components/PageHero'
import Container from '@/components/Container'

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
      />

      <Container className="py-12 space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Usages couverts</h2>
          <ul className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700">
            <li className="border rounded-lg p-4 bg-white">Température & humidité</li>
            <li className="border rounded-lg p-4 bg-white">Ouverture / choc • Suivi d’actifs</li>
            <li className="border rounded-lg p-4 bg-white">Qualité de l’air • CO₂, COV</li>
            <li className="border rounded-lg p-4 bg-white">Énergie • Comptage & sous-comptage</li>
            <li className="border rounded-lg p-4 bg-white">Présence • Occupation d’espaces</li>
            <li className="border rounded-lg p-4 bg-white">Niveau & fuites • Maintenance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Protocoles & connectivité</h2>
          <div className="mt-3 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="border rounded-lg p-5 bg-white">
              <h3 className="text-sm font-semibold text-slate-900">LPWAN</h3>
              <p className="mt-1">LoRaWAN, Sigfox, NB‑IoT, LTE‑M pour les environnements étendus et basse conso.</p>
            </div>
            <div className="border rounded-lg p-5 bg-white">
              <h3 className="text-sm font-semibold text-slate-900">Courte portée</h3>
              <p className="mt-1">BLE, Zigbee, Thread pour bâtiments intelligents et réseaux mesh.</p>
            </div>
            <div className="border rounded-lg p-5 bg-white">
              <h3 className="text-sm font-semibold text-slate-900">IP & Filaire</h3>
              <p className="mt-1">Wi‑Fi, Ethernet, Modbus/RS‑485 pour intégrations industrielles.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Critères de sélection</h2>
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
            <li>Autonomie énergétique et facilité de maintenance</li>
            <li>Certifications et robustesse environnementale</li>
            <li>Qualité des mesures et étendue des gammes</li>
            <li>Interopérabilité et documentation</li>
          </ul>
        </section>
      </Container>
    </main>
  )
}
