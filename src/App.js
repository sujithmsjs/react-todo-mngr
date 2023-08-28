import MyModal from "./MyModel";
import "./styles.css";
import ToDoManager from "./ToDoManager";

export default function App() {
  return (
    <div className="App">
      <ToDoManager />
      <MyModal />
    </div>
  );
}
