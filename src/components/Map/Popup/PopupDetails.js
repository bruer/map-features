import { useState } from "react";
import { filterOutProperties } from "../../../api/auxiliary";
import { PROPERTIES } from "../../../api/constants";
import PopupDetailsList from "./PopupDetailsList";

function PopupDetails({ properties }) {
  console.log(properties);
  console.log(Object.entries(properties).length);
  
  const filteredProperties = filterOutProperties(
    properties,
    PROPERTIES.STANDARD
  );
  const [listHeight, setListHeight] = useState(0);
  const [showDetails, setDetailsVisibility] = useState(false);

  const toggle = () => setDetailsVisibility(!showDetails);

  return (
    <>
      {filteredProperties.length ? (
        <>
          <button
            className="details-button"
            style={showDetails ? { borderBottom: "2px solid #f44336" } : null}
            onClick={toggle}
          >
            Show Details
          </button>
          <div
            className="details-list-container"
            style={showDetails ? { height: `${listHeight}px` } : null}
          >
            <PopupDetailsList
              filteredProperties={filteredProperties}
              showDetails={showDetails}
              setListHeight={setListHeight}
            />
          </div>
        </>
      ) : null}
    </>
  );
}

export default PopupDetails;
