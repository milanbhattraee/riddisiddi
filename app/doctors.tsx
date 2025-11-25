import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import {  FaMapMarkerAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Doctors  from "@/app/constant/doctor.js"


const Doctor = () => {
    const [show , setShow ]  = useState(false)
    const visibleItems = show?  Doctors :Doctors.slice(0,3)  ;
  return (
    <section id="doctors" className='layout-padding w-full bg-main flex justify-between  items-center flex-col'>

        <h2 className="heading-xl pb-20">Our Doctors</h2>
        <div className='w-full  '>
            <div className="w-full  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {visibleItems.map((item)=>{
                    return (
                      <div key={item.id} className=" w-full  justify-center  hover:scale-101 cursor-pointer transition-all duration-300 ease-in-out items-center rounded-2xl shadow-2xl bg-white  flex-col  gap-y-8">
                        <Image
                          className=" w-full h-60 rounded-t-2xl "
                          src={item.image}
                          width={200}
                          height={200}
                          objectFit="cover"
                          alt="doctor image"
                        />
                      <div className="flex flex-col    items-start  p-8    gap-4">
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
                                padding : "1.7rem 6rem", width : "100%"
                            }
                        }><FaUserDoctor className="text-white"/>View Profile</Button>

                      </div>
                      
                      
                      </div>
                    );
                })}
            </div>
        </div>
        <div>
        </div>
            <div className="w-full mt-12 flex justify-center items-center ">
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
  )
}

export default Doctor