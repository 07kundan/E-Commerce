import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { fetchAllProductsCategories } from "../../../store/API";
import { useUser } from "../../../store/contextApis";

const ImagesCollections = [
  { id: "smartphones", text: "smartphones" },
  { id: "laptops", text: "laptops" },
  { id: "fragrances", text: "fragrances" },
];

function AllCategoriesList() {
  const [CategoryList, setCategoryList] = useState([]);
  const [animateValue, setAnimateValue] = useState("smartphones");
  const { setCategory, current } = useUser();

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

  //

  // ----------------------------
  return (
    <div className="w-[90%] h-fit bg-purple-900 m-auto mb-10 p-2">
      <h3 className="text-center text-4xl font-semibold underline">
        All categories
      </h3>
      <div className="h-fit w-full flex justify-center items-center">
        {/* Categories List */}
        <div className="w-full lg:w-1/2 py-4 bg-slate-600 lg:p-6 lg:px-10 flex flex-wrap gap-4 justify-center lg:block">
          {CategoryList.map((item) => (
            <div key={item}>
              {/*  for mobile devices */}
              {window.innerWidth < 1024 && (
                <button
                  onClick={() => {
                    setCategory(item);
                  }}
                >
                  <Link
                    to={"/category"}
                    className="bg-emerald-700 list-none p-1"
                    key={item}
                  >
                    {item.toUpperCase()}
                  </Link>
                </button>
              )}
              {/* ------------------------- */}

              {/*  For bigger screen */}
              {window.innerWidth > 1024 && (
                <div className="flex justify-between" key={item}>
                  <motion.button
                    // whileTap={{ color: "blue" }}
                    className="bg-emerald-700 list-none p-1"
                    onClick={() => {
                      setAnimateValue(item);
                    }}
                  >
                    {item.toUpperCase()}
                  </motion.button>
                  <button
                    onClick={() => {
                      setCategory(item);
                    }}
                  >
                    <Link
                      to={current ? "/category" : "/Login"}
                      className="underline"
                    >
                      view all
                    </Link>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Category Images */}
        <div className="w12"></div>
        {window.innerWidth > 1024 && (
          <>
            <div className="bg-blue-700 w-1/2 ">
              {ImagesCollections.map(
                (item) =>
                  animateValue === item.id && (
                    <motion.div
                      className="flex justify-center bg-lime-500"
                      key={item.id}
                      variants={{
                        initial: { x: 500, opacity: 0 },
                        final: { x: 0, opacity: 1 },
                      }}
                      initial="initial"
                      animate="final"
                      transition={{
                        delay: 0.2,
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    >
                      {item.text}
                    </motion.div>
                  )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AllCategoriesList;
