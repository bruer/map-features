import React from "react";
import { filterProperties } from "../../../../api/auxiliary";
import PopupContactAddress from "./PopupContactAddress";
import PopupContactDetails from "./PopupContactDetails";
import PopupContactOpeningHours from "./PopupContactOpeningHours";

function PopupContact({ properties }) {
  const { opening_hours, email, phone } = properties;
  const addressProperties = filterProperties(properties, [
    "addr:city",
    "addr:country",
    "addr:housename",
    "addr:housenumber",
    "addr:postcode",
    "addr:street",
  ]);

  return (
    <ul className="contact">
      {Object.entries(addressProperties).length > 0 && (
        <PopupContactAddress properties={addressProperties} />
      )}
      {opening_hours && (
        <PopupContactOpeningHours properties={{ opening_hours }} />
      )}
      {(email || phone) && (
        <PopupContactDetails properties={{ email, phone }} />
      )}
    </ul>
  );
}

export default PopupContact;
