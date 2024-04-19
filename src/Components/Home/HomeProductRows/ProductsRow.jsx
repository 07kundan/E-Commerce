import React from "react";

function ProductsRow() {
  return (
    <>
      {/* <HeadingMarque value="trendings🔥" /> */}

      <div className="h-[90vh] w-[90vw] m-auto my-16 text-3xl flex justify-center items-center relative">
        <h2 className="bg-slate-600">Top Deals 🔥</h2>

        <img
          className="h-1/2 w-1/5 rounded-3xl bg-purple-600 absolute left-0 top-0"
          src=""
          alt=""
        />
        <img
          className="h-1/2 w-1/5 rounded-3xl bg-purple-600 absolute left-4 -bottom-2"
          src=""
          alt=""
        />
        <img
          className="h-1/2 w-1/5 rounded-3xl bg-purple-600 absolute right-0 top-0"
          src=""
          alt=""
        />
        <img
          className="h-1/2 w-1/5 rounded-3xl bg-purple-600 absolute right-0 -bottom-4"
          src=""
          alt=""
        />
        <img
          className="h-1/2 w-1/5 rounded-3xl bg-purple-600 absolute -top-5 rotate-90"
          src=""
          alt=""
        />
        <img
          className="h-1/2 w-1/5 rounded-3xl bg-purple-600 absolute -bottom-4 rotate-90"
          src=""
          alt=""
        />
      </div>
    </>
  );
}

export default ProductsRow;
