import React, { useEffect, useState } from "react";
import { ProductData, sections } from "../Data/Data";
import SectionSlider from "./Slider";
import Card from './Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";


const Karungali = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const section = ProductData.filter(
      (section) => section.category === "Karungali"
    ); setItems(section);
  }, []);

  return (
    <section className="py-15 px-10">
      <div className="container">

        <h2 className="text-3xl font-bold text-center mb-3">Yantra</h2>
        <p className="text-l text-black mb-10 text-center">
          This product brings positivity and balance according to your horoscope.
        </p>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}


          loop={true} // Loop slider
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {items.map((ele) => (
            <SwiperSlide key={ele.id}>
              <Card item={ele} />
            </SwiperSlide>
          ))}
        </Swiper>



      </div>
    </section>

  )
}
export default Karungali
