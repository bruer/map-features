import React from "react";
import { capitalizeString } from "../../../api/auxiliary";

function PopupSubtitle({ properties }) {
  console.log(properties);
  const values = [
    properties.amenity,
    properties.tourism,
    properties.shop,
    properties.railway,
    properties.station,
    properties.leisure,
    properties.highway,
    properties.office,
    properties.place,
    properties.historic,
  ];

  return (
    <ul>
      {values.map(
        (value, index) =>
          value && (
            <li key={index} className="subtitle">
              <em>{capitalizeString(value)}</em>
              {/* <small>{format(value)}</small> */}
              {/* <em>{value.replace("_", " ")}</em> */}
            </li>
          )
      )}
    </ul>
  );
}

export default PopupSubtitle;
