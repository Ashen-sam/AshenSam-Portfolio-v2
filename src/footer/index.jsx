import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useTheme } from "../components/ThemeContext";
import { TechIcons } from './../components/TechIcons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { theme } = useTheme();

    const leftVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 70, damping: 12, duration: 0.6 },
        },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 70, damping: 12, duration: 0.6 },
        },
    };

    return (
        <motion.footer
            className=" dark:bg-transparent w-full py-10 mt-auto "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6  dark:border-gray-700 border-gray-200">
                    <motion.div
                        className="text-center md:text-left"
                        variants={leftVariants}
                    >
                        <h2 className="text-gray-700 dark:text-gray-200 text-xl font-bold mb-1">
                            <span className="text-sm font-medium">Developed by :</span>{" "}
                            <span className={`${theme.secondary}`}>Ashen</span>{" "}
                            <span>Sam</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">
                            Software Engineer | Developer
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left"
                        variants={rightVariants}
                    >
                        <span className="text-gray-500 dark:text-gray-300 text-sm">Developed with:</span>
                        <div className="flex items-center gap-3 text-2xl mt-1 md:mt-0">
                            <FaReact className="text-[#61DAFB] hover:scale-110 transition-transform" />
                            <div className="w-6">
                                {TechIcons[2].svg}
                            </div>
                            <SiTailwindcss className="text-[#38BDF8] hover:scale-110 transition-transform" />
                            <div className="w-6">
                                {TechIcons[19].svg}
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </motion.footer>
    );
};

export default Footer;
