import { useState } from "react";
import { employees, departments } from "../data/employees";
import "./SearchFilterTask.css";

// ============================================================
//  TASK 4: Search & Filter a List
// ============================================================
//
//  What you need to implement:
//  filteredEmployees - Derive a filtered array from `employees` by
//                      applying BOTH conditions at the same time:
//
//  Condition A (search): employee.name includes `searchQuery`
//                         (case-insensitive — convert both to lowercase)
//
//  Condition B (department): when `selectedDept` is "All", show everyone.
//                             Otherwise only show the matching department.
//
//  Hint: chain two .filter() calls, or use a single one with && logic:
//    employees.filter(emp => conditionA && conditionB)
//
//  Bonus challenges:
//  ★  Also let the user filter by minimum salary (add a number input)
//  ★★ Sort the list by name, salary, or experience with a dropdown
//  ★★★ Show a summary row: total employees shown, avg salary
// ============================================================

export default function SearchFilterTask() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  // TODO: Filter employees using both searchQuery and selectedDept
  const filteredEmployees = employees; // replace with filtered version

  return (
    <div className="search-filter-container">
      <div className="controls-row">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-btn" onClick={() => setSearchQuery("")}>
              ✕
            </button>
          )}
        </div>

        <select
          className="dept-select"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <p className="results-count">
        <strong>{filteredEmployees.length}</strong> of {employees.length} employees shown
      </p>

      <div className="employee-list">
        {filteredEmployees.length === 0 ? (
          <div className="no-results">No employees match your search.</div>
        ) : (
          filteredEmployees.map((emp) => (
            <div key={emp.id} className="employee-card">
              <div className="emp-avatar">
                {emp.name.charAt(0)}
              </div>
              <div className="emp-details">
                <span className="emp-name">{emp.name}</span>
                <span className="emp-role">{emp.role}</span>
              </div>
              <div className="emp-dept">
                <span className={`dept-badge dept-${emp.department.toLowerCase()}`}>
                  {emp.department}
                </span>
              </div>
              <div className="emp-meta">
                <span className="emp-salary">${emp.salary.toLocaleString()}</span>
                <span className="emp-exp">{emp.experience} yrs</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
