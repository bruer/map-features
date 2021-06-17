import React from "react";
import { formatString } from "../../../../api/auxiliary";

function PopupSubtitle({ properties }) {
  return (
    <ul>
      {properties.map(([, value], index) => (
        <li key={index} className="subtitle">
          {/* <strong>{formatString(value)}</strong> */}
          {formatString(value)}
        </li>
      ))}
    </ul>
  );
}

export default PopupSubtitle;
