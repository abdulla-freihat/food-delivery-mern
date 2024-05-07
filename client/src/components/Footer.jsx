import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="p-5 bg-[#323232] text-[#d9d9d9]">
      <footer className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-3 flex-1">
            <img src={assets.logo} alt="logo" className="w-32" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

             <div className="flex gap-2">
                 <img src={assets.facebook_icon} alt='' className="w-8 h-8 cursor-pointer" />
                 <img src={assets.twitter_icon} alt=''  className="w-8 h-8 cursor-pointer" />
                 <img src={assets.linkedin_icon} alt='' className="w-8 h-8 cursor-pointer"/>
             </div>
          </div>


          <div className="flex flex-col gap-3 flex-1">
            <h2 className="text-2xl font-bold">Company</h2>
            <div className="flex flex-col">
                 <Link className="mb-2" to='/'>Home</Link>
                 <Link className="mb-2" >About Us</Link>
                 <Link className="mb-2" >Delivery</Link>
                 <Link className="mb-2" >Privacy Policy</Link>
            </div>
          </div>


          <div className="flex flex-col gap-3 flex-1">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <div className="flex flex-col">
                <span className="mb-2">+1 (502) 111-111</span>
                <span className="mb-2">contact@contact.com</span>
                
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
            <p>copyright {currentYear} - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
