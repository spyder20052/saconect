export type SigfoxItem = {
  title: string
  link: string
  pubDate?: string
}

// Very lightweight RSS parser for common fields. Adjust FEED_URL if needed.
const FEED_URL = process.env.SIGFOX_NEWS_FEED || 'https://www.sigfox.com/en/news/rss.xml'

export async function fetchSigfoxFeed(limit = 6): Promise<SigfoxItem[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const xml = await res.text()
    const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g)).slice(0, limit)
    return items.map((m) => {
      const block = m[1]
      const title = (block.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '').replace(/<!\[CDATA\[|\]\]>/g, '').trim()
      const link = (block.match(/<link>([\s\S]*?)<\/link>/)?.[1] || '').trim()
      const pubDate = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] || '').trim()
      return { title, link, pubDate }
    })
  } catch (e) {
    return []
  }
}
