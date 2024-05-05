import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ItemCard({ reference, top, bottom, left, rigth, ImageUrl, emoji }) {
  const parentControl = useAnimation();
  const innerControls = [useAnimation(), useAnimation(), useAnimation()];
  const isInView = useInView(reference, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      // Fire the parent animation
      parentControl.start("visible").then(() => {
        // Once parent animation is complete, fire inner animations
        innerControls.forEach((control) => control.start("final"));
      });
    } else {
      // Reset inner animations if parent animation is not in view
      innerControls.forEach((control) => control.start("initial"));
    }

    return () => parentControl.stop();
  }, [isInView]);

  return (
    <motion.span
      variants={{
        visible: {
          top: `${top}`,
          bottom: `${bottom}`,
          left: `${left}`,
          right: `${rigth}`,
          opacity: 1,
        },
      }}
      animate={parentControl}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-[40%] min-h-[22vh] max-h-[22vh] flex justify-center items-center bg-gradient-to-br from-slate-600/60 to-white border border-black rounded-xl absolute lg:min-h-[30vh] lg:max-h-[30vh] lg:min-w-[20vw] lg:max-w-[20vw] "
    >
      <motion.span
        variants={{
          initial: { top: "100px", opacity: 0 },
          final: { top: "-20px", opacity: 1, color: "red" },
        }}
        initial="initial"
        animate={innerControls[0]}
        transition={{ duration: 1, ease: "circInOut" }}
        className=" absolute -left-4  text-sm font-bold bg-black p-2 px-4 rounded-full flex justify-center items-center"
      >
        {Math.round(Math.random() * (60 - 20) + 20)}% OFF
      </motion.span>
      <motion.span
        variants={{
          initial: { bottom: "-120px", opacity: 0 },
          final: { bottom: "-8px", opacity: 1, color: "red" },
        }}
        initial="initial"
        animate={innerControls[1]}
        transition={{ duration: 1, ease: "circInOut" }}
        className=" absolute -left-3 text-4xl lg:text-5xl"
      >
        {emoji}
      </motion.span>
      <motion.span
        variants={{
          initial: { top: "100px", opacity: 0 },
          final: { top: 0, opacity: 1, color: "red" },
        }}
        initial="initial"
        animate={innerControls[2]}
        transition={{ duration: 1, ease: "circInOut" }}
        className=" absolute -right-2 bg-blue-400"
      >
        hello
      </motion.span>

      <img className="h-fit lg:h-44 " src={ImageUrl} alt="" />
    </motion.span>
  );
}

export default ItemCard;
