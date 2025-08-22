import Container from './Container'
import { NewsletterForm } from './NewsletterForm'
import { CheckCircle2, ShieldCheck, Mail, MousePointerClick } from 'lucide-react'

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-white border-t">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="pointer-events-none absolute inset-0 animated-grid opacity-[0.06]" />
      {/* Accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-saco-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-24 h-72 w-72 rounded-full bg-saco-turquoise/10 blur-3xl" />

      <Container className="relative py-16 lg:py-20">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left copy */}
          <div className="md:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-saco-blue/10 text-saco-blue px-3 py-1 text-xs tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-saco-turquoise" />
              Newsletter
            </span>
            <h2 id="newsletter-heading" className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
              Des insights IoT utiles, sans spam
            </h2>
            <p className="mt-2 text-slate-600 max-w-prose">
              Un email concis, 1×/semaine: cas d’usage, bonnes pratiques et actus réseau.
              Désinscription en un clic.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-saco-turquoise" />Conseils actionnables pour vos déploiements</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-saco-turquoise" />Veille réseau et couverture</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-saco-turquoise" />Zéro spam, zéro partage de données</li>
            </ul>
            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5 text-saco-blue" />
                RGPD conforme
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 backdrop-blur">
                <Mail className="h-3.5 w-3.5 text-saco-blue" />
                1 email / semaine
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 backdrop-blur">
                <MousePointerClick className="h-3.5 w-3.5 text-saco-blue" />
                Désinscription 1 clic
              </span>
            </div>

            {/* Social proof */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="inline-block h-7 w-7 rounded-full bg-saco-blue/20 ring-2 ring-white" aria-hidden />
                <span className="inline-block h-7 w-7 rounded-full bg-saco-turquoise/20 ring-2 ring-white" aria-hidden />
                <span className="inline-block h-7 w-7 rounded-full bg-slate-300 ring-2 ring-white" aria-hidden />
              </div>
              <span className="text-xs text-slate-600">2k+ abonnés professionnels</span>
            </div>
          </div>

          {/* Form card enlarged */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">Restez informé</h3>
              <p className="mt-1 text-sm text-slate-600">Recevez chaque semaine nos meilleurs cas d’usage et conseils IoT.</p>

              <div className="mt-4">
                <NewsletterForm />
                <p className="mt-3 text-xs text-slate-500">
                  En vous inscrivant, vous acceptez notre{' '}
                  <a href="/legal/politique-confidentialite" className="underline hover:text-saco-blue">politique de confidentialité</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
