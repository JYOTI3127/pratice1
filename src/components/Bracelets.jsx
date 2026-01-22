import React from 'react'
import { sections } from "../Data/Data";
import SectionSlider from "./Slider";

const Bracelets = () => {
const BraceletsSection = sections.find(
    (section) => section.name === "Bracelets"
  );

  return <SectionSlider section={BraceletsSection} />;
}

export default Bracelets;