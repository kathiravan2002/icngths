import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import NavItems from './NavItems';
import { FaChevronDown } from 'react-icons/fa';
import { RiMenuFoldLine } from 'react-icons/ri';


function Header() {
    const [MenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [scroll, setScroll] = useState(false);
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const location = useLocation();
    const isActive = location.pathname;
    const ToggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }

            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdown2(false);
            }

        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        console.log();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const about = [
        { name: "About the Conference", path: "/about" },
        { name: "Scope of Conference", path: "/scope" },
        { name: "Organizing Committee", path: "/organizing-committee" },
        { name: "Editorial Board", path: "/editorial-board" },

    ];
    const author = [
        { name: "Conference Tracks", path: "/conference-tracks" },
        { name: "Key Dates", path: "/key-dates" },
        { name: "Paper Submission", path: "/paper-submission" },

    ];
    return (
        <div className='flex justify-center'>
            <div className={` fixed w-full  max-w-[1400px] mx-auto md:rounded-[15px] rounded-b-[15px]  z-50  duration-500 ${scroll ? 'bg-white shadow-lg  top-0  ':'  bg-white shadow-lg  md:top-5 top-0 '} `}>
                <div className='flex justify-between items-center lg:py-6 py-5 lg:px-16 px-8   relative w-full'>
                    <Link to="/">
                        <div className="">
                            {/* <p className="namdhinggo-extrabold text-4xl text-[#40C3CD]">ICNGTHS</p> */}
                            <img src="/images/ICNGTHS.png" className='md:w-40 w-28' alt="" />
                        </div>
                    </Link>
                    <div className="hidden md:block ">
                        <ul className="flex gap-10 poppins-medium text-lg  text-[#40C3CD]">
                            <li className="">
                                <Link to='/' className={` ${isActive == '/' ? 'text-[#40C3CD] ' : '  '}`}>Home</Link>
                            </li>
                            <li ref={dropdown1Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown1(!dropdown1)} className={`flex items-center gap-1  ${about.some(link => location.pathname === link.path) ? 'text-[#40C3CD]' : ''}`} >
                                About Us
                                <FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                                {dropdown1 &&
                                    <div className={`absolute  border border-[#40C3CD] mt-2 rounded-lg  ${scroll ? ' bg-white' : 'bg-[#FFFFFF] opacity-100'}`}>
                                        <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap ">
                                            {about.map((link, index) => {
                                                const isActive = location.pathname === link.path;

                                                return (
                                                    <Link key={index} onClick={() => setDropdown1(!dropdown1)} to={link.path} className="!w-full" >
                                                        <li className={`px-4 py-1.5 rounded-md transition cursor-pointer ${isActive ? 'text-[#40C3CD]  ' : ''}`} >{link.name} </li>
                                                    </Link>
                                                );
                                            })}
                                        </ul>
                                    </div>}
                            </li>
                            <li ref={dropdown2Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown2(!dropdown2)} className={`flex items-center gap-1  ${author.some(link => location.pathname === link.path) ? 'text-[#40C3CD]' : '   '}`}>Author’s Desk<FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                                {dropdown2 &&
                                    <div className={`absolute  border border-[#40C3CD] mt-2  rounded-lg    ${scroll ? ' bg-white' : 'bg-[#FFFFFF] opacity-100'}`}>
                                        <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap ">
                                            {author.map((link, index) => {
                                                const isActive = location.pathname === link.path;
                                                return (
                                                    <Link key={index} onClick={() => setDropdown2(!dropdown2)} to={link.path} className="!w-full" >
                                                        <li className={`px-4 py-1.5 rounded-md transition cursor-pointer ${isActive ? 'text-[#40C3CD]  ' : ''}`} >{link.name} </li>
                                                    </Link>
                                                )
                                            })}
                                        </ul>
                                    </div>}
                            </li>


                            <li >
                                <Link to='/contact-us' className={` ${isActive == '/contact-us' ? ' text-[#40C3CD]' : ' '}`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        onClick={ToggleMenu}
                        className={`${scroll ? "" : ""
                            } text-[#40C3CD]  inline-flex align-middle cursor-pointer items-center duration-300  select-none md:hidden `}
                    >
                        {" "}

                        < RiMenuFoldLine
                            className={`${scroll ? " " : ""}   text-3xl  cursor-pointer duration-300   `}
                        />

                    </div>

                </div>
                <div className="md:hidden">
                    <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} setDropdown1={setDropdown1} dropdown1={dropdown1} />
                    {MenuOpen && (
                        <div
                            onClick={() => setMenuOpen(false)}
                            className="h-screen w-full bg-black/40 absolute top-0 "
                        ></div>

                    )}
                </div>
            </div>

        </div>
    )
}

