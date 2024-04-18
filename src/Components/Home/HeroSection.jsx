import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";

// It includes brand Name and some animations
function HeroSection() {
  return (
    <div className="bg-orange-800 h-[80vh] w-screen flex justify-center items-center text-2xl relative">
      {/* company name */}
      <div className="bg-indigo-700 w-1/2 h-full flex items-center justify-center text-5xl font-bold">
        <span className="mr-2 text-8xl">
          <RiShoppingCartFill />
        </span>
        ZED-KART
      </div>
      {/* ---------------------- */}

      {/* company animations */}

      <div className="bg-indigo-700 w-1/2 h-full flex flex-col items-center justify-end pb-10">
        <span className="underline font-semibold">Top Brands</span>
        <div className="bg-red-600 w-[80%] h-[20%]">
          <marquee behavior="scroll" direction="left">
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
          </marquee>
        </div>
        <div className="bg-red-900 w-[80%] h-[20%]">
          <marquee behavior="scroll" direction="left">
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
          </marquee>
        </div>
      </div>

      {/* ---------------------- */}
    </div>
  );
}

export default HeroSection;
