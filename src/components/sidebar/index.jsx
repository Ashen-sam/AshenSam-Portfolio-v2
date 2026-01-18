import { motion } from 'framer-motion';
import {
    FaBars,
    FaFacebookF,
    FaFileDownload,
    FaGithub,
    FaLinkedinIn,
    FaTimes
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useTheme } from '../ThemeContext';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { useSidebar } from '../hooks/useSidebar';

export const Sidebar = () => {
    const {
        handleDownload, isDownloading, isExpanded, sidebarVariants, toggleSidebar
    } = useSidebar();
    const { theme } = useTheme();

    const socialLinks = [
        { icon: <IoLogoWhatsapp />, href: 'https://wa.me/0774728548', label: 'WhatsApp', color: 'hover:bg-green-500' },
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/profile.php?id=100078837497114', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/ashen-samarasekera-08354a249/', label: 'LinkedIn', color: 'hover:bg-blue-700' },
        { icon: <FaGithub />, href: 'https://github.com/Ashen-sam', label: 'GitHub', color: 'hover:bg-gray-800' },
        { icon: <HiMail />, href: 'mailto:iamashen27@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
    ];

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="sm:hidden fixed top-14 right-4 z-[60] p-2 rounded-lg bg-white dark:bg-zinc-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
                {isExpanded ? <FaTimes className="text-gray-800 dark:text-gray-200 text-lg" /> : <FaBars className="text-gray-800 dark:text-gray-200 text-lg" />}
            </button>

            {/* Sidebar */}
            <motion.div
                className={`fixed left-0 top-1/4 -translate-y-1/2 z-50 transition-all duration-300 ${isExpanded ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
                    }`}
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className={`bg-white dark:bg-transparent/80 dark:border-zinc-800 shadow-lg rounded-r-2xl border border-gray-200 transition-all duration-300 ${isExpanded ? 'w-14' : 'w-0 sm:w-14'
                        } overflow-hidden`}
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
                                <span className="text-lg dark:text-gray-200">{link.icon}</span>
                                {!isExpanded && (
                                    <span className="absolute left-full ml-2 px-3 py-1.5 bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                                        {link.label}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>

                    <div className={`border-t border-gray-200 dark:border-gray-700 ${theme.primary}`}>
                        <motion.a
                            onClick={handleDownload}
                            className="flex items-center justify-center w-full py-3 text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300 rounded-br-2xl group relative cursor-pointer"
                            aria-label="Download Resume"
                            animate={isDownloading ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaFileDownload className="text-white" size={18} />
                            {!isExpanded && (
                                <span className="absolute left-full ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                                    Download Resume
                                </span>
                            )}
                        </motion.a>
                    </div>

                    <div className="flex items-center w-full border justify-center dark:bg-transparent/40 dark:border-zinc-800">
                        <ThemeSwitcher />
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};