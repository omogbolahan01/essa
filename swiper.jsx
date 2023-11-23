// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// // import required modules
// import { Pagination } from "swiper/modules";

// export default function App() {
//   const slides = [
//     {
//       header: "Slide 1",
//       image: "url_to_image_1.jpg", // Replace with the actual URL
//       paragraph: "Description for Slide 1",
//     },
//   ];
//   return (
//     <>
//       <Swiper
//         slidesPerView={2}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <slides />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/images/Frame 6348.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/images/Frame 6349.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/images/Frame 6346.png" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/images/Frame 6348.png" alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "./styles.css";

const slides = [
  {
    header1:
      "Essa has revolutionized our approach to online retail. The order management system ensures seamless processing from purchase to delivery, enhancing our operational efficiency. The robust analytics tools provide actionable insights, guiding our marketing strategies effectively. With Essa, our business has thrived, thanks to its user-friendly interface and exceptional support.",
    image: "/images/Ellipse 5.png",
    header2: "Michael Johnson",
    paragraph: "Founder, SwiftTech Gadgets",
  },
  {
    header1:
      "Essa's intuitive features have significantly enhanced our customer interactions. The integrated messaging system has streamlined communication, resulting in improved customer satisfaction. The platform's data analytics capabilities have enabled us to make informed decisions, boosting our overall sales performance. Essa has undoubtedly become the backbone of our e-commerce success.",
    image: "/images/Ellipse 5 (1).png",
    header2: "Emily Chen",
    paragraph: "Marketing Director, Bloom & Blossom Fashion",
  },
  {
    header1:
      "Essa's user-friendly features have revolutionized how we engage with our customers. By incorporating a seamless messaging system, communication has become more efficient, leading to higher levels of customer contentment. Moreover, Essa's powerful data analytics tools have empowered us to make well-informed choices, ultimately elevating our sales performance. ",
    image: "/images/Ellipse 5 (2).png",
    header2: "Ayomide Joy",
    paragraph: "Director, Beauty bliz",
  },
  {
    header1:
      "Essa has truly transformed our customer interactions with its intuitive features. The integrated messaging system has simplified communication, resulting in increased customer satisfaction. Additionally, Essa's robust data analytics capabilities have provided valuable insights, enabling us to make strategic decisions that have significantly improved our overall sales performance.  ",
    image: "/images/Ellipse 5 (3).png",
    header2: "Olabode Felix",
    paragraph: "Marketer, Glossom Textile",
  },
  {
    header1:
      "Essa's user-friendly features have revolutionized how we engage with our customers. By incorporating a seamless messaging system, communication has become more efficient, leading to higher levels of customer contentment. Moreover, Essa's powerful data analytics tools have empowered us to make well-informed choices, ultimately elevating our sales performance. ",
    image: "/images/Ellipse 5 (2).png",
    header2: "Ayomide Joy",
    paragraph: "Director, Beauty bliz",
  },
];

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          800: {
            slidesPerView: 2,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <h2>{slide.header1}</h2>
              <img src={slide.image} />

              <h2>{slide.header2}</h2>
              <h3 className="paraa">{slide.paragraph}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
