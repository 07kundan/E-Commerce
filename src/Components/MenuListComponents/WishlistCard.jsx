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
    <div className="h-full flex flex-col justify-center p-4 bg-slate-800/60 rounded-xl relative overflow-hidden">
      {/* remove button */}
      <button
        className="absolute right-0 top-0 bg-yellow-800 p-2 rounded-es-xl text-xl"
        onClick={() => {
          remove(title);
        }}
      >
        <MdOutlineClose />
      </button>
      {/* --------- */}
      <div className="h-full flex">
        {/* description / Left section*/}
        <div className=" w-[70%] flex flex-col justify-center">
          <div>
            <span className="font-bold text-lg ">{title}</span>
          </div>
          <div className="text-sm font-semibold my-1">#OnlyOnZed-kart</div>
          <div className="flex gap-2 items-center">
            <span className="flex items-center gap-1 bg-purple-600 bg-opacity-60 px-2 my-1 rounded-lg">
              <IoIosStar />
              <span>{rating} </span>
            </span>
            <span>34,400 ratings</span>
          </div>
          <div className="font-bold my-2 text-xl">
            Price-
            <span className="text-xl"> {price}$ </span>
            <span className="font-normal line-through ml-1 text-sm">
              {`${Math.round(price * (Math.random() * (3 - 1) + 1))}$`}
            </span>
          </div>
        </div>

        {/* Right section */}
        <div className="w-[40%] h-full flex justify-center items-center ">
          {/* Images */}
          <div className="w-4/5 max-h-[80%]">
            <img src={`${image}`} alt="img" />
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex justify-center gap-6">
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
  );
}

export default WishlistCard;
