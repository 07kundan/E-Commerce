import React from "react";
import { useUser } from "../../store/contextApis";
import "./loader.css";

function Loader() {
  const { loader } = useUser();
  return (
    <div className="">
      {loader && (
        <div className="absolute h-screen w-screen bg-transparent/60 flex justify-center items-center z-50">
          <div className="loader-inner">
            <div className="loader-circle"></div>
            <div className="loader-circle"></div>
            <div className="loader-circle"></div>
            <div className="loader-circle"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loader;