export default Header

// import React, { useEffect, useState } from 'react';
// import 'preline/preline'; // ensure Preline is available
// import { Link } from 'react-router-dom';

// const Header = () => {
//      const [scroll, setScroll] = useState(false);

//    useEffect(() => {
//         // Initialize Preline after component mounts
//         const initPreline = async () => {
//             try {
//                 const { HSCollapse, HSDropdown } = await import('preline');
//                 // Initialize collapse and dropdown components
//                 HSCollapse.autoInit();
//                 HSDropdown.autoInit();
//             } catch (error) {
//                 console.log('Preline initialization error:', error);
//             }
//         };

//         initPreline();

//         // Also try with HSStaticMethods if available
//         if (window.HSStaticMethods) {
//             window.HSStaticMethods.autoInit();
//         }
//     }, []);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScroll(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", handleScroll);
//         console.log();
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);
//     return (
//         <>
//             {/* ========== HEADER ========== */}
//             <header className={`sticky  z-90 w-full flex flex-wrap md:justify-start md:flex-nowrap  duration-500 ${scroll ? 'bg-white shadow-lg  top-0  ' : '  bg-white shadow-lg  md:top-10 top-0 '} `}  >
//                 <nav className=" absolute max-w-[1400px] bg-white shadow-xl inset-x-0   py-3 px-10  w-full md:flex md:items-center md:justify-between   md:gap-3   lg:mx-auto  before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto rounded-3xl after:absolute after:inset-0 after:-z-1 after:max-w-5xl after:mx-2 lg:after:mx-auto  ">
//                     {/* Logo w/ Collapse Button */}
//                     <div className="flex items-center justify-between  ">
//                         <a className="flex-none namdhinggo-extrabold text-3xl md:text-4xl text-[#40C3CD]" href="#" aria-label="Brand">ICNGTHS</a>

//                         {/* Collapse Button */}
//                         <div className="md:hidden">
//                             <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-header-classic-collapse" aria-expanded="false" aria-controls="hs-header-classic" aria-label="Toggle navigation" data-hs-collapse="#hs-header-classic">
//                                 <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
//                                 <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
//                                 <span className="sr-only">Toggle navigation</span>
//                             </button>
//                         </div>
//                         {/* End Collapse Button */}
//                     </div>
//                     {/* End Logo w/ Collapse Button */}

//                     {/* Collapse */}
//                     <div id="hs-header-classic" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block z-50" aria-labelledby="hs-header-classic-collapse">
//                         {/* <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"> */}
//                             <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end items-start justify-start gap-2 md:gap-5 z-10">
//                                  <Link className="p-2 flex  z-20 items-center text-[#40C3CD] poppins-medium text-lg hover:text-[#2a9ca5] focus:outline-none focus:text-[#2a9ca5] transition-colors" to="/">
//                                     Home
//                                 </Link>

//                                 <div className="hs-dropdown relative inline-flex p-2 md:p-0">
//                                     <button
//                                         type="button"
//                                         className="hs-dropdown-toggle flex items-center gap-3 text-[#40C3CD] poppins-medium text-lg"
//                                         id="hs-dropdown-btn"
//                                         data-hs-dropdown="#hs-dropdown-menu"
//                                         aria-expanded="false"
//                                     >
//                                         About Us
//                                         <svg
//                                             className="w-4 h-4 transition-transform hs-dropdown-open:rotate-180"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </button>

//                                     {/* Dropdown Menu */}
//                                     <div
//                                         className="hs-dropdown-menu hidden absolute top-full mt-2 min-w-[160px] bg-white border border-gray-200 rounded-md shadow-lg z-50"
//                                         id="hs-dropdown-menu"
//                                         aria-labelledby="hs-dropdown-btn"
//                                     >
//                                         <Link
//                                             to="/about"
//                                             className="block px-4 py-2 text-[#40C3CD] poppins-medium text-base"
//                                         >
//                                             About the Conference
//                                         </Link>
//                                         <Link
//                                             to="/scope"
//                                             className="block px-4 py-2 text-[#40C3CD] poppins-medium text-base"
//                                         >
//                                             Scope of Conference
//                                         </Link>
//                                         <Link
//                                             to="/organizing-committee"
//                                             className="block px-4 py-2 text-[#40C3CD] poppins-medium text-base"
//                                         >
//                                             Organizing Committee
//                                         </Link>
//                                         <Link
//                                             to="/editorial-board"
//                                             className="block px-4 py-2 text-[#40C3CD] poppins-medium text-base"
//                                         >
//                                             Editorial Board
//                                         </Link>
//                                     </div>
//                                 </div>

