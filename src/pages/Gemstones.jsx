import React from 'react'
import OurProduct from "../components/Ourproduct";
import { gemstones } from "../Data/Data";

const Gemstones = () => {
  return (
    <div className="p-8">
    <h1 className="text-4xl font-semibold text-center pb-10 sm:pb-6 md:pb-4 lg:pb-3">

        {"Our Gemstones"}
      </h1>
      <OurProduct products={gemstones} />
    </div>
  );
}

export default Gemstones;
