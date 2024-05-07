import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./HomeComponents/HeroSection";
import BGCarousel from "./HomeComponents/BGCarousel";
import Emojis from "./HomeComponents/Emojis";
import CategoryBox from "./HomeComponents/CategoryBox";
import AllCategoriesList from "./HomeComponents/AllCategoriesList";
import Footer from "../Footer";
import DealsPage from "./HomeComponents/DealsPages/DealsPage";
import { useInView } from "framer-motion";
import imgageUrl1 from "../../assets/Images/CategoryBoxImages/phone.png";
import imgageUrl2 from "../../assets/Images/CategoryBoxImages/phone2.jpg";
import imgageUrl3 from "../../assets/Images/CategoryBoxImages/phone3.jpg";
// HOME page
const emojis = [
  { emoji: "😍", Id: "top" },
  { emoji: "🔥", Id: "hot" },
  { emoji: "😎", Id: "smart" },
  { emoji: "🥶", Id: "cool" },
];

const CategoryBoxImages = {
  smartphones: {
    descriptionM: (
      <>
        <div className="leading-snug text-lg font-medium">
          <p>
            Discover the latest revolution in communication and connectivity
            with our extensive range of smartphones, meticulously curated for
            every need and preference. From sleek designs to cutting-edge
            technology, ZED-KART offers an unparalleled selection of smartphones
            to cater to every lifestyle and budget.
          </p>
        </div>
      </>
    ),
    descriptionB: (
      <div className=" flex flex-col items-center gap-8">
        <div className=" w-4/5 text-xl font-semibold">
          <div className="text-5xl">{`<`}</div>
          <p className="leading-snug pl-4">
            Discover the latest revolution in communication and connectivity
            with our extensive range of smartphones, meticulously curated for
            every need and preference. From sleek designs to cutting-edge
            technology, ZED-KART offers an unparalleled selection of smartphones
            to cater to every lifestyle and budget.
          </p>
          <div className="text-5xl">{`/>`}</div>
        </div>
        <p className="bg-slate-600/70 p-3 px-5 text-lg font-bold rounded-xl">
          " Stay connected, stay empowered, and stay ahead of the curve with the
          latest smartphones available on ZED-KART. Elevate your digital
          experience today! "
        </p>
      </div>
    ),
    imgageUrl1,
    imgageUrl2,
    imgageUrl3,
  },
  watches: {
    descriptionM: (
      <>
        <div className="leading-snug text-lg font-medium">
          <p>
            Step into the realm of timeless elegance and precision engineering
            with our exquisite collection of watches, meticulously crafted to
            elevate your style and punctuate your every moment with
            sophistication. ZED-KART presents an exclusive array of timepieces
            that seamlessly blend fashion-forward design with unparalleled
            functionality
          </p>
        </div>
      </>
    ),
    descriptionB: (
      <div className=" flex flex-col items-center gap-8">
        <div className=" w-4/5 text-xl font-semibold">
          <div className="text-5xl">{`<`}</div>
          <p className="leading-snug pl-4">
            Step into the realm of timeless elegance and precision engineering
            with our exquisite collection of watches, meticulously crafted to
            elevate your style and punctuate your every moment with
            sophistication. ZED-KART presents an exclusive array of timepieces
            that seamlessly blend fashion-forward design with unparalleled
            functionality
          </p>
          <div className="text-5xl">{`/>`}</div>
        </div>
        <p className="bg-slate-600/70 p-3 px-5 text-lg font-bold rounded-xl">
          " Elevate your style with precision and elegance. Discover the perfect
          timepiece for every moment. "
        </p>
      </div>
    ),
    imgageUrl1,
    imgageUrl2,
    imgageUrl3,
  },
  shoes: {
    descriptionM: (
      <>
        <div className="leading-snug text-lg font-medium">
          <p>
            Step into a world of style and comfort with our curated collection
            of shoes, designed to complement every stride and elevate every
            outfit. Explore an array of footwear options crafted with premium
            materials and expert craftsmanship, ensuring both fashion and
            functionality are seamlessly integrated into each step you take.
          </p>
        </div>
      </>
    ),
    descriptionB: (
      <div className=" flex flex-col items-center gap-8">
        <div className=" w-4/5 text-xl font-semibold">
          <div className="text-5xl">{`<`}</div>
          <p className="leading-snug pl-4">
            Step into a world of style and comfort with our curated collection
            of shoes, designed to complement every stride and elevate every
            outfit. Explore an array of footwear options crafted with premium
            materials and expert craftsmanship, ensuring both fashion and
            functionality are seamlessly integrated into each step you take.
          </p>
          <div className="text-5xl">{`/>`}</div>
        </div>
        <p className="bg-slate-600/70 p-3 px-5 text-lg font-bold rounded-xl">
          " Find your perfect pair: style meets comfort. Step up your shoe game
          with our diverse collection "
        </p>
      </div>
    ),
    imgageUrl1,
    imgageUrl2,
    imgageUrl3,
  },
};

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30%" });

  return (
    <div className="">
      <HeroSection />
      <BGCarousel />

      {isInView ? (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 lg:top-20 z-50 ">
          <Emojis emojis={emojis} />
        </div>
      ) : null}

      <div ref={ref} className="">
        {emojis.map((item) => (
          <DealsPage key={item.Id} Id={item.Id} emoji={item.emoji} />
        ))}
      </div>

      <CategoryBox
        category={"smartphones"}
        description={
          window.innerWidth < 1024
            ? CategoryBoxImages.smartphones.descriptionM
            : CategoryBoxImages.smartphones.descriptionB
        }
        Image1={CategoryBoxImages.smartphones.imgageUrl1}
        Image2={CategoryBoxImages.smartphones.imgageUrl2}
        Image3={CategoryBoxImages.smartphones.imgageUrl3}
      />
      <CategoryBox
        category={`mens-watches`}
        description={
          window.innerWidth < 1024
            ? CategoryBoxImages.watches.descriptionM
            : CategoryBoxImages.watches.descriptionB
        }
        Image1={CategoryBoxImages.smartphones.imgageUrl1}
        Image2={CategoryBoxImages.smartphones.imgageUrl2}
        Image3={CategoryBoxImages.smartphones.imgageUrl3}
      />
      <CategoryBox
        category={"mens-shoes"}
        description={
          window.innerWidth < 1024
            ? CategoryBoxImages.shoes.descriptionM
            : CategoryBoxImages.shoes.descriptionB
        }
        Image1={CategoryBoxImages.smartphones.imgageUrl1}
        Image2={CategoryBoxImages.smartphones.imgageUrl2}
        Image3={CategoryBoxImages.smartphones.imgageUrl3}
      />
      <AllCategoriesList />
      <Footer />
    </div>
  );
}

export default Home;
