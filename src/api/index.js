import { osm2geojson } from "osm-and-geojson";

export const MESSAGES = {
  ERROR_NO_OSM_DATA: "unable to find any OSM data for these coordinates",
};

export async function getOsmData({ minLng, minLat, maxLng, maxLat }) {
  const response = await fetch(
    `https://www.openstreetmap.org/api/0.6/map?bbox=${minLng},${minLat},${maxLng},${maxLat}`
  );
  if (!response.ok) {
    throw response;
  }
  return response.text();
}

export function getGeoJson(osmData, filter) {
  let geoJson = osm2geojson(osmData).features;

  if (filter) {
    geoJson = geoJson.filter(
      (feature) => feature.properties.name !== undefined
    );
  }
  if (!geoJson.length) {
    throw new Error(MESSAGES.ERROR_NO_OSM_DATA);
  }
  return geoJson;
}
