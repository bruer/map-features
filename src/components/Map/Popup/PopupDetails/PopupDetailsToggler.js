import { useState, useEffect, useRef } from "react";
import PopupDetailsListItem from "./PopupDetailsListItem";

function PopupDetailsToggler({ properties }) {
  const listRef = useRef(null);
  const [showDetails, setDetailsVisibility] = useState(false);
  
  const [buttonStyle, setButtonStyle] = useState(null);
  const [containerStyle, setContainerStyle] = useState(null);

  useEffect(() => {
    const { current: listElement } = listRef;

    setContainerStyle(
      showDetails
        ? { height: `${listElement.offsetHeight}px`, opacity: 1 }
        : null
    );

    setButtonStyle(
      showDetails
        ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
        : null
    );
  }, [showDetails]);

  const toggle = () => setDetailsVisibility(!showDetails);

  return (
    <>
      <button className="details-button" style={buttonStyle} onClick={toggle}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      <div className="details-list-container" style={containerStyle}>
        <ul className="details-list" ref={listRef}>
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
