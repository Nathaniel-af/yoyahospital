import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import poster1 from "../assets/Swiperassets/poster2.jpg";
import poster2 from "../assets/Swiperassets/poster3.jpg";
import poster3 from "../assets/Swiperassets/poster4.jpg";
import poster4 from "../assets/Swiperassets/poster5.jpg";
import poster5 from "../assets/Swiperassets/poster6.jpg";
import poster7 from "../assets/Swiperassets/poster8.jpg";
import poster8 from "../assets/Swiperassets/poster9.jpg";
import poster9 from "../assets/Swiperassets/poster10 .jpg";
function Swipper() {
  const images = [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster7,
    poster8,
    poster9,
  ];

  const slider = () => {
    return images.map((img) => {
      return (
        <SwiperSlide className="">
          <img
            className="h-full w-full md:object-cover object-top"
            src={img}
            alt=""
          />
        </SwiperSlide>
      );
    });
  };

  return (
    <div>
      <Swiper
        className="h-[50vh] md:h-[80vh] ease-in-out"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        speed={1000}
        loop={true}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slider()}
      </Swiper>
    </div>
  );
}

export default Swipper;
