import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./HomeComponents/HeroSection";
import BGCarousel from "./HomeComponents/BGCarousel";
import Emojis from "./HomeComponents/Emojis";
import CategoryBox from "./HomeComponents/CategoryBox";
import AllCategoriesList from "./HomeComponents/AllCategoriesList";
import Footer from "./Footer";
import { useInView, useScroll } from "framer-motion";
import DealsPage from "./HomeComponents/DealsPages/DealsPage";

// HOME page
const emojis = [
  { emoji: "😍", Id: "top" },
  { emoji: "🔥", Id: "hot" },
  { emoji: "😎", Id: "smart" },
  { emoji: "🥶", Id: "cool" },
];

function HomeToLogin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30%" });

  return (
    <div className="">
      <HeroSection />

      {isInView ? (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 lg:top-20 z-50 ">
          <Emojis emojis={emojis} />
        </div>
      ) : null}

      <BGCarousel />
      <div ref={ref} className="">
        {emojis.map((item) => (
          <DealsPage key={item.Id} Id={item.Id} emoji={item.emoji} />
        ))}
      </div>
      <CategoryBox category={"SmartPhones"} />
      <CategoryBox category={`Women's wear`} />
      <CategoryBox category={"Men's wear"} />
      <AllCategoriesList />
      <Footer />
    </div>
  );
}

export default HomeToLogin;
