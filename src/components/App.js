import { useState } from "react";
import BoundingBoxInput from "./BoundingBoxInput";
import Map from "./Map";
import { getGeoJson, getOsmData, MESSAGES } from "../api";
import { osm2geojson } from "osm-and-geojson";
import "./App.css";

function App() {
  const [features, setFeatures] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [boundingBox, setBoundingBox] = useState({
    minLng: "",
    minLat: "",
    maxLng: "",
    maxLat: "",
  });
  // const [boundingBox, setBoundingBox] = useState({
  //   minLng: 17.98644,
  //   minLat: 59.34364,
  //   maxLng: 18.00945,
  //   maxLat: 59.35083,
  // });
  // const [boundingBox, setBoundingBox] = useState({
  //   minLng: 13.37084,
  //   minLat: 59.96254,
  //   maxLng: 13.39385,
  //   maxLat: 59.96929,
  // });
  const [filter, setFilter] = useState(true);

  function handleTextInput({ target: { name, value } }) {
    setBoundingBox({ ...boundingBox, [name]: value });
  }

  function handleCheckbox({ target }) {
    setFilter(!target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFeatures(null);
    setIsLoading(true);
    setError("");

    getOsmData(boundingBox)
      .then((osmData) => {
        const geoJson = getGeoJson(osmData, filter);

        setFeatures(geoJson);
        setIsLoading(false);
        setError("");
      })
      .catch(handleError);
  }

  function handleError(error) {
    const { name, message } = error;

    if (name) {
      console.error(error);
      setError(name === "Error" ? message : "something went wrong");
    } else {
      error.text().then((message) => setError(message));
    }
    setIsLoading(false);
  }

  return (
    <div className="app-container">
      <div className="input-container">
        <BoundingBoxInput
          boundingBox={boundingBox}
          handleTextInput={handleTextInput}
          handleCheckbox={handleCheckbox}
          handleSubmit={handleSubmit}
        />
        <div className="message">
          {error && error}
          {isLoading && "loading GeoJSON"}
        </div>
      </div>
      <Map
        boundingBox={boundingBox}
        features={features}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
