import { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import BoundingBoxInput from './BoundingBoxInput';
import { MESSAGES } from '../api';
import { osm2geojson } from 'osm-and-geojson';
import './App.css';

function App() {
  const [features, setFeatures] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [updateMap, setUpdateMap] = useState(false)
  const [generalError, setGeneralError] = useState("")
  const [inputError, setInputError] = useState("")
  const [boundingBox, setBoundingBox] = useState({ left: "", bottom: "", right: "", top: "" })
  const [zoomLevel, setZoomLevel] = useState(2)

  function handleChange({ target: { name, value } }) {
    setBoundingBox({ ...boundingBox, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const query = `bbox=${boundingBox.left},${boundingBox.bottom},${boundingBox.right},${boundingBox.top}`

    fetch("https://www.openstreetmap.org/api/0.6/map?" + query)
      .then(response => {
        if (!response.ok) { throw response }

        setIsLoading(true)
        // setUpdateMap(true)
        // setFeatures(null)


        return response.text()
      })
      .then(mapData => {
        const geoJSON = osm2geojson(mapData).features.slice(0, 500)

        if (!geoJSON.length) {
          throw new Error(MESSAGES.ERROR_NO_OSM_DATA)
        }

        setFeatures(geoJSON)
        setInputError("")
        setGeneralError("")
        setIsLoading(false)
        // setUpdateMap(false)
      })
      .catch(err => {
        if (err.message) {
          setGeneralError(err.message)
          setInputError("")
          setIsLoading(false)
        }
        else {
          err.text().then(message => { setInputError(message) })
        }
      })
  }

  return (
    <div className="app-container">

      <div className="input-container">
        <BoundingBoxInput boundingBox={boundingBox} handleChange={handleChange} handleSubmit={handleSubmit} />
        <div className="error-message">{inputError && inputError}</div>
      </div>

      {isLoading && <div className="info-message">loading GeoJSON</div>}
      {generalError && <div className="info-message">{generalError}</div>}

      {features &&
        <MapContainer
          center={[boundingBox.bottom, boundingBox.left]}
          zoom={zoomLevel}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={features} />
        </MapContainer>}
    </div>
  );
}

export default App;
