import React from "react";
import { nanoid } from "nanoid";

function PopupDetails({ properties }) {
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

  return (
    <details>
      <summary>Details</summary>
      <ul>
        {Object.entries(properties).map(([propertyName, propertyValue]) => {
          const item = standardProperties.includes(propertyName) ? null : (
            <li key={nanoid()}>
              <strong>{propertyName}</strong>
              <br />
              {propertyValue}
            </li>
          );

          return item;
        })}
      </ul>
    </details>
  );
}

export default PopupDetails;
