import { useState } from "react";
import CoordinateInput from "./CoordinateInput";
import FilterInput from "./FilterInput";
import LocationInput from "./LocationInput";
import { convertToGeoJSON, getOsmData } from "../../api/";

function BoundingBoxForm({
  coordinates,
  setCoordinates,
  setLoading,
  setError,
  handleSubmit,
}) {
  const [filterFeatures, setFilter] = useState(false);

  function submit(event) {
    event.preventDefault();

    setLoading(true);
    setError("");
    handleSubmit(null);

    getOsmData(coordinates)
      .then((osmData) => {
        const features = convertToGeoJSON(osmData, filterFeatures);
        // const features = convertToGeoJSON(osmData, filterFeatures).slice(-10);
        // console.log(features);

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
      <CoordinateInput
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <div className="additional-input">
        <LocationInput
          coordinates={coordinates}
          setCoordinates={setCoordinates}
        />
        <FilterInput filterChecked={filterFeatures} setFilter={setFilter} />
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
