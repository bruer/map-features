import React from "react";
import { useState } from "react";
import CoordinateInput from "./CoordinateInput";
import FilterInput from "./FilterInput";
import LocationInput from "./LocationInput";
import { convertToGeoJSON, getOsmData } from "../../api/";
import { selectLocation } from "../../api/auxiliary";

function BoundingBoxForm({
  coordinates,
  setCoordinates,
  setLoading,
  setError,
  handleSubmit,
}) {
  const [filterFeatures, setFilter] = useState(false);
  const [location, setLocation] = useState("");

  function handleInput({ target: { type, name, value, checked } }) {
    if (type.includes("checkbox")) {
      setFilter(checked);
    }
    if (type.includes("number")) {
      setCoordinates({ ...coordinates, [name]: value });
    }
    if (type.includes("select")) {
      setLocation(value);
      setCoordinates(selectLocation(value));
    }
  }

  function submit(event) {
    event.preventDefault();

    setLoading(true);
    setError("");
    handleSubmit(null);

    getOsmData(coordinates)
      .then((osmData) => {
        const features = convertToGeoJSON(osmData, filterFeatures);

        setLoading(false);
        setError("");
        handleSubmit(features);
      })
      .catch((error) => {
        setLoading(false);
        const { name, message } = error;

        if (name) {
          console.error(error);
          setError(name === "Error" ? message : "something went wrong");
        } else {
          error.text().then((message) => setError(message));
        }
      });
  }

  return (
    <form onSubmit={submit}>
      <CoordinateInput input={handleInput} coordinates={coordinates} />
      <div className="additional-input">
        <LocationInput input={handleInput} location={location} />
        <FilterInput input={handleInput} filterChecked={filterFeatures} />
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
