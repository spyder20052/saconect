"use client"
import { useState } from 'react'
import { Building2, Handshake, Users, Code2, ExternalLink } from 'lucide-react'

export type ContactType = 'client' | 'channel' | 'partner' | 'developer'

function Selector({ value, onChange }: { value: ContactType; onChange: (v: ContactType) => void }) {
  const items: { key: ContactType; label: string; Icon: any }[] = [
    { key: 'client', label: 'Client final', Icon: Users },
    { key: 'channel', label: 'Channel Partner', Icon: Building2 },
    { key: 'partner', label: 'Partenaire', Icon: Handshake },
    { key: 'developer', label: 'Développeur', Icon: Code2 },
  ]
  return (
    <div className="inline-flex flex-wrap gap-2 rounded-xl bg-slate-100/70 p-1">
      {items.map(({ key, label, Icon }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={
            `inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ` +
            (value === key ? 'bg-white text-slate-900 shadow ring-1 ring-slate-200' : 'text-slate-600 hover:text-slate-900')
          }
          aria-pressed={value === key}
        >
          <Icon className="h-4 w-4 text-saco-blue" />
          {label}
        </button>
      ))}
    </div>
  )
}

function Field({ label, ...rest }: any) {
  return (
    <div>
      <label className="text-sm text-slate-700">{label}</label>
      <input
        {...rest}
        className="mt-1 w-full h-11 rounded-lg border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-saco-blue/30 focus:border-saco-blue transition"
      />
    </div>
  )
}

function TextArea({ label, ...rest }: any) {
  return (
    <div>
      <label className="text-sm text-slate-700">{label}</label>
      <textarea
        {...rest}
        className="mt-1 w-full min-h-[140px] rounded-lg border border-slate-200 p-3 outline-none focus:ring-2 focus:ring-saco-blue/30 focus:border-saco-blue transition"
      />
    </div>
  )
}

export default function ContactFormSwitcher() {
  const [type, setType] = useState<ContactType>('client')

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Sélectionnez votre objectif</h2>
          <p className="mt-1 text-slate-600 text-sm">Choisissez votre profil pour afficher le formulaire adapté.</p>
        </div>
        <Selector value={type} onChange={setType} />
      </div>

      {/* Forms / Links */}
      <div className="mt-6">
        {type === 'client' && (
          <form className="grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nom" name="name" placeholder="Votre nom" required />
              <Field label="Email" type="email" name="email" placeholder="vous@domaine.com" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Entreprise" name="company" placeholder="Nom de l’entreprise" />
              <Field label="Téléphone" name="phone" placeholder="Optionnel" />
            </div>
            <Field label="Sujet" name="subject" placeholder="Sujet" />
            <TextArea label="Message" name="message" placeholder="Votre besoin, contexte, délais…" required />
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-slate-500">En cliquant, vous acceptez notre <a className="underline hover:text-saco-blue" href="/legal/politique-confidentialite">politique de confidentialité</a>.</p>
              <button type="submit" className="inline-grid place-items-center h-11 px-5 rounded-lg bg-saco-blue text-white hover:bg-saco-turquoise transition">
                Envoyer
              </button>
            </div>
          </form>
        )}

        {type === 'channel' && (
          <form className="grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nom" name="name" placeholder="Votre nom" required />
              <Field label="Email" type="email" name="email" placeholder="vous@domaine.com" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Société" name="company" placeholder="Nom de la société" required />
              <Field label="Site web" name="website" placeholder="https://…" />
            </div>
            <Field label="Zone géographique" name="region" placeholder="Pays / Région" />
            <TextArea label="Partenariat envisagé" name="message" placeholder="Modèle (revendeur, intégrateur…), domaines, attentes…" required />
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-slate-500">En cliquant, vous acceptez notre <a className="underline hover:text-saco-blue" href="/legal/politique-confidentialite">politique de confidentialité</a>.</p>
              <button type="submit" className="inline-grid place-items-center h-11 px-5 rounded-lg bg-saco-blue text-white hover:bg-saco-turquoise transition">
                Envoyer
              </button>
            </div>
          </form>
        )}

        {type === 'partner' && (
          <div className="rounded-lg border border-slate-200 p-5">
            <div className="text-slate-900 font-medium">Demande de partenariat</div>
            <p className="text-slate-600 text-sm mt-1">Complétez notre formulaire dédié pour initier un partenariat.</p>
            <a href="/partenaires/demande" className="mt-3 inline-flex items-center gap-2 text-saco-blue hover:underline text-sm">
              Ouvrir le formulaire partenaire <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}

        {type === 'developer' && (
          <div className="rounded-lg border border-slate-200 p-5">
            <div className="text-slate-900 font-medium">Partenariat développeur</div>
            <p className="text-slate-600 text-sm mt-1">Accédez au formulaire pour devenir partenaire en tant que développeur.</p>
            <a href="/partenaires/developpeurs" className="mt-3 inline-flex items-center gap-2 text-saco-blue hover:underline text-sm">
              Ouvrir le formulaire développeur <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
