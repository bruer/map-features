import { filterFeaturesByGeometry, filterFeaturesByProperties } from "./filter";

export function handleFeatures(
  geoJSON,
  geometryFilters,
  propertiesFilters,
  quantity
) {
  let { features } = geoJSON;
  features = filterFeaturesByGeometry(features, geometryFilters);
  features = filterFeaturesByProperties(features, propertiesFilters);
  features = features.slice(-quantity);

  return features;
}

export function handleError(error, setError) {
  const { name, message } = error;

  if (!name) {
    error.text().then((message) => setError(message));
  }
  if (name) {
    console.error(error);
    setError(name === "Error" ? message : "something went wrong");
  }
}
