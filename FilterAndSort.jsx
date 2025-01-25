import React from "react";

function FilterAndSort({ filterCategory, setFilterCategory, sortOrder, setSortOrder }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
        <option value="Dairy">Dairy</option>
      </select>
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort by Quantity ({sortOrder})
      </button>
    </div>
  );
}

export default FilterAndSort;