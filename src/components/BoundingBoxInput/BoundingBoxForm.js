import React from "react";

function BoundingBoxForm({ boundingBox, handleSubmit, handleInput }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        minimum longitude
        <input
          type="text"
          name="minLng"
          value={boundingBox.minLng}
          onChange={handleInput}
        />
      </label>

      <label>
        minimum latitude
        <input
          type="text"
          name="minLat"
          value={boundingBox.minLat}
          onChange={handleInput}
        />
      </label>

      <label>
        maximum longitude
        <input
          type="text"
          name="maxLng"
          value={boundingBox.maxLng}
          onChange={handleInput}
        />
      </label>

      <label>
        maximum latitude
        <input
          type="text"
          name="maxLat"
          value={boundingBox.maxLat}
          onChange={handleInput}
        />
      </label>

      <label>
        filter features
        <input type="checkbox" defaultChecked onChange={handleInput} />
      </label>

      <input type="submit" value="get GeoJSON" />
    </form>
  );
}

export default BoundingBoxForm;
