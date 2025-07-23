import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaDatabase, FaHandPointRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6';
import { GiMicrophone } from 'react-icons/gi';
import {  IoLocationSharp } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Conferencetracks() {


    const data = [
        {
            icon: <FaDatabase />,
            title: "Artificial Intelligence in Healthcare",
            content: "Focuses on AI-driven diagnostics, predictive analytics, and smart decision systems that enhance patient care, treatment accuracy, and healthcare delivery efficiency."
        },
        {
            icon: <FaDatabase />,
            title: "Cloud and Edge Computing",
            content: "Highlights processing massive datasets for trend forecasting, disease modeling, and optimizing patient outcomes through data-driven decision-making."
        },
        {
            icon: <FaDatabase />,
            title: "Big Data and Predictive Analytics",
            content: "Present scalable, low-latency solutions using cloud and edge computing to manage patient data, enable telehealth, and support real-time healthcare applications."
        },
        {
            icon: <FaDatabase />,
            title: "Digital Health Infrastructure",
            content: "Focuses on building smart hospitals, electronic health systems, and tech-enabled environments for efficient, accessible, and responsive healthcare services."
        },
        {
            icon: <FaDatabase />,
            title: "Ethical and Legal Aspects of Technology",
            content: "Discusses data privacy, ethical AI use, digital consent, and legal frameworks governing emerging technologies in healthcare and digital security."
        },
        {
            icon: <FaDatabase />,
            title: "AI in Medical Imaging and Radiology",
            content: "Focuses on AI techniques for image interpretation, early detection, and automated radiology solutions enhancing diagnostic precision and speed."
        },
        {
            icon: <FaDatabase />,
            title: "Robotics in Surgery and Rehabilitation",
            content: "Explores robotic systems used in precision surgery, physical therapy, and rehabilitation for improved accuracy, consistency, and patient recovery."
        },
        {
            icon: <FaDatabase />,
            title: "Next-Gen Network Security Solutions",
            content: "Highlights innovations in threat detection, firewall technology, zero-trust models, and AI-based cybersecurity for protecting sensitive health systems."
        },
    ]
    return (
        <div>

            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero3.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-60 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white mt-10">Conference Tracks</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#40C3CD] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#40C3CD] "><span className="text-white">/ </span>Conference Tracks</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center lg:mt-15 mt-10">Conference Tracks</h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85"><span className="inter-bold ">The International Conference on Next-Gen Technologies in Healthcare and Security </span>features a diverse range of thematic tracks designed to explore the latest innovations, challenges, and applications across both domains. These tracks provide focused forums for researchers, practitioners, and academicians to present original work, share insights, and engage in meaningful discussions around emerging technologies. Each track is carefully curated to reflect current trends and future directions, ensuring the conference serves as a dynamic platform for multidisciplinary collaboration and knowledge advancement.</p>
                </div>
            </div>

            <div className=" max-w-[90rem] mx-auto lg:mt-17 mt-10 px-5 2xl:px-0">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  ">
                    {data.map((item) => (
                        <div className="group shadow-[0_0_8px_rgba(0,0,0,0.15)]  rounded-[25px]   overflow-hidden cursor-pointer">
                            <div className="flex gap-5 justify-center bg-[#24a7b1]  transition duration-500 group-hover:bg-white text-white  group-hover:text-[#24a7b1]  rounded-t-[25px] p-3"><div className="mt-1 text-[28px] "><GiMicrophone  /></div><p className="namdhinggo-extrabold  2xl:text-[24px] xl:text-[24px] lg:text-[24px] text-[20px]">{item.title}</p></div>
                            <div className="flex gap-0 lg:gap-3 text-justify bg-white hover:rounded-b-[25px] rounded-b-[25px] transition duration-500 group-hover:bg-[#24a7b1]  text-black group-hover:text-white p-5 group-hover:p-5 h-full "><TbPointFilled className=" text-[35px] text-[#40C3CD] group-hover:text-white flex shrink-0  mt-3  transition duration-500" /> <p className="inter-regular opacity-85 group-hover:opacity-100 text-[16px] leading-[30px]">{item.content}</p></div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="pb-15  max-w-[1400px] mx-auto mt-15 px-4 2xl:px-0">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center">Join Us at ICNGTHS 2025</h2>
                <p className="md:text-[18px] text-[16px]  inter-semibold lg:text-center mt-5  opacity-85 text-justify">Experience groundbreaking research presentations and network with industry leaders</p>

                <div className=" mt-10 ">
                    <div className="relative bg-cover bg-center rounded-[25px]  " style={{ backgroundImage: "url('/images/allhero1.jpg')" }} >
                        <div className="absolute inset-0 bg-[#000000] opacity-75  rounded-[25px] "></div>
                        <div className="z-10 relative text-center space-y-5 px-6 p-5 ">
                            <p className="namdhinggo-extrabold 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] text-white">Ready to Join the Innovation ?</p>
                            <p className="inter-medium text-[16px] text-white text-justify md:text-center max-w-[1000px] mx-auto">Register now and secure your spot today to connect with global experts, explore emerging technologies, and be part of shaping the future of computer science.</p>
                            <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 space-y-5  justify-center items-start sm:items-center lg:items-start">
                                <div className="flex gap-3"><IoLocationSharp className='text-[26px] text-[#40C3CD]' /><p className="namdhinggo-extrabold text-[20px] text-white">Guilin, China</p></div>
                                <div className="flex gap-3"><FaCalendar className='text-[24px] text-[#40C3CD] ' /><p className="namdhinggo-extrabold text-[20px] text-white">October 28, 2025</p></div>
                                <div className="flex gap-3"><BsFillClockFill className='text-[24px] text-[#40C3CD] ' /><p className="namdhinggo-extrabold text-[20px] text-white">9:00 AM – 5:00 PM</p></div>
                            </div>
                            <Link to="/paper-submission">
                                <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex justify-center  ">
                                <button className="group cursor-pointer flex items-center gap-4 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#379197]  via-[#3bb2bb]  to-[#2798a0]  shadow-lg transition-all duration-500 ease-in-out hover:from-[#40C3CD]  hover:to-[#40C3CD]  hover:scale-105 hover:shadow-[0_8px_24px_rgba(44,83,100,0.6)]">
                                        Register Now  <FaArrowRightLong className="text-[22px] transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Conferencetracks