//                                 <div className="hs-dropdown relative inline-flex p-2 md:p-0">
//                                     <button
//                                         type="button"
//                                         className="hs-dropdown-toggle flex items-center gap-3 text-[#40C3CD] poppins-medium text-lg"
//                                         id="hs-dropdown-btn"
//                                         data-hs-dropdown="#hs-dropdown-menu"
//                                         aria-expanded="false"
//                                     >
//                                         Author's Desk
//                                         <svg
//                                             className="w-4 h-4 transition-transform hs-dropdown-open:rotate-180"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </button>

                                   
//                                     <div
//                                         className="hs-dropdown-menu hidden absolute top-full mt-2 min-w-[160px] bg-white border border-gray-200 rounded-md shadow-lg z-50"
//                                         id="hs-dropdown-menu"
//                                         aria-labelledby="hs-dropdown-btn"
//                                     >
//                                         <Link
//                                             to="/conference-tracks"
//                                             className="block px-4 py-2 text-[#40C3CD] poppins-medium text-base"
//                                         >
//                                             Conference Tracks
//                                         </Link>
//                                         <Link
//                                             to="/key-dates"
//                                             className="block px-4 py-2 text-[#40C3CD] poppins-medium text-base"
//                                         >
//                                             Key Dates
//                                         </Link>
//                                         <Link
//                                             to="/paper-submission"
//                                             className="block px-4 py-2 text-[#40C3CD] poppins-medium text-base"
//                                         >
//                                             Paper Submission
//                                         </Link>

//                                     </div>
//                                 </div>

//                                 <Link className="p-2 z-20 flex items-center text-[#40C3CD] poppins-medium text-lg" to="/contact-us">
//                                     Contact Us
//                                 </Link>



//                             {/* </div> */}
//                         </div>
//                     </div>
                    
//                 </nav>
//             </header>
           
//         </>
//     );
// };


// export default Header

// import React, { useEffect, useState } from 'react';
// import 'preline/preline'; // ensure Preline is available
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const [scroll, setScroll] = useState(false);

//     useEffect(() => {
//         // Initialize Preline after component mounts
//         const initPreline = async () => {
//             try {
//                 const { HSCollapse, HSDropdown } = await import('preline');
//                 // Initialize collapse and dropdown components
//                 HSCollapse.autoInit();
//                 HSDropdown.autoInit();
//             } catch (error) {
//                 console.log('Preline initialization error:', error);
//             }
//         };

//         initPreline();

//         // Also try with HSStaticMethods if available
//         if (window.HSStaticMethods) {
//             window.HSStaticMethods.autoInit();
//         }
//     }, []);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScroll(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <>
//             {/* ========== HEADER ========== */}
//             <header className={`fixed w-full transition-all duration-500 z-[1000] ${scroll ? 'top-0' : 'md:top-4 top-0'}`}>
//                 <div className="max-w-[1400px] mx-auto px-4">
//                     <nav className="relative bg-white shadow-xl rounded-3xl py-3 px-6 md:flex md:items-center md:justify-between md:gap-3">
                        
//                         {/* Logo w/ Collapse Button */}
//                         <div className="flex items-center justify-between">
//                             <Link className="flex-none namdhinggo-extrabold text-3xl md:text-4xl text-[#40C3CD] focus:outline-none focus:opacity-80" to="/" aria-label="Brand">
//                                 ICNGTHS
//                             </Link>

//                             {/* Mobile Collapse Button */}
//                             <div className="md:hidden">
//                                 <button 
//                                     type="button" 
//                                     className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" 
//                                     data-hs-collapse="#hs-header-classic"
//                                     aria-expanded="false" 
//                                     aria-controls="hs-header-classic" 
//                                     aria-label="Toggle navigation"
//                                 >
//                                     <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                         <line x1="3" x2="21" y1="6" y2="6" />
//                                         <line x1="3" x2="21" y1="12" y2="12" />
//                                         <line x1="3" x2="21" y1="18" y2="18" />
//                                     </svg>
//                                     <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                         <path d="M18 6 6 18" />
//                                         <path d="m6 6 12 12" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Navigation Menu */}
//                         <div id="hs-header-classic" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block mt-4 md:mt-0">
//                             <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-6">
                                
//                                 {/* Home Link */}
//                                 <Link className="p-2 flex items-center text-[#40C3CD] poppins-medium text-lg hover:text-[#2a9ca5] focus:outline-none focus:text-[#2a9ca5] transition-colors" to="/">
//                                     Home
//                                 </Link>

