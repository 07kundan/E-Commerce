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
  {
    slug: "beauty",
    name: "Beauty",
    Image: skincare,
  },
  {
    slug: "fragrances",
    name: "Fragrances",
    Image: fragrances,
  },
  {
    slug: "furniture",
    name: "Furniture",
    Image: furniture,
  },
  {
    slug: "groceries",
    name: "Groceries",
    Image: groceries,
  },
  {
    slug: "home-decoration",
    name: "Home Decoration",
    Image: homedecoration,
  },
  {
    slug: "kitchen-accessories",
    name: "Kitchen Accessories",
    Image: lighting,
  },
  {
    slug: "laptops",
    name: "Laptops",
    Image: laptops,
  },
  {
    slug: "mens-shirts",
    name: "Mens Shirts",
    Image: mensshirts,
  },
  {
    slug: "mens-shoes",
    name: "Mens Shoes",
    Image: mensshoes,
  },
  {
    slug: "mens-watches",
    name: "Mens Watches",
    Image: menswatches,
  },
  {
    slug: "mobile-accessories",
    name: "Mobile Accessories",
    Image: "not found",
  },
  {
    slug: "motorcycle",
    name: "Motorcycle",
    Image: motorcycle,
  },
  {
    slug: "skin-care",
    name: "Skin Care",
    Image: skincare,
  },
  {
    slug: "smartphones",
    name: "Smartphones",
    Image: smartphones,
  },
  {
    slug: "sports-accessories",
    name: "Sports Accessories",
    Image: "not found",
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
    Image: sunglasses,
  },
  {
    slug: "tablets",
    name: "Tablets",
    Image: "not found",
  },
  {
    slug: "tops",
    name: "Tops",
    Image: tops,
  },
  {
    slug: "vehicle",
    name: "Vehicle",
    Image: motorcycle,
  },
  {
    slug: "womens-bags",
    name: "Womens Bags",
    Image: womensbags,
  },
  {
    slug: "womens-dresses",
    name: "Womens Dresses",
    Image: womensdresses,
  },
  {
    slug: "womens-jewellery",
    name: "Womens Jewellery",
    Image: womensjewellery,
  },
  {
    slug: "womens-shoes",
    name: "Womens Shoes",
    Image: womensshoes,
  },
  {
    slug: "womens-watches",
    name: "Womens Watches",
    Image: womenswatches,
  },
];

function AllCategoriesList() {
  const [CategoryList, setCategoryList] = useState([]);
  const ref = useRef();
  const [animateValue, setAnimateValue] = useState("beauty");
  const { setCategory, current } = useUser();
  const animationControl = useAnimation();
  const isInView = useInView(ref, { amount: 0.3 });
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
            <div key={item?.slug}>
              {/*  for mobile devices */}
              {window.innerWidth < 1024 && (
                <Link to={current ? "/category" : "/login"} className="p-1">
                  <button
                    className={`min-w-40 tracking-tighter px-3 py-1 text-sm font-bold bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl `}
                    onClick={() => {
                      setCategory(item?.slug);
                    }}
                  >
                    {item?.name.toUpperCase()}
                  </button>
                </Link>
              )}
              {/* ------------------------- */}

              {/*  For bigger screen */}
              {window.innerWidth > 1024 && (
                <div className="flex justify-between mb-2" key={item}>
                  <motion.button
                    whileTap={{ color: "#612cff" }}
                    whileHover={{ color: "#722cff" }}
                    className="min-w-44 tracking-tighter px-2 py-1 font-bold bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg"
                    onClick={() => {
                      setAnimateValue(item?.slug);
                    }}
                  >
                    {item?.name.toUpperCase()}
                  </motion.button>

                  {/* view all button */}

                  <Link
                    to={current ? "/category" : "/Login"}
                    className=" text-sm "
                  >
                    <motion.button
                      whileTap={{ color: "#612cff" }}
                      whileHover={{ color: "#722cff" }}
                      onClick={() => {
                        setCategory(item?.slug);
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
                  animateValue === item.slug && (
                    <motion.div
                      className="flex justify-center"
                      key={item.slug}
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
