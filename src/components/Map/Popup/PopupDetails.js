import { nanoid } from "nanoid";
import {
  capitalizeString,
  convertToWikiLink,
  filterOutProperties,
} from "../../../api/auxiliary";
import { PROPERTIES } from "../../../api/constants";

function PopupDetails({ properties }) {
  const filteredProperties = filterOutProperties(
    properties,
    PROPERTIES.STANDARD
  );

  function format(name, value) {
    if (name.includes("wikipedia") || name.includes("wikidata")) {
      return;
    }
    if (value.includes("http")) {
      return (
        <a href={value} target="_blank" rel="noreferrer">
          {value}
        </a>
      );
    }
    return capitalizeString(value);
  }

  return (
    <>
      {filteredProperties.length ? (
        <ul className="details-list">
          {filteredProperties.map(([name, value]) => {
            return (
              <li key={nanoid()}>
                <a
                  href={convertToWikiLink(name, value)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {capitalizeString(name)}
                </a>
                <br />
                {typeof value === "string" ? format(name, value) : value}
              </li>
            );
          })}
        </ul>
      ) : // <details>
      //   <summary>Details</summary>
      //   <ul className="details-list">
      //     {filteredProperties.map(([name, value]) => {
      //       console.log(name);
      //       return (
      //         <li key={nanoid()}>
      //           <a
      //             href={`https://wiki.openstreetmap.org/wiki/Key:${name}`}
      //             target="_blank"
      //             rel="noreferrer"
      //           >
      //             <strong>{name}</strong>
      //           </a>
      //           <br />
      //           {value}
      //         </li>
      //       );
      //     })}
      //   </ul>
      // </details>
      null}
    </>
  );
}

export default PopupDetails;
