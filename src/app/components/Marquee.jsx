import Image from "next/image";
import img1 from "@/assets/B.jpg";
import img2 from "@/assets/cc.jpg";
import img3 from "@/assets/meher.jpg";
import img4 from "@/assets/kaya.jpg";
import img5 from "@/assets/thrift.jpg";
import img6 from "@/assets/scr.jpg";

const brands = [
  { src: img1, alt: "Brand 1" },
  { src: img2, alt: "Brand 2" },
  { src: img3, alt: "Brand 3" },
  { src: img4, alt: "Brand 4" },
  { src: img5, alt: "Brand 5" },
  { src: img6, alt: "Brand 6" },
];

export default function Marquee() {
  return (
    <div className="w-full my-30 h-auto bg-black/10 backdrop-blur-3xl py-10 filter grayscale-[20%] flex overflow-hidden relative">
      <div className="flex w-auto gap-15 whitespace-nowrap animate-marquee">
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="flex items-center w-[200px] h-[200px] aspect-square overflow-hidden">
            <Image
              src={brand.src}
              alt={brand.alt}
              height={200}
              className="w-[200px] h-[200px] filter grayscale-[20%] rounded-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
