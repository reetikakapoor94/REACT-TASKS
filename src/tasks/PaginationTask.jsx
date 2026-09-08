import { useState } from "react";
import { users, ITEMS_PER_PAGE } from "../data/users";
import "./PaginationTask.css";

// ============================================================
//  TASK 2: Implement Pagination
// ============================================================

export default function PaginationTask() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  // Calculate start index for current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  // Get users for current page
  const currentUsers = users.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Go to previous page
  function handlePrev() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  // Go to next page
  function handleNext() {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, totalPages)
    );
  }

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        Showing <strong>{currentUsers.length}</strong> of{" "}
        <strong>{users.length}</strong> users
        &nbsp;·&nbsp; Page <strong>{currentPage}</strong> of{" "}
        <strong>{totalPages}</strong>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.length === 0 ? (
            <tr>
              <td colSpan={5} className="table-empty">
                No users to show
              </td>
            </tr>
          ) : (
            currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`role-badge role-${user.role.toLowerCase()}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td>{user.city}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination-controls">
        <button
          className="btn btn-secondary"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        <span className="page-indicator">
          {currentPage} / {totalPages}
        </span>

        <button
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
