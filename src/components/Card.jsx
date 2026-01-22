import React from "react";
import { Link } from "react-router-dom";
import { product } from "../Data/Data";

const Card = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex-shrink-0 w-[24.2%]
      shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
      <img src={item.image} alt={item.name} className="  w-full h-70 object-cover" />
      <div className="p-10">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <div className="flex items-center gap-2">
          <p className="text-red-500 font-bold">₹{item.price}</p>
          <p className="text-gray-400 line-through">₹{item.originalPrice}</p>
        </div>
        <p className="text-yellow-500">⭐ {item.rating}</p>
<Link to={`/product/${item.id}`}>
  <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-black/80 transition-colors whitespace-nowrap cursor-pointer">
    Add to Cart
  </button>
</Link>

      </div>
    </div>
  );
};

export default Card;
