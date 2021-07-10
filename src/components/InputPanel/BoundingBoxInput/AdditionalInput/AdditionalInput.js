import LocationInput from "./LocationInput";

function AdditionalInput({ coordinates, setCoordinates, toggleFilters }) {
  return (
    <div className="additional-input">
      <LocationInput
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <input type="button" value="filter" onClick={toggleFilters} />
    </div>
  );
}

export default AdditionalInput;
