import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// function HeadingMarque(props) {
//   return (
//     <>
//       <div className="w-[70%] bg-amber-700 m-auto text-3xl p-3">
//         <div behavior="scroll" direction="left">
//           <span>{props.value}</span>
//           <span>{props.value}</span>
//           <span>{props.value}</span>
//           <span>{props.value}</span>
//           <span>{props.value}</span>
//           <span>{props.value}</span>
//           <span>{props.value}</span>
//         </div>
//       </div>
//     </>
//   );
// }

export default function MyComponent() {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );

  return (
    <div className="bg-slate-700 h-[20%]">
      {/* <div className="bg-[#ff008c]"></div> */}
      <motion.div style={{ background }}>
        <motion.div
          className="text-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x }}
        >
          helo
        </motion.div>
      </motion.div>
    </div>
  );
}

// export default HeadingMarque;
