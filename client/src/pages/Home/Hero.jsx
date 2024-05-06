import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto p-3 mt-8">
      <div
        className="bg-no-repeat bg-cover relative flex items-center"
        style={{ 
          backgroundImage: `url(${assets.header_img})`,
          minHeight: "30rem", // Default height for small screens
        }}
      >
        <div className="max-w-xl mx-12 flex flex-col gap-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Order Your Favorite Food Here.
          </h1>
          <p className="text-white text-sm">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>

          <Link
            to="/menu"
            className="bg-white rounded-full px-4 py-2 w-[150px] text-center text-gray-600"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
