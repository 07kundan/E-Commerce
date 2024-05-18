import React, { useEffect, useState } from "react";
import { useUser } from "../../store/contextApis";
import { motion } from "framer-motion";

function PopUp() {
  const [popUp, setPopUp] = useState(false);
  const { authenticationState, setAuthenticationState, current } = useUser();

  // for popUp authentication State
  useEffect(() => {
    setPopUp(true);
    const interval = setTimeout(() => {
      setPopUp(false);
    }, 4000);
    return () => clearInterval(interval);
  }, [authenticationState]);

  return (
    <div className=" w-full absolute top-[5.5rem] flex justify-center">
      {popUp && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-center p-3 px-8  text-xl rounded-2xl border border-b-4 border-green-500 z-50 bg-slate-700 "
        >
          {authenticationState ? (
            <span>{authenticationState}</span>
          ) : (
            <span>Login to explore more</span>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default PopUp;
