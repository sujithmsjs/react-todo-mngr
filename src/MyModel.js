import { createContext, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditToDo from "./EditToDo";

const MyModel = (props) => {
  const handleOnChange = (value) => {
    console.info("Value ", value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header> */}

      <Modal.Body p={3}>{props.children}</Modal.Body>

      {/* <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Close
        </Button>
        <Button onClick={props.onHide}>Edit</Button>
      </Modal.Footer> */}
    </Modal>
  );
};
export default MyModel;
