import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import { FaHands, FaSyringe } from "react-icons/fa6";
import { MdElderlyWoman } from "react-icons/md";

const ServiceCards = [
  {
    title: "Vaccinations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <FaSyringe className=" transition-all duration-300 ease-in-out  text-xl" />,
    image : "/herobg.jpg",
  },
  {
    title: "Family care",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <FaHands className=" transition-all duration-300 ease-in-out  text-xl" />,
    image : "/herobg.jpg",
  },
  {
    title: "Vaccinations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <MdElderlyWoman className=" transition-all duration-300 ease-in-out  text-xl" />,
    image : "/herobg.jpg",
  },
  {
    title: "Vaccinations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <FaSyringe className=" transition-all duration-300 ease-in-out  text-xl" />,
    image : "/herobg.jpg",
  },
  {
    title: "Family care",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <FaHands className=" transition-all duration-300 ease-in-out  text-xl" />,
    image : "/herobg.jpg",
  },
  {
    title: "Vaccinations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <MdElderlyWoman className=" transition-all duration-300 ease-in-out  text-xl" />,
    image : "/herobg.jpg",
  },
];

const ServiceSection = () => {

    const [show , setShow] = useState(false)

  const visibleService = show ? ServiceCards : ServiceCards.slice(0, 3);
  return (
    <section id="services" className="w-full bg-white layout-padding flex  items-center flex-col gap-20">
      <h1 className="heading-xl font-bold">Our Services</h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 items-center justify-center gap-10 w-full">
        {visibleService.map((card, index) => {
          

          return (
            <div className="w-full  " key={index}> 
              <Image className="w-full  rounded-t-2xl" src={card.image} width={200} height={200} objectFit="cover" alt="services Image" />
            <div
              key={index}
              className={`group w-full relative transition-all borde duration-300 ease-in-out   p-8  shadow-lg text-center 
         ${index % 2 !== 0 ? "bg-primary text-white ": "bg-gray-50  text-blue-900 border border-blue-50 "}   rounded-b-2xl`}
            >
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2
             flex items-center justify-center
             w-20 h-20 rounded-full bg-white"
              >
                <div
                  className={`flex items-center justify-center 
                w-16 h-16 rounded-full ${index % 2 !== 0 ? "bg-primary text-white ": "bg-blue-200  text-blue-900"} transition-all duration-300 ease-in-out   }`}
                >
                  {card.icon}
                </div>
              </div>

              <h3 className="mt-10 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80">
                {card.desc}
              </p>
            </div>
            </div>
          );
        })}
      </div>
        <div className="w-full flex justify-center items-center">
        <Button
          onClick={() => (setShow(!show))}
          style={{
            padding : "1.7rem 6rem"
          }}
        >
          
      {!show ? "View More ": "Show less"}
        </Button>
      </div>
    </section>
  );
};

export default ServiceSection;
