import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useUser } from "../../store/contextApis";

function LoginPage() {
  const [isHidePassword, setIsHidePassword] = useState(false);
  const userFromContext = useUser();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // updating user email and password
  const handleChange = (e, inputField) => {
    setUser({
      ...user,
      [inputField]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className="flex flex-col border-2 text-[#2e5dde] bg-gradient-to-br from-slate-300/30 via-slate-700/70 to-slate-900 border-black p-8 rounded-xl shadow-md max-w-md lg:mt-8">
        <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
        <form
          className="text-lg"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* Username  */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              autoComplete="on"
              required
              onChange={(e) => handleChange(e, "email")}
              className="input-field "
            />
            <label htmlFor="email" className="input-label">
              Email
            </label>
          </div>
          {/* password  */}
          <div className="relative flex items-center mt-4">
            <input
              type={isHidePassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder=""
              className="input-field w-full"
              autoComplete="off"
              required
              onChange={(e) => handleChange(e, "password")}
            />
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <button
              className="absolute right-4"
              onClick={(e) => {
                e.preventDefault();
                setIsHidePassword(!isHidePassword);
              }}
            >
              {isHidePassword ? (
                <IoEye className="text-amber-400" />
              ) : (
                <IoEyeOff className="text-amber-600" />
              )}
            </button>
          </div>
          {/* forgot password and sign up section  */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-2"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link to="/forgot" className="">
              Forgot Password?
            </Link>
          </div>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#373cbb] font-semibold underline"
            >
              Sign Up
            </Link>
          </p>
          <button
            className="bg-[#2e5dde] text-white font-bold py-3 rounded-md mt-6 transition duration-300 hover:bg-blue-700 w-full"
            onClick={() => {
              userFromContext.Login(user.email, user.password);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
