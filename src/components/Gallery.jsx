import React from "react";
import { galleryItems } from "../Data/Data";

const Gallery = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-10 mt-8 text-center">Our Gallery</h1>
      <div className="grid grid-cols-4 gap-8">
        {galleryItems.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg shadow hover:scale-105 transform transition duration-300">
            <img src={item.image} alt={`Gallery ${item.id}`} className="w-full h-60 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
