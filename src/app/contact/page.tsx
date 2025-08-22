import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = { title: 'Contact | SACONECT', description: 'Écrivez-nous pour discuter de votre projet.' }

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact" subtitle="Parlons de votre besoin — réponse sous 24h ouvrées." />

      {/* Content */}
      <section className="relative bg-gradient-to-b from-white to-slate-50/60">
        <Container className="py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form card */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">Envoyez-nous un message</h2>
                <p className="mt-1 text-slate-600 text-sm">Nous revenons vers vous sous 24h ouvrées.</p>
                <form className="mt-6 grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-slate-700">Nom</label>
                      <input
                        required
                        className="mt-1 w-full h-11 rounded-lg border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-saco-blue/30 focus:border-saco-blue transition"
                        placeholder="Votre nom"
                        name="name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-700">Email</label>
                      <input
                        required
                        type="email"
                        className="mt-1 w-full h-11 rounded-lg border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-saco-blue/30 focus:border-saco-blue transition"
                        placeholder="vous@domaine.com"
                        name="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-700">Sujet</label>
                    <input
                      className="mt-1 w-full h-11 rounded-lg border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-saco-blue/30 focus:border-saco-blue transition"
                      placeholder="Sujet"
                      name="subject"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-700">Message</label>
                    <textarea
                      required
                      className="mt-1 w-full min-h-[140px] rounded-lg border border-slate-200 p-3 outline-none focus:ring-2 focus:ring-saco-blue/30 focus:border-saco-blue transition"
                      placeholder="Votre message..."
                      name="message"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">En cliquant, vous acceptez notre <a className="underline hover:text-saco-blue" href="/legal/politique-confidentialite">politique de confidentialité</a>.</p>
                    <button type="submit" className="inline-grid place-items-center h-11 px-5 rounded-lg bg-saco-blue text-white hover:bg-saco-turquoise transition">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact details card */}
            <aside>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Nos coordonnées</h3>
                <p className="mt-1 text-slate-600 text-sm">Nous sommes à votre écoute.</p>
                <div className="mt-5 space-y-4 text-sm">
                  <a href="mailto:contact@saconect.com" className="group flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:border-saco-blue/40">
                    <span className="mt-0.5 rounded-md bg-saco-blue/10 p-2"><Mail className="h-4 w-4 text-saco-blue" /></span>
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <div className="text-slate-600">contact@saconect.com</div>
                    </div>
                  </a>
                  <a href="tel:+33123456789" className="group flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:border-saco-blue/40">
                    <span className="mt-0.5 rounded-md bg-saco-blue/10 p-2"><Phone className="h-4 w-4 text-saco-blue" /></span>
                    <div>
                      <div className="font-medium text-slate-900">Téléphone</div>
                      <div className="text-slate-600">+33 1 23 45 67 89</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-200">
                    <span className="mt-0.5 rounded-md bg-saco-blue/10 p-2"><MapPin className="h-4 w-4 text-saco-blue" /></span>
                    <div>
                      <div className="font-medium text-slate-900">Adresse</div>
                      <div className="text-slate-600">Paris, France</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-200">
                    <span className="mt-0.5 rounded-md bg-saco-blue/10 p-2"><Clock className="h-4 w-4 text-saco-blue" /></span>
                    <div>
                      <div className="font-medium text-slate-900">Horaires</div>
                      <div className="text-slate-600">Lun–Ven, 9h–18h CET</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-xs text-slate-500">
                  Besoin d’une démo ? <a href="/contact" className="underline hover:text-saco-blue">Parlez à un expert</a>.
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  )
}