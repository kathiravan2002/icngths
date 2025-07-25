import React, { useState } from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiUploadCloud } from 'react-icons/fi'
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Papersubmission() {
    const [fileName, setFileName] = useState('Choose Your File');

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus('Sending...');

    //     try {
    //         const formDataToSend = new FormData();
    //         formDataToSend.append('Paper_Title', formData.Paper_Title);
    //         formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
    //         formDataToSend.append('Email_Address', formData.Email_Address);
    //         formDataToSend.append('Institution_Name', formData.Institution_Name);
    //         formDataToSend.append('Paper_Track', formData.Paper_Track);

    //         if (formData.Paper_File) {
    //             formDataToSend.append('Paper_File', formData.Paper_File);
    //         }

    //         const response = await fetch('http://192.168.1.16/icngths/mail.php', {
    //             method: 'POST',
    //             body: formDataToSend,
    //         });

    //         if (response.ok) {
    //             const result = await response.text();
    //             setStatus(result);
    //             setFormData({
    //                 Paper_Title: '',
    //                 Author_FUll_Name: '',
    //                 Email_Address: '',
    //                 Institution_Name: '',
    //                 Paper_Track: '',
    //                 Paper_File: null,
    //             });
    //             // document.getElementById('Paper_File').value = '';
    //             toast.success("Paper submitted successfully!");
    //         } else {
    //             setStatus('Failed to send submission. Please try again.');
    //             toast.error('Failed to send submission. Please try again.');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         setStatus('An error occurred. Please try again.');
    //         toast.error('An error occurred. Please try again.');
    //     }
    // };




const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const journalName = 'icngths';

    
    try {
        const formDataToSend = new FormData();
        formDataToSend.append('Paper_Title', formData.Paper_Title);
        formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
        formDataToSend.append('Email_Address', formData.Email_Address);
        formDataToSend.append('Institution_Name', formData.Institution_Name);
        formDataToSend.append('Paper_Track', formData.Paper_Track);
        
        if (formData.Paper_File) {
            formDataToSend.append('Paper_File', formData.Paper_File);
        }

        const googleSheetsParams = new URLSearchParams();
        googleSheetsParams.append('journal_name', journalName); // Add journal name
        googleSheetsParams.append('Paper_Title', formData.Paper_Title);
        googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
        googleSheetsParams.append('Email_Address', formData.Email_Address);
        googleSheetsParams.append('Institution_Name', formData.Institution_Name);
        googleSheetsParams.append('Paper_Track', formData.Paper_Track);

        const mailPromise = fetch('https://icngths.com/api/mail.php', {
            method: 'POST',
            body: formDataToSend,
        });

        const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: googleSheetsParams.toString(),
        });

        const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

        const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
        const sheetsSuccess = sheetsResponse.status === 'fulfilled';
        
        if (sheetsResponse.status === 'rejected') {
            console.error('Sheets request failed:', sheetsResponse.reason);
        }

        if (mailSuccess && sheetsSuccess) {
            setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}).`);
            
            setFormData({
                Paper_Title: '',
                Author_FUll_Name: '',
                Email_Address: '',
                Institution_Name: '',
                Paper_Track: '',
                Paper_File: null,
            });
      const fileInput = document.getElementById('Paper_File');
             if (fileInput) {
                 fileInput.value = '';
             } else {
                 console.error('Element with ID "Paper_File" not found.');
             }
             toast.success("Paper submitted successfully!");
            
        } else if (mailSuccess && !sheetsSuccess) {
            setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
            toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');
            
        } else if (!mailSuccess && sheetsSuccess) {
            setStatus('Data likely saved to Google Sheets, but failed to send email.');
            toast.warning('Data might be saved to Google Sheets, but failed to send email.');
            
        } else {
            setStatus('There might be issues with the submission. Please check manually.');
            toast.error('Submission completed, but please verify the results manually.');
        }

    } catch (error) {
        console.error('Error:', error);
        setStatus('An error occurred during submission. Please try again.');
        toast.error('An error occurred. Please try again.');
    }
};
// document.addEventListener('DOMContentLoaded', () => {
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('Sending...');

//         const journalName = 'icngths';

//         try {
//             console.log('Form Data:', formData);

//             const formDataToSend = new FormData();
//             formDataToSend.append('Paper_Title', formData.Paper_Title);
//             formDataToSend.append('Author_Full_Name', formData.Author_Full_Name);
//             formDataToSend.append('Email_Address', formData.Email_Address);
//             formDataToSend.append('Institution_Name', formData.Institution_Name);
//             formDataToSend.append('Paper_Track', formData.Paper_Track);

//             if (formData.Paper_File) {
//                 formDataToSend.append('Paper_File', formData.Paper_File);
//             }

//             const googleSheetsParams = new URLSearchParams();
//             googleSheetsParams.append('journal_name', journalName);
//             googleSheetsParams.append('Paper_Title', formData.Paper_Title);
//             googleSheetsParams.append('Author_Full_Name', formData.Author_Full_Name);
//             googleSheetsParams.append('Email_Address', formData.Email_Address);
//             googleSheetsParams.append('Institution_Name', formData.Institution_Name);
//             googleSheetsParams.append('Paper_Track', formData.Paper_Track);

//             const mailPromise = fetch('http://192.168.1.16/icngths/mail.php', {
//                 method: 'POST',
//                 body: formDataToSend,
//             }).catch(error => {
//                 console.error('Mail Fetch Error:', error);
//                 return Promise.reject(error);
//             });

//             const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//                 body: googleSheetsParams.toString(),
//             }).catch(error => {
//                 console.error('Sheets Fetch Error:', error);
//                 return Promise.reject(error);
//             });

//             const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

//             console.log('Mail Response:', mailResponse);
//             console.log('Sheets Response:', sheetsResponse);

//             const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
//             const sheetsSuccess = sheetsResponse.status === 'fulfilled' && sheetsResponse.value.ok;

//             if (sheetsResponse.status === 'rejected') {
//                 console.error('Sheets request failed:', sheetsResponse.reason);
//             }

//             if (mailSuccess && sheetsSuccess) {
//                 setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}).`);
//                 setFormData({
//                     Paper_Title: '',
//                     Author_Full_Name: '',
//                     Email_Address: '',
//                     Institution_Name: '',
//                     Paper_Track: '',
//                     Paper_File: null,
//                 });
//                 const fileInput = document.getElementById('Paper_File');
//                 if (fileInput) {
//                     fileInput.value = '';
//                 } else {
//                     console.error('Element with ID "Paper_File" not found.');
//                 }
//                 toast.success("Paper submitted successfully!");
//             } else if (mailSuccess && !sheetsSuccess) {
//                 setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
//                 toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');
//                 setFormData({
//                     Paper_Title: '',
//                     Author_Full_Name: '',
//                     Email_Address: '',
//                     Institution_Name: '',
//                     Paper_Track: '',
//                     Paper_File: null,
//                 });
//                 const fileInput = document.getElementById('Paper_File');
//                 if (fileInput) {
//                     fileInput.value = '';
//                 }
//             } else if (!mailSuccess && sheetsSuccess) {
//                 setStatus('Data likely saved to Google Sheets, but failed to send email.');
//                 toast.warning('Data might be saved to Google Sheets, but failed to send email.');
//                 setFormData({
//                     Paper_Title: '',
//                     Author_Full_Name: '',
//                     Email_Address: '',
//                     Institution_Name: '',
//                     Paper_Track: '',
//                     Paper_File: null,
//                 });
//                 const fileInput = document.getElementById('Paper_File');
//                 if (fileInput) {
//                     fileInput.value = '';
//                 }
//             } else {
//                 setStatus('There might be issues with the submission. Please check manually.');
//                 toast.error('Submission completed, but please verify the results manually.');
//             }
//         } catch (error) {
//             console.error('Submission Error:', error.message, error.stack);
//             setStatus('An error occurred during submission. Please try again.');
//             toast.error('An error occurred. Please try again.');
//         }
//     };

