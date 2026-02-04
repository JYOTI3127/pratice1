import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { useCart } from '../context/CartContext';

const Card = ({ item }) => {
  const { addToCart } = useCart(); // ✅ use context

  return (
    <div className="bg-white rounded-xl overflow-hidden flex-shrink-0 w-full shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 group">

      {/* IMAGE WRAPPER */}
      <div className="relative overflow-hidden">

        {/* Product Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* HOVER ACTIONS (desktop) */}
        <div
          className="
            absolute inset-0 
            bg-black/40 
            flex items-center justify-center gap-4
            opacity-0 
            group-hover:opacity-100
            transition-all duration-300
          "
        >
          <div className="flex gap-2">
            {/* Add to Cart */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item); 
              }}
              className="w-full bg-black text-white px-4 py-1.5 rounded-full flex items-center justify-center gap-1 text-sm 
               transform transition duration-200 hover:scale-105 hover:bg-gray-800"
            >
              <FaShoppingCart className="text-xs" />
              Add
            </button>

            {/* View Details */}
            <Link
              to={`/product/${item.id}`}
              state={{ product: item }}
              className="flex-1"
            >
              <button
                type="button"
                className="w-full border border-black text-black px-4 py-1.5 rounded-full flex items-center justify-center gap-1 text-sm
                 transform transition duration-200 hover:scale-105 hover:bg-black hover:text-white"
              >
                View
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col justify-between h-auto">
        <h2 className="text-base font-semibold text-gray-800 mb-2">
          {item.name}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500  text-lg">
            ₹{item.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ₹{item.originalPrice}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {[1, 2, 3, 4, 5].map((i) =>
            i <= item.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
          )}
          <span className="text-black ml-1">{item.rating}</span>
        </div>

        {/* MOBILE BUTTON (always visible) */}
        <button
          onClick={() => addToCart(item)} // ✅ Context function
          className="mt-3 w-full bg-black text-white py-2 rounded flex items-center justify-center gap-2 text-sm sm:hidden"
        >
          <FaShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
