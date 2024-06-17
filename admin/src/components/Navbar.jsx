import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { setToken, setIsAdmin } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setToken("");
    setIsAdmin(false);

    localStorage.remove("token");
    localStorage.remove("isAdmin");

    navigate("/");
  };

  return (
    <div className="p-3">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-32" />
        </Link>

        <div className="relative">
          <img
            src={assets.profile_image}
            alt="profile"
            className="w-12 cursor-pointer"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
