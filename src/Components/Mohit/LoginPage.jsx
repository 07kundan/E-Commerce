import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
function LoginPage() {
    const [isHidePassword, setIsHidePassword] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="flex flex-col border-2 bg-slate-300 border-black p-5 pt-0 rounded-xl h-max w-[500px]">
                <h2 className="text-4xl font-bold text-center m-6">Login</h2>
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
                            />
                            <label htmlFor="username" className="input-label">
                                UserName
                            </label>
                        </div>
                        {/* password  */}
                        <div className="w-full relative flex items-center mt-10">
                            <div className="w-full absolute bottom-0 ">
                                <input
                                    type={isHidePassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder=""
                                    className="w-full"
                                    autoComplete="off"
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
                        {/* forgot password and sign up section  */}
                        <div className="flex flex-col gap-4 h-max py-4">
                            <div className="h-max flex justify-between p-1">
                                <div className="flex gap-2">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="remember"
                                    />
                                    <label htmlFor="remember">
                                        Remember me
                                    </label>
                                </div>
                                <div className="font-medium text-[#2e2ef6]">
                                    Forgot Password?
                                </div>
                            </div>
                            <p className="text-center">
                                Don't have an account?{" "}
                                <span className="font-semibold text-[#2e2ef6]">
                                    Sign Up
                                </span>
                            </p>
                        </div>

                        <button className="bg-blue-600 text-white font-bold mt-3 p-3 text-lg rounded-md active:bg-cyan-600 hover:bg-blue-700">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
