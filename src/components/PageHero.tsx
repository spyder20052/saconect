"use client"
import Image from 'next/image'
import Container from './Container'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type Props = {
  title: string
  subtitle?: string
  image?: string
  backHref?: string
  backLabel?: string
}

export default function PageHero({ title, subtitle, image, backHref, backLabel }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[320px] md:h-[420px]">
        <Image
          src={image || 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop'}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <Container>
          {backHref && (
            <div className="absolute top-6 left-4 md:left-0">
              <Link href={backHref} className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm bg-white/10 hover:bg-white/15 rounded-md px-3 py-1.5 ring-1 ring-white/20">
                <ArrowLeft className="h-4 w-4" />
                <span>{backLabel || 'Retour'}</span>
              </Link>
            </div>
          )}
          <div className="absolute left-0 right-0 md:left-auto md:right-auto top-1/2 -translate-y-1/2 px-4 md:px-0">
            <h1 className="text-white text-3xl md:text-4xl font-semibold">{title}</h1>
            {subtitle && (
              <p className="text-white/90 mt-3 max-w-2xl">{subtitle}</p>
            )}
          </div>
        </Container>
      </div>
    </section>
  )
}
