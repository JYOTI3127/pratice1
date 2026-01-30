import React, { useMemo, useState } from 'react'
import OurProduct from "../components/Ourproduct";
import { products, categories } from "../Data/Data";
import CategoryAccordion from "../components/CategoryAccordion";
import FilterBar from "../components/FilterBar";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filters, setFilters] = useState({ search: "", minPrice: "", maxPrice: "", minRating: "" });

  const filtered = useMemo(() => {
    // start from category
    const cat = categories.find((c) => c.id === selectedCategory) || categories.find((c) => c.id === "all");
    let list = products.filter((p) => cat.ids.includes(p.id));

    // search
    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }

    // price
    if (filters.minPrice) {
      list = list.filter((p) => Number(p.price || 0) >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      list = list.filter((p) => Number(p.price || 0) <= Number(filters.maxPrice));
    }

    // rating
    if (filters.minRating) {
      list = list.filter((p) => Number(p.rating || 0) >= Number(filters.minRating));
    }

    return list;
  }, [selectedCategory, filters]);

  const clearFilters = () => setFilters({ search: "", minPrice: "", maxPrice: "", minRating: "" });

  return (
    <div className="p-0 md:p-8">
      {/* <h1 className="text-3xl font-semibold text-center mb-6">Our Products</h1> */}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-64">
          <CategoryAccordion categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>

        <div className="flex-1">
          <FilterBar filters={filters} setFilters={setFilters} onClear={clearFilters} />

          {/* Product grid showing 4 cards per row on desktop */}
          <OurProduct products={filtered} />
        </div>
      </div>
    </div>
  );
}

export default Product;

