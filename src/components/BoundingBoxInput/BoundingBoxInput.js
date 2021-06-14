import { useState } from "react";
import BoundingBoxForm from "./BoundingBoxForm";

function BoundingBoxInput({
  coordinates,
  setCoordinates,
  setLoading,
  setError,
  handleSubmit,
}) {
  const [hideInput, setToogle] = useState(false);
  const toggleInput = () => setToogle(!hideInput);

  return (
    <div
      className="input-container"
      style={
        hideInput ? { transform: "translateY(-100%)" } : { transform: "none" }
      }
    >
      <BoundingBoxForm
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        setLoading={setLoading}
        setError={setError}
        handleSubmit={handleSubmit}
      />
      <button
        className="toggle-button"
        onClick={toggleInput}
        style={{ transform: `${hideInput ? "rotate(180deg)" : ""}` }}
      >
        &#x022CF;
      </button>
    </div>
  );
}

export default BoundingBoxInput;
