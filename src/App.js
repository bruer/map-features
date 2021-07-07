import { useState } from "react";
import InputPanel from "./components/InputPanel/InputPanel";
import Map from "./components/Map/Map";
import Message from "./components/Message/Message";
// import { convertToGeoJSON } from "../api";
// import { OSM_XML } from "../mocks/mockData";

function App() {
  const [geoJsonFeatures, setGeoJsonFeatures] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [coordinates, setCoordinates] = useState({
    minLng: "",
    minLat: "",
    maxLng: "",
    maxLat: "",
  });
  const [boundingBox, setBoundingBox] = useState(null);
  // const [boundingBox, setBoundingBox] = useState({
  //   minLng: 13.37084,
  //   minLat: 59.96254,
  //   maxLng: 13.39385,
  //   maxLat: 59.96929,
  // });

  const handleSubmit = (features) => {
    setGeoJsonFeatures(features);
    setBoundingBox(coordinates);
  };

  return (
    <div className="app-container">
      <InputPanel
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setLoading={setLoading}
        setError={setError}
        handleSubmit={handleSubmit}
      />
      <Map
        boundingBox={boundingBox}
        features={geoJsonFeatures}
        // features={convertToGeoJSON(OSM_XML)}
        setCoordinates={setCoordinates}
      />
      <Message isLoading={isLoading} error={error} setError={setError} />
    </div>
  );
}

export default App;
