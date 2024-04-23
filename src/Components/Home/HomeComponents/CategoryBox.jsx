import React from "react";

function CategoryBox({ category }) {
  return (
    <>
      <div className="w-[90%] h-[92vh] bg-purple-900 m-auto mb-10 p-3 overflow-hidden ">
        <h3 className="h-fit text-3xl font-semibold text-center underline">
          {category}
        </h3>
        <div className="h-[92%] flex flex-col-reverse w-full lg:flex-row lg:gap-3 lg:h-fit  bg-lime-600 ">
          {/* descroption */}
          <section className="w-full h-1/2 bg-lime-950 lg:w-1/2 lg:h-full flex justify-center items-center p-8 text-justify">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              voluptates ab sunt temporibus. Delectus porro, error obcaecati
              eveniet veniam incidunt debitis laborum quaerat necessitatibus, ut
              fugit nulla dignissimos sed placeat aut enim? Earum, asperiores
              obcaecati dicta dolores accusantium culpa nihil.
            </p>
          </section>

          {/* images */}
          <section className="bg-lime-800 w-full h-1/2 lg:w-1/2 lg:h-full flex items-center justify-center">
            <img className="h-[90%] w-[70%] bg-lime-400" src="" alt="" />
          </section>
        </div>
        <div className=" bg-amber-700 p-2">see all</div>
      </div>
    </>
  );
}

export default CategoryBox;
