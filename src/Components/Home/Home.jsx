import React from "react";
import HeroSection from "./HeroSection";
import BGCarousel from "./BGCarousel";
import ProductsRow from "./HomeProductRows/ProductsRow";
import ProductColum from "./HomeProductRows/ProductColum";

// HOME page

function Home() {
  return (
    <>
      <HeroSection />
      <BGCarousel />
      <ProductsRow />
      <div className="flex">
        <ProductColum />
        <ProductColum />
      </div>
    </>
  );
}

export default Home;
