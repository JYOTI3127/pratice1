import React from "react";
import { sections } from "../Data/Data";
import SectionSlider from "./Slider";

const Rudraksha = () => {
const RudrakshaSection = sections.find(
    (section) => section.name === "Rudraksha"
  );

  return <SectionSlider section={RudrakshaSection} />;
}

export default Rudraksha;
