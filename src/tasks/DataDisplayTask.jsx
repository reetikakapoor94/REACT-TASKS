import { useState } from "react";
import { products, categories } from "../data/products";
import "./DataDisplayTask.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        <span className="product-emoji">🛍️</span>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <span className="product-category">
          {product.category}
        </span>

        <p>{product.description}</p>

        <div className="product-footer">
          <span className="product-price">
            ${product.price.toFixed(2)}
          </span>

          <span className="product-rating">
            ★ {product.rating}
          </span>

          <span className={product.stock < 15 ? "low-stock" : ""}>
            {product.stock} in stock
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DataDisplayTask() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="data-display-container">
      <div className="filter-bar">
        <span className="filter-label">
          Filter by category:
        </span>

        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-category ${
                selectedCategory === cat ? "active" : ""
              }`}
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
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}