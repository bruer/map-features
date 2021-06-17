import React from "react";

function WebsiteButton({ children, type, url }) {
  return (
    <a
      className={`website-button ${type}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default WebsiteButton;
