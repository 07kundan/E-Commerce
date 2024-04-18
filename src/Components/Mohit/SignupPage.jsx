import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
function SignupPage() {
    const [isHidePassword, setIsHidePassword] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="flex flex-col border-2 border-black p-5 pt-0 rounded-xl h-max w-[500px]">
                <h2 className="text-4xl font-bold text-center m-6">Sign up</h2>
                <div>
                    <form
                        action=""
                        className="flex flex-col justify-around gap-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            type="text"
                            name="username"
                            id="usename"
                            placeholder="Enter your name"
                        />
                        <input
                            type="number"
                            name="username"
                            id="usename"
                            placeholder="Enter your mobile no."
                        />
                        <div className="w-full relative flex items-center">
                            <input
                                type={isHidePassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full"
                            />
                            <button
                                className="absolute right-4 text-2xl"
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

                        <button className="bg-blue-600 text-white font-bold mt-3 p-3 text-lg rounded-md active:bg-cyan-600 hover:bg-blue-700">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
