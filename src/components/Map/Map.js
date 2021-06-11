import { MapConsumer, MapContainer, TileLayer } from "react-leaflet";
import MapFeatures from "./MapFeatures";

function Map({ boundingBox, features, setError }) {
  return (
    <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={true}>
      <MapConsumer>
        {(map) => {
          map.on("click", () => setError(""));
          return null;
        }}
      </MapConsumer>
      {features && (
        <MapFeatures boundingBox={boundingBox} features={features} />
      )}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
