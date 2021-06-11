import { useState } from "react";
import { getGeoJsonFeatures, getOsmData, selectLocation } from "../../api";
import BoundingBoxForm from "./BoundingBoxForm";
import "./BoundingBoxInput.css";

function BoundingBoxInput({
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
      setLocation(value)
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
        const features = getGeoJsonFeatures(osmData, filterFeatures);

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
    <BoundingBoxForm
      input={handleInput}
      submit={submit}
      coordinates={coordinates}
      filterChecked={filterFeatures}
      location={location}
    />
  );
}

export default BoundingBoxInput;
