'use client'
import { useState, useEffect } from 'react'

const COUNTRIES = [
  { code: 'sn', name: 'Sénégal' },
  { code: 'ci', name: "Côte d'Ivoire" },
  { code: 'gh', name: 'Ghana' },
]

export function CountrySelector() {
  const [country, setCountry] = useState<string>('sn')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('saco-country') : null
    if (saved) setCountry(saved)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('saco-country', country)
    }
  }, [country])

  return (
    <select
      aria-label="Choisir un pays"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      className="border rounded px-2 py-1 text-sm"
    >
      {COUNTRIES.map(c => (
        <option key={c.code} value={c.code}>{c.name}</option>
      ))}
    </select>
  )
}
