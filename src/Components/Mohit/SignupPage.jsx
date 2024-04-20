import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function SignupPage() {
    const [isHidePassword, setIsHidePassword] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="flex flex-col border-2 bg-slate-300 border-black p-5 pt-0 rounded-xl h-max w-[500px]">
                <h2 className="text-4xl font-bold text-center m-6">
                    New Account
                </h2>
                <div>
                    <form
                        className="flex flex-col justify-around"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        {/* Username  */}
                        <div className="w-full relative">
                            <input
                                type="text"
                                name="username"
                                id="usename"
                                placeholder=""
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="username" className="input-label">
                                UserName
                            </label>
                        </div>
                        {/* Address  */}
                        <div className="w-full relative mt-10">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder=""
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="address" className="input-label">
                                Address
                            </label>
                        </div>
                        {/* Email  */}
                        <div className="w-full relative mt-10">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder=""
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="email" className="input-label">
                                Email
                            </label>
                        </div>
                        {/* Password  */}
                        <div className="w-full relative flex items-center mt-10">
                            <div className="w-full absolute bottom-0 ">
                                <input
                                    type={isHidePassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder=""
                                    className="w-full"
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    htmlFor="password"
                                    className="input-label"
                                >
                                    Password
                                </label>
                            </div>
                            <button
                                className="absolute right-4 bottom-2 text-2xl"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsHidePassword(!isHidePassword);
                                }}
                            >
                                {isHidePassword ? (
                                    <IoEye className="text-blue-500" />
                                ) : (
                                    <IoEyeOff className="text-slate-500" />
                                )}
                            </button>
                        </div>
                        <NavLink to={"../login"}>
                            <div className="flex items-center justify-center gap-2 font-semibold text-[#2e2ef6] text-center mt-10">
                                Go back to Login Page <FaArrowRightLong />
                            </div>
                        </NavLink>

                        <button className="bg-blue-600 text-white font-bold mt-3 p-3 text-lg rounded-md active:bg-cyan-600 hover:bg-blue-700">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
