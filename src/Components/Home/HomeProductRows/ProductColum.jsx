import React from "react";
import HeadingMarque from "./HeadingMarque";
import ProductsItems from "./ProductsItems";

function ProductColum() {
  return (
    <div className=" w-full">
      <HeadingMarque />
      <div className="h-[70vh] bg-lime-400">
        <ProductsItems />
      </div>
    </div>
  );
}

export default ProductColum;
