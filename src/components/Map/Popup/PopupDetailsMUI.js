import React, { useState } from "react";
import { nanoid } from "nanoid";
// import { Button, Modal, ModalHeader } from "reactstrap";
import { filterProperties } from "../../../api";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

function PopupDetailsMUI({ properties }) {
  const filteredProperties = filterProperties(properties);

  const [dialogState, setDialogState] = useState(false);
  const toggleDialogState = () => {
    setDialogState(!dialogState);
    console.log(dialogState);
  };

  return (
    <>
      {filteredProperties.length ? (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDialogState}
          >
            Show Details
          </Button>
          <Dialog open={dialogState} onClose={toggleDialogState}>
            <DialogTitle>Additional details for {properties.name}</DialogTitle>
            <DialogContent>
              <ul className="details-list">
                {filteredProperties.map(([propertyName, propertyValue]) => (
                  <li key={nanoid()}>
                    <Typography>
                      <strong>{propertyName}</strong>
                      <br />
                      {propertyValue}
                    </Typography>
                  </li>
                ))}
              </ul>
            </DialogContent>
          </Dialog>

          {/* <Button color="primary" onClick={toggle}>
            Details
          </Button> */}
          {/* <Modal isOpen={modal} toggle={toggle} properties={filteredProperties}>
            <ModalHeader>hej</ModalHeader>
          </Modal> */}
        </>
      ) : null}
    </>
  );
}

export default PopupDetailsMUI;
