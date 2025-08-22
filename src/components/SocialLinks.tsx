import Link from 'next/link'

const btn =
  'group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition duration-200 ring-1 ring-white/10 hover:ring-saco-turquoise/50 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(27,222,222,0.6)]'

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Link href="#" aria-label="LinkedIn" className={btn}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-90 group-hover:opacity-100"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8 8h3.8v2.05h.05C12.62 8.89 14.36 8 16.5 8 21 8 23 10.5 23 15.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.79-2.65 3.65V23H10V8z"/></svg>
      </Link>
      <Link href="#" aria-label="Twitter/X" className={btn}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-90 group-hover:opacity-100"><path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.348-6.43L4.5 22H1.244l8.252-9.43L1 2h6.91l4.85 5.77L18.244 2zm-2.4 18h2.4L8.24 4H5.84l10 16z"/></svg>
      </Link>
      <Link href="#" aria-label="YouTube" className={btn}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-90 group-hover:opacity-100"><path d="M23.498 6.186a2.999 2.999 0 00-2.115-2.121C19.725 3.5 12 3.5 12 3.5s-7.725 0-9.383.565A3 3 0 00.502 6.186C0 7.853 0 12 0 12s0 4.147.502 5.814a2.999 2.999 0 002.115 2.121C4.275 20.5 12 20.5 12 20.5s7.725 0 9.383-.565a2.999 2.999 0 002.115-2.121C24 16.147 24 12 24 12s0-4.147-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/></svg>
      </Link>
    </div>
  )
}
