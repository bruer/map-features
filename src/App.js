import {  useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import BoundingBoxInput from './components/BoundingBoxInput';
import { convertToGeoJSON } from './api';
import './App.css';

function App() {
  const [features, setFeatures] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [updateMap, setUpdateMap] = useState(false)
  const [boundingBox, setBoundingBox] = useState({ left: "", bottom: "", right: "", top: "" })
  const [error, setError] = useState("")
  const [zoomLevel, setZoomLevel] = useState(3)

  function handleChange({ target: { name, value } }) {
    setBoundingBox({ ...boundingBox, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const query = `bbox=${boundingBox.left},${boundingBox.bottom},${boundingBox.right},${boundingBox.top}`

    fetch("https://www.openstreetmap.org/api/0.6/map?" + query)
      .then(response => {
        if (!response.ok) {
          response.text().then(message => {
            setError(message)
          })
        }
        else {
          setIsLoading(true)
          setUpdateMap(true)
          setZoomLevel(15)

          return response.text()
        }
      })
      .then(mapData => {
        if (mapData) {
          const geoJSON = convertToGeoJSON(mapData)

          setFeatures(geoJSON.features.slice(0, 2000))
          setError("")
          setIsLoading(false)
          setUpdateMap(false)
        }
      }, error => { throw Error(error) })
  }

  return (
    <div className="app-container">
      
      <div className="input-container">
        <BoundingBoxInput boundingBox={boundingBox} handleChange={handleChange} handleSubmit={handleSubmit} />
        <div className="error-message">{error && error}</div>
      </div>

      {isLoading && <div className="loading-message">loading GeoJSON</div>}

      {!updateMap &&
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
