import { LOCATIONS } from "./constants";

export function filterProperties(properties, subset, excludeSubset) {
  const filteredProperties = {};

  Object.entries(properties).forEach(([name, value]) => {
    if (excludeSubset && !subset.includes(name)) {
      filteredProperties[name] = value;
    }
    if (!excludeSubset && subset.includes(name)) {
      filteredProperties[name] = value;
    }
  });

  return filteredProperties;
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

export function formatString(string) {
  return string
    .replaceAll("_", " ")
    .replaceAll(":", ": ")
    .split(" ")
    .map((word) => {
      const firstLetter = word.slice(0, 1);
      const capitalized = word.replace(firstLetter, firstLetter.toUpperCase());

      return `${capitalized} `;
    });
}

export function formatCoordinate(coordinate) {
  const parts = coordinate.toString().split(".");
  const integer = parts[0];
  const decimal = parts[1];

  if (!decimal) {
    console.log(decimal);
    return parseInt(integer);
  }
  
  return parseFloat(integer + "." + decimal.slice(0, 5));
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
