import React from "react";

function CoordinateInput({
  input,
  coordinates: { minLng, minLat, maxLng, maxLat },
}) {
  return (
    <div className="coordinate-input">
      <label>
        <span>Minimum Longitude</span>
        <input
          type="number"
          name="minLng"
          value={minLng}
          onChange={input}
          className={minLng ? "fill" : ""}
        />
      </label>
      <label>
        <span>Minimum Latitude</span>
        <input
          type="number"
          name="minLat"
          value={minLat}
          onChange={input}
          className={minLat ? "fill" : ""}
        />
      </label>
      <label>
        <span>Maximum Longitude</span>
        <input
          type="number"
          name="maxLng"
          value={maxLng}
          onChange={input}
          className={maxLng ? "fill" : ""}
        />
      </label>
      <label>
        <span>Maximum Latitude</span>
        <input
          type="number"
          name="maxLat"
          value={maxLat}
          onChange={input}
          className={maxLat ? "fill" : ""}
        />
      </label>
    </div>
  );
}

export default CoordinateInput;
