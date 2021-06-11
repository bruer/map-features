import { useState } from "react";
import BoundingBoxInput from "./BoundingBoxInput/BoundingBoxInput";
import Map from "./Map/Map";
import "./App.css";

function App() {
  const [geoJsonFeatures, setGeoJsonFeatures] = useState(null);
  const [boundingBox, setBoundingBox] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(
    "The parameter bbox is required, and must be of the form min_lon,min_lat,max_lon,max_lat."
  );
  const [coordinates, setCoordinates] = useState({
    minLng: "",
    minLat: "",
    maxLng: "",
    maxLat: "",
  });

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

      {error && <div className={`message error`}>{error}</div>}

      {/* {(error || isLoading) && (
        <div className={`message ${error ? "error" : "loading"}`}>
          {error}
          {isLoading && "Loading Map Features"}
        </div>
      )} */}
    </div>
  );
}

export default App;
