import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoIosCloseCircle, IoMdCart } from "react-icons/io";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { CgLogIn } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";

const NavItems = [
  { name: "Home", icon: <SiHomeassistantcommunitystore /> },
  { name: "Login", icon: <CgLogIn /> },
  { name: "Cart", icon: <IoMdCart /> },
];

// Navbar
function NavBar() {
  const [HamburgerIsActive, setHambuegeIsActive] = useState(false);
  const [searchIsActive, setSearchIsActive] = useState(false);

  return (
    <>
      <div className="w-screen p-3 px-6 text-[#6D67E4] flex justify-between items-center text-2xl bg-[#453C67] relative z-10 lg:px-10 lg:h-[68px]">
        <span className="text-3xl font-bold lg:w-1/4 lg:text-center ">
          ZED-kart
        </span>

        {/* Hamburger for smaller screen */}
        <>
          {window.innerWidth < 1024 && (
            <button
              className="text-4xl"
              onClick={() => setHambuegeIsActive(true)}
            >
              <MdMenu />
            </button>
          )}

          {/* Navlist if HamburgerIsActive */}
          {HamburgerIsActive && (
            <>
              <div className="w-full h-[100vh] p-4 absolute top-0 right-0 text-2xl z-20 bg-white">
                <button
                  className="text-3xl float-end p-4 "
                  onClick={() => setHambuegeIsActive(false)}
                >
                  <IoIosCloseCircle />
                </button>
                <div className="h-full p-12 flex flex-col gap-4  ">
                  <div>
                    {NavItems.map((item) => (
                      <NavLink
                        onClick={() => setHambuegeIsActive(false)}
                        to={`/${item.name}`}
                        key={item.name}
                        className={({ isActive }) =>
                          `flex items-center gap-2 ${
                            isActive ? "text-[#c79e3d]" : "text-[#FFD369]"
                          }`
                        }
                      >
                        <span className="text-2xl ">{item.icon}</span>
                        <span>{item.name}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
        {/* ---------------------------- */}

        {/* Routes */}
        {window.innerWidth > 1024 && (
          <div className="text-lg flex justify-around gap-10 p-1 px-3 pr-16">
            {/* search icon and search input if searchIsActive is true */}
            <div className="flex gap-3 items-center">
              {searchIsActive && (
                <>
                  <input
                    type="text"
                    placeholder="Search for the products"
                    className="w-[30vw] text-lg p-1 px-3 rounded-lg bg-white bg-opacity-60 "
                  />
                </>
              )}
              <button
                className="text-2xl text-[#FFD369]"
                onClick={() => setSearchIsActive(!searchIsActive)}
              >
                <IoSearchSharp />
              </button>
            </div>
            {/* ------------------------------------------------------- */}

            {NavItems.map((item) => (
              <NavLink
                to={`/${item.name}`}
                key={item.name}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive ? "text-[#c79e3d]" : "text-[#FFD369]"
                  }`
                }
              >
                <span className="text-2xl ">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
