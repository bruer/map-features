import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet'

function App() {
  return (
    <div>
      <MapContainer center={[59.34573368442725, 17.998488864382967]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
