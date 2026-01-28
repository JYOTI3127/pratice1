
import React from 'react'
import OurProduct from "../components/Ourproduct";
import { pyramids } from "../Data/Data";

const Pyamindpage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold text-center ">
        {"Our pyramid"}
      </h1>
      <OurProduct products={pyramids} />
    </div>
  );
}

export default Pyamindpage;