import { formatString, convertToWikiLink } from "../../../../api";
import WebsiteButton from "../common/WebsiteButton";

function format(value) {
  if (typeof value !== "string") {
    return value;
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

function PopupDetailsListItem({ name, value }) {
  return (
    <li>
      {name.includes("wiki") ? (
        <WebsiteButton type="wiki" url={convertToWikiLink(name, value)}>
          {formatString(name)}
        </WebsiteButton>
      ) : (
        <a
          className="osm-wiki-link"
          href={`https://wiki.openstreetmap.org/wiki/Key:${name}`}
          target="_blank"
          rel="noreferrer"
        >
          <strong>{formatString(name)}</strong>
        </a>
      )}
      {!name.includes("wiki") && format(value)}
    </li>
  );
}

export default PopupDetailsListItem;
