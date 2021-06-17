import React from "react";

function PopupContactDetails({ properties: { phone, email } }) {
  return (
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
  );
}

export default PopupContactDetails;
