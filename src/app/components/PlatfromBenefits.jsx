"use client";
import Image from "next/image";
import img1 from "@/assets/img3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
function PlatfromBenefits() {
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
    <div ref={divRef} className='w-[95%] mt-20 border-t-1 border-green-500 relative uppercase text-9xl h-[90vh] flex flex-col items-center justify-center'>
      <div className='text-lg top-10 left-10 text-green-500  absolute'>Platform features</div>
      <div>
        <h1>Waste to</h1>
        <h1 className='flex bg-gradient-to-r from-green-500 via-green-300 to-green-500 bg-clip-text text-transparent items-center gap-4'><div className='w-40 h-[10px] bg-green-500'></div>credits</h1>
      </div>

    </div>
  )
}

export default PlatfromBenefits
