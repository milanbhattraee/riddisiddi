import Image from 'next/image'
import { IoMdTime } from 'react-icons/io';



function OpenHour() {
  return (
    <section className='layout-padding gap-y-16 flex  justify-center flex-col items-center bg-main w-full'>
      <h2 className='heading-xl '>Opening Hours</h2>
      <div className=' w-full flex gap-8  justify-around items-center '>
        <Image className= 'w-1/2 hidden md:block h-auto' src="/herobg.jpg" width={200} height={200} alt="doctor image" />
        <div className='flex w-92 relative  rounded-2xl justify-center bg-indigo-100 items-center flex-col'>
            <div className='w-16 h-16 bg-blue-900 absolute -top-8 right-5 rounded-xl grid place-items-center  text-white'><IoMdTime className='text-5xl text-white font-bold' /></div>
           <div className='flex flex-col justify-center w-full  items-center px-10'>
             <div className='flex  justify-center items-start py-4 flex-col w-full'>
            <ul className='flex flex-col body-text gap-y-1 list-disc'>
                <h3 className='font-bold  text-2xl '>Opens On</h3>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem.</li>
            </ul>
            </div>
            <div className='flex  justify-center items-start py-4 flex-col w-full'>
            <ul className='flex flex-col body-text gap-y-1 list-disc'>
                <h3 className='font-bold  text-2xl '>Closed On</h3>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem.</li>
            </ul>
            </div>
            <div className='flex  justify-center items-start py-4 flex-col w-full'>
            <ul className='flex flex-col body-text gap-y-1 list-disc'>
                <h3 className='font-bold  text-2xl '>Doctor for new Patients</h3>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem.</li>
            </ul>
            </div>
           </div>

        </div>
      </div>
    </section>
  );
}

export default OpenHour