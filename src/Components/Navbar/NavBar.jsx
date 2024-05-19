import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { CgLogIn, CgMenuBoxed, CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { FaGift, FaHeart } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { motion } from "framer-motion";
import { useUser } from "../../store/contextApis";

const NavItems = [
  { path: "", name: "Home", icon: <SiHomeassistantcommunitystore /> },
  { path: "Login", name: "Login", icon: <CgLogIn /> },
  { path: "cart", name: "Cart", icon: <IoMdCart /> },
];

const MenuList = [
  {
    icon: <CgProfile />,
    name: "Profile",
    path: "profile",
  },
  {
    icon: <FaHeart />,
    name: "Wishlist",
    path: "wishlist",
  },
  {
    icon: <FiPackage />,
    name: "Order",
    path: "",
  },
];
// Navbar
function NavBar() {
  // search bar
  const [searchIsActive, setSearchIsActive] = useState(false);
  // menu list
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { cartProduct, current, Logout, isNavbarHidden, setIsNavbarActive } =
    useUser();

  return (
    <>
      <motion.div
        initial={{ translateX: "-50%" }}
        animate={isNavbarHidden ? { rotateX: 90 } : { rotate: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="w-[95%] p-2 px-5 flex m-auto justify-between items-center bg-[#32012F] fixed top-4 left-1/2 z-10 outline outline-2  rounded-2xl lg:outline-2 lg:p-2 lg:pl-10 lg:w-[90vw]  lg:top-5 "
      >
        {/* Name */}
        <motion.span
          variants={{
            initial: { x: -120, opacity: 0 },
            end: { x: 0, opacity: 1 },
          }}
          initial="initial"
          animate="end"
          transition={{ delay: 0.3, duration: 0.8, ease: "backInOut" }}
          className="text-2xl w-fit font-bold lg:w-[20%] lg:pl-7 "
        >
          ZED-kart
        </motion.span>

        {/* for mobiles */}
        <>
          {window.innerWidth < 1024 && (
            <div className=" flex items-center gap-4 text-xl">
              {NavItems.map((item) => (
                <NavLink
                  className={`flex  `}
                  to={!current && item.path ? "/login" : `/${item.path}`}
                  key={item.name}
                >
                  <motion.button
                    className={`relative ${item.name == "Home" && "text-lg"}`}
                    onClick={() => {
                      if (item.path === "Login" && current) {
                        Logout();
                      }
                      setIsNavbarActive(true);
                    }}
                    variants={{
                      initial: { y: 40, opacity: 0 },
                      end: { y: 0, opacity: 1 },
                    }}
                    initial="initial"
                    animate="end"
                    transition={{
                      delay: 0.2,
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    whileHover={{ color: "#2e8c93" }}
                    whileTap={{ color: "#275ef7" }}
                    whileFocus={{ color: "red" }}
                  >
                    {/* Navlink icon */}
                    <motion.span>
                      {item.path === "cart" && (
                        <span className="absolute text-[#c606b9] -top-3 text-sm ">
                          {cartProduct.length}
                        </span>
                      )}
                      {item.icon}
                    </motion.span>
                  </motion.button>
                </NavLink>
              ))}

              {/* dots */}
              <motion.button
                variants={{
                  initial: { y: 40, opacity: 0 },
                  end: { y: 0, opacity: 1 },
                }}
                initial="initial"
                animate="end"
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                whileHover={{ color: "#2e8c93" }}
                whileTap={{ color: "#275ef7" }}
                whileFocus={{ color: "red" }}
                onClick={() => {
                  setMenuIsActive(!menuIsActive);
                  setIsNavbarActive(true);
                }}
              >
                <CgMenuBoxed />
              </motion.button>
            </div>
          )}
        </>
        {/* ---------------------------- */}

        {/*  For Big Screen */}
        {window.innerWidth > 1024 && (
          <div className="text-xl flex justify-around gap-8 p-1 px-3 pr-12">
            {/* search icon and search input if searchIsActive is true */}
            <div className="flex gap-3 items-center">
              {searchIsActive && (
                <>
                  <motion.input
                    variants={{
                      initial: { width: "0" },
                      final: { width: "27vw" },
                    }}
                    initial="initial"
                    animate="final"
                    transition={{ duration: 0.5, ease: "linear" }}
                    type="text"
                    placeholder="Search for the products"
                    className="w-[34vw] text-sm font-semibold p-1 px-3 rounded-lg bg-transparent outline outline-2 outline-[#0f000e] "
                  />
                </>
              )}
              <motion.button
                variants={{
                  initial: { y: 40, opacity: 0.2 },
                  end: { y: 0, opacity: 1 },
                }}
                initial="initial"
                animate="end"
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                whileTap={{ color: "#3665e5" }}
                whileFocus={{ color: "red" }}
                whileHover={{ color: "#5780f3" }}
                className=""
                onClick={() => {
                  setSearchIsActive(!searchIsActive);
                  setIsNavbarActive(true);
                }}
              >
                <IoSearchSharp />
              </motion.button>
            </div>
            {/* ------------------------------------------------------- */}

            {/* Routes */}
            {NavItems.map((item) => (
              <NavLink
                onClick={() => {
                  if (item.path === "Login" && current) {
                    Logout();
                  }
                  setMenuIsActive(false);
                }}
                to={!current && item.path ? "/login" : `/${item.path}`}
                key={item.name}
                className={({ isActive }) =>
                  `${isActive && "underline underline-offset-2"}`
                }
              >
                <motion.button
                  whileFocus={{ color: "red" }}
                  whileTap={{ color: "#3665e5" }}
                  whileHover={{ color: "#5780f3" }}
                  className="flex items-center gap-2"
                  onClick={() => {
                    setIsNavbarActive(true);
                  }}
                >
                  {/* Navlink icon */}
                  <motion.span
                    variants={{
                      initial: { y: 40, opacity: 0 },
                      end: { y: 0, opacity: 1 },
                    }}
                    initial="initial"
                    animate="end"
                    transition={{
                      delay: 0.2,
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    {item.path === "cart" && (
                      <span className="absolute  right-1 text-[#c606b9] bottom-3 text-xs font-bold ">
                        {cartProduct.length}
                      </span>
                    )}
                    {item.name !== "Home" && (
                      <span className="">{item.icon}</span>
                    )}
                    {item.name === "Home" && (
                      <span className="text-lg">{item.icon}</span>
                    )}
                  </motion.span>

                  {/* /Navlink Name */}
                  <motion.span
                    variants={{
                      initial: { y: 40, opacity: 0 },
                      end: { y: 0, opacity: 1 },
                    }}
                    initial="initial"
                    animate="end"
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    className=""
                  >
                    {item.name === "Login" && current ? (
                      <span className="text-lg">Logout</span>
                    ) : (
                      <span className="text-lg">{item.name}</span>
                    )}
                  </motion.span>
                </motion.button>
              </NavLink>
            ))}
            {/* -------------- */}

            {/* dots */}
            <motion.button
              variants={{
                initial: { y: 40, opacity: 0.2 },
                end: { y: 0, opacity: 1 },
              }}
              initial="initial"
              animate="end"
              transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
              whileHover={{ color: "#5780f3" }}
              whileTap={{ color: "#3665e5" }}
              whileFocus={{ color: "red" }}
              className="text-xl "
              onClick={() => {
                setMenuIsActive(!menuIsActive);
                setIsNavbarActive(true);
              }}
            >
              <CgMenuBoxed />
            </motion.button>
            {/* ------- */}
          </div>
        )}

        {/* If menuIsActive for both screen*/}
        {menuIsActive && (
          <motion.div
            variants={{
              initial: { height: 0, width: 0, opacity: 0 },
              final: {
                height: "fit-content",
                width: "fit-content",
                overflow: "hidden",
                padding: 13,
                opacity: 1,
              },
            }}
            initial="initial"
            animate="final"
            transition={{ ease: "backIn", duration: 0.6 }}
            className=" absolute bg-[#32012F] outline outline-2  outline-[#0f000e] right-4 lg:right-2 top-[120%] lg:outline-4 rounded-xl"
          >
            <ul>
              {MenuList.map((item) => (
                <NavLink
                  key={item.name}
                  to={current ? item.path : "/Login"}
                  className="flex gap-2  items-center p-3 hover:underline text-xl"
                  onClick={() => {
                    setMenuIsActive(false);
                    setIsNavbarActive(true);
                  }}
                >
                  <li>{item.icon}</li>
                  <li className="text-lg">{item.name}</li>
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}

        {/* --------------- */}
        {/* --------------- END --------------- */}
      </motion.div>
    </>
  );
}

export default NavBar;
