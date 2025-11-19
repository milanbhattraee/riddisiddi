"use client";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navlinks = [
  {
    title: "Home",
    src: "#",
  },
  {
    title: "Services",
    src: "#",
  },
  {
    title: "Doctors",
    src: "#",
  },
  {
    title: "Contact us",
    src: "#",
  },
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav
      className={` md:flex-row bg-main flex-col  ${
        showLinks ? "h-screen" : "h-auto"
      } shadow-lg bg-gray-100  z-50 layout-padding-x items-start md:items-center sticky top-0  w-full  gap-y-5 flex  `}
    >
      <div className={` flex w-full md:w-auto  items-center  justify-between`}>
        <Image
          className="w-20"
          src="/logo.png"
          width={44}
          height={44}
          alt="Logo"
        />

        {!showLinks ? (
          <GiHamburgerMenu
            onClick={() => {
              setShowLinks(!showLinks);
            }}
            className="md:hidden text-3xl"
          />
        ) : (
          <GrClose
            onClick={() => {
              setShowLinks(!showLinks);
            }}
            className="md:hidden text-3xl"
          />
        )}
      </div>

      {/* nav links  */}
      <div className="w-full hidden md:flex gap-x-4 justify-between items-center ">
        <div className="flex justify-center items-center w-full">

        {Navlinks.map((item) => (
          <Link
            className="px-2  body-text text-center "
            key={item.title}
            href={item.src}
          >
            {item.title}
          </Link>
        ))}
        </div>
      
          <Button >Book an appointment</Button>
        
      </div>

      {/* for mobile  */}
      {showLinks && (
        <div className="md:hidden w-full md:flex-row md:justify-center gap-y-6 items-center flex flex-col">
          {Navlinks.map((item) => (
            <Link
              className="py-2 font-semibold w-full  text-center "
              key={item.title}
              href={item.src}
            >
              {item.title}
            </Link>
          ))}
          <div className="flex items-center w-full  justify-center">
            <Button style={{ width: "100%" }}>Book an appointment</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
