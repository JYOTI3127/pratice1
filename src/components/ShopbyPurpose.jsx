import React from "react";
import ShopByPurposeCard from "../components/Shopbypurposecard";
import { shopByPurposeData } from "../Data/Data";

const ShopByPurpose = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-10 text-center">Shop By Purpose</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10">
        {shopByPurposeData.map((item) => (
          <ShopByPurposeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopByPurpose;
