"use client"

import React, { useState } from 'react'
import { motion } from 'motion/react'
function Banner() {
  const [topDiv, setTopDiv] = useState(1);

  const swapDivs = () => {
    setTopDiv(topDiv === 1 ? 2 : 1);
  };
  return (
    <div className='w-full flex h-[90vh] '>
      <div className='uppercase flex flex-col items-center justify-center w-1/2 h-full'>
        <h1 className='uppercase ml-10 text-9xl'>
          <span className=''>Waste To</span>
          <span className='flex gap-2 items-center bg-gradient-to-r from-green-400 via-green-300 to-green-600 bg-clip-text text-transparent'><div className='w-20 h-[8px] bg-green-500'></div>Credits</span>
        </h1>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-center h-full'>
        <div className="relative w-64 h-64">
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={swapDivs}
            className={`absolute w-64 h-90 flex items-center justify-center text-white text-xl bg-black/50 backdrop-blur-2xl font-bold rounded-lg cursor-grab transition-all duration-300 ${topDiv === 1 ? "z-10" : "z-0 translate-x-20 scale-95"}`}
          >
            Div 1
          </motion.div>
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={swapDivs}
            className={`absolute w-64 h-90 flex bg-black/50 backdrop-blur-2xl items-center justify-center text-white text-xl font-bold rounded-lg cursor-grab transition-all duration-300 ${topDiv === 2 ? "z-10" : "z-0 translate-x-20 scale-95"}`}
          >
            Div 2
          </motion.div>
        </div></div>
    </div>
  )
}

export default Banner
