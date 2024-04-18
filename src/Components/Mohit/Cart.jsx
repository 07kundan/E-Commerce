import React from "react";

function Cart() {
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 10,
            image: "https://naturali.co.in/cdn/shop/files/Artboard1_098b3e41-330b-439c-aa43-cea296ec8dfc.jpg?v=1710743204",
            rating: 5,
            quantity: 1,
        },
        {
            id: 2,
            name: "Product 2",
            price: 20,
            image: "https://naturali.co.in/cdn/shop/files/Artboard1_098b3e41-330b-439c-aa43-cea296ec8dfc.jpg?v=1710743204",
            rating: 4.2,
            quantity: 1,
        },
        {
            id: 3,
            name: "Product 3",
            price: 30,
            image: "https://naturali.co.in/cdn/shop/files/Artboard1_098b3e41-330b-439c-aa43-cea296ec8dfc.jpg?v=1710743204",
            rating: 4.7,
            quantity: 1,
        },
    ];

    const total = products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
    );

    const increaseQuantity = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });
        // Update state or do other actions with updatedProducts
    };

    const decreaseQuantity = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId && product.quantity > 1) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });
        // Update state or do other actions with updatedProducts
    };

    const removeItem = (productId) => {
        const updatedProducts = products.filter(
            (product) => product.id !== productId
        );
        // Update state or do other actions with updatedProducts
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            {[
                                "Product",
                                "Price",
                                "Rating",
                                "Quantity",
                                "Remove",
                            ].map((item) => (
                                <th className="py-3 px-4 text-left font-medium">
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b">
                                <td className="py-4 px-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-12 h-12 mr-4 object-cover object-center rounded-md inline-block"
                                    />
                                    {product.name}
                                </td>
                                <td className="py-4 px-6">${product.price}</td>
                                <td className="py-4 px-6">
                                    {product.rating.toFixed(1)}
                                </td>
                                <td className="py-4 px-6">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                                        onClick={() =>
                                            increaseQuantity(product.id)
                                        }
                                    >
                                        +
                                    </button>
                                    <span className="mx-2">
                                        {product.quantity}
                                    </span>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                                        onClick={() =>
                                            decreaseQuantity(product.id)
                                        }
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
                                ${total}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart;
