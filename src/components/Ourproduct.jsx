import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const OurProduct = ({ products, title }) => (
  <div className="p-0 sm:p-8 pt-10">
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-lg overflow-hidden shadow hover:shadow-xl hover:scale-105 transition duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full sm:w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover mx-auto"
          />

          <div className="p-4">
            <h2 className="font-medium mb-2">{product.name}</h2>

            {product.price && product.originalPrice && (
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold">₹{product.price}</span>
                <span className="text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="text-green-600 font-semibold">
                  {product.discount}
                </span>
              </div>
            )}


            <Link to={`/product/${product.id}`}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-2 w-full bg-black text-white py-2 rounded transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
              >
                <FaShoppingCart size={18} />Add to Cart
              </button>
            </Link>
          </div>

        </div>
      ))}
    </div>
  </div>
);

export default OurProduct;
