import { nanoid } from "nanoid";
import { filterProperties } from "../../../api";

function PopupDetails({ properties }) {
  const filteredProperties = filterProperties(properties);

  return (
    <>
      {filteredProperties.length ? (
        <details>
          <summary>Details</summary>
          <ul className="details-list">
            {filteredProperties.map(([propertyName, propertyValue]) => (
              <li key={nanoid()}>
                <strong>{propertyName}</strong>
                <br />
                {propertyValue}
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </>
  );
}

export default PopupDetails;
