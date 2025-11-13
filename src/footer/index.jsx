import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiFramer } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white w-full py-10 mt-auto shadow-inner">
            <div className="max-w-5xl mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-gray-200">

                    {/* Name & Title */}
                    <div className="text-center md:text-left">
                        <h2 className="text-gray-900 text-xl font-bold mb-1">Ashen Sam</h2>
                        <p className="text-gray-500 text-sm">Software Engineer | Full Stack Developer</p>
                    </div>



                    {/* Built With */}
                    <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                        <span className="text-gray-500 text-sm">Developed with:</span>
                        <div className="flex items-center gap-3 text-2xl mt-1 md:mt-0">
                            <FaReact className="text-[#61DAFB] hover:scale-110 transition-transform" />
                            <SiVite className="text-[#646CFF] hover:scale-110 transition-transform" />
                            <SiTailwindcss className="text-[#38BDF8] hover:scale-110 transition-transform" />
                            <SiFramer className="text-[#fbff03] hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Ashen Samarasekera. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
