import React from 'react'
import OurProduct from "../components/Ourproduct";
import { products } from "../Data/Data";

const Product = () => {
  return (
    <div className="p-8 pt-15">
      <h1 className="text-3xl font-semibold text-center mb-2">
        {"Our Products"}
      </h1>
      <OurProduct products={products} />
    </div>
  );
}

export default Product;

