import { useEffect } from "react";

const ToDoTable = ({ data, searchValue, onDelete, onEdit }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleEdit = (index) => {
    onEdit(index);
  };

  useEffect(() => {
    console.info("Search value changed: " + searchValue);
  }, [searchValue]);

  const filterTodo = (ele, i) => {
    if (searchValue.length > 0) {
      const regex = new RegExp(searchValue, "i");
      return ele.search(regex) > -1;
    } else {
      return true;
    }
  };

  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Todo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.filter(filterTodo).map((todo, ind) => {
          return (
            <tr key={todo}>
              <td>{todo}</td>
              <td>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    class="btn btn-sm btn-success"
                    onClick={() => handleEdit(ind)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-warning"
                    onClick={() => handleDelete(ind)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ToDoTable;
