import { useState } from "react";
import { users, ITEMS_PER_PAGE } from "../data/users";
import "./PaginationTask.css";

// ============================================================
//  TASK 2: Implement Pagination
// ============================================================
//
//  What you need to implement:
//  1. totalPages   - Calculate the total number of pages
//                    Hint: Math.ceil(users.length / ITEMS_PER_PAGE)
//
//  2. currentUsers - Slice the `users` array to only include
//                    the items for the current page
//                    Hint: figure out the start index using currentPage
//                    and ITEMS_PER_PAGE, then use .slice(start, end)
//
//  3. handlePrev() - Go to the previous page (don't go below 1)
//
//  4. handleNext() - Go to the next page (don't exceed totalPages)
//
//  Hints:
//  - Page numbers start at 1 (not 0)
//  - Start index for a page: (currentPage - 1) * ITEMS_PER_PAGE
//  - ITEMS_PER_PAGE is imported from data/users.js (it's 5)
//
//  Bonus challenges:
//  ★  Show numbered page buttons (1, 2, 3 ...) instead of just Prev/Next
//  ★★ Add a "Jump to page" input
//  ★★★ Add a dropdown to change how many items per page are shown
// ============================================================

export default function PaginationTask() {
  const [currentPage, setCurrentPage] = useState(1);

  // TODO: Calculate totalPages
  const totalPages = 0; // replace 0 with the correct formula

  // TODO: Slice the users array to only the items for the current page
  const currentUsers = []; // replace [] with the correct slice

  function handlePrev() {
    // TODO: decrease currentPage by 1, but never go below 1
  }

  function handleNext() {
    // TODO: increase currentPage by 1, but never exceed totalPages
  }

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        Showing <strong>{currentUsers.length}</strong> of <strong>{users.length}</strong> users
        &nbsp;·&nbsp; Page <strong>{currentPage}</strong> of <strong>{totalPages || "?"}</strong>
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
                No users to show — implement currentUsers above!
              </td>
            </tr>
          ) : (
            currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge role-${user.role.toLowerCase()}`}>
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
          {currentPage} / {totalPages || "?"}
        </span>

        <button
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
