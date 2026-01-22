import React from "react";
import { gemstones } from "../Data/Data";
import { Link } from "react-router-dom";

const Gemstone = () => {
  return (
    <div className="bg-[#f7f5f2] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-black text-center">
            Gemstones
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {gemstones.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {item.benefit}
                </p>

                <Link to={`/product/${item.id}`}>
                  <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-black/80 transition-colors">
                   Add to Card
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gemstone;
