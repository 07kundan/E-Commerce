import React from "react";

const Card = ({ title, description, price, rating, imageUrl }) => {
  return (
    <div className="flex flex-col overflow-hidden h-max w-full sm:w-[440px] rounded-md sm:rounded-2xl relative card border-2 m-4">
      <div className=" w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full hover:scale-[1.2] ease-in-out transition-all duration-700 object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-between p-3">
        <p className="text-xl font-semibold md:w-1/2">{title}</p>
        <p className="text-lg font-normal md:w-1/2 md:text-right">
          Rs. {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
