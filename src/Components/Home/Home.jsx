import React from "react";
import HeroSection from "./HomeComponents/HeroSection";
import BGCarousel from "./HomeComponents/BGCarousel";
import ProductsRow from "./HomeComponents/ProductsRow";
import Emojis from "./HomeComponents/Emojis";
import CategoryBox from "./HomeComponents/CategoryBox";
import AllCategoriesList from "./HomeComponents/AllCategoriesList";
import Footer from "./Footer";

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
      <CategoryBox category={"SmartPhones"} />
      <CategoryBox category={`Women's wear`} />
      <CategoryBox category={"Men's wear"} />
      <AllCategoriesList />
      <Footer />
    </div>
  );
}

export default Home;
