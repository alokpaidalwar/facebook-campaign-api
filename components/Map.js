import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet"

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [24, 24],
})

const Map = ({position}) => {
  return (
    <MapContainer center={position} zoom={4} scrollWheelZoom={false} style={{height: 300, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={ICON} position={position}>
        <Popup>
            Estimated location based on country and region.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
