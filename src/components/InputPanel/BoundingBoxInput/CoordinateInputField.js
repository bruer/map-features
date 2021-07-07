import InputContainer from "./common/InputContainer";

function CoordinateInputField({ title, name, coordinates, setCoordinates }) {
  return (
    <InputContainer title={title}>
      <input
        type="number"
        step="0.00001"
        name={name}
        value={coordinates[name]}
        style={
          coordinates[name] ? { background: "#f44336", color: "#fff" } : null
        }
        onChange={({ target: { name, value } }) =>
          setCoordinates({ ...coordinates, [name]: parseFloat(value) })
        }
      />
    </InputContainer>
  );
}

export default CoordinateInputField;
