
import Video from "./components/Video";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Banner from "./components/Banner";
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {


  return (
    <div className="h-[200vh] flex flex-col overflow-x-hidden w-full">
      <Navbar />
      <Video />
      <div className="w-full h-full absolute top-0">
        <Banner />
        <HeroSection />
      </div>
    </div>
  );
}
