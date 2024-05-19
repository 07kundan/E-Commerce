import React, { useEffect, useState } from "react";
import { fetchCategoryData } from "../../store/API";
import { useUser } from "../../store/contextApis";
import ProductCard from "./ProductCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

function ProductPage() {
  const [categoryData, setCategoryData] = useState({});
  const { category } = useUser();

  useEffect(() => {
    try {
      fetchCategoryData(`${category}`)
        .then((response) => {
          setCategoryData(response);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  return (
    <div className="h-screen w-screen  flex items-center pt-10 ">
      {categoryData &&
        categoryData.products &&
        Array.isArray(categoryData.products) && (
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="w-[95%] h-[90%] lg:h-[85%] lg:w-[87%]"
          >
            {categoryData.products.map((item) => (
              <SwiperSlide key={item.id} className="">
                <ProductCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                  imageUrl1={item.images[0]}
                  imageUrl2={item.images[1]}
                  imageUrl3={item.images[2]}
                  imageUrl4={item.images[3]}
                  imageUrl5={item.images[4]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
    </div>
  );
}

export default ProductPage;
