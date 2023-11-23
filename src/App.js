import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddtodo = () => {
    const text = inputRef.current.value;
    const newItem = { complated: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="TodoWrapper">
        <h1>To Do List</h1>
        <div className="container">
          <ul>
            {todos.map(({ text, completed }, index) => {
              return (
                <div className="item">
                  <li
                    className={completed ? "done" : ""}
                    key={index}
                    onClick={() => handleItemDone(index)}
                  >
                    {text}
                  </li>
                  <span onClick={() => handleDeleteItem(index)} className="trash">❌</span>
                </div>
              );
            })}
          </ul>
          <input
            className="todo-input"
            ref={inputRef}
            placeholder="Enter item..."
          />
          <button className="todo-btn" onClick={handleAddtodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
