import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

function InsideNavbar({ fixed = true, scrolled }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          fixed
            ? "fixed left-0 z-[9999] shadow transition-all duration-500 ease-in-out border-none pt-4 text-sm"
            : ""
        } ${
          fixed ? (scrolled ? "shadow -top-4" : "shadow-none  -top-6") : ""
        } w-full bg-cyan-950`}
      >
        <div
          className={`flex justify-between py-4 items-center ${
            fixed ? " lg:px-5 sm:px-5 px-3" : "lg:px-0"
          }`}
        >
          <div className="flex sm:gap-10 items-center">
            <div className="font-extrabold text-6xl text-gray-100">Abani</div>
            <div className="hidden md:block">
              <div className="flex text-md md:text-lg sm:gap-16 lg:gap-16 sm:px-10 lg:px-20">
                <a href="#home" className="text-white hover:text-orange-300">
                  HOME
                </a>
                <a href="#chair" className="text-white hover:text-orange-300">
                  CHAIR
                </a>
                <a href="#lamp" className="text-white hover:text-orange-300">
                  LAMP
                </a>
                <a href="#table" className="text-white hover:text-orange-300">
                  TABLE
                </a>
                <a
                  href="#about"
                  className=" text-white hover:text-orange-300 rounded-full"
                >
                  ABOUT US
                </a>
              </div>
            </div>
            <div className="relative flex flex-col items-center rounded-lg">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center justify-between tracking-normal text-lg rounded-lg active:text-amber-600 text-white"
              >
                ABOUT US
                <span className="ml-4">
                  {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
                </span>
              </button>
            </div>
          </div>
          <form className="px-2 py-3">
            <div className="relative">
              <input
                type="search"
                id="search-box"
                placeholder="Search..."
                className="py-2 pl-4 rounded-full text-base focus:outline-none"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full">
                <IoIosSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default InsideNavbar;
