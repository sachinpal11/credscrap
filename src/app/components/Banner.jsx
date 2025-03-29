"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

function Banner() {
  const [topDiv, setTopDiv] = useState(1);

  const swapDivs = () => {
    setTopDiv(topDiv === 1 ? 2 : 1);
  };

  return (
    <div className='w-full flex flex-col  md:flex-row h-[90vh] px-4 md:px-0'>
      {/* Left Content */}
      <div className='uppercase flex flex-col mt-30 md:mt-10 items-center justify-center w-full md:w-1/2 h-full text-center md:text-left'>
        <h1 className='uppercase text-5xl md:text-7xl xl:text-9xl'>
          <span>Waste To</span>
          <span className='flex gap-2 items-center justify-center md:justify-start bg-gradient-to-r from-green-400 via-green-300 to-green-600 bg-clip-text text-transparent'>
            <div className='w-16 md:w-20 h-[6px] md:h-[8px] bg-green-500'></div>Credits
          </span>
        </h1>
        <span className='text-sm md:text-xl w-[80%] mt-6 md:mt-10 px-4 md:px-0'>
          Platform where an individual can exchange e-waste in return for credit tokens.
        </span>
      </div>

      {/* Right Content */}
      <div className='w-full md:w-1/2 mt-10 relative flex flex-col items-center justify-center h-full'>
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragEnd={swapDivs}
          className={`absolute overflow-hidden w-3/5 h-[90%] md:h-[70%] flex items-center justify-center text-white text-xl border-2 border-green-500 backdrop-blur-xl font-bold rounded-2xl cursor-grab transition-all duration-300 ${topDiv === 1 ? "z-10" : "z-0 translate-x-10 scale-95"}`}
        >
          <img className='w-full h-full object-cover pointer-events-none' src={'https://theunitedindian.com/images/electronic-waste-disposal3.jpg'} alt='hello' />
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragEnd={swapDivs}
          className={`absolute w-3/5 h-[90%] md:h-[70%] flex border-2 border-green-500 overflow-hidden backdrop-blur-xl items-center justify-center text-white text-xl font-bold rounded-2xl cursor-grab transition-all duration-300 ${topDiv === 2 ? "z-10" : "z-0 translate-x-10 scale-95"}`}
        >
          <img className='w-full h-full object-cover pointer-events-none' src={'https://www.dell.com/uploads/2023/10/ewaste.jpg'} alt='hello' />
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
