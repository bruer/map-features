import { useEffect, useState } from "react";
import { selectLocation } from "../../api/auxiliary";
import { LOCATIONS } from "../../api/constants";

function LocationInput({ coordinates, setCoordinates }) {
  const [location, setLocation] = useState("unset");

  useEffect(() => {
    const selectedLocation = LOCATIONS[location.toUpperCase()];
    if (
      selectedLocation.minLng !== coordinates.minLng ||
      selectedLocation.minLat !== coordinates.minLat ||
      selectedLocation.maxLng !== coordinates.maxLng ||
      selectedLocation.maxLat !== coordinates.maxLat
    ) {
      setLocation("unset");
    }
  }, [coordinates, location]);

  function handleInput({ target: { value } }) {
    setLocation(value);
    setCoordinates(selectLocation(value));
  }

  return (
    <label className={`location-input ${location !== "unset" ? "fill" : ""}`}>
      Choose a Location
      <select onChange={handleInput} value={location}>
        <option value="unset">-</option>
        <option value="huvudsta">Huvudsta</option>
        <option value="loggolvberg">Loggolvberg</option>
        <option value="london">London</option>
        <option value="stockholm">Stockholm</option>
      </select>
    </label>
  );
}

export default LocationInput;
