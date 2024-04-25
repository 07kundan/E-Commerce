import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { useUser } from "../../store/contextApis";

function Cart() {
  const { cartProduct, setCartProduct } = useUser();

  const total = cartProduct.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const increaseQuantity = (productId) => {
    const updatedcartProduct = cartProduct.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCartProduct(updatedcartProduct);
  };

  const decreaseQuantity = (productId) => {
    const updatedcartProduct = cartProduct.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCartProduct(updatedcartProduct);
  };

  const removeItem = (productId) => {
    const updatedcartProduct = cartProduct.filter(
      (product) => product.id !== productId
    );
    setCartProduct(updatedcartProduct);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-8 text-white">Your Cart</h1>
      {cartProduct.length == 0 ? (
        <p className="text-white text-center text-3xl font-light flex items-center gap-6 justify-center">
          <IoMdCart /> Cart is empty
        </p>
      ) : (
        <>
          <div className="bg-[floralwhite] shadow-md rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-500 border-b">
                <tr>
                  {["Product", "Price", "Rating", "Quantity", "Remove"].map(
                    (item) => (
                      <th className="py-3 px-4 text-left font-medium">
                        {item}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {cartProduct.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-4 px-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 mr-4 object-cover object-center rounded-md inline-block"
                      />
                      {product.name}
                    </td>
                    <td className="py-4 px-6">Rs. {product.price}</td>
                    <td className="py-4 px-6">{product.rating.toFixed(1)}</td>
                    <td className="py-4 px-6">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                        onClick={() => increaseQuantity(product.id)}
                      >
                        +
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                        onClick={() => decreaseQuantity(product.id)}
                      >
                        -
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                        onClick={() => removeItem(product.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="border-t">
                  <td colSpan="3" className="py-4 px-6 font-semibold">
                    Total
                  </td>
                  <td colSpan="2" className="py-4 px-6 font-semibold">
                    Rs. {total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-300 rounded-md mt-8 p-3 text-center">
            Proceed to Buy ({cartProduct.length}{" "}
            {cartProduct.length == 1 ? "item" : "items"})
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
