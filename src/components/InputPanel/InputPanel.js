import { useState } from "react";
import BoundingBoxInput from "./BoundingBoxInput/BoundingBoxInput";

function InputPanel({
  coordinates,
  setCoordinates,
  setLoading,
  setError,
  handleSubmit,
}) {
  const [hideInput, setInputVisibility] = useState(false);
  const toggle = () => setInputVisibility(!hideInput);

  return (
    <div
      className="input-panel"
      style={{ transform: `${hideInput ? "translateY(-100%)" : ""}` }}
    >
      <BoundingBoxInput
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

export default InputPanel;
