import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
   const handleGmailLink = () => {
        window.location.href = "mailto:info.icngths@gmail.com";
    };
  return (
    <footer className="bg-[#24a7b1] text-white rounded-tl-xl rounded-tr-xl">
      <div className=" mx-auto px-5 max-w-[1400px]  lg:py-10 py-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  md:gap-8 gap-8 mt-5 lg:mt-0 ">
          <div className='text-center md:text-left flex flex-col justify-center items-start'>
            {/* <Link to='/'>
           
              <img className='w-40 md:mx-0   mx-auto bg-white p-3 rounded-lg' src="/images/ICBAMS.png" alt="logo" />
            </Link> */}
            <Link to="/" className="text-white  text-4xl namdhinggo-extrabold">
              ICNGTHS
            </Link>
            
          </div>
          <div className='lg:mx-auto md:text-left text-start '>
            <h4 className="lg:text-xl poppins-bold mb-2 ">Quick Links</h4>
            <ul className=' lg:text-base text-sm inter-medium space-y-2'>
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li> <Link to='/about' className="hover:underline w-fit">About the Conference</Link></li>
              <li><Link to='/scope' className="hover:underline">Scope</Link> </li>
              <li><Link to='/organizing-committee' className="hover:underline">Organization Committee</Link></li>
              <li><Link to='/editorial-board' className="hover:underline">Editorial Board</Link> </li>
            </ul>
          </div>
          <div className='lg:ml-auto  md:text-left text-start  '>
            <div className='flex gap-4 flex-wrap justify-start items-end '>
              <div className=''>
                <h4 className="lg:text-xl poppins-bold mb-2 ">Registration Guide</h4>
                <ul className="lg:text-base text-sm inter-medium space-y-2">
                  <li><Link to='/key-dates' className="hover:underline">Key Dates</Link></li>
                  <li><Link to='/conference-tracks' className="hover:underline">Conference Tracks</Link></li>
                  <li><Link to='/paper-submission' className="hover:underline">Paper submission </Link> </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='lg:ml-auto  md:text-left text-start  '>
            <div className='flex gap-4 flex-wrap justify-start items-end '>
              <div className=''>
                <h4 className="lg:text-xl poppins-bold mb-2 ">Contact Info</h4>
                <ul className="lg:text-base text-sm space-y-2">
                  <li><Link to='' className="hover:underline inter-medium">Guilin, China</Link></li>
                  <li><Link to="#" onClick={handleGmailLink} className="hover:underline inter-medium">info.icngths@gmail.com</Link></li>
                  {/* <li><a className="hover:underline inter-medium"><Link to=''>+91 8870212121</Link></a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-white h-[1px]   mx-auto  "></h1>
      <div className='grid lg:grid-cols-3 grid-cols-1  items-center    py-3 '>
        <div>
        </div>
        <div className="text-center md:text-base text-xs inter-regular">
          <p>© 2025 <span className='hover:underline' > <Link to="/" target='_blank'>ICNGTHS </Link> </span> . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;