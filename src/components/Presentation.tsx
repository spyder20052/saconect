import { ChevronRight } from 'lucide-react'

export function Presentation() {
  return (
    <section className="bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl md:text-2xl font-medium text-saco-blue">Présentation de SACONECT S.A. et SIGFOX</h2>
        <div className="mt-6 space-y-3">
          <div className="h-2 bg-slate-300/80 rounded max-w-3xl mx-auto" />
          <div className="h-2 bg-slate-300/80 rounded max-w-2xl mx-auto" />
          <div className="h-2 bg-slate-300/80 rounded max-w-xl mx-auto" />
        </div>
        <a href="/entreprise" className="inline-flex mt-8 h-11 px-5 rounded-md bg-saco-blue text-white items-center justify-center shadow-sm shadow-saco-blue/30 hover:translate-y-[-1px] hover:shadow-md hover:shadow-saco-blue/30 transition">
          En savoir plus <ChevronRight className="h-4 w-4 ml-2" />
        </a>
      </div>
    </section>
  )
}
