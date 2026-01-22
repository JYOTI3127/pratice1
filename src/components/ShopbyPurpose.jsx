import React from "react";
import ShopByPurposeCard from "../components/Shopbypurposecard";
import { shopByPurposeData } from "../Data/Data";

const ShopByPurpose = () => {
  return (
    <div className="px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Shop By Purpose</h2>
      <div className="grid grid-cols-7 gap-4">
        {shopByPurposeData.map((item) => (
          <ShopByPurposeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopByPurpose;
