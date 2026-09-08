import { useState } from "react";
import { employees, departments } from "../data/employees";
import "./SearchFilterTask.css";

// ============================================================
// TASK 4: Search & Filter a List
// ============================================================

export default function SearchFilterTask() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  // Filter employees using BOTH search and department conditions
  const filteredEmployees = employees.filter((emp) => {
    // Condition A: Search by employee name
    const matchesSearch = emp.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Condition B: Filter by department
    const matchesDepartment =
      selectedDept === "All" || emp.department === selectedDept;

    // Both conditions must be true
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="search-filter-container">
      {/* Controls */}
      <div className="controls-row">
        {/* Search Box */}
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
            <button
              className="clear-btn"
              onClick={() => setSearchQuery("")}
              type="button"
            >
              ✕
            </button>
          )}
        </div>

        {/* Department Filter */}
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

      {/* Results Count */}
      <p className="results-count">
        <strong>{filteredEmployees.length}</strong> of{" "}
        {employees.length} employees shown
      </p>

      {/* Employee List */}
      <div className="employee-list">
        {filteredEmployees.length === 0 ? (
          <div className="no-results">
            No employees match your search.
          </div>
        ) : (
          filteredEmployees.map((emp) => (
            <div key={emp.id} className="employee-card">
              {/* Avatar */}
              <div className="emp-avatar">
                {emp.name.charAt(0).toUpperCase()}
              </div>

              {/* Employee Details */}
              <div className="emp-details">
                <span className="emp-name">{emp.name}</span>
                <span className="emp-role">{emp.role}</span>
              </div>

              {/* Department */}
              <div className="emp-dept">
                <span
                  className={`dept-badge dept-${emp.department.toLowerCase()}`}
                >
                  {emp.department}
                </span>
              </div>

              {/* Salary & Experience */}
              <div className="emp-meta">
                <span className="emp-salary">
                  ${emp.salary.toLocaleString()}
                </span>

                <span className="emp-exp">
                  {emp.experience} yrs
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}