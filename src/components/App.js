import { useState } from "react";
import BoundingBoxInput from "./BoundingBoxInput/BoundingBoxInput";
import Map from "./Map/Map";
import "./App.css";

function App() {
  const [geoJsonFeatures, setGeoJsonFeatures] = useState(null);
  const [boundingBox, setBoundingBox] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [coordinates, setCoordinates] = useState({
  //   minLng: "",
  //   minLat: "",
  //   maxLng: "",
  //   maxLat: "",
  // });
  // const [coordinates, setCoordinates] = useState({
  //   minLng: 13.37084,
  //   minLat: 59.96254,
  //   maxLng: 13.39385,
  //   maxLat: 59.96929,
  // });
  const [coordinates, setCoordinates] = useState({
    minLng: 17.98644,
    minLat: 59.34364,
    maxLng: 18.00945,
    maxLat: 59.35083,
  });
  // const [coordinates, setCoordinates] = useState({
  //   minLng: -0.09041,
  //   minLat: 51.51208,
  //   maxLng: -0.08801,
  //   maxLat: 51.51425,
  // });

  const handleCoordinatesInput = (coordinates) => setCoordinates(coordinates);
  const handleFeatures = (features) => {
    setGeoJsonFeatures(features);
    setBoundingBox(coordinates);
  };
  const handleLoading = (loading) => setLoading(loading);
  const handleError = (error) => setError(error);

  return (
    <div className="app-container">
      <div className="input-container">
        <BoundingBoxInput
          coordinates={coordinates}
          onCoordinatesInput={handleCoordinatesInput}
          onFeaturesChange={handleFeatures}
          onLoading={handleLoading}
          onError={handleError}
        />
      </div>
      <Map boundingBox={boundingBox} features={geoJsonFeatures} />
      {(error || isLoading) && (
        <div className="message">
          {error}
          {isLoading && "loading GeoJSON"}
        </div>
      )}
    </div>
  );
}

export default App;
