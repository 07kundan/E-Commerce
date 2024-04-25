import React, { useEffect, useState } from "react";
import { fetchCategoryData } from "../../store/API";
import Card from "../Mohit/Card";

function ProductPage({ category }) {
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    try {
      fetchCategoryData("smartphones")
        .then((response) => {
          setCategoryData(response);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {categoryData &&
        categoryData.products &&
        Array.isArray(categoryData.products) && (
          <div className="flex flex-wrap w-screen h-fit justify-center">
            {categoryData.products.map((item) => (
              <div key={item.id}>
                <Card
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                  imageUrl={item.images[0]}
                />
              </div>
            ))}
          </div>
        )}
      {console.log(categoryData)}
    </div>
  );
}

export default ProductPage;
