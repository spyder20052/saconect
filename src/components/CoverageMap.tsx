'use client'
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function CoverageMap() {
  // Placeholder coverage circles (to replace with real GeoJSON/API)
  const points: { center: LatLngExpression; r: number }[] = [
    { center: [14.7167, -17.4677], r: 30000 }, // Dakar
    { center: [5.359952, -4.008256], r: 30000 }, // Abidjan
    { center: [5.603717, -0.186964], r: 30000 }, // Accra
  ]
  const center: LatLngExpression = [8, -5]
  // Loosen types to avoid build-time prop inference issues on Vercel
  const RLMap: any = MapContainer as any
  const RLCircle: any = Circle as any
  const RLTile: any = TileLayer as any
  return (
    <div className="h-[400px]">
      <RLMap center={center} zoom={5} scrollWheelZoom={false} className="h-full w-full rounded-lg border">
        <RLTile
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((p, i) => (
          <RLCircle key={i} center={p.center} radius={p.r} pathOptions={{ color: '#131D68', fillColor: '#1BDEDE', fillOpacity: 0.3 }} />
        ))}
      </RLMap>
    </div>
  )
}
