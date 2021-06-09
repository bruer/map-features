import React from "react";

function BoundingBoxForm({ coordinates, handleSubmit, handleInput }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="top">
        <label>
          minimum longitude
          <input
            type="number"
            step="0.00001"
            name="minLng"
            value={coordinates.minLng}
            onChange={handleInput}
          />
        </label>
        <label>
          minimum latitude
          <input
            type="number"
            step="0.00001"
            name="minLat"
            value={coordinates.minLat}
            onChange={handleInput}
          />
        </label>
        <label>
          maximum longitude
          <input
            type="number"
            step="0.00001"
            name="maxLng"
            value={coordinates.maxLng}
            onChange={handleInput}
          />
        </label>

        <label>
          maximum latitude
          <input
            type="number"
            step="0.00001"
            name="maxLat"
            value={coordinates.maxLat}
            onChange={handleInput}
          />
        </label>
      </div>
      <div className="bottom">
        <label>
          filter features
          <input type="checkbox" defaultChecked onChange={handleInput} />
        </label>

        <input type="submit" value="get GeoJSON" />
      </div>
    </form>
  );
}

export default BoundingBoxForm;
