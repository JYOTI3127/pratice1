import React from "react";
import { sections } from "../Data/Data";
import SectionSlider from "./Slider";

const Bestsellers = () => {
  const bestSellersSection = sections.find(
    (section) => section.name === "Best Sellers"
  );
  
  return (
    <>
      <SectionSlider section={bestSellersSection} />
    </>

  )
};

export default Bestsellers;
