import { useState } from "react";
import BoundingBoxInput from "./BoundingBoxInput/BoundingBoxInput";
import Map from "./Map";
import "./App.css";

function App() {
  const [geoJsonFeatures, setGeoJsonFeatures] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // const [boundingBox, setBoundingBox] = useState({
  //   minLng: "",
  //   minLat: "",
  //   maxLng: "",
  //   maxLat: "",
  // });
  // const [boundingBox, setBoundingBox] = useState({
  //   minLng: 13.37084,
  //   minLat: 59.96254,
  //   maxLng: 13.39385,
  //   maxLat: 59.96929,
  // });
  const [boundingBox, setBoundingBox] = useState({
    minLng: 17.98644,
    minLat: 59.34364,
    maxLng: 18.00945,
    maxLat: 59.35083,
  });
  // const [boundingBox, setBoundingBox] = useState({
  //   minLng: -0.09041,
  //   minLat: 51.51208,
  //   maxLng: -0.08801,
  //   maxLat: 51.51425,
  // });

  const handleCoordinatesInput = (coordinates) => setBoundingBox(coordinates);
  const handleFeatures = (features) => setGeoJsonFeatures(features);
  const handleLoading = (loading) => setIsLoading(loading);
  const handleError = (error) => setError(error);

  return (
    <div className="app-container">
      <div className="input-container">
        <BoundingBoxInput
          boundingBox={boundingBox}
          onCoordinatesInput={handleCoordinatesInput}
          onFeaturesChange={handleFeatures}
          onLoading={handleLoading}
          onError={handleError}
        />
        <div className="message">
          {error && error}
          {isLoading && "loading GeoJSON"}
        </div>
      </div>
      <Map
        boundingBox={boundingBox}
        geoJsonFeatures={geoJsonFeatures}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
