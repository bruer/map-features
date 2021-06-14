import { osm2geojson } from "osm-and-geojson";
import { MESSAGES } from "./constants";

export async function getOsmData({ minLng, minLat, maxLng, maxLat }) {
  const response = await fetch(
    `https://www.openstreetmap.org/api/0.6/map?bbox=${minLng},${minLat},${maxLng},${maxLat}`
  );
  if (!response.ok) {
    throw response;
  }
  return response.text();
}

export function convertToGeoJSON(osmData, filterFeatures) {
  let geoJson = osm2geojson(osmData).features;

  if (filterFeatures) {
    geoJson = geoJson.filter(
      (feature) => feature.properties.name !== undefined
    );
  }
  if (!geoJson.length) {
    throw new Error(MESSAGES.ERROR_NO_OSM_DATA);
  }
  return geoJson;
}
