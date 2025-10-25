import { IoMdCloudDownload } from "react-icons/io";
import logoPic from '/public/20210109_160143-removebg-preview.png'
import resumepdf from '/public/ASHEN SAMARASEKERA  RESUME SE.pdf'

const AboutMe = () => {
    // Update this path to match your resume file location
    const profileImage = "/public/20210109_160143-removebg-preview.png";
    const resumePath = "public/ASHEN SAMARASEKERA  RESUME SE.pdf"; // Place your resume.pdf in the public folder

    const handleDownloadResume = () => {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = resumepdf;
        link.download = 'Ashen_Samarasekera_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="pt-24 pb-16 bg-[#fcfcfc]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
                    {/* Header with Name */}
                    <div className="flex items-start gap-3 mb-6">
                        <h1 className="text-5xl font-bold text-slate-600">Ashen Samarasekera</h1>
                        <span className="text-4xl">👋</span>
                    </div>

                    {/* Profile Image and Badges */}
                    <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                            <img
                                className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow-md"
                                src={logoPic}
                                alt="Ashen Samarasekera Profile Photo"
                            />
                        </div>

                        <div className="flex-1 pt-2">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-1.5 bg-blue-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100">
                                    Software Engineering Student
                                </span>
                                <span className="px-4 py-1.5 bg-blue-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100">
                                    Cardiff Metropolitan University
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-gray-700 mb-6">
                        Hello, As an undergraduate student pursuing a BSc Degree in Software Engineering at ICBT Campus (offered by Cardiff Metropolitan University), I am passionate about web development and committed to contributing innovative solutions in the field. I am seeking opportunities to apply my skills and knowledge to real-world projects.
                    </p>

                    {/* Resume Button */}
                    <button
                        onClick={handleDownloadResume}
                        className="bg-blue-900 flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:scale-105"
                    >
                        <span>Download Resume</span>
                        <IoMdCloudDownload className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;