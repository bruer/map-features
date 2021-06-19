import React from "react";

function CoordinateInput({ coordinates, setCoordinates }) {
  const { minLng, minLat, maxLng, maxLat } = coordinates;

  function handleInput({ target: { name, value } }) {
    setCoordinates({ ...coordinates, [name]: parseFloat(value) });
  }

  return (
    <div className="coordinate-input">
      <label>
        <span>Minimum Longitude</span>
        <input
          type="number"
          name="minLng"
          step="0.00001"
          value={minLng}
          onChange={handleInput}
          className={minLng ? "fill" : ""}
        />
      </label>
      <label>
        <span>Minimum Latitude</span>
        <input
          type="number"
          name="minLat"
          step="0.00001"
          value={minLat}
          onChange={handleInput}
          className={minLat ? "fill" : ""}
        />
      </label>
      <label>
        <span>Maximum Longitude</span>
        <input
          type="number"
          name="maxLng"
          step="0.00001"
          value={maxLng}
          onChange={handleInput}
          className={maxLng ? "fill" : ""}
        />
      </label>
      <label>
        <span>Maximum Latitude</span>
        <input
          type="number"
          name="maxLat"
          step="0.00001"
          value={maxLat}
          onChange={handleInput}
          className={maxLat ? "fill" : ""}
        />
      </label>
    </div>
  );
}

export default CoordinateInput;
