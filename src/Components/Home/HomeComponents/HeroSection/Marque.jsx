import React from "react";

function Marque({ imageUrl }) {
  return (
    <div className="w-24 h-full p-1 ">
      <div
        className="h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Marque;
