import React, { useState } from "react";

function LocationInput({ handleInput }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="location-input">
      <label
        htmlFor="locations"
        style={{ display: `${dropdown ? "none" : ""}` }}
        onClick={() => setDropdown(true)}
      >
        Choose a location
      </label>
      <select
        id="locations"
        onChange={handleInput}
        style={dropdown ? { dispaly: "block" } : { display: "none" }}
      >
        <option value="">-</option>
        <option value="huvudsta">Huvudsta</option>
        <option value="london">London</option>
        <option value="loggolvberg">Loggolvberg</option>
      </select>
    </div>
  );
}

export default LocationInput;
