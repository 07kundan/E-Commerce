import React, { useEffect, useState } from "react";
import { fetchAllProductsCategories } from "../../API";

function AllCategoriesList() {
  const [CategoryList, setCategoryList] = useState([]);
  useEffect(() => {
    try {
      fetchAllProductsCategories()
        .then((response) => {
          // Assuming response is already an array
          setCategoryList(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(CategoryList);
  return (
    <div className="w-[90%] h-fit bg-purple-900 m-auto mb-10 p-2">
      <h3 className="text-center text-4xl font-semibold underline">
        All categories
      </h3>
      <div className="h w-full flex justify-center ">
        {/* Categories List */}
        <div className="w-1/2 bg-slate-600 p-6 px-10">
          {CategoryList.map((item) => (
            <li key={item}>{item.toUpperCase()}</li>
          ))}
        </div>

        {/* Category Images */}
        <div className="bg-lime-700 w-1/2 h-full">
          <img src="" alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            minima, quod minus maxime nihil perspiciatis nulla exercitationem
            aut alias, impedit dolores provident itaque doloremque ut amet unde
            quasi. Iusto id commodi quaerat corrupti praesentium?
          </span>
        </div>
      </div>
    </div>
  );
}

export default AllCategoriesList;
