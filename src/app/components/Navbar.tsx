"use client";
import React, { useState } from "react";
import InsideNavbar from "./InsideNavbar";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <>
      <nav>
        <InsideNavbar scrolled={scrolled} />
        <div className={`h-[54px] transition-all duration-300 ease-in-out`} />
        {}
      </nav>
    </>
  );
}

export default Navbar;
