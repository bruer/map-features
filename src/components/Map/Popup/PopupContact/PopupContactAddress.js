import React from "react";

function PopupContactAddress({
  properties: {
    "addr:city": city,
    "addr:country": country,
    "addr:housename": housename,
    "addr:housenumber": housenumber,
    "addr:postcode": postcode,
    "addr:street": street,
  },
}) {
  return (
    <li>
      <fieldset>
        <legend>Address</legend>
        <address>
          <ul>
            {housename && (
              <li>
                <strong>{housename}</strong>
              </li>
            )}
            {street && (
              <li>
                {street} {housenumber}
              </li>
            )}
            {(postcode || city || country) && (
              <li>
                {postcode} {city} {country}
              </li>
            )}
          </ul>
        </address>
      </fieldset>
    </li>
  );
}

export default PopupContactAddress;
