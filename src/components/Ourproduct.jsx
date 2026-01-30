import React from "react";
import ProductCard from "./ProductCard";

const OurProduct = ({ products }) => (
  <div className="p-4 pr-4 md:p-8 md:pr-0 ">
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr
">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default OurProduct;