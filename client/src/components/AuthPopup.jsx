import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from 'axios';
import { toast } from "react-toastify";

const AuthPopup = ({ setShowAuthForm }) => {
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});  // State for error messages

  const { url, setToken } = useContext(StoreContext);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors({});  // Clear previous errors

    let newUrl = url;
    if (currState === 'Login') {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const res = await axios.post(newUrl, data);
      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        setShowAuthForm(false);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || {});  // Set errors from response
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="fixed z-20 w-[100%] h-[100%] bg-[#00000090] text-gray-600 flex justify-center items-center p-2">
      <form onSubmit={onLogin} className="bg-white flex flex-col p-6 gap-5 animate-fade rounded-md flex-1 max-w-sm">
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
          {currState === "Sign-Up" && (
            <>
              <input
                className={`border outline-none rounded p-2 ${errors.name ? 'border-red-500' : ''}`}
                type="text"
                name='name'
                placeholder="Your Name"
                
                value={data.name}
                onChange={onChangeHandler}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </>
          )}

          <input
            className={`border outline-none rounded p-2 ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            name='email'
            placeholder="Your Email"
          
            value={data.email}
            onChange={onChangeHandler}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            className={`border outline-none rounded p-2 ${errors.password ? 'border-red-500' : ''}`}
            type="password"
            name='password'
            placeholder="Password"
          
            value={data.password}
            onChange={onChangeHandler}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded p-2">
          {currState === "Sign-Up" ? "Create An Account" : "Login"}
        </button>

        <div className="flex items-center gap-2">
          <input type='checkbox' />
          <p className="text-xs">By continuing, I agree to the terms of use and privacy policy.</p>
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
