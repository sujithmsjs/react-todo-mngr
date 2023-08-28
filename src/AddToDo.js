import { useState } from "react";

const AddToDo = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleAdd = (event) => {
    event.preventDefault();
    const value = event.target.value;
    if (isValid) {
      onAdd(todo);
      setTodo("");
      setIsValid(false);
      setIsTouched(false);
    } else {
      setIsTouched(true);
    }
  };

  const handleOnChange = (event) => {
    const value = event.target.value;
    setIsValid(value.length > 0);
    setIsTouched(true);
    setTodo(value);
    //setTodo();
  };

  return (
    <form noValidate>
      <div class="input-group mb-0">
        <input
          type="email"
          class={`form-control  + ${
            !isValid && isTouched ? "is-invalid" : ""
          } `}
          id="exampleFormControlInput1"
          value={todo}
          onChange={handleOnChange}
        />

        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      {!isValid && isTouched && <p style={{ color: "red" }}>Invalid TODO</p>}

      {/* <p style={{ color: "blue" }}>Is touched : {"" + isTouched}</p>
      <p style={{ color: "blue" }}>Is valid : {"" + isValid}</p> */}
    </form>
  );
};

export default AddToDo;
