import { useState } from "react";
import BoundingBoxInput from "./BoundingBoxInput/BoundingBoxInput";
import Map from "./Map/Map";
import Message from "./Message/Message";
import "./App.css";

function App() {
  const [geoJsonFeatures, setGeoJsonFeatures] = useState(null);
  const [boundingBox, setBoundingBox] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [coordinates, setCoordinates] = useState({
    minLng: "",
    minLat: "",
    maxLng: "",
    maxLat: "",
  });

  const handleSubmit = (features) => {
    setGeoJsonFeatures(features);
    setBoundingBox(coordinates);
  };

  return (
    <div className="app-container">
      <div className="input-container" onClick={() => setError("")}>
        <BoundingBoxInput
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setLoading={setLoading}
          setError={setError}
          handleSubmit={handleSubmit}
        />
      </div>
      <Map
        boundingBox={boundingBox}
        features={geoJsonFeatures}
        setError={setError}
      />
      <Message isLoading={isLoading} error={error} setError={setError} />
    </div>
  );
}

export default App;
