import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Scope() {

    const Scope = [
        {
            topic: "Artificial Intelligence in Healthcare",
            content: "Exploring AI-powered diagnostics, predictive analytics, and clinical decision support systems that enhance accuracy, efficiency, and personalization in patient care.",
        },
        {
            topic: "Cybersecurity and Data Privacy",
            content: "Developing robust frameworks to protect sensitive healthcare and critical infrastructure data from cyber threats, breaches, and unauthorized access.",
        },

        {
            topic: "Internet of Things (IoT) in Medical Systems",
            content: "Integrating smart devices for real-time patient monitoring, remote care, and intelligent health data collection across connected ecosystems.",
        },
        {
            topic: "Blockchain in Health and Security",
            content: "Utilizing blockchain for secure, transparent medical record management, identity verification, and secure data exchange in healthcare and security applications.",
        },
        {
            topic: "Telemedicine and Remote Care Technologies",
            content: "Advancing virtual consultation platforms, remote diagnostics, and mobile health applications to improve access and continuity of care.",
        },
        {
            topic: "Biometric Security and Identity Management",
            content: "Implementing facial, fingerprint, and retina-based authentication systems to enhance access control and patient identity verification.",
        },
    ]

    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero3.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-60 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white mt-10">Our Scope</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#40C3CD] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#40C3CD] "><span className="text-white">/ </span>Our Scope</h2>
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center lg:mt-15 mt-10">Scope Of Our Conference</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center">
                    <div className="max-w-[600px] w-fit  " ><img src="/images/scope.jpg" alt="image3" className=" " loading='lazy'/></div>

                    <div className="space-y-5  bg-cover bg-center " style={{ backgroundImage: "url('/images/bgmic.jpg')" }}>
                        <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The conference focuses on the convergence of advanced technologies and their transformative impact on the healthcare and security sectors. It covers a broad range of next-generation tools and methodologies including Artificial Intelligence, Internet of Things (IoT), Blockchain, Big Data Analytics, Cybersecurity, and Cloud Computing. These technologies are enabling faster, smarter, and more secure systems for medical diagnostics, patient care, healthcare management, and digital safety.</p>
                        <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">A key area of interest lies in how these technologies address real-world challenges—such as securing patient data, ensuring interoperability of smart medical devices, preventing cyber threats in healthcare infrastructure, and enhancing emergency response systems. The conference invites research and case studies that demonstrate innovative applications and measurable improvements in clinical, administrative, and public health settings.</p>
                        <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">In addition to healthcare innovations, the conference explores securing digital ecosystems through AI-driven threat detection, biometric authentication, and data privacy frameworks. It brings together researchers, practitioners, and policymakers to foster interdisciplinary collaboration. The goal is to develop scalable solutions that ensure both healthcare advancement and digital safety.</p>

                    </div>


                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0   lg:mt-15 mt-10 ">
                <div className="lg:px-10 px-4 py-10 bg-[#24a7b1] rounded-[15px] ">
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-center  text-white">Key Areas Of Focus</h2>
                    <div className="mt-5  grid grid-cols-1 md:grid-cols-2 gap-10">
                        {Scope.map((item, index) => (
                            <div className="rounded-xl bg-white p-5">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold text-[#40C3CD] text-center">{item.topic}</h2>
                                <div className="flex gap-0 md:gap-3  mt-2 text-justify "><TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-3" /><p className="inter-regular opacity-85 text-[16px] leading-[30px]">{item.content}</p></div>
                            </div>
                        ))}
                    </div>
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

export default Scope