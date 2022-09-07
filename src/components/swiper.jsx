import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import poster1 from "../assets/Swiperassets/Frame1-minn.png";
import poster2 from "../assets/Swiperassets/Frame2-minn.png";
import poster3 from "../assets/Swiperassets/Frame3-minn.png";
import poster4 from "../assets/Swiperassets/Frame4-minn.png";
import poster5 from "../assets/Swiperassets/Frame5-minn.png";
import poster7 from "../assets/Swiperassets/Frame6-minn.png";
import poster8 from "../assets/Swiperassets/Frame7-minn.png";
// import poster9 from "../assets/Swiperassets/Frame2-minn.png;
import seized from "../assets/Swiperassets/SIZED.jpg";
function Swipper() {
  const images = [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster7,
    poster8,
    seized,
  ];

  const slider = () => {
    return images.map((img) => {
      return (
        <SwiperSlide key={img} className="">
          <img className="h-full w-full " loading="lazy" src={img} alt="" />
        </SwiperSlide>
      );
    });
  };

  return (
    <div>
      <Swiper
        className="h-[40vh] md:h-[80vh] ease-in-out"
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
