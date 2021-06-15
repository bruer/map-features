import { LOCATIONS } from "./constants";

export function filterOutProperties(properties, subset) {
  const newObject = {};

  Object.entries(properties).forEach(([name, value]) => {
    if (!subset.includes(name)) {
      newObject[name] = value;
    }
  });

  return Object.entries(newObject);
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
    .replace("_", " ")
    .replace(":", ": ")
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
  return `https://wiki.openstreetmap.org/wiki/Key:${name}`;
}
