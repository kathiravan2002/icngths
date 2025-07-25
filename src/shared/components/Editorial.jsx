import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { FaUniversity } from "react-icons/fa";

function Editorial() {


    const Scope = [

        {
            topic: "Manuscript Evaluation and Review Oversight",
            content: "Ensure each submitted paper undergoes a fair, timely, and rigorous peer-review process based on academic merit and relevance.",
        },
        {
            topic: "Editorial Quality Assurance",
            content: "Maintain the scholarly standards of all accepted papers by overseeing structure, clarity, originality, and adherence to ethical guidelines.",
        },
        {
            topic: "Reviewer Selection and Coordination",
            content: "Identify qualified reviewers for submissions, assign papers, and manage communications to ensure a balanced and expert review.",
        },
        {
            topic: "Ethical Compliance Monitoring",
            content: "Ensure all submissions adhere to ethical research practices, including plagiarism checks, proper citations, and conflict of interest disclosures.",
        },
        {
            topic: "Decision-Making on Acceptance and Revisions",
            content: "Make final editorial decisions on acceptance, revision, or rejection of manuscripts based on reviewer recommendations and overall quality.",
        },
        {
            topic: "Content Curation for Conference Proceedings",
            content: "Select and compile high-quality papers for inclusion in official conference publications, proceedings, or special journal issues.",
        },
        {
            topic: "Support for Special Issues or Tracks",
            content: "Assist in managing themed tracks, special sessions, or journal collaborations aligned with the conference's scope.",
        },
        {
            topic: "Author Guidance and Communication",
            content: "Provide clear, constructive feedback to authors and guide them through the revision and publication process.",
        },

    ]


    const editorial = [
        {
            name: "Dr. A. Karthikeyan",
            university: "SNS College of Technology",
            job: " Department of ECE",
            country: "Bangaladesh"
        },
        {
            name: "Dr. Stephen Ekwe",
            university: "University of Cape Town",
            job: "Department of EEE",
            country: "South Africa"
        },
        {
            name: "Dr. A. Daison Raj",
            university: " NITT Trichy",
            job: "Department of CSE",
            country: "India"
        },
        {
            name: "Dr. S. Salomi",
            university: "SRMIST, KTR Campus",
            job: " Department of CI,",
            country: "India"
        },
        {
            name: "Dr. M. Anbarasan",
            university: "Sairam Institution of Technology",
            job: "Department of Civil",
            country: "India"
        },
        {
            name: "Dr. S. Jayashree",
            university: "KGISL Institute of technology",
            job: "Department of AI&ML",
            country: "India"
        },
        {
            name: "Dr. R.S. Aiswarya",
            university: "KPR Institute of Technology",
            job: "Department of Mech",
            country: "India"
        },
        {
            name: " Dr. Asma Sbeih",
            university: "Palestine Ahliya university",
            job: "Department of IT",
            country: "Palestine"
        },
        {
            name: "Dr. Sakthivel Velusamy",
            university: "Konkuk Aerospace Design Institute",
            job: " Department of Aerospace ",
            country: "South Korea"
        },
        {
            name: " Dr. Surendar Rama Sitaraman",
            university: "Samsung Austin Development Center ",
            job: " Advanced Computing Lab ",
            country: "USA"
        },
        {
            name: " Dr. Yonglin Chen",
            university: "The First Hospital of Lanzhou University",
            job: "Department of Cardio",
            country: "China"
        },
        {
            name: " Dr. Brahim Issaoui",
            university: "Qassim University",
            job: "Department of ECE",
            country: "Saudi Arabia"
        },
        {
            name: "Dr. Rojalina Priyadarshini",
            university: "C.V.Raman Global University",
            job: "Department of Mech",
            country: "India"
        },
        {
            name: "Dr. Forsteamanuensis",
            university: "UiT The Arctic University ",
            job: "Department of Automation and Process",
            country: "Norway"
        },
        {
            name: "Dr. R. Arun Kumar",
            university: "University of South Wales",
            job: "Department of Cybersecuriy",
            country: "United Kingdom"
        },
        {
            name: "Dr. Ayodeji Oludola Oluwatope",
            university: "Obafemi Awolowo University",
            job: "Department of CSE",
            country: "Nigeria"
        },
        {
            name: "Dr. C. Sutapa Sarkar",
            university: " Brainware University",
            job: "Department of ECE",
            country: "India"
        },
        {
            name: "Dr. Abolfazl Gandomi",
            university: "Islamic Azad University",
            job: "Department of CSE",
            country: "Iran"
        },
        {
            name: "Dr. Muhammad Mujahid",
            university: "Khwja Fareed University",
            job: "Department of IT",
            country: "Pakistan"
        },
        {
            name: "Dr. Md Al Mustanjid",
            university: "Daffodil International University",
            job: "Department of Software Engineering",
            country: "Bangladesh"
        },
        {
            name: "Dr. Alven Ritonga",
            university: " Universitas Wijaya Putra",
            job: "Department of CSE",
            country: "Indonesia"
        },
        {
            name: "Dr. Thien B. Nguyen-Tat",
            university: "National Cheng Kung University",
            job: "Department of IT",
            country: "Vietnam"
        },
        {
            name: "Dr. Arun Kumar Rouniyar",
            university: "Saharsa college of Engineering",
            job: "Department of Mech",
            country: "India"
        },
        {
            name: "Dr. Ghasem Abbasi",
            university: " Islamic Azad University",
            job: "Department of MS",
            country: "Iran"
        },
        {
            name: "Dr. J. Jackson",
            university: "Bannari Amman Institute of Technology",
            job: "Department of Civil",
            country: "India"
        },
        // {
        //     name: "Naga Sushma Allur",
        //     university: "Astute Solutions LLC",
        //     expertise: " Business Analytics",
        //     country: "  California,USA"
        // },
    ]

    const final = [
        {
            name: "Dr. J. Jackson",
            university: "Bannari Amman Institute of Technology",
            job: "Department of Civil",
            country: "India"
        }
    ]
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero3.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-60 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white mt-10">Editorial Board</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#40C3CD] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#40C3CD] "><span className="text-white">/ </span>Editorial Board</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center lg:mt-15 mt-10">Editorial Board </h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The Editorial Board of <span className="inter-bold ">the International Conference on Next-Gen Technologies in Healthcare and Security</span> <span className="inter-regular opacity-85"> comprises distinguished scholars, researchers, and professionals with deep expertise across healthcare innovation, cybersecurity, and emerging technologies. Serving as custodians of academic quality, the board ensures the integrity, originality, and relevance of all published content associated with the conference. Through a rigorous review and editorial process, the board upholds high scholarly standards and supports the dissemination of impactful research that contributes to global advancement in these critical domains.</span></p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0   lg:mt-15 mt-10 ">
                <div className="lg:px-10 px-4 py-10 bg-[#24a7b1]  rounded-[15px] ">
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-white text-center  ">Editorial Board Roles and Responsibilities</h2>
                    <div className="mt-5  grid grid-cols-1 md:grid-cols-2 gap-10 ">
                        {Scope.map((item, index) => (
                            <div className="rounded-xl bg-white p-5">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold text-[#40C3CD] text-center">{item.topic}</h2>
                                <div className="flex gap-0 lg:gap-3  mt-2 text-justify"><TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  mt-3" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">{item.content}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            <div className=" mt-15">
                <div className=" bg-cover" style={{ backgroundImage: "url('/images/authorbg.jpg')" }}>
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center pt-10">Meet Our Editorial Board Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-15 xl:gap-10 lg:gap-10 md:gap-10 gap-4 py-10 max-w-[1400px] mx-auto px-4 ">
                        {editorial.map((item, index) => (
                            <div key={index} className={`${index === 24 ? 'col-span-3 flex justify-center' : ''
                                }`}>

                                <div className=" flex flex-col lg:justify-center lg:items-center text-white bg-[#40C3CD] lg:rounded-full rounded-4xl  h-full py-7 px-4">
                                    <h2 className="2xl:text-[24px] xl:text-[28px] lg:text-[24px] text-[24px] namdhinggo-extrabold text-white lg:text-center">{item.name}</h2>
                                    <div className="flex  gap-3"><MdOutlineWorkOutline className='text-[20px] text-white mt-1 shrink-0' /> <p className="text-[20px] namdhinggo-medium text-white lg:text-center">{item.job}</p></div>
                                    <div className="flex  gap-3 "><FaUniversity className='text-[20px] text-white mt-1  shrink-0' /> <p className="text-[20px] namdhinggo-medium text-white lg:text-center">{item.university}</p></div>
                                    <div className="flex  gap-2"><IoLocationSharp className='text-[22px] text-white mt-1  shrink-0' /> <p className="text-[20px] namdhinggo-medium text-white lg:text-center"> {item.country}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex justify-center items-center pb-10 pt-4 max-w-[1400px] mx-auto px-4 ">
                        {final.map((item, index) => (
                            <div key={index} className=" ">
                                    
                                    <div className=" flex flex-col lg:justify-center  lg:items-center text-white bg-[#40C3CD] lg:rounded-full rounded-4xl  h-full py-7 px-4">
                                        <h2 className="2xl:text-[24px] xl:text-[28px] lg:text-[24px] text-[24px] namdhinggo-extrabold text-white lg:text-center">{item.name}</h2>
                                        <div className="flex  gap-3"><MdOutlineWorkOutline className='text-[20px] text-white mt-1 shrink-0' /> <p className="text-[20px] namdhinggo-medium text-white lg:text-center">{item.job}</p></div>
                                        <div className="flex  gap-3 "><FaUniversity  className='text-[20px] text-white mt-1  shrink-0' /> <p className="text-[20px] namdhinggo-medium text-white lg:text-center">{item.university}</p></div>
                                        <div className="flex  gap-2"><IoLocationSharp className='text-[22px] text-white mt-1  shrink-0' /> <p className="text-[20px] namdhinggo-medium text-white lg:text-center"> {item.country}</p></div>
                                </div>
                            </div>
                        ))}
                    </div> */}
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

export default Editorial