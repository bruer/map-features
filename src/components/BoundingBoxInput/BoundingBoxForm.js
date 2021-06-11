import React from "react";
import CoordinateInput from "./CoordinateInput";
import FilterInput from "./FilterInput";
import LocationInput from "./LocationInput";

function BoundingBoxForm({
  coordinates,
  submit,
  input,
  filterChecked,
  location,
}) {
  return (
    <form onSubmit={submit}>
      <CoordinateInput input={input} coordinates={coordinates} />
      <div className="additional-input">
        <LocationInput input={input} location={location} />
        <FilterInput input={input} filterChecked={filterChecked} />
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
