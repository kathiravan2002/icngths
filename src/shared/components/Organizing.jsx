import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Organizing() {


    const organize = [
        {
            topic: "Strategic Leadership and Oversight",
            content: "Provides vision, direction, and overall supervision to ensure the conference aligns with its academic and professional goals.",
        },
        {
            topic: "Technical Program Management",
            content: "Plans and manages the technical sessions, including review processes, scheduling, and selection of keynote and invited speakers.",
        },
        {
            topic: "Research Review and Quality Assurance",
            content: "Oversees paper submissions, ensures a fair peer-review process, and maintains high standards in accepted research work.",
        },
        {
            topic: "Publications and Indexing ",
            content: "Coordinates the preparation, formatting, and publication of conference proceedings and arranges indexing in reputed databases or journals.",
        },
        {
            topic: "Communication and Promotion",
            content: "Leads promotional strategies including social media, newsletters, email campaigns, and media outreach to increase visibility and participation.",
        },
        {
            topic: "Registration and Delegate Services ",
            content: "Manages attendee registrations, payment gateways, badge printing, and provides assistance throughout the delegate experience.",
        },
        {
            topic: "Website and IT Management ",
            content: "Maintains the official website, manages submission portals, and provides technical support for online or hybrid events.",
        },
        {
            topic: "Volunteer and Session Support ",
            content: "Recruits and coordinates volunteers for session management, help desks, and participant assistance during the conference.",
        },

    ]


    const team = [
        {
            title: "Chairman",
            name: "Dr. Sundar M.E., Ph.D.,",
            position: "Principal",
            qualification: "M.E., Ph.D.,",
            location: "Chennai"
        },
        {
            title: "Chairman",
            name: "Dr. Sundar M.E., Ph.D.,",
            position: "Principal",
            qualification: "M.E., Ph.D.,",
            location: "Chennai"
        },
        {
            title: "Chairman",
            name: "Dr. Sundar M.E., Ph.D.,",
            position: "Principal",
            qualification: "M.E., Ph.D.,",
            location: "Chennai"
        },
        {
            title: "Chairman",
            name: "Dr. Sundar M.E., Ph.D.,",
            position: "Principal",
            qualification: "M.E., Ph.D.,",
            location: "Chennai"
        },
        {
            title: "Chairman",
            name: "Dr. Sundar M.E., Ph.D.,",
            position: "Principal",
            qualification: "M.E., Ph.D.,",
            location: "Chennai"
        },
        {
            title: "Chairman",
            name: "Dr. Sundar M.E., Ph.D.,",
            position: "Principal",
            qualification: "M.E., Ph.D.,",
            location: "Chennai"
        },

    ]
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero3.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-60 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white mt-10">Organizing Committee</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#40C3CD] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#40C3CD] "><span className="text-white">/ </span>Organizing Committee</h2>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center lg:mt-15 mt-10">Organizing Committee</h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The Organizing Committee of <span className="inter-bold ">the International Conference on Next-Gen Technologies in Healthcare and Security</span> <span className="inter-regular opacity-85">comprises a team of experienced researchers, academicians, and professionals dedicated to delivering a high-quality, impactful event. With a shared commitment to innovation and collaboration, the committee oversees the planning, coordination, and execution of the conference, ensuring a seamless experience for all participants. Their collective expertise helps shape a platform that fosters meaningful discussions, showcases cutting-edge research, and advances global progress in healthcare and security technologies.</span></p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0   lg:mt-15 mt-10 ">
                <div className="lg:px-10 px-4 py-10 bg-[#24a7b1] rounded-[15px] ">
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-white text-center  ">Organizing Committee Roles And Responsibilities</h2>
                    <div className="mt-5  grid grid-cols-1 md:grid-cols-2 gap-10">
                        {organize.map((item, index) => (
                            <div className="rounded-xl bg-white p-5">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold text-[#40C3CD] text-center">{item.topic}</h2>
                                <div className="flex gap-0 md:gap-3  mt-2 text-justify"><TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-3" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">{item.content}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


           
            {/* <div className=" mt-15">
                <div className=" bg-cover" style={{ backgroundImage: "url('/images/authorbg.jpg')" }}>
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center pt-10">Meet the team behind ICNGTHS 2025 </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-15 xl:gap-10 lg:gap-10 md:gap-10 gap-4 lg:mt-7 mt-5 max-w-[1400px] mx-auto px-4">
                        {team.map((item, index) => (
                            <div key={index} className=" ">
                                <div className="">
                                    <div className="flex  justify-center items-center rounded-t-[75px] bg-white  border-[#40C3CD] border-t-[25px]  ">
                                        <img src="/images/cnhuman12.png" alt="image" className="   " />
                                    </div>
                                    <div className=" flex flex-col justify-center items-center text-white bg-[#40C3CD] rounded-b-[75px]   py-7 mb-10">
                                        <p className="namdhinggo-extrabold text-[28px]">{item.title}</p>
                                        <p className="text-[26px] namdhinggo-medium">{item.name}</p>
                                        <div className="flex justify-center gap-3"><MdOutlineWorkOutline className='text-[20px] text-white mt-1' /> <p className="text-[22px] namdhinggo-medium">{item.position}</p></div>
                                        <div className="flex justify-center gap-2"><IoLocationSharp className='text-[22px] text-white mt-1' /> <p className="text-[20px] namdhinggo-medium">{item.location}</p></div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

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

export default Organizing