//     // Assuming this is attached to a form submit event
//     const form = document.querySelector('form');
//     if (form) {
//         form.addEventListener('submit', handleSubmit);
//     } else {
//         console.error('Form element not found.');
//     }
// });



    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero3.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-60 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white mt-10">Paper Submission</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#40C3CD] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#40C3CD] "><span className="text-white">/ </span>Paper Submission</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#40C3CD] text-center lg:mt-15 mt-10">Paper Submission</h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85"><span className="inter-bold">The International Conference on Next-Gen Technologies in Healthcare and Security </span>invites original research papers, case studies, and technical articles that contribute to the advancement of healthcare innovation and digital security. Authors are encouraged to submit high-quality, unpublished work that aligns with the conference themes and tracks. All submissions will undergo a rigorous peer-review process to ensure academic integrity and relevance. Accepted papers will be published in the official conference proceedings and considered for indexing or journal special issues. Please follow the submission guidelines carefully to ensure a smooth review process.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col max-w-[1400px] mx-auto px-4 2xl:px-0  mt-10 ">
                <div className="flex-45  px-5   shadow-[0_0_8px_rgba(0,0,0,0.15)] lg:rounded-tl-[25px] lg:rounded-bl-[25px] rounded-tl-[25px] rounded-bl-[0px] rounded-tr-[25px] rounded-br-[0px] lg:rounded-tr-[0px] lg:rounded-br-[0px]" >
                    <div className="flex h-full flex-col gap-10   py-10 lg:py-10" >
                        <div className="flex flex-col gap-10 ">

                            <div className="space-y-3 flex flex-col justify-center md:px-2 px-0  ">
                                <h2 className="text-[#40C3CD] namdhinggo-extrabold lg:text-2xl text-2xl text-center" >Paper Submission</h2>

                                <div className="mt-2 space-y-5 text-justify ">
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Provide a clear title accurately describing your research paper content.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Enter the full name of the first author as written.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Submit a valid mobile number with correct country code included.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Provide an active email address for updates and communication.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Mention the first author’s current institutional affiliation and department.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Upload your paper in PDF or DOC format under 5MB.</p></div>

                                </div>

                            </div>
                            <div className="space-y-3 flex flex-col justify-center md:px-2 px-0  ">
                                <h2 className="text-[#40C3CD] namdhinggo-extrabold lg:text-2xl text-2xl text-center" >Important Notes</h2>

                                <div className="mt-2 space-y-5 text-justify ">
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Submit only original research papers that have not been published.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Any form of plagiarism will result in immediate paper rejection.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Follow the prescribed formatting guidelines for final paper submission.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Only presented papers will be included in conference proceedings.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Late submissions will not be considered for review or publication.</p></div>
                                    <div className="flex gap-3"> <TbPointFilled className=" text-[35px] text-[#40C3CD] flex shrink-0  -mt-1.5" /> <p className="inter-regular opacity-85 text-[16px] ">Paper must not be under review in any other event.</p></div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex-50  ">
                    <div className=' bg-[#24a7b1] h-full   lg:rounded-tr-[25px] lg:rounded-br-[25px] rounded-tr-[0px] rounded-br-[25px] lg:rounded-tl-[0px] lg:rounded-bl-[0px]  rounded-tl-[0px] rounded-bl-[25px] '>


                        <div className="max-w-[55rem]  mx-auto py-10 lg:px-10 px-2  flex flex-col  ">

                            <div>
                                <p className="namdhinggo-extrabold text-[24px] text-white mt-3 text-center">Submit Your Paper</p>
                            </div>


                            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 2xl:mt-10 xl:mt-5 lg:mt-10 mt-10 px-4  " >
                                <div className="flex flex-col col-span-1 sm:col-span-2 md:col-span-2">
                                    <input
                                        type="text"
                                        name='Paper_Title'
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-gray-200"
                                        placeholder="Enter Your Paper Title"
                                        required
                                        value={formData.Paper_Title}
                                        onChange={handleFileInputChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-1 sm:col-span-2 md:col-span-2">
                                    <input
                                        type="text"
                                        name='Institution_Name'
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-gray-200"
                                        placeholder="Enter Your Institution Name"
                                        required
                                        value={formData.Institution_Name}
                                        onChange={handleFileInputChange}
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <input
                                        type="text"
                                        name='Author_FUll_Name'
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-gray-200"
                                        placeholder="Enter Author’s Full Name"
                                        required
                                        value={formData.Author_FUll_Name}
                                        onChange={handleFileInputChange}
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <input
                                        type="text"
                                        name='Email_Address'
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px] focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-gray-200"
                                        placeholder="Enter  Author’s Email"

                                        value={formData.Email_Address}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col col-span-1 sm:col-span-2 md:col-span-2">
                                    <select
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px] focus:ring-2 focus:outline-none focus:ring-[#40C3CD] border border-[#40C3CD] text-gray-500"
                                        required
                                        name='Paper_Track'
                                        value={formData.Paper_Track} onChange={handleFileInputChange}
                                    >
                                        <option value=""  >Select Your Category</option>
                                        <option value="AI">AI</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Data Science">Data Science</option>
                                    </select>
                                </div>
                                <div className="relative w-full bg-gray-50 rounded-xl py-10 col-span-1 sm:col-span-2 md:col-span-2 flex flex-col items-center justify-center text-center text-gray-500 overflow-hidden cursor-pointer">
                                    <input
                                        name='Paper_File'
                                        accept=".pdf,.doc,.docx"
                                        type="file"
                                        onChange={handleFileInputChange}

                                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                    />
                                    <FiUploadCloud className="text-3xl text-[#40C3CD] mb-2 z-0" />
                                    <p className="z-0">{fileName || "Click to Upload Paper"}</p>
                                </div>
                                <div className="namdhinggo-extrabold text-[20px] flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-2">
                                    <button className="cursor-pointer text-[#40C3CD] px-4 bg-white p-2 rounded-lg transition-all duration-300 hover:border-4 hover:border-[#40C3CD] border-white  border-4 ">
                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}

                                    </button>
                                </div>
                            </form>
                        </div>
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

export default Papersubmission