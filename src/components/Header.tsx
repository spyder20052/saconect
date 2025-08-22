"use client"
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function Header() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [lang, setLang] = useState<'FR'|'EN'>('FR')
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement | null>(null)
  // Desktop dropdown content for "Solutions"
  const SOLUTIONS = [
    { slug: 'smart-agriculture', title: 'Smart Agriculture' },
    { slug: 'smart-logistique', title: 'Smart Logistique' },
    { slug: 'smart-industrie', title: 'Smart Industrie' },
    { slug: 'smart-commerce', title: 'Smart Commerce' },
    { slug: 'smart-home', title: 'Smart Home' },
    { slug: 'smart-building', title: 'Smart Building' },
    { slug: 'smart-city', title: 'Smart City' },
    { slug: 'smart-energies', title: 'Smart Energies' },
  ]
  // Hover delay control for Solutions dropdown
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const hoverTimeout = useRef<number | null>(null)

  const openSolutions = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current)
      hoverTimeout.current = null
    }
    setSolutionsOpen(true)
  }

  const closeSolutionsWithDelay = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    hoverTimeout.current = window.setTimeout(() => setSolutionsOpen(false), 250)
  }
  // Desktop dropdown content for "Ecosystème IoT"
  const ECOSYSTEM = [
    { href: '/ecosysteme-iot/fabricants', title: 'Fabricants de capteurs' },
    { href: '/ecosysteme-iot/plateformes', title: 'Plateformes de gestion' },
    { href: '/ecosysteme-iot/integrateurs', title: 'Intégrateurs de solutions IoT' },
    { href: '/developpeurs', title: 'Développeurs' },
  ]
  const [ecoOpen, setEcoOpen] = useState(false)
  const ecoHoverTimeout = useRef<number | null>(null)
  const openEco = () => {
    if (ecoHoverTimeout.current) { clearTimeout(ecoHoverTimeout.current); ecoHoverTimeout.current = null }
    setEcoOpen(true)
  }
  const closeEcoWithDelay = () => {
    if (ecoHoverTimeout.current) clearTimeout(ecoHoverTimeout.current)
    ecoHoverTimeout.current = window.setTimeout(() => setEcoOpen(false), 250)
  }
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!langRef.current) return
      if (!langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangOpen(false)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Row 1: full-width dark bar */}
      <div className="bg-[#33425F] text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center relative">
          {/* Left: contact */}
          <div className="hidden sm:flex items-center gap-6 text-xs opacity-90">
            <a href="mailto:contact@saconect.com" className="hover:opacity-100 inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13 2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76L12 13z"/><path d="M22 6H2l10 6 10-6z"/></svg>
              contact@saconect.com
            </a>
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.27.2 2.47.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/></svg>
              +225 00 00 00 00
            </span>
          </div>

          {/* Center: logo */}
          <div className="absolute inset-x-0 flex justify-center">
            <Link href="/" aria-label="Accueil" className="inline-flex">
              <img src="/logo-white.svg" alt="SACONECT" className="h-6 w-auto" />
            </Link>
          </div>

          {/* Right: socials + lang + search compact */}
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <a href="#" aria-label="Facebook" className="h-8 w-8 rounded-full border border-white/40 grid place-items-center hover:bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.46 1.46-3.82 3.7-3.82 1.07 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.89h-2.29v6.98A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="h-8 w-8 rounded-full border border-white/40 grid place-items-center hover:bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.59 8.59 0 0 1-2.72 1.04 4.26 4.26 0 0 0-7.3 3.88A12.09 12.09 0 0 1 3.15 4.6a4.25 4.25 0 0 0 1.32 5.67 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.17c-.47.13-.97.2-1.49.2-.36 0-.71-.03-1.05-.1a4.27 4.27 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 19.54a12.06 12.06 0 0 0 6.53 1.92c7.84 0 12.13-6.49 12.13-12.12 0-.18 0-.36-.01-.54.83-.6 1.55-1.35 2.12-2.21z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="h-8 w-8 rounded-full border border-white/40 grid place-items-center hover:bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.62-1.18 2.14-2.43 4.41-2.43 4.72 0 5.59 3.11 5.59 7.15V24h-5V15.6c0-2.01-.04-4.6-2.8-4.6-2.81 0-3.24 2.2-3.24 4.46V24h-5V8z"/></svg>
              </a>
            </div>
            {/* Desktop language dropdown (visual only) */}
            <div ref={langRef} className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(v => !v)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                className="inline-flex items-center gap-2 h-8 px-2 rounded bg-white/10 border border-white/30 text-white text-xs hover:bg-white/15 transition"
              >
                <span className="text-base leading-none">{lang === 'FR' ? '🇫🇷' : '🇬🇧'}</span>
                <span className="tracking-wide">{lang}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"/></svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-md overflow-hidden bg-white text-slate-800 shadow-lg ring-1 ring-black/5 animate-in fade-in zoom-in-95">
                  <button
                    onClick={() => { setLang('FR'); setLangOpen(false) }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 ${lang === 'FR' ? 'bg-slate-50' : ''}`}
                    role="option"
                    aria-selected={lang === 'FR'}
                  >
                    <span className="text-lg">🇫🇷</span>
                    <span>Français</span>
                  </button>
                  <button
                    onClick={() => { setLang('EN'); setLangOpen(false) }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 ${lang === 'EN' ? 'bg-slate-50' : ''}`}
                    role="option"
                    aria-selected={lang === 'EN'}
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>
            <div className="hidden lg:flex items-center h-8 rounded bg-white/10 border border-white/30 overflow-hidden">
              <input value={q} onChange={(e)=> setQ(e.target.value)} placeholder="Rechercher..." className="h-full w-48 bg-transparent px-3 text-xs outline-none placeholder:text-white/70 text-white" />
              <button className="h-8 px-3 bg-white/10 text-white text-xs">OK</button>
            </div>
            <button aria-label="Menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-white/30" onClick={() => setOpen(v => !v)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Row 2: full-width bottom nav bar */}
      <div className="bg-[#2C3A54] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center">
          <nav className="flex items-center gap-6 text-xs uppercase tracking-wide">
            <Link href="/" className="hover:opacity-100 opacity-90">Accueil</Link>
            {/* Solutions with hover dropdown (desktop) */}
            <div
              className="relative hidden md:block"
              onMouseEnter={openSolutions}
              onMouseLeave={closeSolutionsWithDelay}
              onFocusCapture={openSolutions}
              onBlur={closeSolutionsWithDelay}
            >
              <Link
                href="/solutions"
                className="hover:opacity-100 opacity-90 inline-flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <svg className={`w-3 h-3 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"/></svg>
              </Link>
              {/* Dropdown */}
              <div
                className={`${solutionsOpen ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-150 absolute left-0 mt-2 w-[560px] bg-white text-slate-800 rounded-lg shadow-lg ring-1 ring-black/5 p-3`}
                role="menu"
              >
                <div className="grid grid-cols-2 gap-1">
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/solutions/${s.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-50"
                    >
                      <span className="text-[11px] font-medium tracking-wide uppercase text-slate-700">{s.title}</span>
                      <span className="text-saco-blue">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Fallback single link on small screens */}
            <Link href="/solutions" className="hover:opacity-100 opacity-90 md:hidden">Solutions</Link>
            <Link href="/couverture" className="hover:opacity-100 opacity-90">Couverture</Link>
            {/* Ecosystème IoT with hover dropdown (desktop) */}
            <div
              className="relative hidden md:block"
              onMouseEnter={openEco}
              onMouseLeave={closeEcoWithDelay}
              onFocusCapture={openEco}
              onBlur={closeEcoWithDelay}
            >
              <Link
                href="/ecosysteme-iot"
                className="hover:opacity-100 opacity-90 inline-flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={ecoOpen}
              >
                <span>Écosystème IoT</span>
                <svg className={`w-3 h-3 transition-transform ${ecoOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 0 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"/></svg>
              </Link>
              <div
                className={`${ecoOpen ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-150 absolute left-0 mt-2 w-[360px] bg-white text-slate-800 rounded-lg shadow-lg ring-1 ring-black/5 p-3`}
                role="menu"
              >
                <div className="grid grid-cols-1 gap-1">
                  {ECOSYSTEM.map((e) => (
                    <Link
                      key={e.href}
                      href={e.href}
                      className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-50"
                    >
                      <span className="text-[11px] font-medium tracking-wide uppercase text-slate-700">{e.title}</span>
                      <span className="text-saco-blue">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/actualites" className="hover:opacity-100 opacity-90">Actualité</Link>
            <Link href="/contact" className="hover:opacity-100 opacity-90">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Mobile panel (centered content) */}
      <div className="max-w-7xl mx-auto px-4">
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex items-center gap-2 mb-3">
              <input value={q} onChange={(e)=> setQ(e.target.value)} placeholder="Rechercher..." className="flex-1 h-10 rounded-md border bg-white px-3 text-sm" />
              <select value={lang} onChange={(e)=> setLang(e.target.value as 'FR'|'EN')} className="h-10 rounded-md border bg-white px-2 text-sm">
                <option value="FR">FR</option>
                <option value="EN">EN</option>
              </select>
            </div>
            <nav className="grid gap-2 text-slate-800 text-sm">
              <Link href="/" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100">Accueil</Link>
              <Link href="/solutions" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100">Solutions</Link>
              <Link href="/couverture" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100">Couverture</Link>
              <Link href="/ecosysteme-iot" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100">Ecosystème IoT</Link>
              <Link href="/actualites" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-slate-100">Actualité</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded bg-saco-blue text-white text-center">Contact</Link>
            </nav>
            <div className="flex items-center gap-2 mt-3 text-slate-600">
              <a href="#" aria-label="LinkedIn" className="p-2 hover:text-saco-blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.62-1.18 2.14-2.43 4.41-2.43 4.72 0 5.59 3.11 5.59 7.15V24h-5V15.6c0-2.01-.04-4.6-2.8-4.6-2.81 0-3.24 2.2-3.24 4.46V24h-5V8z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="p-2 hover:text-saco-blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.59 8.59 0 0 1-2.72 1.04 4.26 4.26 0 0 0-7.3 3.88A12.09 12.09 0 0 1 3.15 4.6a4.25 4.25 0 0 0 1.32 5.67 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.17c-.47.13-.97.2-1.49.2-.36 0-.71-.03-1.05-.1a4.27 4.27 0 0 0 3.98 2.96A8.54 8.54 0 0 1 2 19.54a12.06 12.06 0 0 0 6.53 1.92c7.84 0 12.13-6.49 12.13-12.12 0-.18 0-.36-.01-.54.83-.6 1.55-1.35 2.12-2.21z"/></svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
