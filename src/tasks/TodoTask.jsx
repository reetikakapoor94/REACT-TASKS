import { useState } from "react";
import { initialTodos } from "../data/todos";
import "./TodoTask.css";

// ============================================================
//  TASK 1: Build a fully working TODO App
// ============================================================
//
//  What you need to implement:
//  1. handleAdd()    - Add a new todo from `inputValue` to the list
//                      (ignore empty input, give each todo a unique id)
//  2. handleDelete() - Remove a todo by its id
//  3. handleToggle() - Flip a todo's `completed` flag (true ↔ false)
//
//  Hints:
//  - Use the spread operator to add to an array: [...todos, newItem]
//  - Use .filter() to remove: todos.filter(t => t.id !== id)
//  - Use .map() to update one item without changing others
//  - A simple unique id: Date.now()
//
//  Bonus challenges (after the basics work):
//  ★  Add a "Clear completed" button that removes all finished todos
//  ★★ Add a filter bar: All / Active / Completed
//  ★★★ Persist todos in localStorage so they survive a page refresh
// ============================================================

export default function TodoTask() {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    // TODO: implement this function
    // 1. If inputValue is empty (or only spaces), do nothing
    // 2. Create a new todo object: { id: Date.now(), text: inputValue, completed: false }
    // 3. Add it to the todos array using setTodos
    // 4. Reset inputValue to ""
  }

  function handleDelete(id) {
    // TODO: implement this function
    // Remove the todo whose id matches the given id
    // Hint: use setTodos and .filter()
  }

  function handleToggle(id) {
    // TODO: implement this function
    // Flip the `completed` boolean of the todo with the matching id
    // Hint: use setTodos and .map() — only change the item whose id matches
  }

  const completedCount = todos.filter((t) => t.completed).length;

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
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 && (
          <li className="todo-empty">No todos yet. Add one above!</li>
        )}
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
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
