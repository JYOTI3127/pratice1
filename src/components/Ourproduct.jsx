import React from "react";
import { product } from "../Data/Data";
import { Link } from "react-router-dom";

const OurProduct = () => (
  <div className="p-8">
    <h1 className="text-3xl font-semibold text-center mb-2">Gift Products</h1>
    <p className="text-center text-gray-500 mb-8">
      Browse our collection of products
    </p>

    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {product.map((product) => (
        <div
          key={product.id}
          className="rounded-lg overflow-hidden shadow hover:shadow-xl hover:scale-105 transition duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover" />

          <div className="p-4">
            <h2 className="font-medium mb-2">{product.name}</h2>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold">₹{product.price}</span>
              <span className="text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
              <span className="text-green-600 font-semibold">
                {product.discount}
              </span>
            </div>

            <Link to={`/product/${product.id}`}>
              <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-black/80 transition-colors whitespace-nowrap cursor-pointer">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OurProduct;
