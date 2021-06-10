import React from "react";

function BoundingBoxForm({
  coordinates,
  handleSubmit,
  handleInput,
  filterChecked,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="top">
        <label>
          <span>minimum longitude</span>
          <input
            className="coordinate-input"
            type="number"
            step="0.00001"
            name="minLng"
            value={coordinates.minLng}
            onChange={handleInput}
          />
        </label>
        <label>
          <span>minimum latitude</span>
          <input
            className="coordinate-input"
            type="number"
            step="0.00001"
            name="minLat"
            value={coordinates.minLat}
            onChange={handleInput}
          />
        </label>
        <label>
          <span>maximum longitude</span>
          <input
            className="coordinate-input"
            type="number"
            step="0.00001"
            name="maxLng"
            value={coordinates.maxLng}
            onChange={handleInput}
          />
        </label>
        <label>
          <span>maximum latitude</span>
          <input
            className="coordinate-input"
            type="number"
            step="0.00001"
            name="maxLat"
            value={coordinates.maxLat}
            onChange={handleInput}
          />
        </label>
      </div>
      <div className="bottom">
        <label className={`filter-input ${filterChecked ? "fill" : ""}`}>
          filter features
          <input type="checkbox" defaultChecked onChange={handleInput} />
        </label>
        <input
          className="submit-button"
          type="submit"
          value="Show Map Features"
        />
      </div>
    </form>
  );
}

export default BoundingBoxForm;
