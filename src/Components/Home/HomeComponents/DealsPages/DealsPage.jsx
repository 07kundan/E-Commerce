import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ItemCard from "./ItemCard";

function DealsPage({ Id, emoji }) {
  const ref = useRef(null);

  return (
    <>
      <div
        id={Id}
        ref={ref}
        className=" h-screen w-screen m-auto flex justify-center items-center relative"
      >
        <h2 className="text-[#46C2CB] text-4xl font-bold ">
          {Id.toUpperCase()} {"DEALS"} {emoji}
        </h2>

        <ItemCard reference={ref} top={"10%"} />
        <ItemCard reference={ref} top={"73%"} />
        <ItemCard reference={ref} top={"25%"} left={"10%"} />
        <ItemCard reference={ref} top={"65%"} left={"10%"} />
        <ItemCard reference={ref} top={"25%"} left={"70%"} />
        <ItemCard reference={ref} top={"65%"} left={"70%"} />
      </div>
      <hr />
    </>
  );
}

export default DealsPage;
