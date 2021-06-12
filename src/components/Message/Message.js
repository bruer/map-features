import React, { useEffect } from "react";
import { useRef } from "react";
import "./Message.css";

function Message({ isLoading, error, setError }) {
  const errorMessage = useRef(null);

  useEffect(() => {
    if (error) {
      errorMessage.current.focus();
    }
  }, [error]);

  function close({ target: { className } }) {
    if (className === "message-container" || className === "close-button") {
      setError("");
    }
  }

  function closeOnKeyPress({ code }) {
    if (code === "Escape") {
      setError("");
    }
  }

  return (
    <div
      className="message-container"
      style={error || isLoading ? { opacity: 1, zIndex: 1 } : null}
      onClick={close}
    >
      {error && (
        <div
          className="message error"
          tabIndex="0"
          ref={errorMessage}
          onKeyDown={closeOnKeyPress}
        >
          <button className="close-button" onClick={close}>
            &times;
          </button>
          <p>{error}</p>
        </div>
      )}
      {isLoading && <div className="message loading">Loading Map Features</div>}
    </div>
  );
}

export default Message;
