import { useState } from "react";
import BoundingBoxForm from "./BoundingBoxForm";

function BoundingBoxInput({
  coordinates,
  setCoordinates,
  setLoading,
  setError,
  handleSubmit,
}) {
  const [hideInput, setInputVisibility] = useState(true);
  const toggle = () => setInputVisibility(!hideInput);

  return (
    <div
      className="input-container"
      style={{ transform: `${hideInput ? "translateY(-100%)" : ""}` }}
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
        onClick={toggle}
        style={{ transform: `${hideInput ? "rotate(180deg)" : ""}` }}
      >
        &#x022CF;
      </button>
    </div>
  );
}

export default BoundingBoxInput;
