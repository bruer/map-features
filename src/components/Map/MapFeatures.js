import { useEffect, useMemo } from "react";
import { FeatureGroup, useMap, Popup } from "react-leaflet";
import GeometryLayer from "./GeometryLayer";
import PopupContainer from "./Popup/PopupContainer";

function MapFeatures({ boundingBox, features }) {
  const map = useMap();

  useEffect(() => {
    const { minLat, minLng, maxLat, maxLng } = boundingBox;
    const bottomLeftCorner = [minLat, minLng];
    const topRightCorner = [maxLat, maxLng];

    map.fitBounds([bottomLeftCorner, topRightCorner]);
  }, [map, boundingBox]);

  return (
    <>
      {useMemo(
        () =>
          features.map(({ properties, geometry }, index) => {
            return (
              <FeatureGroup key={index}>
                {Object.entries(properties).length > 0 && (
                  <Popup>
                    <PopupContainer properties={properties} />
                  </Popup>
                )}
                <GeometryLayer geometry={geometry} />
              </FeatureGroup>
            );
          }),
        [features]
      )}
    </>
  );
}

export default MapFeatures;
