import { osm2geojson } from "osm-and-geojson";

const MESSAGE = {
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

export function getGeoJsonFeatures(osmData, filterFeatures) {
  let geoJson = osm2geojson(osmData).features;

  if (filterFeatures) {
    geoJson = geoJson.filter(
      (feature) => feature.properties.name !== undefined
    );
  }
  if (!geoJson.length) {
    throw new Error(MESSAGE.ERROR_NO_OSM_DATA);
  }
  return geoJson;
}
