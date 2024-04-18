import React from "react";
import HeroSection from "./HeroSection";
import BGCarousel from "./BGCarousel";
import ProductsRow from "./HomeProductRows/ProductsRow";
import ProductColum from "./HomeProductRows/ProductColum";
import Emojis from "./Emojis";

// HOME page

function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 lg:top-28 z-50 ">
        <Emojis />
      </div>
      <BGCarousel />
      <ProductsRow />
      <div className="flex">
        <ProductColum />
        <ProductColum />
      </div>
    </div>
  );
}

export default Home;
