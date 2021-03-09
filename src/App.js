import './App.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { useEffect, useState } from 'react';
import osmtogeojson from 'osmtogeojson';

const url = "https://www.openstreetmap.org/api/0.6/map?bbox=17.99495,59.34552,17.99735,59.34730"
const url2 = "https://www.openstreetmap.org/api/0.6/map?bbox=-112.0876,33.3345,-112.0108,33.4280"

function App() {
  const [featureCollection, setfeatureCollection] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch(url)
      .then(response => {

        setIsLoading(true)

        return response.text()
      })
      .then(mapDataString => {

        setIsLoading(false)

        if (mapDataString.includes("You requested too many nodes")) {
          console.log(mapDataString)
          setError(mapDataString)
        }

        const mapDataXml = new DOMParser().parseFromString(mapDataString, "application/xml")
        const featureCollection = osmtogeojson(mapDataXml)

        setfeatureCollection(featureCollection)

      }, error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {isLoading && <p>loading GeoJSON</p>}
      {error && <p>{error}</p>}

      {featureCollection && <MapContainer center={[59.34573368442725, 17.998488864382967]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={featureCollection} />
      </MapContainer>}

    </div>
  );
}

export default App;
