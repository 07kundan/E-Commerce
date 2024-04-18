import React from "react";
const Emojis = ["0😑", "1😑", "2😑", "4😑"];

function HeroSection() {
  return (
    <div className="bg-orange-800 h-[90%] w-screen flex justify-center items-center text-2xl relative">
      {/* Deals Emojis */}
      <div className="bg-slate-200 bg-opacity-20 p-3 px-4 absolute top-20 flex gap-10 rounded-full">
        {Emojis.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {/* ---------------------- */}
      <div className="bg-indigo-700 w-1/2 h-full flex items-center justify-center">
        Name
      </div>
      <div className="bg-indigo-500 w-1/2 h-full flex items-center justify-center">
        animations
      </div>
    </div>
  );
}

export default HeroSection;
