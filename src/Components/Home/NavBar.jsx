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
function NavBar() {
  const [HamburgerIsActive, setHambuegeIsActive] = useState(false);
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { cartProduct, current, Logout } = useUser();

  return (
    <>
      <div className="w-screen p-3 px-8 text-[#655ee6] flex m-auto justify-between items-center text-2xl bg-[#453C97] relative z-10 lg:p-2 lg:pl-10  lg:rounded-2xl lg:my-2 lg:w-[83vw] lg:fixed lg:top-2 lg:left-1/2 lg:-translate-x-1/2">
        {/* Name */}
        <motion.span
          variants={{
            initial: { x: -120, opacity: 0 },
            end: { x: 0, opacity: 1 },
          }}
          initial="initial"
          animate="end"
          transition={{ delay: 0.3, duration: 0.8, ease: "backInOut" }}
          className="text-2xl font-bold lg:w-[20%] lg:pl-7 text-indigo-950"
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
                className="text-4xl text-[#46C2CB] "
                onClick={() => setMenuIsActive(!menuIsActive)}
              >
                <CgMenuBoxed />
              </motion.button>

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
                className="text-4xl text-[#46C2CB] "
                onClick={() => setHambuegeIsActive(!HamburgerIsActive)}
              >
                <MdMenu />
              </motion.button>
            </div>
          )}

          {/* Navlist if HamburgerIsActive for mobile*/}
          {HamburgerIsActive && (
            <>
              <div className="w-fit absolute right-4 lg:right-2 top-[115%] bg-[#453C97] rounded-xl">
                {/* routes */}
                <motion.div
                  variants={{
                    initial: { height: 0, width: 0 },
                    final: {
                      height: "fit-content",
                      width: "fit-content",
                      overflow: "hidden",
                      padding: 10,
                    },
                  }}
                  initial="initial"
                  animate="final"
                  transition={{ ease: "backIn", duration: 0.6 }}
                  className=" absolute right-4 lg:right-2 top-[115%] bg-[#453C97] rounded-xl"
                >
                  {NavItems.map((item) => (
                    <NavLink
                      onClick={() => setHambuegeIsActive(false)}
                      to={`/${item.path}`}
                      key={item.name}
                      className={
                        "flex gap-2 items-center py-4 px-4 hover:underline text-xl text-[#46C2CB]"
                      }
                    >
                      <span className="text-2xl ">{item.icon}</span>
                      <span>{item.name}</span>
                    </NavLink>
                  ))}
                </motion.div>
              </div>
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
                    className="w-[27vw] text-sm font-semibold p-1 px-3 rounded-lg bg-slate-800 bg-opacity-40 "
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
                whileTap={{ color: "cyan" }}
                whileFocus={{ color: "red" }}
                whileHover={{ color: "#2e8c93" }}
                className="text-2xl text-[#46C2CB]"
                onClick={() => setSearchIsActive(!searchIsActive)}
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
                  `flex items-center gap-2 ${
                    isActive
                      ? "text-[#37a6ae] underline underline-offset-2"
                      : "text-[#46C2CB]"
                  }`
                }
              >
                <motion.div
                  whileFocus={{ color: "red" }}
                  whileTap={{ color: "cyan" }}
                  whileHover={{ color: "#2e8c93" }}
                  className="flex items-center gap-2 "
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
                      <span className="absolute right-0.5 bottom-3 text-lg font-semibold text-red-700">
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
                </motion.div>
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
              whileHover={{ color: "#2e8c93" }}
              whileTap={{ color: "cyan" }}
              whileFocus={{ color: "red" }}
              className="text-2xl text-[#46C2CB] "
              onClick={() => setMenuIsActive(!menuIsActive)}
            >
              <CgMenuBoxed />
            </motion.button>
            {/* ------- */}
          </div>
        )}

        {/* If menuIsActive */}
        {menuIsActive && (
          <motion.div
            variants={{
              initial: { height: 0, width: 0 },
              final: {
                height: "fit-content",
                width: "fit-content",
                overflow: "hidden",
                padding: 13,
              },
            }}
            initial="initial"
            animate="final"
            transition={{ ease: "backIn", duration: 0.6 }}
            className=" absolute right-4 lg:right-2 top-[115%] bg-[#453C97] rounded-xl"
          >
            <ul>
              {MenuList.map((item) => (
                <NavLink
                  key={item.name}
                  to={current ? item.path : "/Login"}
                  className="flex gap-2 items-center p-4 hover:underline text-xl text-[#46C2CB]"
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
      </div>
    </>
  );
}

export default NavBar;
