import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ["Home", "Products", "searchIcon", "Login", "Cart"];

// Navbar
function NavBar() {
  return (
    <div className="text-[#FFD369] flex justify-between items-center text-2xl p-3 w-screen bg-emerald-800 sticky top-0 z-10">
      <span className="w-1/4 text-center bg-amber-700 ">Name</span>

      {/* Routes */}
      <div className="w-[75%] flex justify-around bg-lime-800">
        {NavItems.map((item) => (
          <NavLink
            to={`/${item}`}
            key={item}
            className={({ isActive }) =>
              `${isActive ? "text-[#c79e3d]" : "text-[#FFD369]"}`
            }
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
