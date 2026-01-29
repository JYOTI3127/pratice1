import { useEffect, useState } from "react";
import { bannerImages } from "../Data/Data";

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="  h-[600px] bg-[#faf7f2] px-6 md:pl-20 flex flex-col md:flex-row items-center gap-10">

      {/* LEFT : 50% TEXT */}
      <div className="w-full md:w-1/2 max-w-xl">
        {/* <span className="inline-block bg-[#ead7bf] text-[#9a6a3a] text-xs px-4 py-1 mb-5">
          NEW ARRIVAL...
        </span> */}

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
         Astro-Energized <br />Living Spaces
        </h1>

        <p className="text-gray-600 mb-8 text-sm md:text-base">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#c08a4b] text-white px-6 py-3 text-sm hover:bg-[#a9743c] transition">
            BUY NOW →
          </button>
          <button className="border border-[#c08a4b] text-[#c08a4b] px-6 py-3 text-sm hover:bg-[#c08a4b] hover:text-white transition">
            VIEW DETAILS →
          </button>
        </div>
      </div>

      {/* RIGHT : 50% IMAGE */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center mt-10 md:mt-0">

        {/* Sliding Image (badi) */}
        <img
          src={bannerImages[current].img}
          alt="Banner"
          className="relative z-10
  w-full
  md:w-[600px]
  lg:w-[600px]
  h-[400px]
  md:h-[450px]
  object-cover
  rounded-lg
  shadow-lg
  transition-all duration-700 ease-in-out
  animate-spin-slow"

        />
      </div>
    </section>
  );
};

export default Banner;
