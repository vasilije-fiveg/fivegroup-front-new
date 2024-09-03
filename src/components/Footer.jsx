import React from "react";
import logo from "../../public/assets/fiveglogo.png";
const Footer = () => {
  return (
    <div className="text-center py-8 footer mt-20">
      {/* Logo */}
      <div className="mb-6">
        <img
          src={logo}
          alt="Five Group Logo"
          className="mx-auto h-32 lg:w-auto md:w-auto sm:w-2/3"
        />
      </div>
      {/* Description */}
      <p className="text-[#CAD1E9] text-sm sm:text-base max-w-md mx-auto mb-6">
        SHAPE THE FUTURE
      </p>
      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-6">
        <a
          href="https://www.facebook.com/people/Five-G/100076144451276/?mibextid=LQQJ4d"
          target="_blank"
          className="bg-transparent border border-white text-white hover:text-[#CAD1E9] hover:border-[#CAD1E9] py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/fivegrupa/"
          target="_blank"
          className="bg-transparent border border-white text-white hover:text-[#CAD1E9] hover:border-[#CAD1E9] py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/company/five-group-me"
          target="_blank"
          className="bg-transparent border border-white text-white hover:text-[#CAD1E9] hover:border-[#CAD1E9] py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Linkedin
        </a>
      </div>
      {/* Copyright */}
      <hr className="w-56 mx-auto mb-3 border-black"></hr>
      <div className="text-[#CAD1E9] text-xs">
        Copyright © 2024 FiveGroup
      </div>{" "}
      <hr className="w-56 mx-auto mt-3 border-black"></hr>
    </div>
  );
};

export default Footer;
