import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { motion } from "framer-motion";

// Image
import adidas from "../../../../assets/CompanyImages/adidas.png";
import asus from "../../../../assets/CompanyImages/asus.jpg";
import dell from "../../../../assets/CompanyImages/Dell.png";
import hp from "../../../../assets/CompanyImages/Hp.png";
import iphone from "../../../../assets/CompanyImages/Iphone.png";
import loreal from "../../../../assets/CompanyImages/Loreal.png";
import motorola from "../../../../assets/CompanyImages/Motorola.png";
import nike from "../../../../assets/CompanyImages/Nike.jpg";
import oneplus from "../../../../assets/CompanyImages/oneplus.png";
import oppo from "../../../../assets/CompanyImages/oppo.png";
import peterengland from "../../../../assets/CompanyImages/peter england.png";
import puma from "../../../../assets/CompanyImages/puma.webp";
import Rolex from "../../../../assets/CompanyImages/Rolex.jpg";
import samsung from "../../../../assets/CompanyImages/samsung.jpg";
import Marque from "./Marque";

// -----------------

// It includes brand Name and some animations
function HeroSection() {
  return (
    <div className="  h-[80vh] lg:h-[90vh] w-screen lg:flex justify-center items-center text-2xl relative">
      {/* company name */}
      <div className="w-full h-1/2 font-bold flex items-center text-4xl pt-14 lg:h-full lg:pt-16 lg:text-5xl lg:w-1/2 ">
        {/* logo */}
        <div className="w-fit h-fit bg-gradient-to-r from-[#9c1796] via-[#40013d] to-[#290127] flex items-center justify-center rounded-e-3xl  outline outline-8 outline-[#0f000e] pl-7 px-5 py-3 lg:px-20 lg:pl-28 lg:py-5">
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
            className="font-sans"
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
        <div className=" w-[90%] h-fit text-center p-3 px-10 flex flex-col rounded-2xl bg-gradient-to-br outline outline-4 outline-[#0f000e] from-[#7e1379]  to-[#210120] drop-shadow-2xl lg:w-4/5">
          <h3 className="underline font-semibold text-3xl mb-4">Top Brands</h3>

          {/* --------Row 1 ---------- */}
          <marquee behavior="scroll" direction="left">
            <div className="h-[12vh] w-fit m-auto flex items-center gap-3 p-2">
              <Marque imageUrl={adidas} />
              <Marque imageUrl={asus} />
              <Marque imageUrl={dell} />
              <Marque imageUrl={hp} />
              <Marque imageUrl={iphone} />
              <Marque imageUrl={loreal} />
              <Marque imageUrl={motorola} />
            </div>
          </marquee>
          {/* ------------------------ */}

          {/* --------- Row 2 ---------------- */}
          <marquee behavior="scroll" direction="left">
            <div className="h-[12vh] w-fit m-auto flex items-center gap-3 p-2">
              <Marque imageUrl={peterengland} />
              <Marque imageUrl={oneplus} />
              <Marque imageUrl={nike} />
              <Marque imageUrl={oppo} />
              <Marque imageUrl={puma} />
              <Marque imageUrl={Rolex} />
              <Marque imageUrl={samsung} />
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
