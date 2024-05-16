import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../store/contextApis";

function WishlistCard({ title, rating, price, image, remove }) {
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
          image: `${image}`,
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

  return (
    <div className="h-full w-full flex flex-col justify-center p-4  border-2 border-[#c606b9] rounded-xl relative overflow-hidden">
      {/* remove button */}
      <button
        className="absolute right-0 top-0 bg-amber-600 p-2 rounded-es-xl text-xl"
        onClick={() => {
          remove(title);
        }}
      >
        <MdOutlineClose />
      </button>
      {/* --------- */}

      <div className="h-full flex flex-col-reverse items-center lg:flex-row lg:pb-3">
        {/* description / Left section*/}
        <div className=" w-full px-3 flex flex-col justify-around lg:w-[70%] lg:h-full">
          <div>
            <span className="font-bold text-lg ">{title}</span>
          </div>
          <div className="text-sm font-semibold my-1">#OnlyOnZed-kart</div>
          <div className="flex gap-2 items-center">
            <span className="flex items-center gap-1 bg-amber-400 bg-opacity-60 px-2 my-1 rounded-lg">
              <IoIosStar />
              <span>{rating} </span>
            </span>
            <span className="text-sm">34,400 ratings</span>
          </div>
          <div className="font-bold mb-2 mt-2  lg:mb-00 text-xl">
            Price-
            <span className="text-xl"> {price}$ </span>
            <span className="font-normal line-through ml-1 text-sm">
              {`${Math.round(price * (Math.random() * (3 - 1) + 1))}$`}
            </span>
          </div>
        </div>

        {/* Right section/Image */}
        <div className="w-1/2 h-full flex justify-center items-center lg:w-[40%]">
          {/* Images */}
          <div className="w-4/5 max-h-[80%]">
            <img src={`${image}`} alt="img" />
          </div>
        </div>
      </div>

      {/* button */}
      <div className="flex justify-center gap-3 font-semibold lg:gap-6">
        <button
          className="py-1 px-3 bg-amber-600 rounded-lg text-md lg:text-lg"
          onClick={addToCart}
        >
          {added ? "Go to Cart" : "Add to Cart"}
        </button>
        <button className="py-1 px-3 bg-amber-600 rounded-lg text-md lg:text-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default WishlistCard;
