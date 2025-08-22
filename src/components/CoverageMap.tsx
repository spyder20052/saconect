'use client'
import { MapContainer, TileLayer, Circle, CircleMarker, Tooltip, Popup, FeatureGroup } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

type City = { name: string; country: string; coord: LatLngExpression }

export default function CoverageMap() {
  // Zones de couverture (indicatif)
  const coverageZones: { center: LatLngExpression; r: number }[] = [
    { center: [14.7167, -17.4677], r: 35000 }, // Dakar
    { center: [5.359952, -4.008256], r: 35000 }, // Abidjan
    { center: [7.684722, -5.017953], r: 25000 }, // Yamoussoukro
    { center: [9.466908, -5.614269], r: 25000 }, // Korhogo
  ]

  // Points de villes couverts (extrait de la liste fournie)
  const cities: City[] = [
    // Côte d'Ivoire
    { name: 'Abidjan', country: "Côte d’Ivoire", coord: [5.359952, -4.008256] },
    { name: 'Yamoussoukro', country: "Côte d’Ivoire", coord: [6.827623, -5.289343] },
    { name: 'Bouaké', country: "Côte d’Ivoire", coord: [7.68946, -5.03031] },
    { name: 'San-Pédro', country: "Côte d’Ivoire", coord: [4.7485, -6.6363] },
    { name: 'Daloa', country: "Côte d’Ivoire", coord: [6.87735, -6.45022] },
    { name: 'Abengourou', country: "Côte d’Ivoire", coord: [6.7283, -3.4963] },
    { name: 'Korhogo', country: "Côte d’Ivoire", coord: [9.457, -5.629] },
    // Sénégal
    { name: 'Dakar', country: 'Sénégal', coord: [14.7167, -17.4677] },
    { name: 'Thiès', country: 'Sénégal', coord: [14.7833, -16.9333] },
    { name: 'Mbour', country: 'Sénégal', coord: [14.4167, -16.9667] },
    { name: 'Touba', country: 'Sénégal', coord: [14.85, -15.8833] },
    { name: 'Diamniadio', country: 'Sénégal', coord: [14.6421, -17.1633] },
    { name: 'Mboro', country: 'Sénégal', coord: [15.156, -16.926] },
    { name: 'Diass', country: 'Sénégal', coord: [14.6713, -17.0721] },
    { name: 'Nguekokh', country: 'Sénégal', coord: [14.519, -17.004] },
    { name: 'Bayakh', country: 'Sénégal', coord: [14.8, -17.1167] },
    { name: 'Popenguine', country: 'Sénégal', coord: [14.5537, -17.1034] },
  ]

  const center: LatLngExpression = [8, -6]
  // Loosen types to avoid build-time prop inference issues on Vercel
  const RLMap: any = MapContainer as any
  const RLCircle: any = Circle as any
  const RLTile: any = TileLayer as any
  const RLCircleMarker: any = CircleMarker as any
  const RLTooltip: any = Tooltip as any
  const RLPopup: any = Popup as any
  const RLFeatureGroup: any = FeatureGroup as any

  return (
    <div className="h-[420px] z-0">
      <RLMap center={center} zoom={5} scrollWheelZoom={false} className="h-full w-full rounded-lg border">
        <RLTile
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Zones (remplissage doux) */}
        <RLFeatureGroup>
          {coverageZones.map((z, i) => (
            <RLCircle
              key={`zone-${i}`}
              center={z.center}
              radius={z.r}
              pathOptions={{ color: '#131D68', weight: 1, opacity: 0.7, fillColor: '#1BDEDE', fillOpacity: 0.25 }}
            />
          ))}
        </RLFeatureGroup>
        {/* Marqueurs ville avec info-bulles */}
        {cities.map((c, i) => (
          <RLCircleMarker
            key={`city-${i}`}
            center={c.coord}
            radius={6}
            pathOptions={{ color: '#131D68', weight: 2, fillColor: '#1BDEDE', fillOpacity: 0.9 }}
          >
            <RLTooltip direction="top" offset={[0, -6]} opacity={1} permanent={false} sticky>{`${c.name} · ${c.country}`}</RLTooltip>
            <RLPopup>
              <div className="text-sm">
                <div className="font-semibold text-slate-900">{c.name}</div>
                <div className="text-slate-600">{c.country}</div>
                <div className="mt-1 text-slate-700">Couverture 0G (indicatif)</div>
              </div>
            </RLPopup>
          </RLCircleMarker>
        ))}
      </RLMap>
    </div>
  )
}
