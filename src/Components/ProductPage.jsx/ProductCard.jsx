import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosStar } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import {
  Autoplay,
  Pagination,
  Navigation,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import { FaHeart } from "react-icons/fa";
import { useUser } from "../../store/contextApis";
import { useNavigate } from "react-router-dom";

function ProductCard({
  title,
  description,
  rating,
  price,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
}) {
  const { cartProduct, setCartProduct } = useUser();
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();
  // Add to Cart

  const addToCart = () => {
    let newArray = [];
    if (!added) {
      newArray = [
        ...cartProduct,
        {
          name: `${title}`,
          price: `${price}`,
          image: `${imageUrl1}`,
          rating: `${rating}`,
          quantity: 1,
        },
      ];
      setCartProduct(newArray);
    }
    if (added) {
      navigate("/cart");
    }
    setAdded(!added);
    console.log("clicked");
  };

  return (
    <div className="w-full h-full  flex gap-3 p-8 px-14">
      {/* description / Left section*/}
      <div className="w-full h-full p-4  ">
        <div>
          <span className="font-bold text-2xl ">{title}</span>
          <span className="font-semibold text-lg"> {description}.</span>
        </div>
        <div className="text-sm font-semibold my-1">#OnlyOnZed-kart</div>
        <div className="flex gap-2 items-center">
          <span className="flex items-center gap-1 bg-purple-600 bg-opacity-60 px-2 my-1 rounded-lg">
            <IoIosStar />
            <span>{rating} </span>
          </span>
          <span>34,400 ratings</span>
        </div>
        <div className="font-bold my-2 text-2xl">
          Price-
          <span className="text-2xl"> {price}$ </span>
          <span className="font-normal line-through ml-1 text-lg">
            {`${Math.round(price * (Math.random() * (3 - 1) + 1))}$`}
          </span>
        </div>
        <div className="leading-loose">
          <div className="font-bold text-xl underline mt-6">
            Available offers
          </div>
          <div>
            Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using
            Flipkart UPIT&C
          </div>
          <div>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</div>
          <div>
            Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up to
            ₹1,500 on orders of ₹5,000 and aboveT&C
          </div>
          <div className="">
            Special PriceGet extra 35% off (price inclusive of
            cashback/coupon)T&C
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-[40%] h-full flex flex-col justify-center gap-7">
        {/* Images */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation, Pagination, FreeMode, Thumbs]}
          className="w-4/5 max-h-[80%]"
        >
          <SwiperSlide>
            <img src={`${imageUrl1}`} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${imageUrl3}`} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${imageUrl3}`} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${imageUrl4}`} alt="img" />
          </SwiperSlide>
        </Swiper>
        {/* bottom */}
        <div className=" flex justify-center gap-6 items-center">
          <span className="text-2xl">
            <FaHeart />
          </span>
          <button
            className="py-1 px-2 bg-yellow-800 rounded-lg text-xl"
            onClick={addToCart}
          >
            {added ? "Go to Cart" : "Add to Cart"}
          </button>
          <span className="py-1 px-2 bg-yellow-800 rounded-lg text-xl">
            Buy Now
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
