import React from "react";
import MyComponent from "./HeadingMarque";
import HeadingMarque from "./HeadingMarque";
import ProductsItems from "./ProductsItems";

function ProductsRow() {
  return (
    <>
      {/* <HeadingMarque value="trendings🔥" /> */}
      <HeadingMarque />
      <div className="bg-pink-600 h-[50vh]">
        <ProductsItems />
      </div>
    </>
  );
}

export default ProductsRow;
