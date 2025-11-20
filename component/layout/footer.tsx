import Link from 'next/link';
const headerItem = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Doctors", href: "#doctor" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#contact" },
];
const Footer = () => {
  return (
    <section className="w-full flex flex-col  py-20 px-6 sm:px-8 md:px-10 lg:px-20 items-center bg-indigo-50  text-black">
      <div className='w-full flex flex-col md:flex-row space-y-10 justify-between border-b border-gray-700 pb-10 mb-10'>
        <div className='flex flex-col'>
          <h3 className='sub-heading py-1'>Riddi Siddi Medical</h3>
          <p className='body-text'>Your trust partner </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='py-1 font-bold'>Quick Links</h3>
          <ul className='flex flex-col text-secondary'>
            {headerItem.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer py-1 text-md text-gray-700"
            >
              <Link className="w-full hover:text-sky-800" href={item.href}>{item.title}</Link>
            </li>
          ))}
          </ul>
        </div>
        <div className='flex flex-col'>
        <h3 className='py-2 font-bold'>Legal</h3>
          <ul className='flex space-y-1 body-text flex-col text-secondary'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='flex flex-col space-y-1'>
          <h3 className='sub-heading py-1'>Contact Us</h3>
          <p className='body-text'>Kathmandu, Nepal</p>
          <p className='body-text'>Email:</p>
          <p className='body-text'>Phone:</p>
        </div>
      </div>
      <div>
        <p>© 2024 Nepal Riddi Siddi Medical. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer