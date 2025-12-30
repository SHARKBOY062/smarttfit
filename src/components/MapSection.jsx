import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

function ChangeView({ center }) {
  const map = useMap()
  map.setView(center, 12)
  return null
}

export default function MapSection({ city }) {
  return (
    <div className="w-full">
      <div className="w-full h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border">
        <MapContainer
          center={[-14.235, -51.9253]}
          zoom={4}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {city && (
            <>
              <ChangeView center={[city.lat, city.lng]} />
              <Marker position={[city.lat, city.lng]}>
                <Popup>
                  <strong>{city.city}</strong>
                  <br />
                  {city.count} unidades Smart Fit
                </Popup>
              </Marker>
            </>
          )}
        </MapContainer>
      </div>
    </div>
  )
}
