import { useState } from "react";
import TodoTask from "./tasks/TodoTask";
import PaginationTask from "./tasks/PaginationTask";
import DataDisplayTask from "./tasks/DataDisplayTask";
import SearchFilterTask from "./tasks/SearchFilterTask";
import FormTask from "./tasks/FormTask";
import "./App.css";

const TABS = [
  {
    id: "todo",
    label: "✅ Todo App",
    difficulty: "Beginner",
    difficultyColor: "green",
    title: "Build a Todo App",
    description:
      "Classic beginner project. You have a list of todos and an input. Your job is to wire up the three handler functions: add a new todo, delete one by id, and toggle its completed state.",
    concepts: ["useState", "Array methods (.filter, .map)", "Event handling", "Controlled inputs"],
    file: "src/tasks/TodoTask.jsx",
    component: <TodoTask />,
  },
  {
    id: "pagination",
    label: "📄 Pagination",
    difficulty: "Beginner",
    difficultyColor: "green",
    title: "Implement Pagination",
    description:
      "You have 25 users and need to show 5 at a time. Calculate total pages, slice the correct chunk of the array for the current page, and hook up the Previous/Next buttons.",
    concepts: ["useState", "Math.ceil", "Array.slice", "Conditional disable on buttons"],
    file: "src/tasks/PaginationTask.jsx",
    component: <PaginationTask />,
  },
  {
    id: "data",
    label: "🛍️ Data Display",
    difficulty: "Intermediate",
    difficultyColor: "orange",
    title: "Display Product Cards",
    description:
      "Mock product data is ready. Wire up the category filter and fill in the ProductCard JSX to render each product's name, category, price, rating, stock, and description.",
    concepts: ["Props", "Array.filter", "Conditional className", "Component composition"],
    file: "src/tasks/DataDisplayTask.jsx",
    component: <DataDisplayTask />,
  },
  {
    id: "search",
    label: "🔍 Search & Filter",
    difficulty: "Intermediate",
    difficultyColor: "orange",
    title: "Search & Filter a List",
    description:
      "20 employees are loaded. Implement the filtering logic that narrows the list by both a text search (on name) and a department dropdown — both filters must work at the same time.",
    concepts: ["useState", "Controlled inputs (text + select)", "Chained .filter()", "Derived state"],
    file: "src/tasks/SearchFilterTask.jsx",
    component: <SearchFilterTask />,
  },
  {
    id: "form",
    label: "📝 Form Validation",
    difficulty: "Intermediate",
    difficultyColor: "orange",
    title: "Registration Form with Validation",
    description:
      "A registration form is already built. Your job is to implement the validate() function that checks every field (name, email, password, confirm, age) and returns an errors object.",
    concepts: ["Form events (onSubmit, onChange)", "Object manipulation", "String methods", "Conditional rendering"],
    file: "src/tasks/FormTask.jsx",
    component: <FormTask />,
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("todo");
  const tab = TABS.find((t) => t.id === activeTab);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="brand-icon">⚛️</span>
            <div>
              <h1 className="brand-title">React Practice Tasks</h1>
              <p className="brand-subtitle">5 hands-on challenges to level up your React skills</p>
            </div>
          </div>
          <div className="header-meta">
            <span className="meta-pill">5 Tasks</span>
            <span className="meta-pill">Beginner → Intermediate</span>
          </div>
        </div>
      </header>

      <nav className="tab-nav">
        <div className="tab-nav-inner">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        <div className="task-header">
          <div className="task-title-row">
            <h2 className="task-title">{tab.title}</h2>
            <span className={`difficulty-badge difficulty-${tab.difficultyColor}`}>
              {tab.difficulty}
            </span>
          </div>
          <p className="task-description">{tab.description}</p>

          <div className="task-meta-row">
            <div className="concepts-section">
              <span className="concepts-label">Key concepts:</span>
              <div className="concept-tags">
                {tab.concepts.map((c) => (
                  <span key={c} className="concept-tag">{c}</span>
                ))}
              </div>
            </div>
            <div className="file-path">
              <span className="file-icon">📁</span>
              <code>{tab.file}</code>
            </div>
          </div>
        </div>

        <div className="task-workspace">
          {tab.component}
        </div>
      </main>
    </div>
  );
}
