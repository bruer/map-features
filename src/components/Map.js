import { MapContainer, TileLayer, GeoJSON, MapConsumer } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import PopupContainer from "./PopupContainer";

function Map({ boundingBox, features, isLoading }) {
  function handleFeatures(feature, layer) {
    if (Object.entries(feature.properties).length) {
      const htmlString = ReactDOMServer.renderToString(
        <PopupContainer feature={feature} />
      );
      layer.bindPopup(htmlString);
    } else {
      layer.bindPopup("<code>no data</code>");
    }
  }

  return (
    <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={true}>
      {features && isLoading && (
        <MapConsumer>
          {(map) => {
            const { minLat, minLng, maxLat, maxLng } = boundingBox;
            const bottomLeftCorner = [minLat, minLng];
            const topRightCorner = [maxLat, maxLng];

            map.fitBounds([bottomLeftCorner, topRightCorner]);

            return null;
          }}
        </MapConsumer>
      )}

      {features && <GeoJSON data={features} onEachFeature={handleFeatures} />}

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
