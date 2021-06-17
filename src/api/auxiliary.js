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
    case "london":
      return LOCATIONS.LONDON;
    case "huvudsta":
      return LOCATIONS.HUVUDSTA;
    case "loggolvberg":
      return LOCATIONS.LOGGOLVBERG;
    default:
      return LOCATIONS.UNKOWN;
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
