import React from 'react'
import { sections } from "../Data/Data";
import SectionSlider from "./Slider";   

const Pyramids = () => {
const pyramindsSection = sections.find(
    (section) => section.name === "Pyramids"
  );
  return <SectionSlider section={pyramindsSection} />;
}

export default Pyramids
