import React, { useEffect, useState } from 'react';
import { ProductData } from "../Data/Data";
import Card from './Card';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const VastuBalance = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Filter section "Vastu Balance"
    const section = ProductData.filter((sec) => sec.category === "Vastu Balance");
    setItems(section);
  }, []);

  return (
    <section className="py-15 px-10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-3">Vastu Balance</h2>
        <p className="text-l text-black mb-10 text-center">
          This product brings positivity and balance according to your horoscope.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}

          pagination={{ clickable: true }}
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
  );
};

export default VastuBalance;
