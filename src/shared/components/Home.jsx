import React from 'react'
import { FaCalendar, FaCalendarAlt, FaHandPointRight } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { GoArrowRight } from "react-icons/go";
import { BsFillClockFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TbPointFilled } from 'react-icons/tb';


function Home() {

    const gridItems = [

        {
            Date: "July 20,2025",
            Title: "Paper Submission Deadline  Final Extension"
        },
        {
            Date: "August 20,2025",
            Title: "Author Acceptance Notification Description"
        },
        {
            Date: "September 10,2025",
            Title: "Final Manuscript Submission Guidelines"
        },

    ]




    const speaker = [
        {
            name: "A.Aravind Kumar ME.Phd",
            position: "Research Analayst"
        },
        {
            name: "A.Aravind Kumar ME.Phd",
            position: "Research Analayst"
        },
        {
            name: "A.Aravind Kumar ME.Phd",
            position: "Research Analayst"
        },

    ]



    return (
        <div >
            <div className="relative sm:h-[800px] lg:h-screen bg-cover md:rounded-bl-[400px] rounded-bl-[150px] border-b-[15px]  border-[#40C3CD]" style={{ backgroundImage: "url('/images/homehero.jpg')" }}>

                <div className="absolute inset-0 bg-[#000000] sm:h-[800px]  lg:h-screen opacity-40 md:rounded-bl-[400px] rounded-bl-[150px] md:border-b-[15px] border-[#40C3CD]"></div>
                <div className="flex justify-start items-center h-full max-w-[1400px] mx-auto ">
                    <div className=" relative z-10 mt-28  sm:mt-0 md:mt-0 lg:mt-15 flex flex-col 2xl:space-y-8 xl:space-y-5 lg:space-y-5 space-y-5 justify-center max-w-[900px] px-5 md:px-10 lg:px-15 xl:px-15 2xl:px-0 py-5 lg:mb-15 mb-15">
                        <div className="flex md:flex-row flex-row md:justify-between justify-between items-center gap-5 lg:gap-0 max-w-[500px]">
                            <div className="flex  gap-4 "><FaCalendarAlt className='text-[#40C3CD] flex shrink-0 text-[20px] md:text-[28px] mt-0.5' /> <h2 className="text-white namdhinggo-extrabold md:text-[24px] text-[18px]">Sep 28-30, 2025</h2></div>
                            <div className="flex  gap-3 "><IoLocationSharp className='text-[#40C3CD] flex shrink-0 text-[20px] md:text-[28px] mt-0.5' /> <h2 className="text-white namdhinggo-extrabold md:text-[24px] text-[18px]">Beijing, China</h2></div>
                        </div>
                        <h1 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[28px] text-[26px] namdhinggo-extrabold text-[#40C3CD] lg:text-start text-start ">International Conference on Next-Gen Technologies in Healthcare and Security</h1>
                        <p className="text-[16px] md:text-[18px] leading-[30px] text-justify inter-regular text-white">A global platform for exploring next-generation technologies in healthcare and security.Bringing together researchers, innovators, and industry experts from around the world. Fostering collaboration, knowledge sharing, and impactful advancements.</p>

                        <Link to="/paper-submission">
                            <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex lg:justify-start  justify-center ">
                                <button className="group cursor-pointer flex items-center gap-4 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#379197]  via-[#3bb2bb]  to-[#2798a0]  shadow-lg transition-all duration-500 ease-in-out hover:from-[#40C3CD]  hover:to-[#40C3CD]  hover:scale-105 hover:shadow-[0_8px_24px_rgba(44,83,100,0.6)]">
                                    Register Now <FaArrowRightLong className="text-[22px] transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>




            <div className="max-w-[1400px] mx-auto lg:mt-15 mt-10 px-4 2xl:px-0">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center ">About the Conference</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center">
                    <div className=" max-w-[600px] w-fit"><img src="/images/abouthome.jpg" alt="image3" className="" loading='lazy' /></div>
                    <div className="  bg-cover bg-center " style={{ backgroundImage: "url('/images/bgmic.jpg')" }}>
                        <p className=" text-[16px] leading-[30px] text-justify"><span className="inter-bold ">The International Conference on Next-Gen Technologies in Healthcare and Security</span> <span className="inter-regular opacity-85">is dedicated to advancing innovation at the intersection of healthcare and cybersecurity. Our mission is to provide a dynamic platform for researchers, academics, professionals, and industry leaders to present their latest findings, share insights, and collaborate on transformative technologies. Through keynote sessions, technical paper presentations, and expert panel discussions, the conference aims to address real-world challenges, promote interdisciplinary dialogue, and inspire solutions that shape the future of healthcare and security systems worldwide.</span></p>
                        <div className="mt-5 space-y-3 text-justify">
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Next-Gen Technologies in Healthcare</h2>
                                <div className="flex gap-3 mt-2">
                                    <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-2" />
                                    {/* <img src="/images/black-circle.png" alt="img" className=" w-[10px] h-[10px] mt-3 " />  */}
                                    <p className="inter-regular opacity-85 text-[16px] leading-[30px] ">Enhancing patient care, diagnosis, and treatment through innovations like AI, telemedicine, and wearable devices.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Cybersecurity in Healthcare and Critical Systems  </h2>
                                <div className="flex gap-3 mt-2"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px] ">Safeguarding sensitive data and ensuring system integrity with advanced security protocols and threat detection mechanisms.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Interdisciplinary Research and Innovation  </h2>
                                <div className="flex gap-3 mt-2"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px] ">Bridging healthcare and security domains to develop integrated, future-ready solutions for global challenges.</p></div>
                            </div>
                        </div>
                        {/* <Link to="/about">
                            <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex justify-end  mt-5 ">
                                <button className="cursor-pointer btn hover-border flex items-center gap-4 px-4 shadow-[0_0_10px_rgba(0,0,0,0.15)] text-[#40C3CD]  py-1 rounded-lg transition duration-300  ">
                                    Read More  <FaArrowRightLong className="text-[22px] transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </Link> */}
                        <Link to="/about">
                            <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex justify-end mt-5">
                                <button className="group cursor-pointer flex items-center gap-4 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#379197]  via-[#3bb2bb]  to-[#2798a0]  shadow-lg transition-all duration-500 ease-in-out hover:from-[#40C3CD]  hover:to-[#40C3CD]  hover:scale-105 hover:shadow-[0_8px_24px_rgba(44,83,100,0.6)]">
                                    Read More
                                    <FaArrowRightLong className="text-[22px] transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </Link>

                    </div>
                </div>

            </div>


            <div className="max-w-[1300px] mx-auto px-4 2xl:px-0">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center mt-15">Our Mission</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center ">
                    <div className="relative max-w-[600px] w-fit lg:hidden block " ><img src="/images/scopehome.jpg" alt="image3" className=" " loading='lazy'/></div>

                    <div className="  bg-cover bg-center " style={{ backgroundImage: "url('/images/bgmic.jpg')" }}>
                        <p className="  text-[16px] leading-[30px] text-justify inter-regular opacity-85">To foster innovation and collaboration in the fields of healthcare and security by providing a global platform for researchers, professionals, and industry leaders. The conference aims to accelerate the development and adoption of next-generation technologies that address critical challenges, improve quality of life, and ensure secure, sustainable systems for the future.</p>
                        <div className="mt-5 space-y-3 text-justify">
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Healthcare Innovation </h2>
                                <div className="flex gap-3 mt-2"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Advancing healthcare with AI, IoT, and digital technologies for better diagnostics, treatment, and care.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Cybersecurity and Data Protection </h2>
                                <div className="flex gap-3 mt-2"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Ensuring secure, reliable healthcare systems through advanced cybersecurity strategies and robust data protection methods.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold"> Interdisciplinary Collaboration </h2>
                                <div className="flex gap-3 mt-2"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Bridging healthcare and technology domains to create integrated, future-ready, and collaborative solutions.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Real-World Impact</h2>
                                <div className="flex gap-3 mt-2"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Transforming research into practical innovations that solve real challenges in healthcare and security sectors.</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[600px] w-fit"><img src="/images/scopehome.jpg" alt="image3" className="  hidden lg:block" loading='lazy'/></div>

                </div>
            </div>



            <div className=" mt-15">
                <div className=" bg-cover" style={{ backgroundImage: "url('/images/authorbg.jpg')" }}>
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center pt-10  ">Our Featured Speakers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-15 xl:gap-10 lg:gap-10 md:gap-10 gap-4 lg:mt-7 mt-5 max-w-[1400px] mx-auto px-4">
                        {speaker.map((item, index) => (
                            <div key={index} className=" ">
                                <div className="">
                                    <div className="flex  justify-center items-center rounded-t-[75px] bg-white  border-[#40C3CD] border-t-[25px]  ">
                                        <img src="/images/cnhuman12.png" alt="image" className="   " loading='lazy'/>
                                    </div>
                                    <div className=" flex flex-col justify-center items-center text-white bg-[#40C3CD] rounded-b-[75px]   py-7 mb-10">
                                        <p className="namdhinggo-extrabold 2xl:text-[28px] xl:text-[28px] lg:text-[24px] text-[24px]   ">{item.name}</p>
                                        <p className="namdhinggo-medium 2xl:text-[24px] xl:text-[24px] lg:text-[24px] text-[24px] ">{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="pb-15  max-w-[1400px] mx-auto mt-15 px-4 2xl:px-0">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center">Join Us at ICNGTHS 2025</h2>
                <p className="md:text-[18px] text-[16px]  inter-semibold lg:text-center mt-5  opacity-85 text-justify">Experience groundbreaking research presentations and network with industry leaders</p>

                <div className=" mt-10 ">
                    {/* <div className="bg-[#F07447] py-5 px-5 rounded-tl-[25px] lg:rounded-bl-[25px] rounded-tr-[25px] lg:rounded-tr-[0px] flex-[25%] " >
                        <div className="flex flex-col space-y-5  justify-center items-start sm:items-center lg:items-start lg:mt-8 mt-5  lg:mb-0 mb-5">
                            <div className="flex gap-3"><IoLocationSharp className='text-[24px] text-white' /><p className="namdhinggo-extrabold text-[20px] text-white">TamilNadu, Chennai</p></div>
                            <div className="flex gap-3"><FaCalendar className='text-[24px] text-white ' /><p className="namdhinggo-extrabold text-[20px] text-white">28th to 30th September, 2025</p></div>
                            <div className="flex gap-3"><BsFillClockFill className='text-[24px] text-white ' /><p className="namdhinggo-extrabold text-[20px] text-white">9:00 AM – 5:00 PM</p></div>
                        </div>
                    </div> */}

                    <div className="relative bg-cover bg-center rounded-[25px]  " style={{ backgroundImage: "url('/images/allhero1.jpg')" }} >
                        <div className="absolute inset-0 bg-[#000000] opacity-75  rounded-[25px] "></div>
                        <div className="z-10 relative text-center space-y-5 px-6 p-5 ">
                            <p className="namdhinggo-extrabold 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] text-white">Ready to Join the Innovation ?</p>
                            <p className="inter-medium text-[16px] text-white text-justify md:text-center max-w-[1000px] mx-auto">Register now and secure your spot today to connect with global experts, explore emerging technologies, and be part of shaping the future of computer science.</p>
                            <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 space-y-5  justify-center items-start sm:items-center lg:items-start">
                                <div className="flex gap-3"><IoLocationSharp className='text-[26px] text-[#40C3CD]' /><p className="namdhinggo-extrabold text-[20px] text-white">Beijing, China</p></div>
                                <div className="flex gap-3"><FaCalendar className='text-[24px] text-[#40C3CD] ' /><p className="namdhinggo-extrabold text-[20px] text-white">28th to 30th Sep, 2025</p></div>
                                <div className="flex gap-3"><BsFillClockFill className='text-[24px] text-[#40C3CD] ' /><p className="namdhinggo-extrabold text-[20px] text-white">9:00 AM – 5:00 PM</p></div>
                            </div>
                            {/* <Link to="/paper-submission">
                                <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex justify-center  ">
                                <button className="group cursor-pointer flex items-center gap-4 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#379197]  via-[#3bb2bb]  to-[#2798a0]  shadow-lg transition-all duration-500 ease-in-out hover:from-[#40C3CD]  hover:to-[#40C3CD]  hover:scale-105 hover:shadow-[0_8px_24px_rgba(44,83,100,0.6)]">
                                        Register Now  <FaArrowRightLong className="text-[22px] transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </Link> */}
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

export default Home