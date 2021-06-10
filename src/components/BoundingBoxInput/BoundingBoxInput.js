import { useState } from "react";
import { getGeoJsonFeatures, getOsmData } from "../../api";
import BoundingBoxForm from "./BoundingBoxForm";
import "./BoundingBoxInput.css";

function BoundingBoxInput({
  coordinates,
  onCoordinatesInput,
  onFeaturesChange,
  onLoading,
  onError,
}) {
  const [filterFeatures, setFilter] = useState(true);

  function handleInput({ target: { type, name, value, checked } }) {
    type === "checkbox"
      ? setFilter(checked)
      : onCoordinatesInput({ ...coordinates, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onError("");
    onFeaturesChange(null);
    onLoading(true);

    getOsmData(coordinates)
      .then((osmData) => {
        const features = getGeoJsonFeatures(osmData, filterFeatures);

        onFeaturesChange(features);
        onLoading(false);
        onError("");
      })
      .catch((error) => {
        onLoading(false);
        const { name, message } = error;

        if (name) {
          console.error(error);
          onError(name === "Error" ? message : "something went wrong");
        } else {
          error.text().then((message) => onError(message));
        }
      });
  }

  return (
    <BoundingBoxForm
      coordinates={coordinates}
      handleSubmit={handleSubmit}
      handleInput={handleInput}
      filterChecked={filterFeatures}
    />
  );
}

export default BoundingBoxInput;
