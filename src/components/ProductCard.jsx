import React from "react";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

/* ── StarRating ── */
const StarRating = ({ value = 0 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) =>
      s <= Math.round(value) ? (
        <FaStar key={s} size={13} className="text-amber-500" />
      ) : (
        <FaRegStar key={s} size={13} className="text-gray-200" />
      )
    )}
  </div>
);

/* ── ProductCard ── */
const ProductCard = ({ product, onAddToCart }) => {
  const { addToCart } = useCart(); // ✅ Top level hook

  /* savings % calculate */
  const savings = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  /* cart handler */
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onAddToCart) {
      onAddToCart(product);
    } else {
      addToCart(product); // ✅ context
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">

      {/* ─── IMAGE SECTION ─── */}
      <div className="relative bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-52 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges — Best Seller + Discount */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isBestseller && (
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md tracking-wider uppercase">
              ⚡ Best Seller
            </span>
          )}
          {savings > 0 && (
            <span className="bg-white border border-amber-300 text-amber-700 text-[10px] font-bold px-2.5 py-0.5 rounded-md">
              {savings}% OFF
            </span>
          )}
        </div>

        {/* Hover Overlay — Desktop */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 bg-amber-600/90 backdrop-blur-sm text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors duration-150"
          >
            <FaShoppingCart size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* ─── CONTENT SECTION ─── */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        {/* Name */}
        <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating value={product.rating} />
          <span className="text-xs text-gray-500 font-semibold">
            {product.rating ? product.rating.toFixed(1) : "—"}
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-end justify-between">
          <div>
            <div className="text-lg font-extrabold text-gray-900">
              ₹{product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Add to Cart — always visible */}
        <div className="mt-3 sm:hidden">
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors duration-150"
          >
            <FaShoppingCart size={14} />
            Add to Cart
          </button>
        </div>

        {/* View Product */}
        <Link
          to={`/product/${product.id}`}
          state={{ product }}
          className="mt-3 block w-full text-center text-sm font-semibold border border-amber-600 text-amber-700 py-1.5 rounded-lg hover:bg-amber-600 hover:text-white transition-colors duration-200"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
