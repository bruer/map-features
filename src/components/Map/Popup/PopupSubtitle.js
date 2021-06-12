import React from "react";

function PopupSubtitle({
  properties: {
    amenity,
    tourism,
    shop,
    railway,
    station,
    leisure,
    highway,
    office,
    place,
    historic,
    "addr:housename": housename,
  },
}) {

  return (
    <div>
      {housename && (
        <>
          <small>{housename}</small>
          <br />
        </>
      )}
      {amenity && (
        <>
          <small>{amenity}</small>
          <br />
        </>
      )}
      {tourism && (
        <>
          <small>{tourism}</small>
          <br />
        </>
      )}
      {shop && (
        <>
          <small>{shop}</small>
          <br />
        </>
      )}
      {station && (
        <>
          <small>{station}</small>
          <br />
        </>
      )}
      {railway && (
        <>
          <small>{railway}</small>
          <br />
        </>
      )}
      {leisure && (
        <>
          <small>{leisure}</small>
          <br />
        </>
      )}
      {highway && (
        <>
          <small>{highway}</small>
          <br />
        </>
      )}
      {office && (
        <>
          <small>{office}</small>
          <br />
        </>
      )}
      {place && (
        <>
          <small>{place}</small>
          <br />
        </>
      )}
      {historic && (
        <>
          <small>{historic}</small>
          <br />
        </>
      )}
    </div>
  );
}

export default PopupSubtitle;
