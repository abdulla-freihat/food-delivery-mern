import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link  , useNavigate} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import {toast} from 'react-toastify';


const Navbar = ({ setShowAuthForm }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const navigate = useNavigate();
  const { getCartTotalAmount, token , setToken } = useContext(StoreContext);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


const logout = ()=>{

     localStorage.removeItem("token");



     setToken("");
     navigate("/");
     toast.success('Logout successfully');
}


  return (
    <div className="p-5 relative z-10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            className="bg-blue-600 text-white p-2 rounded-full lg:hidden hover:bg-blue-700"
            onClick={toggleMenu}
          >
            <FiMenu />
          </button>
          <Link to="/">
            <img src={assets.logo} alt="logo" className="w-32" />
          </Link>
        </div>

        <div className="hidden lg:flex gap-6">
          <Link
            to="/"
            className={`text-gray-600 font-medium cursor-pointer ${
              location.pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`text-gray-600 font-medium cursor-pointer ${
              location.pathname === "/menu" ? "underline" : ""
            }`}
          >
            Menu
          </Link>
          <Link
            to="/mobileApp"
            className={`text-gray-600 font-medium cursor-pointer ${
              location.pathname === "/mobileApp" ? "underline" : ""
            }`}
          >
            Mobile App
          </Link>
          <Link
            to="/contact"
            className={`text-gray-600 font-medium cursor-pointer ${
              location.pathname === "/contact" ? "underline" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <CiSearch className="w-6 h-6 cursor-pointer text-gray-600" />
          <Link to="/cart" className="relative">
            <FaShoppingBag className="w-6 h-6 cursor-pointer text-gray-600" />
            {getCartTotalAmount() > 0 && (
              <span className="absolute -top-1 -right-2 bg-orange-500 text-white w-4 h-4 flex justify-center items-center rounded-full text-xs">
               
              </span>
            )}
          </Link>

          {!token ? (
            <button
              onClick={() => setShowAuthForm(true)}
              className="hidden lg:block bg-transparent border border-yellow-700 rounded-full px-6 py-2 text-sm font-medium"
            >
              Sign In
            </button>
          ) : (
            <div className="relative">
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-6 cursor-pointer"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-orange-500">
                  <ul className="flex flex-col gap-2 p-2">
                    <li className="flex items-center cursor-pointer p-2 hover:bg-gray-100">
                      <img src={assets.bag_icon} alt="orders" className="w-5 mr-2" />
                      <p className="text-sm">Orders</p>
                    </li>
                    <li onClick={logout} className="flex items-center cursor-pointer p-2 hover:bg-gray-100">
                      <img src={assets.logout_icon} alt="logout" className="w-5 mr-2" />
                      <p className="text-sm">Logout</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="absolute bg-white top-full left-0 w-full shadow-lg py-2 lg:hidden z-10">
          <div className="max-w-5xl mx-auto flex p-2">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-600 font-medium cursor-pointer ${
                  location.pathname === "/" ? "underline" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/menu"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-600 font-medium cursor-pointer ${
                  location.pathname === "/menu" ? "underline" : ""
                }`}
              >
                Menu
              </Link>
              <Link
                to="/mobileApp"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-600 font-medium cursor-pointer ${
                  location.pathname === "/mobileApp" ? "underline" : ""
                }`}
              >
                Mobile App
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-600 font-medium cursor-pointer ${
                  location.pathname === "/contact" ? "underline" : ""
                }`}
              >
                Contact
              </Link>

              {!token ? (
                <button
                  onClick={() => setShowAuthForm(true)}
                  className="bg-transparent border border-yellow-700 rounded-full px-6 py-2 text-sm font-medium"
                >
                  Sign In
                </button>
              ) : (
                <button className="bg-transparent border border-yellow-700 rounded-full px-6 py-2 text-sm font-medium">
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
