import React from "react";
import { nanoid } from "nanoid";
import "./PopupContent.css";

function PopupContent({ feature }) {
  const { name, website } = feature.properties;

  return (
    <>
      {name && <h3>{name}</h3>}
      {website && (
        <a href={website} target="_blank" rel="noreferrer">
          Website
        </a>
      )}
      <ul className="popup-list">
        {Object.entries(feature.properties).map(
          ([propertyName, propertyValue]) => {
            const item =
              propertyName !== "name" && propertyName !== "website" ? (
                <li
                  key={nanoid()}
                  className="popup-item"
                >{`${propertyName}: ${propertyValue}`}</li>
              ) : null;

            return item;
          }
        )}
      </ul>
    </>
  );
}

export default PopupContent;
