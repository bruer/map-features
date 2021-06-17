import React from "react";

function PopupContactOpeningHours({ properties: { opening_hours } }) {
  return (
    <li>
      <fieldset>
        <legend>Opening hours</legend>
        {opening_hours}
      </fieldset>
    </li>
  );
}

export default PopupContactOpeningHours;
