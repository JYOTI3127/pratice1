import React from "react";
import Banner from "../components/Banner";
import SectionSlider from "../components/Slider";
import { sections } from "../Data/Data";
import Bestsellers from "../components/Bestsellers";
import ShopbyPurpose from "../components/ShopbyPurpose";
import Rudraksha from "../components/Rudraksha";
import Bracelets from "../components/Bracelets";
import Karungali from "../components/Karungali";
import HeroSection from "../components/HeroSection";
import Pyramids from "../components/Pyramids";
import VastuBalance from "../components/VastuBalance";
import Whyastrotalk from "../components/Whyastrotalk";
import AstrologicalSection from "../components/AstrologicalSection";
import Gallery from "../components/Gallery";



const Home = () => {
  return (
    <>
      <Banner />
      <Bestsellers />
      <ShopbyPurpose />
      <Rudraksha />
      <HeroSection />
      <Bracelets />
      <Karungali />
      <Pyramids />
      <AstrologicalSection />
      <VastuBalance/>
      <Whyastrotalk/>
      <Gallery />  
    </>
  );
};

export default Home;
