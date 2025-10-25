import { IoMdCloudDownload } from "react-icons/io";
import ProfileImage from '../../../public/20210109_160143-removebg-preview.png'
import ResumePDF from '../../../public/Ashen Samarasekera Resume Software Engineer.pdf'

const AboutMe = () => {
    // Using placeholder images since we can't import from public folder


    const handleDownloadResume = () => {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = ResumePDF;
        link.download = 'Ashen_Samarasekera_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="pt-24 pb-16 bg-[#fcfcfc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 hover:shadow-md transition-shadow">
                    {/* Header with Name */}
                    <div className="flex justify-center sm:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6  ">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-600 ">Ashen Samarasekera</h1>
                        <span className="text-2xl sm:text-3xl md:text-4xl">👋</span>
                    </div>

                    {/* Profile Image and Badges */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                            <img
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-blue-100 shadow-md"
                                src={ProfileImage}
                                alt="Ashen Samarasekera Profile Photo"
                            />
                        </div>

                        <div className="flex-1 pt-0 sm:pt-2 w-full">
                            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                <span className="px-3 sm:px-4 py-1.5 bg-blue-50 text-blue-900 rounded-full text-xs sm:text-sm font-medium border border-blue-100">
                                    Software Engineering Student
                                </span>
                                <span className="px-3 sm:px-4 py-1.5 bg-blue-50 text-blue-900 rounded-full text-xs sm:text-sm font-medium border border-blue-100">
                                    Cardiff Metropolitan University
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-4 sm:mb-6 text-center sm:text-left">
                        Hello, As an undergraduate student pursuing a BSc Degree in Software Engineering at ICBT Campus (offered by Cardiff Metropolitan University), I am passionate about web development and committed to contributing innovative solutions in the field. I am seeking opportunities to apply my skills and knowledge to real-world projects.
                    </p>

                    {/* Resume Button */}
                    <div className="flex justify-center sm:justify-start">
                        <button
                            onClick={handleDownloadResume}
                            className="bg-blue-900 flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-white text-sm sm:text-base font-medium hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto justify-center"
                        >
                            <span>Download Resume</span>
                            <IoMdCloudDownload className="text-lg sm:text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;