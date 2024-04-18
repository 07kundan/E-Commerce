import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import BGCarousel from "./BGCarousel";
import ProductsRow from "./HomeProductRows/ProductsRow";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BGCarousel />
      <ProductsRow />
    </>
  );
}

export default Home;
