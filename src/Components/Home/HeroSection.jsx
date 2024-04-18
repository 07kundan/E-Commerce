import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";

// It includes brand Name and some animations
function HeroSection() {
  return (
    <div className=" h-[75vh] w-screen flex justify-center items-center text-2xl relative">
      {/* company name */}
      <div className=" w-1/2 h-full flex items-center justify-center text-5xl font-bold text-[#6D67E4]">
        <span className="mr-2 text-8xl">
          <RiShoppingCartFill />
        </span>
        ZED-KART
      </div>
      {/* ---------------------- */}

      {/* company animations */}

      <div className=" w-1/2 h-full flex flex-col items-center justify-end pb-10 ">
        <div
          className=" w-[80%] h-[40%] text-center bg-gradient-to-l bg-white bg-opacity-50"
          // style={{
          //   backgroundImage: "radial-gradient(#6366f1, transparent 70%)",
          // }}
        >
          <span className="underline font-semibold">Top Brands</span>
          <div className="h-1/3 w-[80%] m-auto flex items-center">
            <marquee behavior="scroll" direction="left">
              <span>hello</span>
              <span>hello</span>
              <span>hello</span>
              <span>hello</span>
            </marquee>
          </div>
          <div className=" h-1/2 w-[80%] m-auto flex items-center">
            <marquee behavior="scroll" direction="left">
              <span>hello</span>
              <span>hello</span>
              <span>hello</span>
              <span>hello</span>
            </marquee>
          </div>
        </div>
      </div>

      {/* ---------------------- */}
    </div>
  );
}

export default HeroSection;
