"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map({ markers }) {
  const [centerW, centerH] = markers.reduce(
    (acc, cur) => {
      return [acc[0] + cur.position[0], acc[1] + cur.position[1]];
    },
    [0, 0]
  );

  const center = [centerW / markers.length, centerH / markers.length];

  console.log("center", center);
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className="h-96"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map(({ position, title, address }, index) => (
        <Marker key={index} position={position}>
          <Popup>
            {title} <br /> {address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
