import { useState } from "react";
import { convertToGeoJSON, getOpenStreetMapData } from "../../../api";
import { handleError, handleFeatures } from "../../../api/handlers";
import CoordinateInput from "./CoordinateInput/CoordinateInput";
import AdditionalInput from "./AdditionalInput/AdditionalInput";
import FilterInput from "./FilterInput/FilterInput";

function BoundingBoxInput({
  coordinates,
  setCoordinates,
  setLoading,
  setError,
  handleSubmit,
}) {
  const [propertiesFilters, setPropertiesFilters] = useState({ title: false });
  const [geometryFilters, setGeometryFilters] = useState({
    points: false,
    polylines: false,
    polygons: false,
  });
  const [quantity, setQuantity] = useState("");
  const [showFilters, setFiltersVisibility] = useState(false);

  function toggleFilters() {
    setFiltersVisibility(!showFilters);
  }

  function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    handleSubmit(null);

    getOpenStreetMapData(coordinates)
      .then((osm) => {
        const geoJSON = convertToGeoJSON(osm);
        const features = handleFeatures(
          geoJSON,
          geometryFilters,
          propertiesFilters,
          quantity
        );
        setLoading(false);
        setError("");
        handleSubmit(features);
      })
      .catch((error) => {
        setLoading(false);
        handleError(error, setError);
      });
  }

  return (
    <form onSubmit={submit}>
      <CoordinateInput
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <AdditionalInput
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        toggleFilters={toggleFilters}
      />
      <FilterInput
        propertiesFilters={propertiesFilters}
        geometryFilters={geometryFilters}
        quantity={quantity}
        showFilters={showFilters}
        setPropertiesFilters={setPropertiesFilters}
        setGeometryFilters={setGeometryFilters}
        setQuantity={setQuantity}
      />
      <input
        className="submit-button"
        type="submit"
        value="Show Map Features"
      />
    </form>
  );
}

export default BoundingBoxInput;
