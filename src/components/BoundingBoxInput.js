import "./BoundingBoxInput.css";

function BoundingBoxInput({
  boundingBox,
  handleTextInput,
  handleCheckbox,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="minLng">minimum longitude</label>
      <input
        type="text"
        name="minLng"
        id="minLng"
        value={boundingBox.minLng}
        onChange={handleTextInput}
      />

      <label htmlFor="minLat">minimum latitude</label>
      <input
        type="text"
        name="minLat"
        id="minLat"
        value={boundingBox.minLat}
        onChange={handleTextInput}
      />

      <label htmlFor="maxLng">maximum longitude</label>
      <input
        type="text"
        name="maxLng"
        id="maxLng"
        value={boundingBox.maxLng}
        onChange={handleTextInput}
      />

      <label htmlFor="maxLat">maximum latitude</label>
      <input
        type="text"
        name="maxLat"
        id="maxLat"
        value={boundingBox.maxLat}
        onChange={handleTextInput}
      />

      <input type="checkbox" id="filter" onChange={handleCheckbox} />
      <label htmlFor="filter">show all features</label>

      <input type="submit" value="get GeoJSON" />
    </form>
  );
}

export default BoundingBoxInput;
