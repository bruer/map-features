import { useMapEvent } from "react-leaflet";

function MapEffects({ setCoordinates }) {
  useMapEvent("move", ({ target }) => {
    const { _northEast, _southWest } = target.getBounds();

    setCoordinates({
      minLng: _southWest.lng.toFixed(5),
      minLat: _southWest.lat.toFixed(5),
      maxLng: _northEast.lng.toFixed(5),
      maxLat: _northEast.lat.toFixed(5),
    });
  });

  return null;
}

export default MapEffects;
