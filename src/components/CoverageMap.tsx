'use client'
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function CoverageMap() {
  // Placeholder coverage circles (to replace with real GeoJSON/API)
  const points = [
    { lat: 14.7167, lng: -17.4677, r: 30000 }, // Dakar
    { lat: 5.359952, lng: -4.008256, r: 30000 }, // Abidjan
    { lat: 5.603717, lng: -0.186964, r: 30000 }, // Accra
  ]
  return (
    <div className="h-[400px]">
      <MapContainer center={[8, -5]} zoom={5} scrollWheelZoom={false} className="h-full w-full rounded-lg border">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((p, i) => (
          <Circle key={i} center={[p.lat, p.lng]} radius={p.r} pathOptions={{ color: '#131D68', fillColor: '#1BDEDE', fillOpacity: 0.3 }} />
        ))}
      </MapContainer>
    </div>
  )
}
