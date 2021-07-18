import { osm2geojson } from "osm-and-geojson";
import { MESSAGES, LOCATIONS } from "../utils";

export async function getOpenStreetMapData({ minLng, minLat, maxLng, maxLat }) {
  const response = await fetch(
    `https://www.openstreetmap.org/api/0.6/map?bbox=${minLng},${minLat},${maxLng},${maxLat}`
  );
  if (!response.ok) {
    throw response;
  }
  return response.text();
}

export function convertToGeoJSON(osmData) {
  const geoJSON = osm2geojson(osmData);

  if (!geoJSON.features.length) {
    throw new Error(MESSAGES.ERROR_NO_OSM_DATA);
  }

  return geoJSON;
}

export function convertToWikiLink(name, value) {
  if (name.includes("wikipedia")) {
    return `https://wikipedia.org/wiki/${value}`;
  }
  if (name.includes("wikidata")) {
    return `https://www.wikidata.org/wiki/${value}`;
  }
  if (name.includes("wikimedia")) {
    return `https://commons.wikimedia.org/wiki/${value}`;
  }
}

export function formatString(string) {
  return string
    .replaceAll("_", " ")
    .replaceAll(":", ": ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1) + " ");
}

export function selectLocation(location) {
  switch (location) {
    case "huvudsta":
      return LOCATIONS.HUVUDSTA;
    case "loggolvberg":
      return LOCATIONS.LOGGOLVBERG;
    case "london":
      return LOCATIONS.LONDON;
    case "stockholm":
      return LOCATIONS.STOCKHOLM;
    default:
      return LOCATIONS.UNSET;
  }
}
