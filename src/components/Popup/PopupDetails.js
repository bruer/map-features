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

  const newObject = {};
  Object.entries(properties).forEach(([name, value]) => {
    if (!standardProperties.includes(name)) {
      newObject[name] = value;
    }
  });
  const filteredProperties = Object.entries(newObject);

  return (
    <>
      {filteredProperties.length ? (
        <details>
          <summary>Details</summary>
          <ul>
            {filteredProperties.map(([propertyName, propertyValue]) => (
              <li key={nanoid()}>
                <strong>{propertyName}</strong>
                <br />
                {propertyValue}
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </>
  );
}

export default PopupDetails;
