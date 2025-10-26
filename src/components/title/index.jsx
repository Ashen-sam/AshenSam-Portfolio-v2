import { IoMdCloudDownload } from "react-icons/io";
import { useState } from "react";
import ProfileImage from '../../../public/20210109_160143-removebg-preview.png'
import ResumePDF from '../../../public/Ashen Samarasekera Resume Software Engineer.pdf'
import logoUni from '../../../public/images.png'
import companyLogo from '../../../public/download.png';

const AboutMe = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Placeholder data for demo


    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = ResumePDF;
        link.download = 'Ashen_Samarasekera_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className=" pt-24 pb-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Card */}
                <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden transition-all duration-500 ">
                    {/* Blue Header Section */}
                    <div className=" back_image h-32 relative"></div>

                    {/* Content Section */}
                    <div className="px-6 sm:px-8 md:px-12 pb-8 relative">
                        {/* Profile Image - Overlapping header */}
                        <div className="flex justify-center sm:justify-start -mt-16 mb-6 animate-slideInLeft">
                            <div className="relative">
                                <img
                                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg transform transition-transform duration-500 hover:scale-105"
                                    src={ProfileImage}
                                    alt="Ashen Samarasekera Profile Photo"
                                />
                                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                        </div>

                        {/* Name and Title */}
                        <div className="text-center sm:text-left mb-6 animate-fadeIn">
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-2">
                                Ashen Samarasekera
                            </h1>
                            <p className="text-lg text-gray-600 font-medium">
                                Software Engineering Student
                            </p>
                        </div>

                        {/* Info Cards Grid */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6 animate-slideInRight">
                            <div className=" border border-blue-200 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10  rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-lg"><img src={logoUni} alt="University Logo" width={40} height={20} /></span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600 font-medium mb-1">University</p>
                                        <p className="text-sm text-gray-900 font-semibold">Cardiff Metropolitan University</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" border border-blue-200 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-lg"><img src={companyLogo} alt="Campus Logo" width={40} height={20} /></span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600 font-medium mb-1">Experience</p>
                                        <p className="text-sm text-gray-900 font-semibold">Former Software Engineer Intern</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="mb-6 animate-fadeInDelay">
                            <h2 className="text-md font-bold text-gray-700 mb-3 flex items-center gap-2">
                                <div className="w-1 h-6 bg-blue-600 rounded"></div>
                                About Me
                            </h2>
                            <p className="text-gray-700 text-md leading-relaxed">
                                As an undergraduate student pursuing a BSc Degree in Software Engineering, I am passionate about web development and committed to contributing innovative solutions in the field. I am seeking opportunities to apply my skills and knowledge to real-world projects.
                            </p>
                        </div>

                        {/* Skills Tags */}
                        <div className="mb-8 animate-fadeInDelay">
                            <h2 className="text-md font-bold text-gray-700 mb-3 flex items-center gap-2">
                                <div className="w-1 h-6 bg-blue-600 rounded"></div>
                                Interests
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-2 bg-white text-blue-700 border-2 border-blue-600 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                    Web Development
                                </span>
                                <span className="px-3 py-2 bg-white text-blue-700 border-2 border-blue-600 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                    Software Engineering
                                </span>
                                <span className="px-3 py-2 bg-white text-blue-700 border-2 border-blue-600 rounded-lg text-xs font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                    Innovation
                                </span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-center sm:justify-start animate-slideUp">
                            <button
                                onClick={handleDownloadResume}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="bg-blue-600 text-sm flex items-center gap-3 px-3 py-3 rounded-lg text-white  font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
                            >
                                <span>Download Resume</span>
                                <IoMdCloudDownload className={`text-2xl transition-transform duration-300 ${isHovered ? 'translate-y-1' : ''}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInDelay {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out;
                }

                .animate-fadeInDelay {
                    animation: fadeInDelay 0.8s ease-out 0.4s backwards;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out 0.2s backwards;
                }

                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out 0.3s backwards;
                }

                .animate-slideUp {
                    animation: slideUp 0.8s ease-out 0.5s backwards;
                }
            `}</style>
        </div>
    );
}

export default AboutMe;