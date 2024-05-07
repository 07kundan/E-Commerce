import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  // const [randomColor, setRandomColor] = useState(0);

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
    <div className="h-fit lg:w-[90%]  m-auto mb-10 lg:p-2">
      <h3 className="text-center text-4xl font-semibold underline">
        All categories
      </h3>
      <div className="h-fit w-full flex justify-center items-center">
        {/* Categories List */}
        <div className="w-full py-6 flex flex-wrap space-x-1 gap-y-3 justify-center lg:block lg:px-10 lg:w-1/2 lg:p-6 ">
          {CategoryList.map((item) => (
            <div key={item}>
              {/*  for mobile devices */}
              {window.innerWidth < 1024 && (
                <button
                  style={{
                    backgroundColor: `rgb(
                      ${Math.round(Math.random() * (150 - 0)) + 0},
                      ${Math.round(Math.random() * (150 - 0)) + 0},
                      ${Math.round(Math.random() * (150 - 0)) + 0})`,
                  }}
                  className={`px-3 py-2 text-base font-medium rounded-xl`}
                  onClick={() => {
                    setCategory(item);
                  }}
                >
                  <Link
                    to={current ? "/category" : "/login"}
                    className=" list-none p-1"
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
                    className=" list-none p-1"
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
            <div className=" w-1/2 ">
              {ImagesCollections.map(
                (item) =>
                  animateValue === item.id && (
                    <motion.div
                      className="flex justify-center"
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
