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
        className="w-[95%] p-3 px-6 text-[#2e5dde] flex m-auto justify-between items-center text-2xl bg-[#32012F] absolute top-3 left-1/2 z-10 outline outline-3 outline-[#2e5dde] rounded-2xl lg:outline-4 lg:p-2 lg:pl-10 lg:my-2 lg:w-[83vw] lg:fixed lg:top-2 lg:left-1/2"
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
            <div className=" flex items-center gap-3 text-3xl">
              {NavItems.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    `flex ${isActive ? "text-[#275ef7]" : "text-[#7297fd]"}`
                  }
                  to={!current && item.path ? "/login" : `/${item.path}`}
                  key={item.name}
                >
                  <motion.button
                    className={`relative ${item.name == "Home" && "text-2xl"}`}
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
                        <span className="absolute -top-4 text-lg font-semibold">
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
          <div className="text-lg flex justify-around gap-10 p-1 px-3 pr-12">
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
                    className="w-[27vw] text-sm font-semibold p-1 px-3 rounded-lg bg-transparent outline outline-2 outline-[#0f000e] "
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
                className="text-2xl "
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
                    className="text-xl relative"
                  >
                    {item.path === "cart" && (
                      <span className="absolute right-0.5 bottom-3 text-lg font-semibold">
                        {cartProduct.length}
                      </span>
                    )}
                    {item.name !== "Home" && (
                      <span className="text-2xl">{item.icon}</span>
                    )}
                    {item.name === "Home" && (
                      <span className="text-2xl">{item.icon}</span>
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
                    className="text-xl"
                  >
                    {item.name === "Login" && current ? (
                      <span>Logout</span>
                    ) : (
                      <span>{item.name}</span>
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
              className="text-2xl "
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
                  className="flex gap-2  items-center p-4 hover:underline text-xl"
                  onClick={() => {
                    setMenuIsActive(false);
                    setIsNavbarActive(true);
                  }}
                >
                  <li>{item.icon}</li>
                  <li>{item.name}</li>
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
