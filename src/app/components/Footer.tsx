import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";

function Footer({ fullscreen }: any) {
  return (
    <div className="p-5 bg-black/80  border-lg border-gray-200 text-gray-300">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex-row mb-6">
          <div className="">
            <h1 className="text-lg">Company</h1>
            <div className="flex-row text-left ">
              <h2>- About us</h2>
              <h2>- Contact Us</h2>
              <h2>- Privacy Policy</h2>
              <h2>- Terms & Condition</h2>
              <h2>- Suport Centre</h2>
            </div>
          </div>
        </div>
        <div className="flex-row mb-6">
          <div className="">
            <div className="text-lg">Question?</div>
            <div className="flex-row text-left ">
              <h2>- Help Support</h2>
              <h2>- Track Order</h2>
              <h2>- Return</h2>
              <h2>- Shipping Info</h2>
              <h2>- History</h2>
            </div>
          </div>
        </div>
        <div className="flex-row mb-6">
          <div className="">
            <div className="text-lg">Useful Links</div>
            <div className="flex-row text-left ">
              <h2>- Gift Cards</h2>
              <h2>- Size Chart</h2>
              <h2>- My Account</h2>
              <h2>- Our Locations</h2>
              <h2>- FAQs</h2>
            </div>
          </div>
        </div>
        <div className="flex-row mb-6">
          <div className="">
            <div className="text-lg">Connect With us</div>
            <div className="flex-row text-left ">
              <div className="flex gap-4 py-3 text-gray-300">
                <AiFillInstagram className="w-4 h-4 " />
                <FaFacebookF className="w-4 h-4" />
                <FaTwitter className="w-4 h-4" />
              </div>
              <div className="flex-row justify-between">
                <div className="flex items-center space-x-2 py-1">
                  <FaTelegramPlane />
                  <span>abanifurniture</span>
                </div>
                <div className="flex items-center space-x-2 py-1">
                  <MdEmail />
                  <span>abani@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 py-1">
                  <BsFillTelephoneFill />
                  <span>56652-7899</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-300 text-center sm:text-sm lg:text-base">
        &copy; 2024 Abani Furniture all rights reserved
      </div>
    </div>
  );
}

export default Footer;
