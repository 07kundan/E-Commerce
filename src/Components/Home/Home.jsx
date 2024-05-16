import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./HomeComponents/HeroSection";
import BGCarousel from "./HomeComponents/BGCarousel";
import Emojis from "./HomeComponents/Emojis";
import CategoryBox from "./HomeComponents/CategoryBox";
import AllCategoriesList from "./HomeComponents/AllCategoriesList";
import Footer from "../footer/Footer";
import DealsPage from "./HomeComponents/DealsPages/DealsPage";
import { useInView } from "framer-motion";
import phone1 from "../../assets/Images/CategoryBoxImages/phone1.jpg";
import phone2 from "../../assets/Images/CategoryBoxImages/phone2.jpg";
import phone3 from "../../assets/Images/CategoryBoxImages/phone3.jpg";
import phone4 from "../../assets/Images/CategoryBoxImages/phone4.jpg";
import watch1 from "../../assets/Images/CategoryBoxImages/watch1.jpg";
import watch2 from "../../assets/Images/CategoryBoxImages/watch2.jpg";
import watch3 from "../../assets/Images/CategoryBoxImages/watch3.jpg";
import watch4 from "../../assets/Images/CategoryBoxImages/watch4.jpg";
import fragnances1 from "../../assets/Images/CategoryBoxImages/fragnances1.jpg";
import fragnances2 from "../../assets/Images/CategoryBoxImages/fragnances2.jpg";
import fragnances3 from "../../assets/Images/CategoryBoxImages/fragnances3.jpg";
import fragnances4 from "../../assets/Images/CategoryBoxImages/fragnances4.jpg";

// ----------------- Icons -------------------------
import { GiSonicShoes } from "react-icons/gi";
import { IoShirtSharp } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { PiSunglassesBold } from "react-icons/pi";

// HOME page
const emojis = [
  { emoji: "🥶", Id: "cool", toPage: "mens-shoes", icon: <GiSonicShoes /> },
  { emoji: "😍", Id: "top", toPage: "tops", icon: <IoShirtSharp /> },
  {
    emoji: "🔥",
    Id: "hot",
    toPage: "groceries",
    icon: <MdLocalGroceryStore />,
  },
  {
    emoji: "😎",
    Id: "smart",
    toPage: "sunglasses",
    icon: <PiSunglassesBold />,
  },
];

const CategoryBoxImages = {
  smartphones: {
    descriptionM: (
      <>
        <div className="leading-snug text-lg font-medium font-[]">
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
        <div className=" w-[85%] text-xl font-semibold">
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
        <p className="bg-purple-950 text-amber-400 p-3 px-5 text-lg rounded-xl font-rubik font-extrabold">
          " Stay connected, stay empowered, and stay ahead of the curve with the
          latest smartphones available on ZED-KART. Elevate your digital
          experience today! "
        </p>
      </div>
    ),
    phone1,
    phone2,
    phone3,
    phone4,
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
        <p className="bg-purple-950 text-amber-400 p-3 px-5 text-lg rounded-xl font-rubik font-extrabold">
          " Elevate your style with precision and elegance. Discover the perfect
          timepiece for every moment. "
        </p>
      </div>
    ),
    watch1,
    watch2,
    watch3,
    watch4,
  },
  fragnance: {
    descriptionM: (
      <>
        <div className="leading-snug text-lg font-medium">
          <p>
            Immerse yourself in a world of captivating aromas with our exclusive
            collection of fragrances, meticulously selected to cater to every
            personality and occasion. Our E-commerce platform offers a diverse
            array of perfumes and colognes, crafted by renowned brands and
            expert perfumers who understand the art of scent.
          </p>
        </div>
      </>
    ),
    descriptionB: (
      <div className=" flex flex-col items-center gap-8">
        <div className=" w-4/5 text-xl font-semibold">
          <div className="text-5xl">{`<`}</div>
          <p className="leading-snug pl-4">
            Immerse yourself in a world of captivating aromas with our exclusive
            collection of fragrances, meticulously selected to cater to every
            personality and occasion. Our E-commerce platform offers a diverse
            array of perfumes and colognes, crafted by renowned brands and
            expert perfumers who understand the art of scent.
          </p>
          <div className="text-5xl">{`/>`}</div>
        </div>
        <p className="bg-purple-950 text-amber-400 p-3 px-5 text-lg rounded-xl font-rubik font-extrabold">
          " Discover your signature scent with our exquisite fragrances. Elevate
          every moment with a touch of elegance. "
        </p>
      </div>
    ),
    fragnances1,
    fragnances2,
    fragnances3,
    fragnances4,
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
          <DealsPage
            key={item.Id}
            Id={item.Id}
            emoji={item.emoji}
            toPage={item.toPage}
            icon={item.icon}
          />
        ))}
      </div>

      <CategoryBox
        category={"smartphones"}
        description={
          window.innerWidth < 1024
            ? CategoryBoxImages.smartphones.descriptionM
            : CategoryBoxImages.smartphones.descriptionB
        }
        Image1={CategoryBoxImages.smartphones.phone1}
        Image2={CategoryBoxImages.smartphones.phone2}
        Image3={CategoryBoxImages.smartphones.phone3}
        Image4={CategoryBoxImages.smartphones.phone4}
      />
      <CategoryBox
        category={`mens-watches`}
        description={
          window.innerWidth < 1024
            ? CategoryBoxImages.watches.descriptionM
            : CategoryBoxImages.watches.descriptionB
        }
        Image1={CategoryBoxImages.watches.watch1}
        Image2={CategoryBoxImages.watches.watch2}
        Image3={CategoryBoxImages.watches.watch3}
        Image4={CategoryBoxImages.watches.watch4}
      />
      <CategoryBox
        category={"fragrances"}
        description={
          window.innerWidth < 1024
            ? CategoryBoxImages.fragnance.descriptionM
            : CategoryBoxImages.fragnance.descriptionB
        }
        Image1={CategoryBoxImages.fragnance.fragnances1}
        Image2={CategoryBoxImages.fragnance.fragnances2}
        Image3={CategoryBoxImages.fragnance.fragnances3}
        Image4={CategoryBoxImages.fragnance.fragnances4}
      />
      <AllCategoriesList />
      <Footer />
    </div>
  );
}

export default Home;
