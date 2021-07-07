import PopupDetailsToggler from "./PopupDetailsToggler";
import PopupDetailsListItem from "./PopupDetailsListItem";

const maxNumberOfProperties = 5;

function PopupDetails({ properties, filteredProperties }) {
  return (
    <>
      {filteredProperties.length > maxNumberOfProperties ||
      properties.length > filteredProperties.length ? (
        <PopupDetailsToggler properties={filteredProperties} />
      ) : (
        <ul className="details-list">
          {filteredProperties.map(([name, value], index) => {
            return (
              <PopupDetailsListItem key={index} name={name} value={value} />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default PopupDetails;
