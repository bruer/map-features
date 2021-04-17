import { useState } from "react";
import { getGeoJsonFeatures, getOsmData } from "../../api";
import BoundingBoxForm from "./BoundingBoxForm";
import "./BoundingBoxInput.css";

function BoundingBoxInput({
  boundingBox,
  onCoordinatesInput,
  onFeaturesChange,
  onLoading,
  onError,
}) {
  const [filterFeatures, setFilter] = useState(true);

  function handleInput({ target: { type, name, value, checked } }) {
    type === "checkbox"
      ? setFilter(checked)
      : onCoordinatesInput({ ...boundingBox, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onFeaturesChange(null);
    onLoading(true);
    onError("");

    getOsmData(boundingBox)
      .then((osmData) => {
        const features = getGeoJsonFeatures(osmData, filterFeatures);

        onFeaturesChange(features);
        onLoading(false);
        onError("");
      })
      .catch((error) => {
        const { name, message } = error;

        if (name) {
          console.error(error);
          onError(name === "Error" ? message : "something went wrong");
        } else {
          error.text().then((message) => onError(message));
        }
        onLoading(false);
      });
  }

  return (
    <BoundingBoxForm
      boundingBox={boundingBox}
      handleSubmit={handleSubmit}
      handleInput={handleInput}
    />
  );
}

export default BoundingBoxInput;
