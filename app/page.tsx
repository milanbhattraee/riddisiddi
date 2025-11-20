"use client"
import { useEffect, useState } from "react";
import Contact from "./contact";
import Doctor from "./doctors";
import HeroSection from "./hero";
import Map from "./location";
import OpenHour from "./openHour";
import ServiceSection from "./services";
import Link from "next/link";
import { HiOutlineArrowUp } from "react-icons/hi";



const HomePage = () => {

    
const [visibile , setvisible] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      setvisible(window.scrollY > 200);
    };
    
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="w-full h-full ">
      <HeroSection />
      <ServiceSection />
      <OpenHour />
      <Doctor />
      <Map />
      <Contact />
        <div className={` ${visibile ? "flex fixed" : "hidden fixed"} animate-bounce z-40 fixed flex-col  text-center justify-center items-center bottom-10 right-5  text-white bg-sky-800  w-10 h-10 rounded-full`}>
        <Link className="w-full flex items-center justify-center flex-row text-2xl" href="#top"><HiOutlineArrowUp/> </Link>
      </div>
    </main>
  );
};

export default HomePage;
