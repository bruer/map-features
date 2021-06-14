import React from "react";

function PopupContact({ properties }) {
  const {
    opening_hours,
    phone,
    email,
    "addr:street": street,
    "addr:housenumber": housenumber,
    "addr:city": city,
    "addr:postcode": postcode,
    "addr:country": country,
    "addr:housename": housename,
  } = properties;

  return (
    <ul className="contact">
      {(street || city || postcode || country) && (
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
                    {street}
                    {housenumber && ` ${housenumber}`}
                  </li>
                )}
                {(city || postcode || country) && (
                  <li>
                    {postcode && `${postcode} `}
                    {city && `${city} `}
                    {country && country}
                  </li>
                )}
              </ul>
            </address>
          </fieldset>
        </li>
      )}
      {opening_hours && (
        <li>
          <fieldset>
            <legend>Opening hours</legend>
            {opening_hours}
          </fieldset>
        </li>
      )}
      {(phone || email) && (
        <li>
          <fieldset>
            <legend>Contact</legend>
            <ul>
              {phone && (
                <li>
                  <strong>Phone: </strong>
                  <a href={`tel:${phone}`}>{phone}</a>
                </li>
              )}
              {email && (
                <li>
                  <strong>Email: </strong>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              )}
            </ul>
          </fieldset>
        </li>
      )}
    </ul>
  );
}

export default PopupContact;
