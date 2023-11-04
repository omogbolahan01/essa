import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/Frame 6347.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Frame 6348.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Frame 6349.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Frame 6346.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Frame 6348.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
