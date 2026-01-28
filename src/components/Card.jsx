import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden flex-shrink-0 w-[24%]
      shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 group">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
          {item.name}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-red-600 font-bold text-lg">
            ₹{item.price}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ₹{item.originalPrice}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <FaStar />
          <span>{item.rating}</span>
        </div>

        {/* Button */}
        <Link to={`/product/${item.id}`}>
          <button
            style={{ WebkitTapHighlightColor: "transparent" }}
            className="
      mt-2 w-full
      bg-black text-white py-2 rounded
      flex items-center justify-center gap-2
      transition-colors duration-200
      focus:outline-none focus:ring-0
      active:outline-none
      shadow-none hover:shadow-none active:shadow-none
      whitespace-nowrap cursor-pointer
    "
          >
            Add to Cart
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Card;
