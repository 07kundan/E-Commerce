import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function DealsPage({ Id, emoji }) {
  const ref = useRef(null);
  const control = useAnimation();
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      // fire the animation
      control.start("visible");
    }

    return () => control.stop();
  }, [isInView]);

  return (
    <>
      <div
        id={Id}
        ref={ref}
        className="bg-lime-900 h-screen w-screen m-auto flex justify-center items-center relative"
      >
        <h2 className="text-[#46C2CB] text-4xl font-bold ">
          {Id.toUpperCase()} {"DEALS"} {emoji}
        </h2>

        <motion.span
          variants={{
            visible: { top: "10%" },
          }}
          animate={control}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" w-1/5 rounded-3xl bg-cover absolute"
        >
          <img
            className=""
            src="https://cdn.dummyjson.com/product-images/1/1.jpg"
            alt=""
          />
        </motion.span>
        <motion.span
          variants={{
            visible: { top: "73%" },
          }}
          animate={control}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-1/5 rounded-3xl absolute"
        >
          <img
            className=""
            src="https://cdn.dummyjson.com/product-images/1/1.jpg"
            alt=""
          />
        </motion.span>
        <motion.span
          variants={{
            visible: { top: "25%", left: "10%" },
          }}
          animate={control}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-1/5 rounded-3xl absolute"
        >
          <img
            className=""
            src="https://cdn.dummyjson.com/product-images/1/1.jpg"
            alt=""
          />
        </motion.span>
        <motion.span
          variants={{
            visible: { top: "65%", left: "10%" },
          }}
          animate={control}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-1/5 rounded-3xl absolute"
        >
          <img
            className=""
            src="https://cdn.dummyjson.com/product-images/1/1.jpg"
            alt=""
          />
        </motion.span>
        <motion.span
          variants={{
            visible: { top: "25%", left: "70%" },
          }}
          animate={control}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-1/5 rounded-3xl absolute"
        >
          <img
            className=""
            src="https://cdn.dummyjson.com/product-images/1/1.jpg"
            alt=""
          />
        </motion.span>
        <motion.span
          variants={{
            visible: { top: "65%", left: "70%" },
          }}
          animate={control}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-1/5 rounded-3xl absolute"
        >
          <img
            className=""
            src="https://cdn.dummyjson.com/product-images/1/1.jpg"
            alt=""
          />
        </motion.span>
      </div>
    </>
  );
}

export default DealsPage;
