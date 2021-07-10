import { useEffect, useRef, useState } from "react";
import { convertToGeoJSON, getOpenStreetMapData } from "../../../api";
import { handleError, handleFeatures } from "../../../api/handlers";
import LocationInput from "./LocationInput";
import GeometryFilter from "./filters/GeometryFilter";
import PropertiesFilter from "./filters/PropertiesFilter";
import QuantityFilter from "./filters/QuantityFilter";
import CoordinateInput from "./CoordinateInput";
import { useVisibilityToggle } from "../../../hooks";

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

  const filterContainerRef = useRef(null);
  const [showFilterContainer, setFilterContainerVisibility] = useState(false);
  const containerStyle = useVisibilityToggle(
    filterContainerRef,
    showFilterContainer
  );

  const toggleFilterContainer = () =>
    setFilterContainerVisibility(!showFilterContainer);

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
      <div className="coordinate-input">
        <CoordinateInput
          coordinates={coordinates}
          setCoordinates={setCoordinates}
        />
      </div>
      <div className="additional-input">
        <LocationInput
          coordinates={coordinates}
          setCoordinates={setCoordinates}
        />
        <input
          type="button"
          value="filter"
          onClick={(event) => {
            toggleFilterContainer();
          }}
        />
      </div>
      <div className="filter-input-container" style={containerStyle}>
        <div className="filter-input" ref={filterContainerRef}>
          <GeometryFilter
            filters={geometryFilters}
            setFilters={setGeometryFilters}
          />
          <PropertiesFilter
            filters={propertiesFilters}
            setFilters={setPropertiesFilters}
          />
          <QuantityFilter quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>
      <input
        className="submit-button"
        type="submit"
        value="Show Map Features"
      />
    </form>
  );
}

export default BoundingBoxInput;
