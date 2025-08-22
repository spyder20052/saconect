import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Container from '@/components/Container'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { POSTS } from '../data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) return { title: 'Article | Actualités' }
  return { title: `${post.title} | Actualités`, description: post.excerpt }
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: '2-digit' })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) return notFound()

  // Related: the 3 most recent excluding current
  const related = POSTS
    .filter(p => p.slug !== post.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)

  return (
    <main>
      <PageHero title={post.title} subtitle={`${formatDate(post.date)} • ${post.category}`} image={post.img} backHref="/actualites" backLabel="Retour aux actualités" />
      <section className="relative">
        <Container className="py-12">
          {/* Optional video */}
          {(post.videoEmbedUrl || post.videoMp4Url) && (
            <div className="mb-8 rounded-xl overflow-hidden border border-slate-200 bg-black/5">
              {post.videoEmbedUrl ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={post.videoEmbedUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : post.videoMp4Url ? (
                <video className="w-full h-auto" controls>
                  <source src={post.videoMp4Url} type="video/mp4" />
                </video>
              ) : null}
            </div>
          )}

          <article className="prose prose-slate max-w-none">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          

          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-slate-900">À lire ensuite</h3>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map(r => (
                  <Link key={r.slug} href={`/actualites/${r.slug}`} className="rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow">
                    <img src={r.img} alt={r.title} className="w-full h-36 object-cover" />
                    <div className="p-4">
                      <div className="text-xs text-slate-500">{formatDate(r.date)} • {r.category}</div>
                      <div className="text-sm font-medium mt-1 text-slate-900">{r.title}</div>
                      <div className="text-sm text-slate-600 line-clamp-2 mt-1">{r.excerpt}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </main>
  )
}
