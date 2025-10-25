import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-950 w-full py-8 mt-auto">
            <div className="max-w-5xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-blue-800">
                    {/* Left Section - Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-white text-xl font-bold mb-1">Ashen Sam</h2>
                        <p className="text-blue-200 text-sm">Software Engineer | Full Stack Developer</p>
                    </div>

                    {/* Center Section - Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Ashen-sam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-300 transition-colors text-2xl"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ashen-samarasekera-08354a249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-300 transition-colors text-2xl"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://wa.me/94774728548"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-300 transition-colors text-2xl"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>

                    {/* Right Section - Tech Stack */}
                    <div className="flex items-center gap-3">
                        <span className="text-blue-200 text-sm">Built with:</span>
                        <div className="flex items-center gap-2 text-white text-2xl">
                            <FaReact className="hover:text-blue-300 transition-colors" />
                            <BiLogoTailwindCss className="hover:text-blue-300 transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-6 text-center">
                    <p className="text-blue-200 text-sm">
                        © {currentYear} Ashen Samarasekera. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;