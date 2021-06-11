import React from "react";
import CoordinateInput from "./CoordinateInput";
import FilterInput from "./FilterInput";
import LocationInput from "./LocationInput";

function BoundingBoxForm({
  coordinates,
  handleSubmit,
  handleInput,
  filterChecked,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <CoordinateInput handleInput={handleInput} coordinates={coordinates} />
      <div className="additional-input">
        <LocationInput handleInput={handleInput} />
        <FilterInput handleInput={handleInput} filterChecked={filterChecked} />
      </div>
      <input
        className="submit-button"
        type="submit"
        value="Show Map Features"
      />
    </form>
  );
}

export default BoundingBoxForm;
