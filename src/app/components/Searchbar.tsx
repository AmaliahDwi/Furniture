import React from "react";
import { IoIosSearch } from "react-icons/io";

function Searchbar() {
  const Searchbar = () => {
    return (
      <div>
        <form className="w-{500px} relative">
          <div className="relative">
            <input
              type="seacrh"
              placeholder="Type Here"
              className="w-full p-4 rounded-full bg-slate-800"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full">
              <IoIosSearch />
            </button>
          </div>
        </form>
      </div>
    );
  };
}
export default Searchbar;
