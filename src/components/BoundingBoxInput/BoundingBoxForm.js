import React from "react";
import { useState } from "react";
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
  const [hideInput, setToogle] = useState(false);
  const toggleInput = () => setToogle(!hideInput);

  return (
    <div
      className="input-container"
      style={
        hideInput ? { transform: "translateY(-100%)" } : { transform: "none" }
      }
    >
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
      <button
        className="toggle-button"
        onClick={toggleInput}
        style={{ transform: `${hideInput ? "rotate(180deg)" : ""}` }}
      >
        {/* &uArr; */}
        &#x022CF;
        {/* &darr; */}
      </button>
    </div>
  );
}

export default BoundingBoxForm;
