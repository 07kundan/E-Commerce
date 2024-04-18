import React from "react";

const emojis = ["😍", "🔥", "😎", "🙂"];

function Emojis() {
  return (
    <div className=" bg-slate-200 bg-opacity-20 p-3 px-7 flex gap-4 justify-center rounded-full text-2xl lg:gap-10 lg:px-4 lg:text-4xl">
      {emojis.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export default Emojis;
