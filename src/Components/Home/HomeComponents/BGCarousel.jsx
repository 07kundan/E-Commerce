import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

function BGCarousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="h-[80vh] w-[78%] "
      >
        <SwiperSlide>
          <img
            className="bg-cover rounded-2xl"
            src="\src\Components\Home\Pictures\heroBG1.jpg"
            alt="not found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover rounded-2xl"
            src="\src\Components\Home\Pictures\heroBG1.jpg"
            alt="not found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover rounded-2xl"
            src="\src\Components\Home\Pictures\heroBG1.jpg"
            alt="not found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover rounded-2xl"
            src="\src\Components\Home\Pictures\heroBG1.jpg"
            alt="not found"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover rounded-2xl"
            src="\src\Components\Home\Pictures\heroBG1.jpg"
            alt="not found"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default BGCarousel;