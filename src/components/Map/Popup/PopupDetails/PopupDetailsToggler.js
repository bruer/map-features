import { useState, useEffect, useRef } from "react";
import { useVisibilityToggle } from "../../../../hooks";
import PopupDetailsListItem from "./PopupDetailsListItem";

function PopupDetailsToggler({ properties }) {
  const detailsRef = useRef(null);
  const [showDetails, setDetailsVisibility] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});

  const containerStyle = useVisibilityToggle(detailsRef, showDetails);

  useEffect(() => {
    setButtonStyle(
      showDetails
        ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
        : {}
    );
  }, [showDetails]);

  const toggleDetails = () => setDetailsVisibility(!showDetails);

  return (
    <>
      <button
        className="details-button"
        style={buttonStyle}
        onClick={toggleDetails}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      <div className="details-list-container" style={containerStyle}>
        <ul className="details-list" ref={detailsRef}>
          {properties.map(([name, value], index) => {
            return (
              <PopupDetailsListItem key={index} name={name} value={value} />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default PopupDetailsToggler;
