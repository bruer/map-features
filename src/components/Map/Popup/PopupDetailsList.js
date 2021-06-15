import { useEffect, useRef } from "react";
import { formatString, convertToWikiLink } from "../../../api/auxiliary";

function PopupDetailsList({ filteredProperties, showDetails, setListHeight }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (showDetails) {
      const { current: listElement } = listRef;
      setListHeight(listElement.offsetHeight);
    }
  }, [showDetails, setListHeight]);

  function format(name, value) {
    if (typeof value !== "string") {
      return value;
    }
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
    return formatString(value);
  }

  return (
    <ul className="details-list" ref={listRef}>
      {filteredProperties.map(([name, value], index) => {
        return (
          <li key={index}>
            <a
              href={convertToWikiLink(name, value)}
              target="_blank"
              rel="noreferrer"
            >
              <strong>{formatString(name)}</strong>
            </a>
            <br />
            {format(name, value)}
          </li>
        );
      })}
    </ul>
  );
}

export default PopupDetailsList;
