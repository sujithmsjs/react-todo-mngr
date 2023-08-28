import { useState } from "react";
import AddToDo from "./AddToDo";
import EditToDo from "./EditToDo";
import MyModel from "./MyModel";
import SearchBar from "./SearchBar";
import ToDoTable from "./ToDoTable";

const ToDoManager = () => {
  const [data, setData] = useState(["Learn React", "Clear backlogs"]);
  // Show Edit dialog -1 is hide and all the other values made visible
  const [showEditById, setShowEditById] = useState(-1);
  const [searchValue, setSearchValue] = useState("");

  const handleDelete = (index) => {
    console.info("Delete ", index);
    setData((prevData) => {
      // Delete the index from the array
      return prevData.filter((e, i) => i !== index);
    });
  };

  const handleShowEdit = (index) => {
    console.info("Edit ", index);
    console.info("Edit(data) ", data[index]);
    setShowEditById(index);
  };

  const handleEditValue = (value) => {
    console.info("handleEditValue:" + value);
    setData((prevData) =>
      prevData.map((e, i) => (i === showEditById ? value : e))
    );

    setShowEditById(-1);
  };

  const handleAdd = (todo) => {
    setData((prevData) => [todo, ...data]);
  };

  const handleSearch = (searchValue) => {
    console.info("Todo Manager :", searchValue);
    setSearchValue(searchValue);
  };

  return (
    <>
      {/* <MyModel show={showEditById > 0} onHide={() => setShowEditById(0)}>
        <h1>Demo title</h1>
        <p>This is the paragraph</p>
      </MyModel> */}

      <EditToDo
        onEdit={handleEditValue}
        value={data[showEditById]}
        show={showEditById > -1}
        onHide={() => setShowEditById(-1)}
      />
      <div className="my-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="row g-4 my-4">
        <div className="col-md-4">
          <h4>Add new</h4>
          <AddToDo onAdd={handleAdd} />
        </div>
        <div className="col-md-8">
          <ToDoTable
            searchValue={searchValue}
            data={data}
            onDelete={handleDelete}
            onEdit={handleShowEdit}
          />
        </div>
      </div>
    </>
  );
};

export default ToDoManager;
