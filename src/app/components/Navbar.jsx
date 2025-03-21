"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ width: "90%", backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        width: scrolled ? "70%" : "90%",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        backgroundColor: scrolled ? "rgba(0,0,0,0.30)" : "rgba(0,0,0,0)",

      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed top-5 z-20 left-1/2 transform -translate-x-1/2 flex items-center justify-between border border-white rounded-full px-2 py-2 text-2xl  backdrop-blur-lg"
    >
      <div className="ml-6 font-bold bg-gradient-to-r from-green-500 via-green-300 to-green-500 bg-clip-text text-transparent">CredScrap</div>
      <div className="uppercase w-[40%] justify-evenly flex gap-6 text-lg">
        <span className="cursor-pointer" >Platform</span>
        <span className="cursor-pointer" >About</span>
        <span className="cursor-pointer" >Services</span>
      </div>
      <button className="px-5 uppercase text-lg py-2 rounded-full border-2 border-[#31f526] hover:bg-[#31f526] hover:text-black transition duration-300">
        Join Us
      </button>
    </motion.div>
  );
}

export default Navbar;
