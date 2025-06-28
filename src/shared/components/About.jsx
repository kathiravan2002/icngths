import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function About() {


    const Goal = [
        {
            topic: "Advance Healthcare Innovation",
            content: "Encourage the integration of AI, IoT, and smart technologies to transform healthcare systems, improve patient care, and enable efficient, data-driven medical practices.",
        },
        {
            topic: "Strengthen Cybersecurity Frameworks",
            content: "Promote advanced cybersecurity solutions to safeguard sensitive healthcare data, ensure system integrity, and protect against evolving digital threats and cyberattacks.",
        },

        {
            topic: "Foster Interdisciplinary Collaboration",
            content: "Unite experts from healthcare, security, and technology sectors to share knowledge, drive innovation, and co-develop impactful, cross-domain solutions.",
        },
        {
            topic: "Support Emerging Researchers",
            content: "Offer opportunities for young researchers and students to present their work, receive mentorship, and gain international exposure.",
        },
        {
            topic: "Bridge Academia and Industry",
            content: "Facilitate partnerships between researchers and industry leaders to translate academic innovations into real-world technologies.",
        },
        {
            topic: "Enable Real-World Applications",
            content: "Encourage practical implementations of research findings that address pressing challenges in healthcare and digital security.",
        },
    ]


    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero3.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-60 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white mt-10">About Us</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#40C3CD] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#40C3CD] "><span className="text-white">/ </span>About Us</h2>
                    </div>
                </div>
            </div>


            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center lg:mt-15 mt-10">About Our Conference</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center">
                    <div className="max-w-[600px] w-fit" ><img src="/images/about.jpg" alt="image3" className="  " loading='lazy'/></div>

                    <div className="space-y-5  bg-cover bg-center " style={{ backgroundImage: "url('/images/bgmic.jpg')" }}>
                        <p className=" text-[16px] leading-[30px] text-justify"><span className="inter-bold ">The International Conference on Next-Gen Technologies in Healthcare and Security</span> <span className="inter-regular opacity-85">brings together a global community of researchers, professionals, and innovators to explore the transformative potential of emerging technologies in two of the most critical domains—healthcare and security. The conference serves as a collaborative platform to exchange cutting-edge research, share innovative solutions, and discuss the challenges and opportunities in deploying next-gen technologies for real-world applications.</span></p>
                        <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">With a focus on artificial intelligence, cybersecurity, medical informatics, blockchain, IoT, and data analytics, the conference provides deep insights into how technology is revolutionizing patient care, clinical decision-making, data protection, and system resilience.Attendees will gain exposure to a variety of sessions including keynote talks, technical presentations, panel discussions, and interactive workshops led by global thought leaders and subject matter experts. </p>
                        <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">This conference is not just an academic gathering—it’s a forward-thinking forum designed to foster collaboration between academia, industry, and government sectors. By uniting multidisciplinary perspectives and promoting meaningful dialogue, the event aims to inspire practical innovations that address real-world problems and pave the way for a safer, healthier, and more connected future.</p>

                    </div>


                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0   lg:mt-15 mt-10 ">
                <div className="lg:px-10 px-4 py-10 rounded-[15px]  bg-[#24a7b1]" >
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-white text-center  ">Our Goal</h2>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10 " >
                        {Goal.map((item, index) => (
                            <div className="  p-5 rounded-xl bg-white"  >
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold text-[#40C3CD] text-center ">{item.topic}</h2>
                                <div className="flex gap-0 md:gap-3 mt-2 text-justify "><TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-3" /><p className="inter-regular opacity-85 text-[16px] leading-[30px] ">{item.content}</p></div>
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
                                <div className="flex gap-3"><IoLocationSharp className='text-[26px] text-[#40C3CD]' /><p className="namdhinggo-extrabold text-[20px] text-white">Beijing, China</p></div>
                                <div className="flex gap-3"><FaCalendar className='text-[24px] text-[#40C3CD] ' /><p className="namdhinggo-extrabold text-[20px] text-white">28th to 30th Sep, 2025</p></div>
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

export default About