import React, { useState } from "react";
import { useUser } from "../../store/contextApis";

const Wishlist = () => {
  const { wishlistItems, setWishlistItems } = useUser();
  const removeFromWishlist = (idToRemove) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.id !== idToRemove
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
    <div className="container mx-auto mt-8">
      <h2 className="text-5xl font-semibold mb-4 text-white">Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wishlistItems.map((item, index) => (
          <div
            key={item.id}
            className={`bg-[ghostwhite] rounded-md shadow p-4 ${
              wishlistItems.length === 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover mr-4 rounded-xl border-2 border-[#a6a6a6]"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Rating: {item.rating}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Rs. {item.price}</span>
              <div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2 focus:outline-none"
                  onClick={() => {} /* Handle buy functionality */}
                >
                  Buy
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
