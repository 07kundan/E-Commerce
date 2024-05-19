import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { useUser } from "../../../store/contextApis";

function CategoryBox({
  category,
  description,
  Image1,
  Image2,
  Image3,
  Image4,
}) {
  const { setCategory, current } = useUser();
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="w-[90%] h-[92vh] m-auto bg-purple-500/30 flex flex-col py-4 px-3 rounded-3xl lg:px-8 lg:py-4">
        {/* heading */}
        <h3 className="h-[6vh] text-3xl font-semibold text-center underline">
          {category.toUpperCase()}
        </h3>

        {/* middle content */}
        <div className="min-h-[75vh] flex flex-col-reverse justify-center w-full lg:flex-row ">
          {/* Left section / description */}
          <section className=" w-full text-center flex justify-center lg:pt-0 lg:w-3/5 lg:h-full lg:items-center lg:text-left lg:px-5 ">
            {description}
          </section>

          {/*Right section / images */}
          <section className=" w-full h-[47%] flex items-center justify-center lg:w-2/5 lg:h-full">
            <Swiper
              className="w-4/5 h-[90%] rounded-2xl"
              style={{
                "--swiper-pagination-color": "#fff",
                "--swiper-navigation-color": "#fff",
              }}
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation, Pagination, FreeMode]}
            >
              <SwiperSlide className="">
                <div className="w-full h-full flex justify-center items-center">
                  <img src={`${Image1}`} alt="img" className="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full  flex justify-center items-center">
                  <img src={`${Image2}`} alt="img" className="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full flex justify-center pr10 items-center ">
                  <img src={`${Image3}`} alt="img" className="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full flex justify-center items-center">
                  <img src={`${Image4}`} alt="img" className="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>
        {/* ------------------- */}
        <button
          onClick={() => {
            setCategory(category);
          }}
          className=" font-semibold text-purple-700 text-sm flex items-end justify-end pr-4 lg:pr-8"
        >
          <Link to={current ? "/category" : "/Login"}>See all</Link>
        </button>
      </div>
      <br />
    </div>
  );
}

export default CategoryBox;
