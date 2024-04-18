import React from "react";
import Card from "./Components/Card";

const products = [
    {
        id: 1,
        image: "https://naturali.co.in/cdn/shop/files/Artboard1_098b3e41-330b-439c-aa43-cea296ec8dfc.jpg?v=1710743204",
        name: "Shampoo",
        price: "100",
    },
    {
        id: 2,
        image: "https://www.letscurlup.com/cdn/shop/files/CurlHydratingConditioner.webp?v=1699440807",
        name: "Conditioner",
        price: "150",
    },
    {
        id: 3,
        image: "https://m.media-amazon.com/images/I/71FlO3G++cL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
        name: "Hair Oil",
        price: "200",
    },
];

const App = () => {
    return (
        <>
            <div className="flex justify-around w-full">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default App;
