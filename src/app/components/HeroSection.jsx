"use client";
import Image from "next/image";
import img1 from '@/assets/img2.png'
export default function HeroSection() {
  return (
    <div className="h-auto w-full flex items-center justify-center">
      <div className="max-w-8xl bg w-full grid grid-cols-1 md:grid-cols-2 items-center m-9 bg-white p-10 rounded-2xl shadow-lg">
        {/* Left Side Text */}
        <div>
          <p className="text-green-500 font-medium uppercase mb-2  px-2 py-1 rounded">
            Our Platform
          </p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-3">
            Unlock access to the best payments infrastructure around the world through one contract and one API.
          </h1>
          <div className="flex space-x-4 mt-6">
            <button className="px-6 py-3 border border-green-500 text-green-500 rounded-full flex items-center space-x-2 hover:bg-green-500 hover:text-white">
              <span>Global Payouts</span>
              <span className="text-xl">+</span>
            </button>
            <button className="px-6 py-3 border border-green-500 text-green-500 rounded-full flex items-center space-x-2 hover:bg-green-500 hover:text-white">
              <span>Collections</span>
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <Image src={img1} alt="Random Image" width={950} />
        </div>
      </div>
    </div>
  );
}