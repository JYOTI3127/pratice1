import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const StarRating = ({ value = 0 }) => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    return (
        <div className="flex items-center gap-1 text-amber-500">
            {stars.map((s) => (
                <FaStar key={s} className={s <= Math.round(value) ? "opacity-100" : "opacity-30"} />
            ))}
        </div>
    );
};

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm transition-transform overflow-hidden h-full flex flex-col">
            <div className="relative bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                />

                {/* Discount badge */}
                {product.discount && (
                    <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {product.discount}
                    </span>
                )}

                {/* Quick actions removed to keep card static — actions remain in footer */}
            </div>

            <div className="p-4 mt-auto">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

                <div className="flex items-center justify-between mb-3">
                    <div>
                        <div className="text-lg font-bold text-gray-900">₹{product.price}</div>
                        {product.originalPrice && (
                            <div className="text-sm text-gray-400 line-through">₹{product.originalPrice}</div>
                        )}
                    </div>

                    <div className="flex flex-col items-end">
                        <StarRating value={product.rating} />
                        <div className="text-xs text-gray-500">{product.rating ? product.rating.toFixed(1) : "—"}</div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Link to={`/product/${product.id}`} state={{ product }} className="flex-1">
                        <button className="w-full bg-transparent border border-amber-600 text-amber-600 py-2 rounded hover:bg-amber-600 hover:text-white transition">
                            View
                        </button>
                    </Link>

                    <Link to="/Addtocartpage" className="w-1/2">
                        <button className="w-full bg-amber-600 text-white py-3 rounded hover:bg-amber-700 transition flex items-center justify-center gap-2">
                            <FaShoppingCart />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
