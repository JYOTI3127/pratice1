import React, { useEffect, useState } from "react";
import OurProduct from "../components/Ourproduct";
import { YantraData } from "../Data/Data";

const Yantra = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const yantras = YantraData.filter((item) => item.category === "Yantra");
    setItems(yantras);
  }, []);

  return (
    <div className="p-8 pt-15">
      <h1 className="text-4xl font-semibold text-center pb-10 sm:pb-6 md:pb-4 lg:pb-3">
        Our Yantra
      </h1>

      {items.length > 0 ? (
        <OurProduct products={items} title="Yantra" />
      ) : (
        <p className="text-center text-gray-500">No products found!</p>
      )}
    </div>
  );
};

export default Yantra;

