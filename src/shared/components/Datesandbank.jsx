import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Datesandbank() {
    const dates = [
        {
            content1: " October 02, 2025",
            title: "Abstract Submission Deadline"
        },
        {
            content1: "  October 07, 2025",
            title: "Full Paper Submission Deadline"
        },
        {
            content1: "  October 11, 2025",
            title: "Notification of Acceptance"
        },
        {
            content1: "  October 18, 2025",
            title: "Final Paper Submission"
        },
        {
            content1: "  October 24, 2025",
            title: "Registration Deadline"
        },
        {
            content1: " October 28, 2025",
            title: "Conference Dates"
        },

    ]

    const bank = [
        {
            content1: " ICNGTHS Conference",
            content2: " 123456789",
            content3: " china",
            content4: " TMBL03000045",
            content5: " 605060005",

        },]

    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero3.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-60 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white mt-10 px-4 text-center">Important Dates </h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#40C3CD] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#40C3CD] "><span className="text-white">/ </span>Important Dates</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="px-4 2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center lg:mt-15 mt-10 ">Important Dates</h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85"> <span className="inter-bold ">The International Conference on Next-Gen Technologies in Healthcare and Security </span> <span className="inter-regular opacity-85">invites researchers, professionals, and academicians to participate in this impactful event. To ensure smooth planning and participation, please take note of the important deadlines related to abstract submission, paper acceptance, registration, and final submission. </span></p>
                </div>
            </div>


            {/* <div className="max-w-[1400px] mx-auto  lg:mt-15 mt-10 ">
                <div className="relative  rounded-[15px]" >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  max-w-[1300px] mx-auto px-4 ">
                        <div className="relative place-items-center shadow-[0_0_8px_rgba(0,0,0,0.15)] py-5 px-3 rounded-xl" >
                            {dates.map((item, index) => (

                                <div className="flex  flex-col  space-y-3  ">
                                    <h2 className="text-center md:text-[24px] text-[20px] namdhinggo-extrabold text-[#40C3CD] border-b-3">Key Dates</h2>
                                    <p className="inter-regular opacity-85 text-[14px] lg::text-[16px]  mt-1"><span className="inline-block md:w-[280px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Abstract Submission Deadline</span> :{item.content1}</p>
                                    <p className="inter-regular opacity-85 text-[14px] lg::text-[16px]  mt-1"><span className="inline-block md:w-[280px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Full Paper Submission Deadline</span> :{item.content2}</p>
                                    <p className="inter-regular opacity-85 text-[14px] lg::text-[16px]  mt-1"><span className="inline-block md:w-[280px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Notification of Acceptance</span> :{item.content3}</p>
                                    <p className="inter-regular opacity-85 text-[14px] lg::text-[16px]  mt-1"><span className="inline-block md:w-[280px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Final Paper Submission</span> :{item.content4}</p>
                                    <p className="inter-regular opacity-85 text-[14px] lg::text-[16px]  mt-1"><span className="inline-block md:w-[280px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Registration Deadline</span> :{item.content5}</p>
                                    <p className="inter-regular opacity-85 text-[14px] lg::text-[16px]  mt-1"><span className="inline-block md:w-[280px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Conference Dates</span> :{item.content6}</p>

                                </div>
                            ))}


                        </div>

                        <div className="relative  place-items-center  shadow-[0_0_8px_rgba(0,0,0,0.15)] py-5 px-3 rounded-xl">
                            {bank.map((item, index) => (
                                <div className=" flex  flex-col  space-y-3">
                                    <h2 className="text-center md:text-[24px] text-[20px] namdhinggo-extrabold text-[#40C3CD] border-b-3">Bank Details for Registration Payment</h2>

                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Account Name  </span> :{item.content1}</p>
                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Account Number </span> :{item.content2}</p>
                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Branch</span> :{item.content3}</p>
                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">IFSC Code</span> :{item.content4}</p>
                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">MICR   </span> :{item.content5}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="max-w-[1400px] mx-auto  lg:mt-10 mt-10 ">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center ">Key Date</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 px-4">
                    {dates.map((item, index) => (
                        <div className="shadow-[0_0_8px_rgba(0,0,0,0.15)] space-y-5 p-5 rounded-lg bg-[#24a7b1]">
                            <div className="flex justify-center gap-5 "><FaCalendar className='text-[24px] text-white mt-1' /><p className="text-white namdhinggo-bold text-center text-[24px]">{item.content1}</p></div>
                            <p className="text-center inter-bold  text-white">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* <div className="max-w-[1400px] mx-auto  lg:mt-15 mt-10 ">
               
             <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center ">Bank Details for Registration Payment</h2>
              <p className="inter-regular opacity-85 leading-[30px] mt-5 px-4 text-justify">Participants of the International Conference on Next-Gen Technologies in Healthcare and Security are requested to make their registration payment through the official bank account provided by the organizers. It is important to include your full name and paper ID (if applicable) in the transaction reference to ensure accurate verification. After completing the payment, please retain the receipt and upload it during the registration process or email it to the conference team. International participants should ensure that any applicable transfer fees are covered. Timely payment is essential for confirming your participation in the conference.</p>
              <div className="flex justify-center mt-5 px-4">
                   {bank.map((item, index) => (
                                <div className=" flex  flex-col  space-y-3">

                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Account Name  </span> :{item.content1}</p>
                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Account Number </span> :{item.content2}</p>
                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">Branch</span> :{item.content3}</p>
                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">IFSC Code</span> :{item.content4}</p>
                                    <p className="inter-regular opacity-95 lg:text-[16px] text-[14px]  mt-1"><span className="inline-block md:w-[180px] inter-bold lg:text-[16px] text-[14px] text-[#40C3CD]">MICR   </span> :{item.content5}</p>

                                </div>
                            ))}
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

export default Datesandbank