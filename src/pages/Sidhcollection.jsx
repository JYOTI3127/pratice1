
import React from 'react'
import OurProduct from "../components/Ourproduct";
import { sidhCollection } from "../Data/Data";

const SidhCollection = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold text-center ">
        {"Our Sidh Collection"}
      </h1>
      <OurProduct products={sidhCollection} />
    </div>
  );
}

export default SidhCollection;
