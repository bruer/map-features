import React from "react";

function ErrorMessage({ error, setError }) {
  return (
    <div className={`message error`}>
      <button onClick={() => setError("")}>X</button>
      <p>{error}</p>
    </div>
  );
}

export default ErrorMessage;
