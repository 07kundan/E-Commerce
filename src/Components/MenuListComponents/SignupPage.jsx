import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useUser } from "../../store/contextApis";
import { ID } from "appwrite";
import { databases } from "../../store/AppWriteConfig";

function SignupPage() {
  const [isHidePassword, setIsHidePassword] = useState(false);
  const { userDetails: user, setUserDetails: setUser } = useUser();
  const userContext = useUser();

  // updating user details
  const handleChange = (e, inputField) => {
    setUser({
      ...user,
      [inputField]: e.target.value,
    });
  };

  // handleDatabase

  const handleDatabase = async (e) => {
    e.preventDefault();
    try {
      await userContext.Signup(user.Email, user.Password, user.Name);
      // If signup is successful, proceed with creating the document
      try {
        const response = await databases.createDocument(
          "6624cfd4357d94effa79", // Replace with your database ID
          "66470fb100112c5dd918", // Replace with your collection ID
          ID.unique(),
          {
            userID: user.Email,
            Name: user.Name,
            PhoneNo: user.PhoneNo,
            password: user.Password,
            Email: user.Email,
          }
        );
        // console.log(response);
      } catch (error) {
        console.log("Error creating document:", error);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-[#2e5dde]">
      <div className="flex flex-col   bg-gradient-to-br from-slate-300/30 via-slate-700/70 to-slate-900 border-2 border-black p-8 rounded-xl shadow-md max-w-lg lg:w-3/4 lg:mt-8">
        <h2 className="text-3xl  font-bold text-center underline underline-offset-2 ">
          Create an Account
        </h2>
        <form
          className="flex flex-col space-y-6 lg:space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="relative">
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder=""
              autoComplete="off"
              required
              onChange={(e) => {
                handleChange(e, "Name");
              }}
              className="input-field"
            />
            <label htmlFor="Name" className="input-label">
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              type="tel"
              name="no"
              id="no"
              minLength={10}
              maxLength={10}
              placeholder=""
              autoComplete="off"
              required
              onChange={(e) => {
                handleChange(e, "PhoneNo");
              }}
              className="input-field"
            />
            <label htmlFor="no" className="input-label">
              Phone No
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              autoComplete="off"
              required
              onChange={(e) => {
                handleChange(e, "Email");
              }}
              className="input-field"
            />
            <label htmlFor="email" className="input-label">
              Email
            </label>
          </div>
          <div className="relative flex items-center">
            <input
              type={isHidePassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder=""
              autoComplete="off"
              required
              onChange={(e) => {
                handleChange(e, "Password");
              }}
              className="input-field w-full"
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
          <div className="text-center">
            <NavLink
              to="../login"
              className="text-blue-500 font-semibold flex items-center justify-center"
            >
              Go back to Login Page <FaArrowRightLong className="ml-2" />
            </NavLink>
          </div>
          <button
            className="bg-blue-600 text-white font-bold py-3 rounded-md transition duration-300 hover:bg-blue-700"
            onClick={(e) => {
              handleDatabase(e);
              // userContext.Signup(user.Email, user.Password, user.Name);
            }}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
