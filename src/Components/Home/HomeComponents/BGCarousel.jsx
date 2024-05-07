import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function BGCarousel() {
  return (
    <div className="bg-gradient-to-bl from-[#ebb0c7] to-[#bd215d] w-11/12 m-auto p-6 rounded-2xl">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-[90%] lg:h-[95vh] lg:w-full rounded-2xl "
      >
        <SwiperSlide className="">
          <div className=" w-full h-full ">
            <img
              className="object-contain rounded-2xl"
              src="\src\Components\Home\Pictures\heroBG1.jpg"
              alt="not found"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" w-full h-full flex justify-center items-center ">
            <img
              className="object-contain h-[90%] rounded-2xl"
              src="\src\Components\Home\Pictures\heroBG1.jpg"
              alt="not found"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" w-full h-full flex justify-center items-center ">
            <img
              className="object-contain h-[90%] rounded-2xl"
              src="\src\Components\Home\Pictures\heroBG1.jpg"
              alt="not found"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" w-full h-full flex justify-center items-center ">
            <img
              className="object-contain h-[90%] rounded-2xl"
              src="\src\Components\Home\Pictures\heroBG1.jpg"
              alt="not found"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" w-full h-full flex justify-center items-center ">
            <img
              className="object-contain h-[90%] rounded-2xl"
              src="\src\Components\Home\Pictures\heroBG1.jpg"
              alt="not found"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BGCarousel;
