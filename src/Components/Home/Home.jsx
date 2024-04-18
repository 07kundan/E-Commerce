import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import BGCarousel from "./BGCarousel";
import ProductsRow from "./HomeProductRows/ProductsRow";
import ProductColum from "./HomeProductRows/ProductColum";

function Home() {
  return (
    <>
      <NavBar />
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
