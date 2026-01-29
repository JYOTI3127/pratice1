import React, { useEffect, useState } from "react";
import OurProduct from "../components/Ourproduct";
import { ProductData } from "../Data/Data";

const WomenBracelet = () => {
 const [items, setItems] = useState([]);

  useEffect(() => {
    const section = ProductData.filter(
      (item) => item.category === "Bracelets"
    );
    setItems(section);
  }, []);

  return (
    <div className="p-8 pt-15">
      <h1 className="text-4xl font-semibold text-center pb-10 sm:pb-6 md:pb-4 lg:pb-3">
        Women Bracelet
      </h1>

      <OurProduct products={items} />
    </div>
  );
}

export default WomenBracelet
