import Container from './Container'

export default function StatsBar() {
  const stats = [
    { k: '10+', v: 'années' },
    { k: '50+', v: 'clients' },
    { k: '8', v: 'pays' },
    { k: '99.9%', v: 'SLA' },
  ]
  return (
    <section className="relative bg-saco-blue text-white">
      <Container className="py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.k}
              className={`text-center ${i > 0 ? 'sm:border-l sm:pl-6 border-white/20' : ''}`}
              aria-label={`${s.k} ${s.v}`}
            >
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">{s.k}</div>
              <div className="text-white/85 text-xs md:text-sm mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
