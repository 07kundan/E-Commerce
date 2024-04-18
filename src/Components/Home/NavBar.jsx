import React from "react";

const NavItems = ["Home", "Products", "searchIcon", "Login", "Cart"];

function NavBar() {
  return (
    <div className="text-[#FFD369] flex justify-between items-center text-2xl p-3 w-screen absolute top-0 left-0 bg-emerald-800 z-10">
      <span className="w-1/4 text-center bg-amber-700 ">Name</span>

      <div className="w-[75%] flex justify-around bg-lime-800">
        {NavItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
