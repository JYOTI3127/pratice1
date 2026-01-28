import React from 'react'
import OurProduct from "../components/Ourproduct";
import { product } from "../Data/Data";

const Product = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-center mb-2">
        {"Our Products"}
      </h1>
      <OurProduct products={product} />
    </div>
  );
}

export default Product;

