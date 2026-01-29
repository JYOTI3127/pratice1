import React from "react";
import { galleryItems } from "../Data/Data";

const Gallery = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-4xl font-bold mb-10 mt-8 text-center">Our Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg shadow hover:scale-105 transform transition duration-300"
          >
            <img
              src={item.image}
              alt={`Gallery ${item.id}`}
              className="w-full h-50 sm:h-48 md:h-56 lg:h-60 xl:h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
