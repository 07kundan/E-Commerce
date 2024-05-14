import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { useUser } from "../../../store/contextApis";

function CategoryBox({ category, description, Image1, Image2, Image3 }) {
  const { setCategory, current } = useUser();
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="w-[90%] h-[90vh] m-auto bg-slate-600/60 flex flex-col py-8 rounded-3xl lg:py-4 px-8 lg:flex lg:flex-col ">
        <h3 className="h-[6vh] text-3xl font-semibold text-center underline">
          {category.toUpperCase()}
        </h3>
        <div className=" h-[80vh] flex flex-col-reverse w-full gap-6 lg:flex-row lg:gap-5">
          {/* Left section / description */}
          <section className=" w-full h-3/5 pt-8 text-center flex justify-center lg:pt-0 lg:w-3/5 lg:h-full lg:items-center lg:text-left lg:px-5">
            {description}
          </section>

          {/*Right section / images */}
          <section className=" w-full flex items-center justify-center lg:w-2/5 lg:h-full">
            <Swiper
              className="w-full h-full"
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
              <SwiperSlide className="w-full h-full ">
                <div className="w-full h-full flex justify-center items-center">
                  <img src={`${Image1}`} alt="img" className="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full flex justify-center items-center">
                  <img src={`${Image2}`} alt="img" className="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full flex justify-center items-center">
                  <img src={`${Image3}`} alt="img" className="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full flex justify-center items-center">
                  <img src={`${Image3}`} alt="img" className="" />
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
          className="h-[4vh] font-semibold text-xl flex items-center justify-end pr-8"
        >
          <Link to={current ? "/category" : "/Login"}>See all</Link>
        </button>
      </div>
      <br />
    </div>
  );
}

export default CategoryBox;
