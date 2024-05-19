import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  color,
  motion,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";
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
  const ref = useRef();
  const [animateValue, setAnimateValue] = useState("smartphones");
  const { setCategory, current } = useUser();
  const animationControl = useAnimation();
  const isInView = useInView(ref, { amount: 0.55 });
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

  useEffect(() => {
    if (isInView) {
      animationControl.start("final");
    }
  }, [isInView, animateValue]);

  // ----------------------------
  return (
    <div ref={ref} className="h-fit lg:w-[90%]  m-auto my-10 lg:p-2">
      {/* -------- Heading ------------ */}
      <h3 className="text-center text-4xl mb-2 font-semibold underline ">
        All categories
      </h3>

      {/* -------content--------- */}
      <div className="h-fit w-full flex justify-between items-center">
        {/* Categories List */}
        <div className="w-full py-6 flex flex-wrap gap-y-2 justify-center lg:block lg:px-10 lg:w-1/2 lg:space-x-0 lg:p-6 ">
          {CategoryList.map((item) => (
            <div key={item}>
              {/*  for mobile devices */}
              {window.innerWidth < 1024 && (
                <Link
                  to={current ? "/category" : "/login"}
                  className="p-1"
                  key={item}
                >
                  <button
                    className={`min-w-36 px-3 py-1 text-sm font-bold bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl `}
                    onClick={() => {
                      setCategory(item);
                    }}
                  >
                    {item.toUpperCase()}
                  </button>
                </Link>
              )}
              {/* ------------------------- */}

              {/*  For bigger screen */}
              {window.innerWidth > 1024 && (
                <div className="flex justify-between mb-2" key={item}>
                  <motion.button
                    whileTap={{ color: "blue" }}
                    whileHover={{ color: "#722cff" }}
                    className="min-w-40 py-1 font-bold bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg"
                    onClick={() => {
                      setAnimateValue(item);
                    }}
                  >
                    {item.toUpperCase()}
                  </motion.button>

                  {/* view all button */}

                  <Link
                    to={current ? "/category" : "/Login"}
                    className=" text-sm"
                  >
                    <motion.button
                      whileTap={{ color: "blue" }}
                      whileHover={{ color: "#722cff" }}
                      onClick={() => {
                        setCategory(item);
                      }}
                    >
                      view all
                    </motion.button>
                  </Link>
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
                      animate={animationControl}
                      transition={{
                        delay: 0.2,
                        duration: 0.8,
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
