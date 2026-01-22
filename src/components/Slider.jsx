import React, { useRef, useEffect } from "react";
import Card from "./Card";

const SectionSlider = ({ section }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPos = 0;

    const interval = setInterval(() => {
      if (!slider.firstChild) return;

      const cardWidth = slider.firstChild.offsetWidth + 16; 
      scrollPos += cardWidth;

      // Infinite loop
      if (scrollPos >= slider.scrollWidth / 2) {
        scrollPos = 0;
        slider.scrollTo({ left: 0, behavior: "auto" }); // yahan smooth nahi
      } else {
        slider.scrollTo({ left: scrollPos, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-10"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        {section.name}
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-hidden hide-scrollbar px-5"
      >
        {section.items.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}

        {/* duplicate items for infinite loop */}
        {section.items.map((item, idx) => (
          <Card key={`dup-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionSlider;
