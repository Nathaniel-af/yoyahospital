import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import desk1 from "../assets/Swiperassets/1desk.webp";
import desk2 from "../assets/Swiperassets/2desk.webp";
import desk3 from "../assets/Swiperassets/3desk.webp";
import desk4 from "../assets/Swiperassets/4desk.webp";
import desk5 from "../assets/Swiperassets/5desk.webp";
import desk6 from "../assets/Swiperassets/6desk.webp";
import desk7 from "../assets/Swiperassets/7desk.webp";
import desk8 from "../assets/Swiperassets/8desk.webp";
import desk9 from "../assets/Swiperassets/9desk.webp";
import desk10 from "../assets/Swiperassets/10desk.webp";
import port1 from "../assets/Swiperassets/1port.webp";
import port2 from "../assets/Swiperassets/2port.webp";
import port3 from "../assets/Swiperassets/3port.webp";
import port4 from "../assets/Swiperassets/4port.webp";
import port5 from "../assets/Swiperassets/5port.webp";
import port6 from "../assets/Swiperassets/6port.webp";
import port7 from "../assets/Swiperassets/7port.webp";
import port8 from "../assets/Swiperassets/8port.webp";
import port9 from "../assets/Swiperassets/9port.webp";
import port10 from "../assets/Swiperassets/10port.webp";

// import seized from "../assets/Swiperassets/SIZED.jpg";
function Swipper() {
  const images = [
    { laptopmd: desk1, desktopmd: desk1, portrait: port1 },
    { laptopmd: desk2, desktopmd: desk2, portrait: port2 },
    { laptopmd: desk3, desktopmd: desk3, portrait: port3 },
    { laptopmd: desk4, desktopmd: desk4, portrait: port4 },
    { laptopmd: desk5, desktopmd: desk5, portrait: port5 },
    { laptopmd: desk6, desktopmd: desk6, portrait: port6 },
    { laptopmd: desk7, desktopmd: desk7, portrait: port7 },
    { laptopmd: desk8, desktopmd: desk8, portrait: port8 },
    { laptopmd: desk9, desktopmd: desk9, portrait: port9 },
    { laptopmd: desk10, desktopmd: desk10, portrait: port10 },
  ];

  const slider = () => {
    return images.map((img, index) => {
      return (
        <SwiperSlide key={index} className="">
          <img
            className="h-full w-full object-contain "
            loading="lazy"
            src={img.laptopmd}
            srcSet={`${img.portrait} 1280w,${img.laptopmd} 1366w, ${img.desktopmd} 1600w`}
            alt=""
          />
        </SwiperSlide>
      );
    });
  };

  return (
    <div>
      <Swiper
        className="h-[30vh] md:h-[40vh] lg:h-[80vh] ease-in-out"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        speed={1000}
        loop={true}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {slider()}
      </Swiper>
    </div>
  );
}

export default Swipper;
