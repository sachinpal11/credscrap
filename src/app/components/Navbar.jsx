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
      initial={{ width: "90%", backdropFilter: "blur(0px)" }}
      animate={{
        width: scrolled ? "80%" : "90%",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.7 }}
      className="fixed top-10 z-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center border border-white rounded-full px-4 py-4 text-2xl "
    >
      hello
    </motion.div>
  );
}

export default Navbar;
