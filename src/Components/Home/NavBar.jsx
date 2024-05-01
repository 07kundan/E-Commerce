import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoIosCloseCircle, IoMdCart } from "react-icons/io";
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
  {
    icon: <FaGift />,
    name: "Rewards",
    path: "rewards",
  },
];
// Navbar
function NavBar({ ishidden, setIsActive }) {
  const [HamburgerIsActive, setHambuegeIsActive] = useState(false);
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { cartProduct, current, Logout } = useUser();

  return (
    <>
      <motion.div
        initial={{ translateX: "-50%" }}
        animate={ishidden ? { rotateX: 90 } : { rotate: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="w-screen p-3 px-8 text-[#7EA1FF] flex m-auto justify-between items-center text-2xl bg-[#FFD1E3] relative left-1/2 z-10 outline outline-4 outline-[#ec4283] lg:p-2 lg:pl-10  lg:rounded-2xl lg:my-2 lg:w-[83vw] lg:fixed lg:top-2 lg:left-1/2"
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
          className="text-2xl font-bold lg:w-[20%] lg:pl-7 text-[#2e5dde]"
        >
          ZED-kart
        </motion.span>

        {/* Hamburger for smaller screen */}
        <>
          {window.innerWidth < 1024 && (
            <div className=" flex items-center gap-3">
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
                whileTap={{ color: "cyan" }}
                whileFocus={{ color: "red" }}
                className="text-4xl "
                onClick={() => {
                  setMenuIsActive(!menuIsActive);
                  setIsActive(true);
                }}
              >
                <CgMenuBoxed />
              </motion.button>

              {/* Hamburger button */}
              <motion.button
                variants={{
                  initial: { y: 40, opacity: 0 },
                  end: { y: 0, opacity: 1 },
                }}
                initial="initial"
                animate="end"
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                whileHover={{ color: "#2e8c93" }}
                whileTap={{ color: "#3665e5" }}
                whileFocus={{ color: "red" }}
                className="text-4xl "
                onClick={() => {
                  setHambuegeIsActive(!HamburgerIsActive);
                  setIsActive(true);
                }}
              >
                <MdMenu />
              </motion.button>
            </div>
          )}

          {/* Navlist if HamburgerIsActive for mobile*/}
          {HamburgerIsActive && (
            <>
              {/* routes */}
              <motion.div
                variants={{
                  initial: { height: 0, width: 0, opacity: 0 },
                  final: {
                    opacity: 1,
                    height: "fit-content",
                    width: "fit-content",
                    overflow: "hidden",
                    padding: 10,
                  },
                }}
                initial="initial"
                animate="final"
                transition={{ ease: "backIn", duration: 0.6 }}
                className="absolute bg-[#FFD1E3] outline outline-4 outline-[#ec4283] right-4 top-[120%] rounded-xl"
              >
                {NavItems.map((item) => (
                  <NavLink
                    onClick={() => {
                      if (item.path === "Login" && current) {
                        Logout();
                      }

                      setHambuegeIsActive(false);
                    }}
                    to={!current && item.path ? "/login" : `/${item.path}`}
                    key={item.name}
                    className={({ isActive }) =>
                      `flex gap-2 items-center py-4 px-4 hover:underline text-xl ${
                        isActive
                          ? "text-[#275ef7] underline underline-offset-2"
                          : "text-[#7297fd]"
                      }`
                    }
                  >
                    <motion.button
                      onClick={() => setIsActive(true)}
                      whileFocus={{ color: "red" }}
                      whileTap={{ color: "#3665e5" }}
                      whileHover={{ color: "#5780f3" }}
                      className="flex items-center gap-2"
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
                        transition={{
                          delay: 0.2,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
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
              </motion.div>
            </>
          )}
        </>
        {/* ---------------------------- */}
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
                    className="w-[27vw] text-sm font-semibold p-1 px-3 rounded-lg bg-transparent outline outline-2 outline-[#e1588c] "
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
                  setIsActive(true);
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
                  `${
                    isActive
                      ? "text-[#275ef7] underline underline-offset-2"
                      : "text-[#7297fd]"
                  }`
                }
              >
                <motion.button
                  onClick={() => setIsActive(true)}
                  whileFocus={{ color: "red" }}
                  whileTap={{ color: "#3665e5" }}
                  whileHover={{ color: "#5780f3" }}
                  className="flex items-center gap-2"
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
                setIsActive(true);
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
            className=" absolute bg-[#FFD1E3] outline outline-2  outline-[#ec4283] right-4 lg:right-2 top-[120%] lg:outline-4 rounded-xl"
          >
            <ul>
              {MenuList.map((item) => (
                <NavLink
                  key={item.name}
                  to={current ? item.path : "/Login"}
                  className="flex gap-2  items-center p-4 hover:underline text-xl"
                  onClick={() => setMenuIsActive(false)}
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
