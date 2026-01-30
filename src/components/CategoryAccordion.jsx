import React from "react";

const CategoryAccordion = ({ categories, selected, onSelect }) => {
  // If caller didn't pass categories, provide a sensible default matching site pages
  const fallback = [
    { id: "all", name: "All Products" },
    { id: "bracelets", name: "Bracelets" },
    { id: "rudraksha", name: "Rudraksha" },
    { id: "combobracelets", name: "Combo Bracelet" },
    { id: "yantra", name: "Yantra" },
    { id: "gemstones", name: "Gemstones" },
    { id: "womenbracelet", name: "Women Bracelet" },
    { id: "pyamind", name: "Pyramids" },
  ];

  const list = categories && categories.length ? categories : fallback;

  return (
    <div className="w-full md:w-60 p-4 bg-white rounded shadow">
      <h3 className="font-semibold mb-3">Categories</h3>
      <ul className="space-y-2">
        {list.map((cat) => (
          <li key={cat.id}>
            <button
              className={`w-full text-left px-3 py-2 rounded transition-colors ${
                selected === cat.id ? "bg-amber-100 text-amber-700" : "hover:bg-gray-100"
              }`}
              onClick={() => onSelect(cat.id)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryAccordion;
