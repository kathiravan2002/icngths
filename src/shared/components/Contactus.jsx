import React, { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import { toast } from 'react-toastify';

function Contactus() {


    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            const response = await fetch('http://192.168.29.71/icngths/contactus.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.text();
            setStatus(result);

            if (response.ok) {
                toast.success("Message submitted successfully!");
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero3.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-60 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white mt-10">Contact Us</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#40C3CD] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#40C3CD] "><span className="text-white">/ </span>Contact Us</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center lg:mt-15 mt-10">Contact Us</h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">We welcome your inquiries, feedback, and participation in the International Conference on Next-Gen Technologies in Healthcare and Security. Whether you have questions about paper submissions, registration, sponsorship, or general event details, our team is here to assist you. Please use the contact information below to reach the appropriate department. We are committed to providing timely and helpful responses to ensure a smooth and engaging experience for all attendees.</p>
                </div>
            </div>

            <div className="max-w-[40rem] mx-auto lg:mt-15 mt-10 px-4 ">
                <div className='bg-[#24a7b1]   rounded-[25px] '>


                    <div className="py-10 lg:px-10 px-6  flex flex-col   ">

                        <div className='space-y-5 '>
                            <p className="namdhinggo-extrabold text-[24px] text-white text-center mt-3">If you have any questions, please contact us!</p>
                        </div>


                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 2xl:mt-10 xl:mt-5 lg:mt-10 mt-10 " >
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    id="firstname"
                                    className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-gray-200"
                                    placeholder="Enter Your First Name"
                                    value={formData.firstname}
                                    onChange={handleFileInputChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    id="secondname"
                                    className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-gray-200"
                                    placeholder="Enter Your Last Name "
                                    value={formData.secondname}
                                    onChange={handleFileInputChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col ">
                                <input
                                    type="email"
                                    id="email"
                                    className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-gray-200"
                                    placeholder="Enter Your Email"
                                    value={formData.email}
                                    onChange={handleFileInputChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col ">
                                <input
                                    type="tel"
                                    id="number"
                                    className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px] focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-gray-200"
                                    placeholder="Enter Your Phone Number"
                                    value={formData.number}
                                    onChange={handleFileInputChange}
                                    required
                                />
                            </div>

                            <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col">
                                <textarea
                                    id="message"
                                    placeholder="Enter Message"
                                    rows="6"
                                    className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-gray-200 resize-y"
                                    value={formData.message}
                                    onChange={handleFileInputChange}
                                    required
                                />
                            </div>
                            <div className="namdhinggo-extrabold text-[20px] flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-2">
                                <button className="cursor-pointer flex gap-4 px-4 bg-white hover:scale-95 hover:border-4 hover:border-[#40C3CD] border-white  border-4  text-[#40C3CD] p-2 rounded-lg transition-all duration-300 ">
                                        {status === 'Sending...' ? 'Submitting...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
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

export default Contactus