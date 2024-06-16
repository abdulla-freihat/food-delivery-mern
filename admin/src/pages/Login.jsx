import React from "react";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-2 ">
       <img src={assets.logo}  />
      <div className="bg-white rounded shadow text-gray-600  p-6 max-w-6xl">
        <h1 className="font-bold text-xl">Login As Admin</h1>
        <form className="flex flex-col gap-3 my-5">
          <input
            className={`border outline-none rounded p-2`}
            type="email"
            name="email"
            placeholder="Your Email"
          />

          <input
            className={`border outline-none rounded p-2`}
            type="password"
            name="password"
            placeholder="Your Password"
          />

          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded p-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
