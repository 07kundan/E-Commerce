import React from "react";

function Footer() {
  return (
    <div className="h-[85vh]  bg-blue-950 p-4">
      <h1 className="text-4xl font-semibold text-center p-4">Footer</h1>
      <div className="flex justify-evenly bg-lime-900 ">
        <div className="bg-lime-600">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="grid grid-flow-col bg-lime-600">
          <h1>Name</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="grid grid-flow-col bg-lime-600">
          <h1>Name</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
