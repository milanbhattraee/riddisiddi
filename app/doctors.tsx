import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { FaMap, FaMapMarkerAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const Doctors = [
  {
    image: "/herobg.jpg",
    id: 1,
    name: "Dr. Samyukta Bista",
    specialty: "Medical Retina",
    qualification: "MD Ophthalmology (TU)",
    location: "Kalanki",
    experience: "16+ Years Experience"
    
  },
  {
    image: "/herobg.jpg",
    id: 2,
    name: "Dr. Samyukta Bista",
    specialty: "Medical Retina",
    qualification: "MD Ophthalmology (TU)",
    location: "Kalanki",
    experience: "15 Years Experience"
  },
  {
    image: "/herobg.jpg",
    id: 3,
    name: "Dr. Samyukta Bista",
    specialty: "Medical Retina",
    qualification: "MD Ophthalmology (TU)",
    location: "Kalanki",
    experience: "17 Years Experience"
  },
  {
    image: "/herobg.jpg",
    id: 4,
    name: "Dr. Samyukta Bista",
    specialty: "Medical Retina",
    qualification: "MD Ophthalmology (TU)",
    location: "Kalanki",
    experience: "16+ Years Experience"
  },
  {
    id: 5,
      image: "/herobg.jpg",
    name: "Dr. Samyukta Bista",
    specialty: "Medical Retina",
    qualification: "MD Ophthalmology (TU)",
    location: "Kalanki",
    experience: "14 Years Experience"
  },
  {
    image: "/herobg.jpg",
    id: 6,
    name: "Dr. Samyukta Bista",
    specialty: "Medical Retina",
    qualification: "MD Ophthalmology (TU)",
    location: "Kalanki",
    experience: "18 Years Experience"
  },
  {
    image: "/herobg.jpg",
    id: 7,
    name: "Dr. Samyukta Bista",
    specialty: "Medical Retina",
    qualification: "MD Ophthalmology (TU)",
    location: "Kalanki",
    experience: "16 Years Experience"
  },
  
];


const Doctor = () => {
  return (
    <section className='layout-padding w-full bg-main flex justify-between  items-center flex-col'>

        <h2 className="heading-xl pb-20">Our Doctors</h2>
        <div className='w-full '>
            <div className="w-full  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Doctors.map((item)=>{
                    return (
                      <div key={item.id} className=" justify-center hover:scale-101 cursor-pointer transition-all duration-300 ease-in-out items-center rounded-2xl shadow-2xl bg-white flex-col  gap-y-4">
                        <Image
                          className=" w-full h-60 rounded-t-2xl "
                          src={item.image}
                          width={200}
                          height={200}
                          objectFit="cover"
                          alt="doctor image"
                        />
                      <div className="flex flex-col  justify-center  items-start p-8   gap-4">
                        <h3 className="text-lg md:text-xl  font-bold">{item.name}</h3>
                        <p className="text-lg md:text-lg text-gray-600 font-semibold">{item.specialty}</p>
                        <p className="bg-sky-100 px-5 py-2 rounded-full text-sm font-bold text-blue-800">{item.qualification}</p>
                        <div className="flex justify-center gap-x-4 items-center">
                            <FaMapMarkerAlt className="text-sky-700 text-xl"  />
                            <span className="lg:text-md text-sm text-gray-500 font-semibold">{item.location}</span>
                        </div>
                        <div className="flex justify-center gap-x-4 items-center">
                            <FaUserDoctor className="text-sky-700 text-xl" />
                            <span className="lg:text-md text-sm text-gray-500 font-semibold">{item.experience}</span>
                        </div>
                        
                        <Button style={
                            {
                                padding : "1.3rem 3rem", width : "100%"
                            }
                        }><FaUserDoctor className="text-white"/>View Profile</Button>

                      </div>
                      
                      
                      </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Doctor