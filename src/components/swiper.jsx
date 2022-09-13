import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import laptop from "../assets/Swiperassets/laptopa.webp";
import desktop from "../assets/Swiperassets/desktopb.webp";
import portraitmd from "../assets/Swiperassets/portrait.webp";
// import seized from "../assets/Swiperassets/SIZED.jpg";
function Swipper() {
  const images = [
    { laptopmd: laptop, desktopmd: desktop, portrait: portraitmd },
  ];

  const slider = () => {
    return images.map((img, index) => {
      return (
        <SwiperSlide key={index} className="">
          <img
            className="h-full w-full lg:object-contain "
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
        className="h-[35vh] md:h-[50vh] lg:h-[80vh] ease-in-out"
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
