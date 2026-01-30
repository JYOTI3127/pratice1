import React from "react";

const FilterBar = ({ filters, setFilters, onClear }) => {
  return (
    <div className="w-full p-4 bg-white rounded shadow mb-6 flex flex-col md:flex-row gap-4 items-center">
      <input
        value={filters.search}
        onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
        placeholder="Search product..."
        className="px-3 py-2 border rounded w-full md:w-64"
      />

      <input
        type="number"
        value={filters.minPrice}
        onChange={(e) => setFilters((f) => ({ ...f, minPrice: e.target.value }))}
        placeholder="Min price"
        className="px-3 py-2 border rounded w-32"
      />

      <input
        type="number"
        value={filters.maxPrice}
        onChange={(e) => setFilters((f) => ({ ...f, maxPrice: e.target.value }))}
        placeholder="Max price"
        className="px-3 py-2 border rounded w-32"
      />

      <select
        value={filters.minRating}
        onChange={(e) => setFilters((f) => ({ ...f, minRating: e.target.value }))}
        className="px-3 py-2 border rounded w-40"
      >
        <option value="">Min rating</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
      </select>

      <button
        onClick={onClear}
        className="ml-auto bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
      >
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
