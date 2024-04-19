import React from "react";
import HeroSection from "./HeroSection";
import BGCarousel from "./BGCarousel";
import ProductsRow from "./HomeProductRows/ProductsRow";
import Emojis from "./Emojis";
import CategoryBox from "./HomeProductRows/CategoryBox";
import AllCategoriesList from "./HomeProductRows/AllCategoriesList";

// HOME page

function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 lg:top-20 z-50 ">
        <Emojis />
      </div>
      <BGCarousel />
      <ProductsRow />
      <CategoryBox />
      <AllCategoriesList />
    </div>
  );
}

export default Home;
