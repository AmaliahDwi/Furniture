import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer({ fullscreen }: any) {
  return (
    <div className="py-5 bg-cyan-950">
      <div className="lg:text-2xl text-xl text-center text-white">
        Find us in social media
      </div>
      <div className="flex gap-4 justify-center p-4">
        <AiFillInstagram className="w-6 h-6  text-white" />
        <FaFacebookF className="w-6 h-6 text-white" />
        <FaTwitter className="w-6 h-6 text-white" />
      </div>
      <div className="text-gray-300 text-center sm:text-sm lg:text-base">
        &copy; 2024 Abani Furniture all rights reserved
      </div>
    </div>
  );
}

export default Footer;
