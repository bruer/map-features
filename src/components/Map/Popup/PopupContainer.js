import { filterProperties } from "../../../api/auxiliary";
import { PROPERTIES } from "../../../api/constants";
import PopupHeader from "./PopupHeader/PopupHeader";
import PopupContact from "./PopupContact/PopupContact";
import PopupDetails from "./PopupDetails/PopupDetails";

function PopupContainer({ properties }) {
  const headerProperties = filterProperties(properties, PROPERTIES.HEADER);
  const contactProperties = filterProperties(properties, PROPERTIES.CONTACT);
  const detailsProperties = filterProperties(
    properties,
    PROPERTIES.HEADER.concat(PROPERTIES.CONTACT),
    true
  );

  return (
    <>
      {Object.entries(headerProperties).length > 0 && (
        <PopupHeader
          properties={Object.entries(properties)}
          filteredProperties={headerProperties}
        />
      )}
      {Object.entries(contactProperties).length > 0 && (
        <PopupContact properties={contactProperties} />
      )}
      {Object.entries(detailsProperties).length > 0 && (
        <PopupDetails
          properties={Object.entries(properties)}
          filteredProperties={Object.entries(detailsProperties)}
        />
      )}
    </>
  );
}

export default PopupContainer;
