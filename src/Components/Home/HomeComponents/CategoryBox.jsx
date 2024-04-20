import React from "react";

function CategoryBox({ category }) {
  return (
    <>
      <div className="w-[90%] h-[90vh] bg-purple-900 m-auto mb-10">
        <h3 className="h-fit text-3xl font-semibold text-center underline">
          {category}
        </h3>
        <div className="flex gap-3 h-[92%] w-full bg-lime-600">
          {/* descroption */}
          <section className="bg-lime-950 w-1/2 h-full flex justify-center items-center p-8 text-justify">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              voluptates ab sunt temporibus. Delectus porro, error obcaecati
              eveniet veniam incidunt debitis laborum quaerat necessitatibus, ut
              fugit nulla dignissimos sed placeat aut enim? Earum, asperiores
              obcaecati dicta dolores accusantium culpa nihil.
            </p>
          </section>

          {/* images */}
          <section className="bg-lime-950 w-1/2 h-full flex items-center justify-center">
            <img className="h-[90%] w-[70%] bg-lime-400" src="" alt="" />
          </section>
        </div>
      </div>
    </>
  );
}

export default CategoryBox;
