
import React from 'react'
import OurProduct from "../components/Ourproduct";
import { pyramids } from "../Data/Data";

const Pyamindpage = () => {
  return (
    <div className="p-8 pt-15">
      <h1 className="text-4xl font-semibold text-center pb-10 sm:pb-6 md:pb-4 lg:pb-3">
        {"Our pyramid"}
      </h1>
      <OurProduct products={pyramids} />
    </div>
  );
}

export default Pyamindpage;