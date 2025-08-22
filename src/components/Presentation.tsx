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
        <a href="/entreprise" className="inline-block mt-8 px-4 py-2 rounded border border-slate-400 text-slate-700 text-sm">
          En savoir plus
        </a>
      </div>
    </section>
  )
}
