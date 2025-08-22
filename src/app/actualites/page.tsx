import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import { POSTS, type Post } from './data'
import Link from 'next/link'
import { fetchSigfoxFeed } from './sigfox'

export const metadata = { title: 'Actualités | SACONECT', description: 'Dernières nouvelles et annonces.' }

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: '2-digit' })
}

export default async function ActualitesPage({ searchParams }: { searchParams: { q?: string; cat?: string } }) {
  const q = (searchParams.q || '').toLowerCase().trim()
  const cat = (searchParams.cat || '').trim()

  const categories = Array.from(new Set(POSTS.map(p => p.category)))
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date))
  const featured = sorted[0]

  const filtered = sorted.filter(p => {
    const matchQ = q ? (p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)) : true
    const matchCat = cat ? p.category === cat : true
    return matchQ && matchCat
  })

  const sigfox = await fetchSigfoxFeed(6)

  return (
    <main>
      <PageHero title="Actualités" subtitle="Nos annonces, cas clients et innovations." />

      {/* Sigfox feed (auto) */}
      <section className="relative bg-slate-50/60">
        <Container className="py-10">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-xl font-semibold text-slate-900">Fil d’actualités Sigfox</h2>
            <a href="https://www.sigfox.com" target="_blank" rel="noreferrer" className="text-saco-blue hover:underline text-sm">Voir plus →</a>
          </div>
          {sigfox.length === 0 ? (
            <p className="mt-2 text-slate-600 text-sm">Flux indisponible pour le moment.</p>
          ) : (
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sigfox.map((item) => (
                <a key={item.link} href={item.link} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white p-4 hover:shadow transition">
                  <div className="text-xs text-slate-500">{item.pubDate ? new Date(item.pubDate).toLocaleDateString('fr-FR') : '—'}</div>
                  <div className="text-sm font-medium mt-1 text-slate-900 line-clamp-2">{item.title}</div>
                  <div className="mt-2 text-saco-blue text-sm">Lire sur sigfox.com</div>
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Controls */}
      <section className="relative">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 justify-between">
            <div className="flex flex-wrap gap-2">
              <Link href={`/actualites`} className={`px-3 h-9 inline-grid place-items-center rounded-full border ${!cat ? 'bg-saco-blue text-white border-saco-blue' : 'bg-white text-slate-700 border-slate-200'}`}>Tout</Link>
              {categories.map(c => (
                <Link key={c} href={`/actualites?cat=${encodeURIComponent(c)}`} className={`px-3 h-9 inline-grid place-items-center rounded-full border ${cat === c ? 'bg-saco-blue text-white border-saco-blue' : 'bg-white text-slate-700 border-slate-200'}`}>{c}</Link>
              ))}
            </div>
            <form className="w-full md:w-80">
              <input
                name="q"
                defaultValue={q}
                placeholder="Rechercher..."
                className="w-full h-10 rounded-lg border border-slate-200 px-3 outline-none focus:ring-2 focus:ring-saco-blue/30 focus:border-saco-blue"
              />
            </form>
          </div>
        </Container>
      </section>

      {/* Featured */}
      {!cat && !q && featured && (
        <section className="relative bg-slate-50/60">
          <Container className="py-10">
            <Link href={`/actualites/${featured.slug}`} className="grid md:grid-cols-2 gap-6 items-stretch group">
              <img src={featured.img} alt={featured.title} className="w-full h-56 md:h-full object-cover rounded-xl border transition-transform duration-300 group-hover:scale-[1.01]" />
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-xs text-slate-500">{formatDate(featured.date)} • {featured.category}</div>
                <h2 className="text-xl font-semibold mt-1 text-slate-900">{featured.title}</h2>
                <p className="mt-2 text-slate-700 text-sm">{featured.excerpt}</p>
                <span className="mt-4 inline-block text-saco-blue group-hover:underline text-sm">Lire l’article →</span>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {/* Grid */}
      <section className="relative">
        <Container className="py-12">
          {filtered.length === 0 ? (
            <p className="text-slate-600">Aucun article ne correspond à votre recherche.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(p => (
                <article key={p.id} className="rounded-xl border border-slate-200 overflow-hidden bg-white transition hover:shadow-md">
                  <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <div className="text-xs text-slate-500">{formatDate(p.date)} • {p.category}</div>
                    <h3 className="text-sm font-semibold mt-1 text-slate-900">{p.title}</h3>
                    <p className="mt-1 text-slate-600 text-sm line-clamp-2">{p.excerpt}</p>
                    <Link href={`/actualites/${p.slug}`} className="mt-3 inline-block text-saco-blue hover:underline text-sm">Lire</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  )
}