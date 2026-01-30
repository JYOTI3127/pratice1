import React, { useEffect, useState } from "react";
import { sections } from "../Data/Data";
import SectionSlider from "./Slider";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";




const Bestsellers = () => {

  const [items, setItems] = useState([]);




  useEffect(() => {
    const data = sections.filter(
      (section) => section.name === "Best Sellers"
    );
    if (data.length > 0) {
      setItems(data[0].items);
    }
  }, [])



  return (
    <section className="py-10 px-5 md:py-15 md:px-10">
      <div className="container">

        <h2 className="text-3xl font-bold text-center mb-3">Best Seller</h2>
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
};

export default Bestsellers;
