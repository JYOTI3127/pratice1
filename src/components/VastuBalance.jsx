import React from 'react'
import { sections } from "../Data/Data";
import SectionSlider from "../components/Slider";

const VastuBalance = () => {
const VastuBalanceSection = sections.find(
    (section) => section.name === "Vastu Balance"
  );
  return <SectionSlider section={VastuBalanceSection} />;
}

export default VastuBalance
