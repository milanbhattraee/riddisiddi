import { FaHands, FaSyringe } from "react-icons/fa6";
import { MdElderlyWoman } from "react-icons/md";

const ServiceCards = [
  {
    title: "Vaccinations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <FaSyringe className=" transition-all duration-300 ease-in-out  text-xl" />,
  },
  {
    title: "Family care",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <FaHands className=" transition-all duration-300 ease-in-out  text-xl" />,
  },
  {
    title: "Vaccinations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <MdElderlyWoman className=" transition-all duration-300 ease-in-out  text-xl" />,
  },
];

const ServiceSection = () => {
  return (
    <section id="services" className="w-full bg-white layout-padding flex  items-center flex-col gap-20">
      <h1 className="heading-xl font-bold">Our Services</h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 items-center justify-center gap-10 w-full">
        {ServiceCards.map((card, index) => {
          

          return (
            <div
              key={index}
              className={`group relative transition-all borde duration-300 ease-in-out  max-w-80 p-8 rounded-2xl shadow-lg text-center 
         ${index % 2 !== 0 ? "bg-blue-900 text-white ": "bg-gray-50  text-blue-900 border border-blue-50 "}   text-gray-800"`}
            >
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2
             flex items-center justify-center
             w-20 h-20 rounded-full bg-white"
              >
                <div
                  className={`flex items-center justify-center 
                w-16 h-16 rounded-full ${index % 2 !== 0 ? "bg-blue-900 text-white ": "bg-blue-200  text-blue-900"} transition-all duration-300 ease-in-out   }`}
                >
                  {card.icon}
                </div>
              </div>

              <h3 className="mt-10 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
