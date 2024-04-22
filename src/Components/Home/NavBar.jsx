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

  return (
    <>
      <div className="w-screen p-3 px-8 text-[#655ee6] flex m-auto justify-between items-center text-2xl bg-[#453C97] relative z-10 lg:p-2 lg:pl-10  lg:rounded-2xl lg:my-2 lg:w-[83vw] ">
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
            <div className="w-screen p-3 px-8 text-[#655ee6] flex m-auto justify-between items-center text-2xl bg-[#453C97] relative z-10 lg:p-2 lg:pl-10  lg:rounded-2xl lg:my-2 lg:w-[83vw] ">
                {/* Name */}
                <motion.span
                    variants={{
                        initial: { x: -90, opacity: 0.5 },
                        end: { x: 0, opacity: 1 },
                    }}
                    initial="initial"
                    animate="end"
                    transition={{ delay: 0.5, duration: 1, ease: "backInOut" }}
                    className="text-2xl font-bold lg:w-[20%] lg:pl-7 text-indigo-950"
                >
                    ZED-kart
                </motion.span>

                {/* Hamburger for smaller screen */}
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
                to={`/${item.path}`}
                key={item.name}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-[#46C2CB] underline underline-offset-4 "
                      : "text-[#46C2CB]"
                  }`
                }
              >
                <motion.div
                  whileFocus={{ color: "red" }}
                  whileTap={{ color: "cyan" }}
                  whileHover={{ color: "#2e8c93" }}
                  className="flex items-center gap-2"
                >
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
                    className="text-xl "
                  >
                    {item.icon}
                  </motion.span>
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
                    {item.name}
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
            className=" absolute right-2 top-[115%] bg-[#453C97] rounded-xl"
          >
            <ul>
              {MenuList.map((item) => (
                <a
                  href="#"
                  className="flex gap-2 items-center py-4 px-4 hover:underline text-xl text-[#46C2CB]"
                >
                  <li>{item.icon}</li>
                  <li>{item.name}</li>
                </a>
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
