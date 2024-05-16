import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { useUser } from "../../../store/contextApis";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

function Cart() {
  const { cartProduct, setCartProduct } = useUser();

  const total = cartProduct.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const increaseQuantity = (productName) => {
    const updatedcartProduct = cartProduct.map((product) => {
      if (product.name === productName) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCartProduct(updatedcartProduct);
  };

  const decreaseQuantity = (productName) => {
    const updatedcartProduct = cartProduct.map((product) => {
      if (product.name === productName && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCartProduct(updatedcartProduct);
  };

  const removeItem = (productName) => {
    const updatedcartProduct = cartProduct.filter(
      (product) => product.name !== productName
    );
    setCartProduct(updatedcartProduct);
  };

  return (
    <div className="w-screen pt-14">
      <h1 className="text-4xl font-semibold mb-8"></h1>
      {cartProduct.length == 0 ? (
        <p className="text-center text-3xl font-light flex items-center gap-6 justify-center">
          <IoMdCart /> Cart is empty
        </p>
      ) : (
        <>
          <div className="w-[92%] m-auto flex flex-col gap-4 lg:flex-row lg:justify-center lg:flex-wrap">
            {cartProduct.map((product) => (
              <CartCard
                name={product.name}
                price={product.price}
                image={product.image}
                quantity={product.quantity}
                rating={product.rating}
                removeItem={removeItem}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))}
          </div>

          <div className=" w-11/12 border border-[#c606b9] rounded-2xl p-3 text-center font-semibold fixed bottom-7 left-1/2 -translate-x-1/2 flex justify-around lg:w-1/2 text-sm lg:text-lg bg-transparent/50">
            <div>Total-: {total}$ </div>
            <Link to={"/"}>
              <button>
                {" "}
                Proceed to Buy ({cartProduct.length}{" "}
                {cartProduct.length == 1 ? "item" : "items"})
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
