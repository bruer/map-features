import React, { useEffect, useState } from "react";
import { filterProperties } from "../../../../api/filter";
import PopupSubtitle from "./PopupSubtitle";
import WebsiteButton from "../common/WebsiteButton";

function PopupHeader({ properties, filteredProperties }) {
  const { name, website } = filteredProperties;
  const [headerStyle, setStyle] = useState(null);

  useEffect(() => {
    if (Object.entries(filteredProperties).length < properties.length) {
      setStyle((styles) => {
        return { ...styles, marginBottom: "0.75rem" };
      });
    }
  }, [properties, filteredProperties]);

  useEffect(() => {
    if (website) {
      setStyle((styles) => {
        return {
          ...styles,
          justifyContent: "space-between",
          textAlign: "start",
        };
      });
    }
  }, [website]);

  const subtitleProperties = Object.entries(
    filterProperties(filteredProperties, ["name", "website"], true)
  );

  return (
    <header style={headerStyle}>
      <div>
        {name && <h1 className="title">{name}</h1>}
        {subtitleProperties.length > 0 && (
          <PopupSubtitle properties={subtitleProperties} />
        )}
      </div>
      {website && (
        <WebsiteButton type="homepage" url={website}>
          Website
        </WebsiteButton>
      )}
    </header>
  );
}

export default PopupHeader;
