import React from 'react'
import OurProduct from "../components/Ourproduct";
import { product } from "../Data/Data";

const Product = () => {
  return (
    <div className="p-8">
      <OurProduct products={product} />
    </div>
  );
}

export default Product;

