import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { motion } from "framer-motion";

// It includes brand Name and some animations
function HeroSection() {
  return (
    <div className="  h-[70vh] lg:h-[90vh] w-screen lg:flex justify-center items-center text-2xl relative">
      {/* company name */}
      <div className="w-full h-1/2 font-bold flex items-center text-4xl lg:h-full lg:pt-16 lg:text-5xl lg:w-1/2">
        {/* logo */}
        <div className="w-fit h-fit bg-gradient-to-r from-[#efb4cb] to-[#e1588c] flex items-center justify-center rounded-e-3xl text-[#edef51] outline outline-8 pl-7 px-5 py-3 lg:px-20 lg:pl-28 lg:py-5">
          <motion.span
            className="mr-3 text-8xl "
            variants={{
              initial: { x: -300 },
              final: { x: 0 },
            }}
            initial="initial"
            animate="final"
            transition={{ delay: 1, duration: 2, ease: "backInOut" }}
          >
            <RiShoppingCartFill />
          </motion.span>
          {/* ---- */}
          <motion.span
            variants={{
              initial: { opacity: 0, y: -100 },
              final: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="final"
            transition={{ delay: 0.5, duration: 1.5, ease: "backInOut" }}
          >
            ZED-KART
          </motion.span>
        </div>
      </div>
      {/* ---------------------- */}

      {/* company animations */}

      <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center justify-end pb-10">
        <div className=" w-[80%] h-fit text-center p-3 px-10 flex flex-col gap-3 rounded-2xl bg-gradient-to-br outline outline-4 from-[#efb4cb]/70 via-[#e876a2]/80 to-[#e1588c] drop-shadow-2xl">
          <h3 className="underline font-semibold text-3xl mb-4">Top Brands</h3>

          {/* --------Row 1 ---------- */}
          <marquee behavior="scroll" direction="left">
            <div className="h-[10vh] w-fit m-auto flex items-center gap-4 p-2">
              <span className="min-w-[6vw]  max-w-[6vw]">
                <img
                  src="\src\Components\Home\CompanyImages\adidas.png"
                  alt=""
                />
              </span>
              <span className=" min-w-[6vw] max-w-[6vw]">
                <img
                  className=" "
                  src="\src\Components\Home\CompanyImages\Nike.png"
                  alt=""
                />
              </span>
              <span className=" min-w-[6vw] max-w-[6vw] ">
                <img
                  className=""
                  src="\src\Components\Home\CompanyImages\puma.webp"
                  alt=""
                />
              </span>
              <span className=" min-w-[6vw] max-w-[6vw]">
                <img
                  className="bg-contain "
                  src="\src\Components\Home\CompanyImages\peter england.png"
                  alt=""
                />
              </span>
              <span className=" min-w-[6vw] max-w-[6vw]">
                <img
                  className="bg-contain "
                  src="\src\Components\Home\CompanyImages\adidas.png"
                  alt=""
                />
              </span>
              <span className=" min-w-[6vw] max-w-[6vw]">
                <img
                  className="bg-contain "
                  src="\src\Components\Home\CompanyImages\Loreal.jpg"
                  alt=""
                />
              </span>
              <span className=" min-w-[6vw] max-w-[6vw]">
                <img
                  className="bg-contain "
                  src="\src\Components\Home\CompanyImages\Rolex.jpeg"
                  alt=""
                />
              </span>
            </div>
          </marquee>
          {/* ------------------------ */}

          {/* --------- Row 2 ---------------- */}
          <marquee behavior="scroll" direction="left">
            <div className="h-fit w-fit m-auto flex items-center gap-4 p-2">
              <span className="min-h-fit max-h-[10vh] min-w-[6vw] max-w-[6vw]">
                <img
                  src="\src\Components\Home\CompanyImages\oneplus.png"
                  alt=""
                />
              </span>
              <span className="min-h-fit max-h-[10vh] min-w-[6vw] max-w-[6vw]">
                <img
                  className=" "
                  src="\src\Components\Home\CompanyImages\asus.jpg"
                  alt=""
                />
              </span>
              <span className="min-h-[6vh] max-h-fit min-w-[6vw] max-w-[6vw]">
                <img
                  className="bg-cover"
                  src="\src\Components\Home\CompanyImages\Hp.png"
                  alt=""
                />
              </span>
              <span className=" min-h-fit max-h-[10vh] min-w-[6vw] max-w-[6vw]">
                <img
                  className="bg-contain "
                  src="\src\Components\Home\CompanyImages\Dell.png"
                  alt=""
                />
              </span>
              <span className="min-h-fit max-h-[10vh] min-w-[6vw] max-w-[6vw]">
                <img
                  className="bg-contain "
                  src="\src\Components\Home\CompanyImages\Iphone.jpg"
                  alt=""
                />
              </span>
              <span className=" min-h-fit max-h-[10vh] min-w-[6vw] max-w-[6vw]">
                <img
                  className="bg-contain "
                  src="\src\Components\Home\CompanyImages\Motorola.png"
                  alt=""
                />
              </span>
              <span className="min-h-fit max-h-[10vh] min-w-[6vw] max-w-[6vw]">
                <img
                  className="bg-contain "
                  src="\src\Components\Home\CompanyImages\oppo.jpg"
                  alt=""
                />
              </span>
            </div>
          </marquee>
          {/* -------------------------------- */}
        </div>
      </div>

      {/* ---------------------- */}
    </div>
  );
}

export default HeroSection;
