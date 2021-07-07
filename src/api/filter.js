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

export function filterFeaturesByProperties(features, properties) {
  const filteredFeatures = [];

  if (properties.title) {
    features
      .filter((feature) => feature.properties.name !== undefined)
      .forEach((feature) => filteredFeatures.push(feature));
  }

  return filteredFeatures.length ? filteredFeatures : features;
}

export function filterFeaturesByGeometry(features, geometry) {
  const filteredFeatures = [];

  if (geometry.points) {
    features
      .filter((feature) => feature.geometry.type === "Point")
      .forEach((feature) => filteredFeatures.push(feature));
  }
  if (geometry.polylines) {
    features
      .filter((feature) => feature.geometry.type === "LineString")
      .forEach((feature) => filteredFeatures.push(feature));
  }
  if (geometry.polygons) {
    features
      .filter((feature) => feature.geometry.type === "Polygon")
      .forEach((feature) => filteredFeatures.push(feature));
  }

  return filteredFeatures.length ? filteredFeatures : features;
}
