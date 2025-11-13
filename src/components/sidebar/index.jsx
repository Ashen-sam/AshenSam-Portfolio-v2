import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaFacebookF, FaFileDownload, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useTheme } from '../ThemeContext';
import { ThemeSwitcher } from '../ThemeSwitcher';
import resume from '../../../public/Ashen Samarasekera - Resume - Software Engineer .pdf'

export const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const { theme } = useTheme()

    const socialLinks = [
        { icon: <FaWhatsapp />, href: 'https://wa.me/0774728548', label: 'WhatsApp', color: 'hover:bg-green-500' },
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/profile.php?id=100078837497114', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/ashen-samarasekera-08354a249/', label: 'LinkedIn', color: 'hover:bg-blue-700' },
        { icon: <FaGithub />, href: 'https://github.com/Ashen-sam', label: 'GitHub', color: 'hover:bg-gray-800' },
        { icon: <HiMail />, href: 'mailto:iamashen27@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
    ];

    const handleDownload = () => {
        setIsDownloading(true);
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Ashen-Samarasekera-Resume.pdf';
        link.click();
        setTimeout(() => setIsDownloading(false), 600);
    };

    // Define the sidebar slide-in animation
    const sidebarVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
                duration: 0.8
            }
        }
    };

    return (
        <motion.div
            className="fixed left-0 top-1/3 -translate-y-1/2 z-50"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className={`bg-white shadow-lg rounded-r-2xl border border-gray-200 transition-all duration-300 ${isExpanded ? 'w-16' : 'w-14'}`}
            >
                {/* Social Links */}
                <div className="py-2">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center w-full py-3 text-gray-600 hover:text-white transition-all duration-300 ${link.color} group relative`}
                            aria-label={link.label}
                        >
                            <span className="text-lg">{link.icon}</span>
                            {!isExpanded && (
                                <span className="absolute left-full ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                                    {link.label}
                                </span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Download Resume Button */}
                <div className={`border-t border-gray-200 ${theme.primary} `}>
                    <motion.a
                        onClick={handleDownload}
                        className="flex items-center justify-center w-full py-3 text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300 rounded-br-2xl group relative cursor-pointer"
                        aria-label="Download Resume"
                        animate={isDownloading ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <FaFileDownload className='text-white' size={18} />
                        {!isExpanded && (
                            <span className="absolute left-full ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                                Download Resume
                            </span>
                        )}
                    </motion.a>
                </div>
                <div className='flex items-center w-full  border justify-center'>
                    <ThemeSwitcher />
                </div>
            </motion.div>
        </motion.div>
    );
};
