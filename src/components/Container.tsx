import type { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

export default function Container({ className = '', children }: Props) {
  return (
    <div className={`max-w-7xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}
