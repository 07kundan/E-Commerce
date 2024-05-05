import React, { useState } from "react";
import { useUser } from "../../store/contextApis";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const { wishlistItems, setWishlistItems } = useUser();
  const removeFromWishlist = (itemToRemove) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.name !== itemToRemove
    );
    setWishlistItems(updatedWishlist);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto mt-8 text-center">
        <p className="text-xl">No items added to wishlist.</p>
      </div>
    );
  }

  return (
    <div className=" w-screen flex justify-start px-16">
      <div className="w-full  mt-20 p-4">
        <center className="text-5xl font-semibold mb-4 text-white ">
          Wishlist
        </center>
        <div className=" w-full flex justify-center gap-3 flex-wrap ">
          {wishlistItems.map((item) => (
            <div key={item.name} className="min-h-[45vh] max-h-[45vh] w-[30%] ">
              <WishlistCard
                title={item.name}
                rating={item.rating}
                price={item.price}
                image={item.image}
                remove={removeFromWishlist}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
