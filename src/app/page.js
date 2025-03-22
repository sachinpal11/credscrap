
import Video from "./components/Video";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Banner from "./components/Banner";
import LocomotiveScroll from 'locomotive-scroll';
import About from "./components/About";
import PlatfromBenefits from "./components/PlatfromBenefits";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";

export default function Home() {


  return (
    <div className="h-[200vh] flex flex-col overflow-x-hidden w-full">
      <Navbar />
      <Video />
      <div className="w-full flex flex-col items-center h-auto absolute top-0">
        <Banner />
        <HeroSection />
        <About />
        <Marquee />
        <PlatfromBenefits />
        <Footer />
      </div>
    </div>
  );
}
