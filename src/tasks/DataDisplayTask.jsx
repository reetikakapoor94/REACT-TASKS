import { useState } from "react";
import { products, categories } from "../data/products";
import "./DataDisplayTask.css";

// ============================================================
//  TASK 3: Display Data as Product Cards
// ============================================================
//
//  What you need to implement:
//  1. filteredProducts - Filter the `products` array based on
//                        `selectedCategory`. When "All" is selected,
//                        show every product. Otherwise only show
//                        products whose category matches.
//
//  2. Inside ProductCard, fill in the JSX to display:
//     - product.name
//     - product.category
//     - product.price  (format to 2 decimal places: $XX.XX)
//     - product.rating (show as "★ 4.5")
//     - product.stock  (show "X in stock", highlight low stock < 15)
//     - product.description
//
//  Hints:
//  - Use .filter() on the products array
//  - toFixed(2) formats a number: (79.99).toFixed(2) → "79.99"
//  - Conditional className: className={stock < 15 ? "low-stock" : ""}
//
//  Bonus challenges:
//  ★  Sort products by price (low→high / high→low) with a dropdown
//  ★★ Add a search bar that filters by product name
//  ★★★ Add an "Add to cart" button and show a cart count in the header
// ============================================================

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        {/* This is just a placeholder — no real image needed */}
        <span className="product-emoji">🛍️</span>
      </div>

      <div className="product-info">
        {/* TODO: Display product.name in an <h3> tag */}

        {/* TODO: Display product.category in a <span> with className="product-category" */}

        {/* TODO: Display product.description in a <p> tag */}

        <div className="product-footer">
          {/* TODO: Display price formatted as "$79.99" */}

          {/* TODO: Display rating as "★ 4.5" */}

          {/* TODO: Display stock — add "low-stock" class if stock < 15 */}
        </div>
      </div>
    </div>
  );
}

export default function DataDisplayTask() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // TODO: Filter products based on selectedCategory
  const filteredProducts = products; // replace with filtered version

  return (
    <div className="data-display-container">
      <div className="filter-bar">
        <span className="filter-label">Filter by category:</span>
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-category ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count">
        Showing <strong>{filteredProducts.length}</strong> products
      </p>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
