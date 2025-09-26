import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Your task(s)", done: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">ToDo List</h2>

      <ul className="list-group mb-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.done ? "list-group-item-success" : ""
            }`}
            onClick={() => toggleTodo(todo.id)}
            style={{ cursor: "pointer" }}
          >
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      <form className="d-flex gap-2" onSubmit={addTodo}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
