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
    <div className=" bg-[#4b1348] bg-opacity-70 p-3 px-7 flex gap-4 justify-center rounded-full text-3xl outline outline-4 outline-[#3b0137] outline-offset-2 lg:gap-10 lg:px-4 lg:text-4xl">
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
