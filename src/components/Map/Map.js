import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import MapFeatures from "./MapFeatures";

function Map({ boundingBox, features }) {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      {features && (
        <MapFeatures boundingBox={boundingBox} features={features} />
      )}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomleft" />
    </MapContainer>
  );
}

export default Map;
