import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import MyModel, { useEdit } from "./MyModel";

const EditToDo = ({ onEdit, value = "No value", show, onHide }) => {
  const [todo, setTodo] = useState(value);
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleEdit = (event) => {
    event.preventDefault();
    //const value = event.target.value;
    console.info("Editable value : " + value);
    if (todo) {
      // setTodo(todo);
      onEdit(todo);
      setIsValid(false);
      setIsTouched(false);
    } else {
      setIsTouched(true);
    }
  };

  useEffect(() => {
    setTodo(value);
  }, [value]);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setIsValid(value.length > 0);
    setIsTouched(true);
    setTodo(value);
    // onChangeValue({
    //   value,
    //   isValid
    // });
    //setTodo();
  };

  return (
    <MyModel show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header>
      <form noValidate>
        <div class="input-group mb-0">
          <input
            type="email"
            class={`form-control  + ${
              !isValid && isTouched ? "is-invalid" : ""
            } `}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={todo}
            onChange={handleOnChange}
          />
        </div>

        {!isValid && isTouched && <p style={{ color: "red" }}>Invalid TODO</p>}

        {/* <p style={{ color: "blue" }}>Is touched : {"" + isTouched}</p>
        <p style={{ color: "blue" }}>Is valid : {"" + isValid}</p> */}

        <Modal.Footer>
          <Button variant="light" onClick={onHide}>
            Close
          </Button>
          <Button onClick={handleEdit}>Edit</Button>
        </Modal.Footer>
      </form>
    </MyModel>
  );
};

export default EditToDo;
