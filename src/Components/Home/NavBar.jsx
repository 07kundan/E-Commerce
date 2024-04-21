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
        path: "",
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
                                {/* routes */}
                                <div className="h-full p-12 flex flex-col gap-4  ">
                                    {NavItems.map((item) => (
                                        <NavLink
                                            onClick={() =>
                                                setHambuegeIsActive(false)
                                            }
                                            to={`/${item.path}`}
                                            key={item.name}
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 ${
                                                    isActive
                                                        ? "text-[#c79e3d]"
                                                        : "text-[#FFD369]"
                                                }`
                                            }
                                        >
                                            <span className="text-2xl ">
                                                {item.icon}
                                            </span>
                                            <span>{item.name}</span>
                                        </NavLink>
                                    ))}
                                </div>
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
                                    <input
                                        type="text"
                                        placeholder="Search for the products"
                                        className="w-[27vw] text-sm font-semibold p-1 px-3 rounded-lg bg-white bg-opacity-60 "
                                    />
                                </>
                            )}
                            <motion.button
                                variants={{
                                    initial: { y: 80, opacity: 0.2 },
                                    end: { y: 0, opacity: 1 },
                                }}
                                initial="initial"
                                animate="end"
                                transition={{
                                    delay: 0.2,
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                className="text-2xl text-[#46C2CB]"
                                onClick={() =>
                                    setSearchIsActive(!searchIsActive)
                                }
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
                                    `flex items-center gap-2 ${
                                        isActive
                                            ? "text-[#37a6ae] underline underline-offset-2"
                                            : "text-[#46C2CB]"
                                    }`
                                }
                            >
                                <motion.span
                                    variants={{
                                        initial: { y: 60, opacity: 0.2 },
                                        end: { y: 0, opacity: 1 },
                                    }}
                                    initial="initial"
                                    animate="end"
                                    transition={{
                                        delay: 0.2,
                                        duration: 1,
                                        ease: "easeInOut",
                                    }}
                                    className="text-xl "
                                >
                                    {item.icon}
                                </motion.span>
                                <motion.span
                                    variants={{
                                        initial: { y: 80, opacity: 0.2 },
                                        end: { y: 0, opacity: 1 },
                                    }}
                                    initial="initial"
                                    animate="end"
                                    transition={{
                                        delay: 0.2,
                                        duration: 1,
                                        ease: "easeOut",
                                    }}
                                    className="text-xl"
                                >
                                    {item.name}
                                </motion.span>
                            </NavLink>
                        ))}
                        {/* -------------- */}
                        {/* dots */}
                        <motion.button
                            variants={{
                                initial: { y: 80, opacity: 0.2 },
                                end: { y: 0, opacity: 1 },
                            }}
                            initial="initial"
                            animate="end"
                            transition={{
                                delay: 0.2,
                                duration: 1,
                                ease: "easeInOut",
                            }}
                            className="text-2xl text-[#46C2CB]"
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
                        transition={{ ease: "backIn", duration: 1 }}
                        className=" absolute right-2 top-[115%] bg-[#453C97] rounded-xl"
                    >
                        <ul>
                            {MenuList.map((item) => (
                                <NavLink
                                    to={item.path}
                                    className="flex gap-2 items-center py-4 px-4 hover:underline text-xl text-[#46C2CB]"
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
