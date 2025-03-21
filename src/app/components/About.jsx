"use client";
import Image from "next/image";
import img1 from "@/assets/img3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
function About() {
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
            // scrub: true,
          },
        }
      );
    }
  }, []);
  return (
    <div ref={divRef} className='w-full h-auto flex flex-col uppercase justify-center items-center'>
      <div className='w-[98%] overflow-hidden rounded-2xl h-[80vh] bg-white'><img className='w-full h-full object-cover' src={'https://recyclinginside.com/wp-content/uploads/2024/07/E-Waste_5_Ways_to_Boost_E-Recycling_and_Why_it_Matters.jpg'} alt="" /></div>
      <div className='w-[90%]  rounded-2xl -mt-35 bg-neutral-800 flex flex-col items-center px-5 py-10 gap-10 h-auto'>
        <p className='text-3xl w-[70%] text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, molestiae in nemo eius, necessitatibus nostrum ipsa officiis praesentium doloribus dicta ipsum aliquam, molestias earum tempora. Quam est asperiores placeat magni?
        </p>
        <button className='text-xl px-4 rounded-full hover:bg-green-500 hover:text-white py-3 border-green-500 border-2 text-green-500 uppercase' ><span className='mr-5'>About Us</span>+</button>
      </div>
    </div>
  )
}

export default About
