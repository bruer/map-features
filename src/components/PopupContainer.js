import PopupHeader from "./PopupHeader";
import PopupContact from "./PopupContact";
import PopupDetails from "./PopupDetails";
import "./PopupContent.css";

function PopupContent({ feature: { properties } }) {
  return (
    <>
      <PopupHeader properties={properties} />
      <PopupContact properties={properties} />
      <PopupDetails properties={properties} />
    </>
  );
}

export default PopupContent;
