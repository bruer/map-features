import { useEffect, useState } from "react";
import { selectLocation } from "../../../../api";
import { LOCATIONS } from "../../../../utils";
import InputContainer from "../common/InputContainer";

function LocationInput({ coordinates, setCoordinates }) {
  const [titleStyle, setTitleStyle] = useState({ marginRight: "0.5rem" });
  const [containerStyle, setContainerStyle] = useState({
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "2rem",
    border: "2px solid",
    padding: "0.25rem 0.25rem 0.25rem 0.75rem",
    cursor: "pointer",
  });
  const [location, setLocation] = useState("unset");

  useEffect(() => {
    if (location === "unset") {
      setContainerStyle((styles) => {
        return { ...styles, background: "#fff" };
      });
      setTitleStyle((styles) => {
        return { ...styles, color: "#000" };
      });
    }
    if (location !== "unset") {
      setContainerStyle((styles) => {
        return { ...styles, background: "#000" };
      });
      setTitleStyle((styles) => {
        return { ...styles, color: "#fff" };
      });
    }
  }, [location]);

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
    <InputContainer
      title="Choose a Location"
      containerStyle={containerStyle}
      titleStyle={titleStyle}
    >
      <select onChange={handleInput} value={location}>
        <option value="unset">-</option>
        <option value="huvudsta">Huvudsta</option>
        <option value="loggolvberg">Loggolvberg</option>
        <option value="london">London</option>
        <option value="stockholm">Stockholm</option>
      </select>
    </InputContainer>
  );
}

export default LocationInput;
