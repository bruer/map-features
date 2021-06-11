import React from "react";

function CoordinateInput({ coordinates, handleInput }) {
  return (
    <div className="coordinate-input">
      <label>
        <span>Minimum Longitude</span>
        <input
          type="number"
          step="0.00001"
          name="minLng"
          value={coordinates.minLng}
          onChange={handleInput}
        />
      </label>
      <label>
        <span>Minimum Latitude</span>
        <input
          type="number"
          step="0.00001"
          name="minLat"
          value={coordinates.minLat}
          onChange={handleInput}
        />
      </label>
      <label>
        <span>Maximum Longitude</span>
        <input
          type="number"
          step="0.00001"
          name="maxLng"
          value={coordinates.maxLng}
          onChange={handleInput}
        />
      </label>
      <label>
        <span>Maximum Latitude</span>
        <input
          type="number"
          step="0.00001"
          name="maxLat"
          value={coordinates.maxLat}
          onChange={handleInput}
        />
      </label>
    </div>
  );
}

export default CoordinateInput;
