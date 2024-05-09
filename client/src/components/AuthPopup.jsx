import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";

const AuthPopup = ({ setShowAuthForm }) => {
  const [currState, setCurrState] = useState("Sign-Up");
  return (
    <div className="fixed z-20 w-[100%] h-[100%] bg-[#00000090] text-gray-600  flex justify-center items-center p-2">
      <form className="bg-white flex flex-col p-6 gap-5 animate-fade rounded-md flex-1 max-w-sm  ">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl">
            {currState === "Sign-Up" ? "Sign Up" : "Login"}
          </h2>
          <img
            onClick={() => setShowAuthForm(false)}
            src={assets.cross_icon}
            className="cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-3">
          {currState === "Sign-Up" ? (
            <input
              className="border outline-none rounded p-2"
              type="text"
              placeholder="Your Name"
              required
            />
          ) : (
            <></>
          )}

          <input
            className="border outline-none rounded p-2"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className="border outline-none rounded p-2"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded p-2">
          {currState === "Sign-Up" ? "Create An Account" : "Login"}
        </button>


            <div className="flex items-center gap-2">
                 <input type='checkbox'  />
                  <p className="text-xs">By continue , i agree to the terms of use and privacy policy.</p>
            </div>
        {currState === "Login" ? (
          <p className="text-sm">
            Don't have an account?{" "}
            <span
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
              onClick={() => setCurrState("Sign-Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              Sign In
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthPopup;
