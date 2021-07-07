import CoordinateInputField from "./CoordinateInputField";

function CoordinateInput({ coordinates, setCoordinates }) {
  return (
    <>
      <CoordinateInputField
        title="Minimum Longitude"
        name="minLng"
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <CoordinateInputField
        title="Minimum Latitude"
        name="minLat"
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <CoordinateInputField
        title="Maximum Longitude"
        name="maxLng"
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <CoordinateInputField
        title="Maximum Latitude"
        name="maxLat"
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
    </>
  );
}

export default CoordinateInput;
