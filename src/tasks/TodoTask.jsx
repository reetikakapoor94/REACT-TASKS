import { useState } from "react";
import "./TodoTask.css";

// ============================================================
//  TASK 1: Fully working TODO App + localStorage
// ============================================================

export default function TodoTask() {
  // localStorage se todos load karo
  // Agar kuch saved nahi hai to empty array se start hoga
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState("");

  // ============================================================
  // Save todos to localStorage
  // ============================================================
  function updateTodos(newTodos) {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  // ============================================================
  // Add Todo
  // ============================================================
  function handleAdd() {
    // Empty ya spaces-only input ignore karo
    if (!inputValue.trim()) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };

    updateTodos([...todos, newTodo]);

    // Input clear
    setInputValue("");
  }

  // ============================================================
  // Delete Todo
  // ============================================================
  function handleDelete(id) {
    const updatedTodos = todos.filter(
      (todo) => todo.id !== id
    );

    updateTodos(updatedTodos);
  }

  // ============================================================
  // Toggle Todo
  // ============================================================
  function handleToggle(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    updateTodos(updatedTodos);
  }

  // ============================================================
  // Completed count
  // ============================================================
  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <div className="todo-container">

      <div className="todo-stats">
        <span>{todos.length} total</span>
        <span>{completedCount} completed</span>
        <span>{todos.length - completedCount} remaining</span>
      </div>

      <div className="todo-input-row">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />

        <button
          className="btn btn-primary"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="todo-list">

        {todos.length === 0 && (
          <li className="todo-empty">
            No todos yet. Add one above!
          </li>
        )}

        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${
              todo.completed ? "completed" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
              className="todo-checkbox"
            />

            <span className="todo-text">
              {todo.text}
            </span>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}

      </ul>
    </div>
  );
}
