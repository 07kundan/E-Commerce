import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { color, motion } from "framer-motion";
import { fetchAllProductsCategories } from "../../../store/API";
import { useUser } from "../../../store/contextApis";

//--------------------- Image URL ------------------------
import smartphones from "../../../assets/Images/AllCategoriesImages/smartphone.jpg";
import laptops from "../../../assets/Images/AllCategoriesImages/laptops.jpg";
import fragrances from "../../../assets/Images/AllCategoriesImages/fragrances.jpg";
import skincare from "../../../assets/Images/AllCategoriesImages/skincare.jpg";
import groceries from "../../../assets/Images/AllCategoriesImages/groceries.jpg";
import homedecoration from "../../../assets/Images/AllCategoriesImages/homedecoration.jpg";
import furniture from "../../../assets/Images/AllCategoriesImages/furniture.jpg";
import tops from "../../../assets/Images/AllCategoriesImages/tops.jpg";
import womensdresses from "../../../assets/Images/AllCategoriesImages/womensdresses.jpg";
import womensshoes from "../../../assets/Images/AllCategoriesImages/womensshoes.jpg";
import mensshirts from "../../../assets/Images/AllCategoriesImages/mensshirts.jpg";
import mensshoes from "../../../assets/Images/AllCategoriesImages/mensshoes.jpg";
import menswatches from "../../../assets/Images/AllCategoriesImages/menswatches.jpg";
import womenswatches from "../../../assets/Images/AllCategoriesImages/womenswatches.jpg";
import womensbags from "../../../assets/Images/AllCategoriesImages/womensbags.jpg";
import womensjewellery from "../../../assets/Images/AllCategoriesImages/womensjewellery.jpg";
import sunglasses from "../../../assets/Images/AllCategoriesImages/sunglasses.jpg";
import automotive from "../../../assets/Images/AllCategoriesImages/automotive.jpg";
import motorcycle from "../../../assets/Images/AllCategoriesImages/motorcycle.jpg";
import lighting from "../../../assets/Images/AllCategoriesImages/lighting.jpg";

const ImagesCollections = [
  { id: "smartphones", Image: smartphones },
  { id: "laptops", Image: laptops },
  { id: "fragrances", Image: fragrances },
  { id: "skincare", Image: skincare },
  { id: "groceries", Image: groceries },
  { id: "home-decoration", Image: homedecoration },
  { id: "furniture", Image: furniture },
  { id: "tops", Image: tops },
  { id: "womens-dresses", Image: womensdresses },
  { id: "womens-shoes", Image: womensshoes },
  { id: "mens-shirts", Image: mensshirts },
  { id: "mens-shoes", Image: mensshoes },
  { id: "mens-watches", Image: menswatches },
  { id: "womens-watches", Image: womenswatches },
  { id: "womens-bags", Image: womensbags },
  { id: "womens-jewellery", Image: womensjewellery },
  { id: "sunglasses", Image: sunglasses },
  { id: "automotive", Image: automotive },
  { id: "motorcycle", Image: motorcycle },
  { id: "lighting", Image: lighting },
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
      {/* -------- Heading ------------ */}
      <h3 className="text-center text-4xl font-semibold underline ">
        All categories
      </h3>

      {/* -------content--------- */}
      <div className="h-fit w-full flex justify-between items-center">
        {/* Categories List */}
        <div className="w-full py-6 flex flex-wrap space-x-1 gap-y-3 justify-center lg:block lg:px-10 lg:w-1/2 lg:space-x-0 lg:p-6 ">
          {CategoryList.map((item) => (
            <div key={item}>
              {/*  for mobile devices */}
              {window.innerWidth < 1024 && (
                <button
                  style={{
                    backgroundColor: `rgb(
                      ${Math.round(Math.random() * (255 - 0)) + 0},
                      ${Math.round(Math.random() * (255 - 0)) + 0},
                      ${Math.round(Math.random() * (255 - 0)) + 0})`,
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
                <div className="flex justify-between mb-1" key={item}>
                  <motion.button
                    whileTap={{ color: "blue" }}
                    whileHover={{ color: "#722cff" }}
                    className=" px-2 py-1 font-bold bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg"
                    onClick={() => {
                      setAnimateValue(item);
                    }}
                  >
                    {item.toUpperCase()}
                  </motion.button>

                  {/* view all button */}
                  <button
                    onClick={() => {
                      setCategory(item);
                    }}
                  >
                    <Link to={current ? "/category" : "/Login"} className=" ">
                      <motion.button
                        whileTap={{ color: "blue" }}
                        whileHover={{ color: "#722cff" }}
                      >
                        view all
                      </motion.button>
                    </Link>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Category Images */}
        {window.innerWidth > 1024 && (
          <>
            <div className=" w-2/5">
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
                      <img
                        src={`${item.Image}`}
                        alt=""
                        className="h-[70vh] outline outline-4 outline-offset-4"
                      />
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
