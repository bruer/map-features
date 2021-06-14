export const MESSAGES = {
  ERROR_NO_OSM_DATA: "unable to find any OSM data for these coordinates",
};

export const PROPERTIES = {
  STANDARD: [
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
  ],
};

export const LOCATIONS = {
  UNKOWN: {
    minLng: "",
    minLat: "",
    maxLng: "",
    maxLat: "",
  },
  LONDON: {
    minLng: -0.09041,
    minLat: 51.51208,
    maxLng: -0.08801,
    maxLat: 51.51425,
  },
  HUVUDSTA: {
    minLng: 17.98644,
    minLat: 59.34364,
    maxLng: 18.00945,
    maxLat: 59.35083,
  },
  LOGGOLVBERG: {
    minLng: 13.37084,
    minLat: 59.96254,
    maxLng: 13.39385,
    maxLat: 59.96929,
  },
};
