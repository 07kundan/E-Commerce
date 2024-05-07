import React, { useEffect, useRef } from "react";
import ItemCard from "./ItemCard";
import ImageCollection from "./ImageCollections";

function DealsPage({ Id, emoji }) {
  const ref = useRef(null);

  return (
    <>
      <hr />
      <div
        id={Id}
        ref={ref}
        className="h-screen w-screen flex flex-col-reverse items-center py-10 relative lg:flex-row lg:justify-center lg:p-0"
      >
        <h2 className=" text-4xl font-bold ">
          {Id.toUpperCase()} {"DEALS"} {emoji}
        </h2>

        <ItemCard
          reference={ref}
          top={window.innerWidth > 1024 ? "5%" : "6%"}
          left={window.innerWidth > 1024 ? "" : "5%"}
          ImageUrl={ImageCollection[Id].arr[0]}
          emoji={emoji}
        />

        <ItemCard
          reference={ref}
          top={window.innerWidth > 1024 ? "65%" : "6%"}
          left={window.innerWidth > 1024 ? "" : "55%"}
          ImageUrl={ImageCollection[Id].arr[4]}
          emoji={emoji}
        />

        <ItemCard
          reference={ref}
          top={window.innerWidth > 1024 ? "16%" : "34%"}
          left={window.innerWidth > 1024 ? "70%" : "5%"}
          ImageUrl={ImageCollection[Id].arr[1]}
          emoji={emoji}
        />
        <ItemCard
          reference={ref}
          top={window.innerWidth > 1024 ? "16%" : "34%"}
          left={window.innerWidth > 1024 ? "10%" : "55%"}
          ImageUrl={ImageCollection[Id].arr[2]}
          emoji={emoji}
        />
        <ItemCard
          reference={ref}
          top={window.innerWidth > 1024 ? "54%" : "61%"}
          left={window.innerWidth > 1024 ? "70%" : "5%"}
          ImageUrl={ImageCollection[Id].arr[3]}
          emoji={emoji}
        />

        <ItemCard
          reference={ref}
          top={window.innerWidth > 1024 ? "54%" : "61%"}
          left={window.innerWidth > 1024 ? "10%" : "55%"}
          ImageUrl={ImageCollection[Id].arr[5]}
          emoji={emoji}
        />
      </div>
      <hr />
    </>
  );
}

export default DealsPage;
