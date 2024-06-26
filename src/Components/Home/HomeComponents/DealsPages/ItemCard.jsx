import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useUser } from "../../../../store/contextApis";

function ItemCard({
  reference,
  top,
  bottom,
  left,
  rigth,
  ImageUrl,
  emoji,
  toPage,
  icon,
  off,
}) {
  const { setCategory, current } = useUser();
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
      transition={{ duration: 0.5, ease: "linear" }}
      className={`w-[40%] min-h-[22vh] max-h-[22vh]  outline bg-[#0b030a]/30 outline-2 outline-offset-4 outline-[#c606b9] absolute lg:min-h-[34vh] lg:max-h-[34vh] lg:min-w-[20vw] lg:max-w-fit `}
      style={{
        backgroundImage: `url(${ImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Link
        onClick={() => {
          // console.log("clicked");
          setCategory(toPage);
        }}
        to={current ? "/category" : "/Login"}
        className="w-full h-full"
      >
        <div className="w-full h-full flex justify-center items-center backdrop-blur-xl ">
          {/*  OFF */}
          <motion.span
            variants={{
              initial: { top: "100px", opacity: 0 },
              final: { top: "-16px", opacity: 1 },
            }}
            initial="initial"
            animate={innerControls[0]}
            transition={{ duration: 0.8, ease: "circInOut" }}
            className="text-red-600 absolute -left-4 text-xs font-semibold bg-black px-2 py-1 rounded-lg lg:-left-12"
          >
            Up to {off}% OFF
          </motion.span>

          {/* link */}
          <motion.span
            variants={{
              initial: { top: "115%", opacity: 0 },
              final: { top: "93%", opacity: 1 },
            }}
            initial="initial"
            animate={innerControls[2]}
            transition={{ duration: 0.8, ease: "circInOut" }}
            className=" absolute -right-4 flex items-center gap-1 text-xs lg:-right-12"
          >
            <span className="bg-black text-red-600 flex gap-1 items-center px-2 py-1 rounded-lg">
              <span className="text-xl ">{icon}</span>
              {toPage.toUpperCase()}
            </span>
          </motion.span>

          {/* emoji */}
          <motion.span
            variants={{
              initial: { bottom: "-55px", opacity: 0 },
              final: { bottom: "-12px", opacity: 1 },
            }}
            initial="initial"
            animate={innerControls[1]}
            transition={{ duration: 0.8, ease: "circInOut" }}
            className=" absolute -left-6 text-4xl lg:text-4xl"
          >
            {emoji}
          </motion.span>
          <img
            className="h-[20vh]  max-w-[90%] lg:h-[30vh]"
            src={ImageUrl}
            alt=""
          />
        </div>
      </Link>
    </motion.span>
  );
}

export default ItemCard;
