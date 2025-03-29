"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.div
        initial={{ width: "90%", backgroundColor: "rgba(0,0,0,0)" }}
        animate={{
          width: scrolled ? "60%" : "90%",
          backgroundColor: scrolled ? "rgba(0,0,0,0.60)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="fixed top-5 z-20 left-1/2 transform -translate-x-1/2 flex items-center justify-between border border-white rounded-full px-4 py-2 text-2xl backdrop-blur-lg w-[90%] md:w-[60%]"
      >
        <div className="ml-4 font-bold bg-gradient-to-r from-green-500 via-green-300 to-green-500 bg-clip-text text-transparent">
          CredScrap
        </div>

        <div className="hidden md:flex uppercase w-[40%] justify-evenly text-lg">
          <a href="#platform" className="cursor-pointer">Platform</a>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Services</span>
        </div>

        <Link href={'/login'} className="hidden md:block px-5 uppercase text-lg py-2 rounded-full border-2 border-[#31f526] hover:bg-[#31f526] hover:text-black transition duration-300">
          Join Now
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button onClick={() => setSidebarOpen(true)} className="md:hidden block p-2">
          <Menu size={28} />
        </button>
      </motion.div>

      {/* Sidebar */}
      {sidebarOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-80 backdrop-blur-lg p-5 text-white flex flex-col items-start z-30"
        >
          <button onClick={() => setSidebarOpen(false)} className="self-end p-2">
            <X size={28} />
          </button>
          <nav className="mt-10 flex flex-col gap-4 text-lg">
            <a href="#platform" className="cursor-pointer">Platform</a>
            <span className="cursor-pointer">About</span>
            <span className="cursor-pointer">Services</span>
            <Link href={'/login'} className="mt-4 px-5 py-2 rounded-full border-2 border-[#31f526] hover:bg-[#31f526] hover:text-black transition duration-300">
              Join Now
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
