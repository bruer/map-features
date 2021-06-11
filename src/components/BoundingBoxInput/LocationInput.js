import React from "react";

function LocationInput({ input, location }) {
  return (
    <label className={`location-input ${location ? "fill" : ""}`}>
      Choose a Location
      <select onChange={input}>
        <option value="">-</option>
        <option value="huvudsta">Huvudsta</option>
        <option value="london">London</option>
        <option value="loggolvberg">Loggolvberg</option>
      </select>
    </label>
  );
}

export default LocationInput;
