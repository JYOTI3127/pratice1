import React, { useEffect, useState } from "react";

const images = [
  "https://astrotalk.store/cdn/shop/files/gofting_collection_banner_copy.webp?v=1767525632&width=1500",
  "https://astrotalk.store/cdn/shop/files/New_Year_Banner_1.jpg?v=1766582806&width=1500",
  "https://astrotalk.store/cdn/shop/files/website_5adf83bb-7c50-433a-8b96-189e25f4cb5e.webp?v=1765947237&width=1500",
"https://astrotalk.store/cdn/shop/files/Maha_lakshmi_siddhi_products_banner_web_copy_803061bc-e9bb-42aa-9072-5fe799c7a7de.webp?v=1766725246&width=1500",
"https://astrotalk.store/cdn/shop/files/Website_c3e31df0-f3b2-475d-804b-7e37bb391081.webp?v=1749733315&width=1500"

];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[500px] overflow-hidden relative">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="banner"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
