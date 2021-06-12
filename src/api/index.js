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

export function filterProperties(properties) {
  const standardProperties = [
    "name",
    "website",
    "opening_hours",
    "phone",
    "email",
    "amenity",
    "tourism",
    "shop",
    "railway",
    "station",
    "leisure",
    "highway",
    "office",
    "place",
    "historic",
    "addr:housename",
    "addr:street",
    "addr:housenumber",
    "addr:city",
    "addr:postcode",
    "addr:country",
  ];
  const newObject = {};

  Object.entries(properties).forEach(([name, value]) => {
    if (!standardProperties.includes(name)) {
      newObject[name] = value;
    }
  });
  return Object.entries(newObject);
}

export function selectLocation(location) {
  switch (location) {
    case "london":
      return {
        minLng: -0.09041,
        minLat: 51.51208,
        maxLng: -0.08801,
        maxLat: 51.51425,
      };
    case "huvudsta":
      return {
        minLng: 17.98644,
        minLat: 59.34364,
        maxLng: 18.00945,
        maxLat: 59.35083,
      };
    case "loggolvberg":
      return {
        minLng: 13.37084,
        minLat: 59.96254,
        maxLng: 13.39385,
        maxLat: 59.96929,
      };

    default:
      return {
        minLng: "",
        minLat: "",
        maxLng: "",
        maxLat: "",
      };
  }
}