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
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useUser } from "../../store/contextApis";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({
  title,
  description,
  rating,
  price,
  imageUrl1,
  imageUrl2,
  imageUrl3,
}) {
  const { cartProduct, setCartProduct, wishlistItems, setWishlistItems } =
    useUser();
  const [added, setAdded] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(false);
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
  };
  // ---------------

  // Wishlist
  const handleWishlist = () => {
    let newArray = [];
    if (!wishlistAdded) {
      newArray = [
        ...wishlistItems,
        {
          name: `${title}`,
          price: `${price}`,
          image: `${imageUrl1}`,
          rating: `${rating}`,
        },
      ];
    }
    if (wishlistAdded) {
      newArray = wishlistItems.filter((product) => product.name !== title);
    }
    setWishlistItems(newArray);
    setWishlistAdded(!wishlistAdded);
  };

  return (
    <div className="w-full h-full bg-transparent/40 rounded-2xl border-4 border-[#c606b9] flex flex-col-reverse justify-center lg:flex-row lg:gap-3 lg:pl-10 lg:border-2 lg:border-[#c606b9]">
      {/* description / Left section*/}
      <div className="w-full h-1/2 px-5 flex items-center lg:block lg:h-full lg:p-4 ">
        <div className="">
          <div>
            <span className="font-bold text-2xl ">{title}</span> <br />
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
          {window.innerWidth > 1024 && (
            <div className="leading-loose">
              <div className="font-bold text-xl underline mt-6">
                Available offers
              </div>
              <div>
                Bank OfferGet ₹25* instant discount for the 1st Flipkart Order
                using Flipkart UPIT&C
              </div>
              <div>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</div>
              <div>
                Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up
                to ₹1,500 on orders of ₹5,000 and aboveT&C
              </div>
              <div className="">
                Special PriceGet extra 35% off (price inclusive of
                cashback/coupon)T&C
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right section/carousel */}
      <div className="w-full h-1/2 flex flex-col justify-center  lg:w-[40%] lg:h-full">
        {/* Images */}
        <div className=" w-full h-full flex items-center lg:h-3/4">
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
            className=" w-4/5 max-h-[80%] "
          >
            <SwiperSlide className="">
              <img src={`${imageUrl1}`} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${imageUrl2}`} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${imageUrl3}`} alt="img" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* bottom */}
        <div className=" flex justify-center gap-3 items-center lg:gap-6">
          <button className="text-2xl text-[#be2eb4]" onClick={handleWishlist}>
            {wishlistAdded ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button
            className="py-1 px-3 bg-amber-600 rounded-lg text-xl font-semibold"
            onClick={addToCart}
          >
            {added ? "Go to Cart" : "Add to Cart"}
          </button>
          <Link
            to={"/delivery"}
            className="py-1 px-3 bg-amber-600 rounded-lg text-xl font-semibold"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
