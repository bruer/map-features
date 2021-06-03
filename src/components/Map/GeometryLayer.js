import React from "react";
import { Marker, Polygon, Polyline } from "react-leaflet";

function GeometryLayer({ geometry }) {
  const { type, coordinates } = geometry;

  if (type !== "Polygon" && type !== "LineString" && type !== "Point")
    console.log(geometry);

  switch (type) {
    case "Polygon":
      return (
        <Polygon
          positions={[
            coordinates[0].map((coordinate) => [coordinate[1], coordinate[0]]),
          ]}
        />
      );
    case "LineString":
      return (
        <Polyline
          positions={[
            coordinates.map((coordinate) => [coordinate[1], coordinate[0]]),
          ]}
        />
      );
    case "Point":
      return <Marker position={[coordinates[1], coordinates[0]]} />;

    default:
      return null;
  }
}

export default GeometryLayer;
