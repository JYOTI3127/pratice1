
import React from 'react'
import OurProduct from "../components/Ourproduct";
import { rudraksha } from "../Data/Data";

const RudrakshaPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold text-center ">
        {"Our Rudraksha"}
      </h1>
      <OurProduct products={rudraksha} />
    </div>
  );
}

export default RudrakshaPage;
