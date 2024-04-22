import React from "react";

const handleScrollPage = (item) => {
  const element = document.getElementById(item.Id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

function Emojis({ emojis }) {
  return (
    <div className=" bg-slate-200 bg-opacity-20 p-3 px-7 flex gap-4 justify-center rounded-full text-2xl lg:gap-10 lg:px-4 lg:text-4xl">
      {emojis.map((item) => (
        <button
          onClick={() => {
            handleScrollPage(item);
          }}
          key={item.Id}
        >
          {item.emoji}
        </button>
      ))}
    </div>
  );
}

export default Emojis;
