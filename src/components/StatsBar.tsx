import Container from './Container'
import { Award, Users, Globe2, ShieldCheck } from 'lucide-react'

export default function StatsBar() {
  const stats = [
    { k: '10+', v: 'années', Icon: Award },
    { k: '50+', v: 'clients', Icon: Users },
    { k: '8', v: 'pays', Icon: Globe2 },
    { k: '99.9%', v: 'SLA', Icon: ShieldCheck },
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
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-white/10 ring-1 ring-white/10 mb-2">
                <s.Icon className="h-4 w-4" />
              </div>
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">{s.k}</div>
              <div className="text-white/85 text-xs md:text-sm mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
