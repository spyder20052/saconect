"use client"
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { SocialLinks } from './SocialLinks'
import { useEffect, useRef } from 'react'

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const root = footerRef.current
    if (!root) return
    const items = Array.from(root.querySelectorAll<HTMLElement>('.reveal-up'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="mt-16 relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-saco-blue/40 via-saco-turquoise/40 to-saco-blue/40" />

      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 animated-grid mask-soft opacity-[0.35]" />

      {/* Main content */}
      <Container className="py-12 relative">
        <div className="grid gap-8 md:grid-cols-12 text-sm">
          {/* Brand */}
          <div className="md:col-span-4 reveal-up" style={{ transitionDelay: '60ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo-white.svg" alt="SACONECT" width={120} height={24} />
            </div>
            <p className="text-slate-400 max-w-sm">
              Solutions IoT prêtes à déployer: tracking, domotique, utilities, agriculture.
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-2 reveal-up" style={{ transitionDelay: '120ms' }}>
            <div className="text-slate-200 font-medium mb-3">Sitemap</div>
            <ul className="space-y-2">
              <li><Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/entreprise">Entreprise</Link></li>
              <li><Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/solutions">Solutions</Link></li>
              <li><Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/partenaires">Partenaires</Link></li>
              <li><Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/actualites">Actualités</Link></li>
              <li><Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/ressources">Ressources</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3 reveal-up" style={{ transitionDelay: '180ms' }}>
            <div className="text-slate-200 font-medium mb-3">Légal</div>
            <ul className="space-y-2">
              <li><Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/legal/mentions-legales">Mentions légales</Link></li>
              <li><Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/legal/politique-confidentialite">Politique de confidentialité</Link></li>
              <li><Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/legal/cookies">Cookies</Link></li>
              <li><Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/credits">Crédits</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 reveal-up" style={{ transitionDelay: '240ms' }}>
            <div className="text-slate-200 font-medium mb-3">Contact</div>
            <p className="text-slate-400">contact@saconect.com</p>
            <p className="text-slate-400 mt-1">+212 6 00 00 00 00</p>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>© {new Date().getFullYear()} SACONECT. Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/legal/politique-confidentialite">Confidentialité</Link>
            <Link className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-gradient-to-r after:from-saco-turquoise after:to-saco-blue after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition" href="/legal/cookies">Cookies</Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
