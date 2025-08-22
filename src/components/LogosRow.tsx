export default function LogosRow() {
  const logos = [
    'https://placehold.co/120x40?text=Logo',
    'https://placehold.co/120x40?text=Logo',
    'https://placehold.co/120x40?text=Logo',
    'https://placehold.co/120x40?text=Logo',
    'https://placehold.co/120x40?text=Logo',
  ]
  return (
    <section className="bg-white border-y">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-slate-500 text-xs uppercase tracking-widest mb-6">Ils nous font confiance</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {logos.map((src, i) => (
            <img key={i} src={src} alt={`logo-${i}`} className="h-8 object-contain opacity-70" />
          ))}
        </div>
      </div>
    </section>
  )
}
