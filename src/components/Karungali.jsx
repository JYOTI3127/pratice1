import React from 'react'
import { sections } from "../Data/Data";
import SectionSlider from "./Slider";   

const Karungali = () => {
const KarungaliSection = sections.find(
    (section) => section.name === "Karungali"
  );
  return <SectionSlider section={KarungaliSection} />;
}

export default Karungali