//                                 {/* About Us Dropdown */}
//                                 <div className="hs-dropdown relative">
//                                     <button
//                                         type="button"
//                                         className="hs-dropdown-toggle p-2 flex items-center text-[#40C3CD] poppins-medium text-lg hover:text-[#2a9ca5] focus:outline-none focus:text-[#2a9ca5] transition-colors"
//                                         data-hs-dropdown="#about-dropdown"
//                                     >
//                                         About Us
//                                         <svg className="hs-dropdown-open:rotate-180 duration-300 shrink-0 size-4 ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <path d="m6 9 6 6 6-6"/>
//                                         </svg>
//                                     </button>

//                                     {/* About Us Dropdown Menu */}
//                                     <div id="about-dropdown" className="hs-dropdown-menu transition-[opacity,margin] duration-300 hs-dropdown-open:opacity-100 opacity-0 hidden z-[1100] absolute top-full left-0 mt-2 min-w-60 bg-white shadow-lg rounded-lg border border-gray-200">
//                                         <div className="p-2 space-y-1">
//                                             <Link
//                                                 to="/about"
//                                                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[#40C3CD] poppins-medium text-base hover:bg-gray-100 hover:text-[#2a9ca5] focus:outline-none focus:bg-gray-100 transition-colors"
//                                             >
//                                                 About the Conference
//                                             </Link>
//                                             <Link
//                                                 to="/scope"
//                                                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[#40C3CD] poppins-medium text-base hover:bg-gray-100 hover:text-[#2a9ca5] focus:outline-none focus:bg-gray-100 transition-colors"
//                                             >
//                                                 Scope of Conference
//                                             </Link>
//                                             <Link
//                                                 to="/organizing-committee"
//                                                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[#40C3CD] poppins-medium text-base hover:bg-gray-100 hover:text-[#2a9ca5] focus:outline-none focus:bg-gray-100 transition-colors"
//                                             >
//                                                 Organizing Committee
//                                             </Link>
//                                             <Link
//                                                 to="/editorial-board"
//                                                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[#40C3CD] poppins-medium text-base hover:bg-gray-100 hover:text-[#2a9ca5] focus:outline-none focus:bg-gray-100 transition-colors"
//                                             >
//                                                 Editorial Board
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Author's Desk Dropdown */}
//                                 <div className="hs-dropdown relative">
//                                     <button
//                                         type="button"
//                                         className="hs-dropdown-toggle p-2 flex items-center text-[#40C3CD] poppins-medium text-lg hover:text-[#2a9ca5] focus:outline-none focus:text-[#2a9ca5] transition-colors"
//                                         data-hs-dropdown="#authors-dropdown"
//                                     >
//                                         Author's Desk
//                                         <svg className="hs-dropdown-open:rotate-180 duration-300 shrink-0 size-4 ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <path d="m6 9 6 6 6-6"/>
//                                         </svg>
//                                     </button>

//                                     {/* Author's Desk Dropdown Menu */}
//                                     <div id="authors-dropdown" className="hs-dropdown-menu transition-[opacity,margin] duration-300 hs-dropdown-open:opacity-100 opacity-0 hidden z-[1100] absolute top-full left-0 mt-2 min-w-60 bg-white shadow-lg rounded-lg border border-gray-200">
//                                         <div className="p-2 space-y-1">
//                                             <Link
//                                                 to="/conference-tracks"
//                                                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[#40C3CD] poppins-medium text-base hover:bg-gray-100 hover:text-[#2a9ca5] focus:outline-none focus:bg-gray-100 transition-colors"
//                                             >
//                                                 Conference Tracks
//                                             </Link>
//                                             <Link
//                                                 to="/key-dates"
//                                                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[#40C3CD] poppins-medium text-base hover:bg-gray-100 hover:text-[#2a9ca5] focus:outline-none focus:bg-gray-100 transition-colors"
//                                             >
//                                                 Key Dates
//                                             </Link>
//                                             <Link
//                                                 to="/paper-submission"
//                                                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[#40C3CD] poppins-medium text-base hover:bg-gray-100 hover:text-[#2a9ca5] focus:outline-none focus:bg-gray-100 transition-colors"
//                                             >
//                                                 Paper Submission
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Contact Us Link */}
//                                 <Link className="p-2 flex items-center text-[#40C3CD] poppins-medium text-lg hover:text-[#2a9ca5] focus:outline-none focus:text-[#2a9ca5] transition-colors" to="/contact-us">
//                                     Contact Us
//                                 </Link>

//                             </div>
//                         </div>
//                     </nav>
//                 </div>
//             </header>
//         </>
//     );
// };

// export default Header;