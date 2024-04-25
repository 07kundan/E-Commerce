import React, { useEffect, useState } from "react";
import { fetchCategoryData } from "../../store/API";
import Card from "../Mohit/Card";
import { useUser } from "../../store/contextApis";

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
    </div>
  );
}

export default ProductPage;
