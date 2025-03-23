"use client";
import Image from "next/image";
import img1 from "@/assets/img3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      gsap.fromTo(
        divRef.current,
        { scale: 0.9, opacity: 1 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: divRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={divRef} id="platform" className="h-auto w-full flex items-center justify-center">
      <div className="bg w-full flex justify-evenly items-center m-9 bg-white p-10 rounded-2xl shadow-lg">
        {/* Left Side Text */}
        <div className="w-1/2">
          <p className="text-green-500 font-medium uppercase mb-2 px-2 py-1 rounded">
            Our Platform
          </p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-3">
            Unlock access to the best e-waste exchange system around the world.
          </h1>
          <div className="flex space-x-4 mt-6">
            <button className="px-6 py-3 border border-green-500 text-green-500 rounded-full flex items-center space-x-2 hover:bg-green-500 hover:text-white">
              <span>HouseHold</span>
              <span className="text-xl">+</span>
            </button>
            <button className="px-6 py-3 border border-green-500 text-green-500 rounded-full flex items-center space-x-2 hover:bg-green-500 hover:text-white">
              <span>Organization</span>
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <Image src={img1} alt="Random Image" width={500} />
        </div>
      </div>
    </div>
  );
}
