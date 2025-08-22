'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email('Email invalide'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consentement requis' }) }),
})

type FormData = z.infer<typeof schema>

export function NewsletterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    // TODO: intégrer provider (Mailchimp/Brevo) via API route
    await new Promise(r => setTimeout(r, 600))
    console.log('newsletter', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative rounded-xl p-[1px] bg-gradient-to-r from-saco-blue/40 via-saco-turquoise/40 to-saco-blue/40">
      <div className="rounded-[11px] bg-white p-6">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-saco-blue/10 text-saco-blue grid place-items-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 0 8 6 8-6"/></svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900">Restez informé</h3>
            <p className="text-slate-600 text-sm mt-0.5">Recevez toute notre actualité chaque semaine directement dans votre boîte mail.</p>
          </div>
        </div>

        {isSubmitSuccessful && (
          <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 text-emerald-900 px-3 py-2 text-sm">
            Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.
          </div>
        )}

        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 grid place-items-center text-slate-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6l10 7L22 6"/></svg>
            </span>
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="w-full h-11 rounded-md border border-slate-300 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-saco-blue/30 focus:border-saco-blue/50"
              {...register('email')}
            />
            {errors.email && <p className="mt-1 text-red-600 text-sm">{errors.email.message}</p>}
          </div>
          <button
            disabled={isSubmitting}
            className="h-11 inline-flex items-center justify-center rounded-md bg-saco-blue text-white px-5 text-sm font-medium shadow-sm hover:shadow transition disabled:opacity-60"
          >
            {isSubmitting && (
              <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
            )}
            S'inscrire
          </button>
        </div>

        <label className="mt-3 text-xs text-slate-600 flex items-start gap-2">
          <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300" {...register('consent')} />
          <span>
            J'accepte de recevoir la newsletter et j'ai lu la
            {' '}<a href="/legal/politique-confidentialite" className="underline hover:text-saco-blue">politique de confidentialité</a>.
          </span>
        </label>
        {errors.consent && <p className="text-red-600 text-sm mt-1">{errors.consent.message}</p>}
      </div>
    </form>
  )
}
