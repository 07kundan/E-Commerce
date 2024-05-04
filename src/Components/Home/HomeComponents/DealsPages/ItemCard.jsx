import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ItemCard({ reference, top, bottom, left, rigth, ImageUrl }) {
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
      //   ref={scope}
      variants={{
        visible: {
          top: `${top}`,
          bottom: `${bottom}`,
          left: `${left}`,
          right: `${rigth}`,
        },
      }}
      animate={parentControl}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-fit min-w-[20vw] max-w-fit flex justify-center items-center bg-gradient-to-br from-slate-600/60 to-white border border-black rounded-xl absolute"
    >
      <motion.span
        variants={{
          initial: { bottom: "100px", opacity: 0 },
          final: { top: 0, opacity: 1, color: "red" },
        }}
        initial="initial"
        animate={innerControls[0]}
        transition={{ duration: 1, ease: "circInOut" }}
        className=" absolute bottom-10 -left-10"
      >
        hello
      </motion.span>
      <motion.span
        variants={{
          initial: { bottom: "100px", opacity: 0 },
          final: { top: 0, opacity: 1, color: "red" },
        }}
        initial="initial"
        animate={innerControls[1]}
        transition={{ duration: 1, ease: "circInOut" }}
        className=" absolute -bottom-8 left-10"
      >
        hello
      </motion.span>
      <motion.span
        variants={{
          initial: { bottom: "100px", opacity: 0 },
          final: { top: 0, opacity: 1, color: "red" },
        }}
        initial="initial"
        animate={innerControls[2]}
        transition={{ duration: 1, ease: "circInOut" }}
        className=" absolute top-6 -right-10"
      >
        hello
      </motion.span>

      <img className="h-48 " src={ImageUrl} alt="" />
    </motion.span>
  );
}

export default ItemCard;
