import React, { useEffect, useRef } from "react";
import ItemCard from "./ItemCard";
import ImageCollection from "./ImageCollections";

function DealsPage({ Id, emoji }) {
  const ref = useRef(null);

  return (
    <>
      <div
        id={Id}
        ref={ref}
        className=" h-screen w-screen m-auto flex justify-center items-center relative"
      >
        <h2 className=" text-4xl font-bold ">
          {Id.toUpperCase()} {"DEALS"} {emoji}
        </h2>

        <ItemCard
          reference={ref}
          top={"4px"}
          ImageUrl={ImageCollection[Id].arr[0]}
        />
        <ItemCard
          reference={ref}
          bottom={"4px"}
          ImageUrl={ImageCollection[Id].arr[1]}
        />
        <ItemCard
          reference={ref}
          top={"65%"}
          left={"70%"}
          ImageUrl={ImageCollection[Id].arr[2]}
        />
        <ItemCard
          reference={ref}
          top={"25%"}
          left={"10%"}
          ImageUrl={ImageCollection[Id].arr[3]}
        />
        <ItemCard
          reference={ref}
          top={"65%"}
          left={"10%"}
          ImageUrl={ImageCollection[Id].arr[4]}
        />
        <ItemCard
          reference={ref}
          top={"25%"}
          left={"70%"}
          ImageUrl={ImageCollection[Id].arr[5]}
        />
      </div>
    </>
  );
}

export default DealsPage;
