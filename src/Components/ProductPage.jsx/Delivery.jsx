import React from "react";
import image from "../../assets/Images/jamun.jpg";

function Delivery() {
  return (
    <div className="w-screen  h-screen flex justify-center items-center ">
      <div
        className="w-4/5 h-3/5"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Delivery;
