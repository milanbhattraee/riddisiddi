import { FaMapMarkerAlt } from "react-icons/fa";



const Contact = () =>{
    return (

<section id="contact" className="w-full bg-white layout-padding flex  items-center flex-col gap-20">
      <h1 className="heading-xl font-bold">Contact Us</h1>

      <div className=" grid grid-cols-1  sm:grid-cols-2 place-items-center md:grid-cols-3  items-center justify-center gap-10 w-full">
        {/* gap */}
            <div
              
              className={`group w-full  justify-center relative transition-all borde duration-300 ease-in-out   p-8 rounded-2xl shadow-lg text-center 
          bg-indigo-50  text-blue-900 border border-gray-200 `}
            >
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2
             flex items-center justify-center
             w-20 h-20 rounded-full bg-white"
              >
                <div
                  className={`flex items-center justify-center 
                w-16 h-16 rounded-full bg-blue-200  text-blue-900 transition-all duration-300 ease-in-out   `}
                >
                  <FaMapMarkerAlt /> 
                </div>
              </div>

              <h3 className="mt-10 text-xl font-semibold">Address</h3>
              <p className="my-3 text-sm leading-relaxed opacity-80">
                123 Health Street, Cityville
              </p>
              <p className=" text-sm leading-relaxed opacity-80">
                Medical Center Address
              </p>
            </div>
            {/* gap */}
            <div
              
              className={`group w-full relative transition-all borde duration-300 ease-in-out  p-8 rounded-2xl shadow-lg text-center 
          bg-primary text-white`}
            >
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2
             flex items-center justify-center
             w-20 h-20 rounded-full bg-white"
              >
                <div
                  className={`flex items-center justify-center 
                w-16 h-16 rounded-full bg-primary text-white  transition-all duration-300 ease-in-out `}
                >
                  <FaMapMarkerAlt /> 
                </div>
              </div>

              <h3 className="mt-10 text-xl font-semibold">Email</h3>
              <p className="my-3 text-sm leading-relaxed opacity-80">
                fusslfkf@gmail.com
              </p>
              <p className=" text-sm leading-relaxed opacity-80">
                fusslfkf@gmail.com
              </p>
            </div>

            {/* gap */}
            <div
              
              className={`group w-full relative transition-all borde duration-300 ease-in-out  p-8 rounded-2xl shadow-lg text-center 
          bg-indigo-50  text-blue-900 border border-gray-200 `}
            >
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2
             flex items-center justify-center
             w-20 h-20 rounded-full bg-white"
              >
                <div
                  className={`flex items-center justify-center 
                w-16 h-16 rounded-full bg-blue-200  text-blue-900 transition-all duration-300 ease-in-out   `}
                >
                  <FaMapMarkerAlt /> 
                </div>
              </div>

              <h3 className="mt-10 text-xl font-semibold">Address</h3>
              <p className="my-3 text-sm leading-relaxed opacity-80">
                123 Health Street, Cityville
              </p>
              <p className=" text-sm leading-relaxed opacity-80">
                Medical Center Address
              </p>
            </div>

      </div>
    </section>

    )
}


export default Contact