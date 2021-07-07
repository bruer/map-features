import { useMapEvent } from "react-leaflet";
import { formatCoordinate } from "../../api";

function MapEffects({ setCoordinates }) {
  useMapEvent("move", ({ target }) => {
    const { _northEast, _southWest } = target.getBounds();

    setCoordinates({
      minLng: formatCoordinate(_southWest.lng),
      minLat: formatCoordinate(_southWest.lat),
      maxLng: formatCoordinate(_northEast.lng),
      maxLat: formatCoordinate(_northEast.lat),
    });
  });

  return null;
}

export default MapEffects;
