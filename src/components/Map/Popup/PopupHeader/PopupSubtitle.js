import React from "react";
import { formatString } from "../../../../api";

function PopupSubtitle({ properties }) {
  return (
    <ul>
      {properties.map(([, value], index) => (
        <li key={index} className="subtitle">
          {formatString(value)}
        </li>
      ))}
    </ul>
  );
}

export default PopupSubtitle;
