import React, { useEffect, useState } from "react";
import { useUser } from "../store/contextApis";
import { motion } from "framer-motion";

function PopUp() {
  const [popUp, setPopUp] = useState(false);
  const [isLoggedInPopUp, setIsLoggedInPopUp] = useState();
  const { authenticationState, current } = useUser();

  // for popUp authentication State
  useEffect(() => {
    if (authenticationState) {
      setPopUp(true);
      const interval = setTimeout(() => {
        setPopUp(false);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [authenticationState]);

  useEffect(() => {
    if (!current) {
      setIsLoggedInPopUp(true);
      const interval = setTimeout(() => {
        setIsLoggedInPopUp(false);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className=" w-full absolute top-[4.3rem] flex justify-center">
      {isLoggedInPopUp && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-center w-fit p-3 px-8 text-xl rounded-2xl border border-b-4 border-green-500 bg-slate-700/80 "
        >
          Login to explore more
        </motion.div>
      )}

      {popUp && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-center p-3 px-8  text-xl rounded-2xl border border-b-4 border-green-500 z-50 bg-slate-700/80 "
        >
          {authenticationState} successfully
        </motion.div>
      )}
    </div>
  );
}

export default PopUp;
