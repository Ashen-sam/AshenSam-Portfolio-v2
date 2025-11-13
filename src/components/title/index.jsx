import { motion } from "framer-motion";
import { useState } from "react";
import ProfileImage from '../../../public/20210109_160143-removebg-preview.png';
import ResumePDF from '../../../public/Ashen Samarasekera Resume Software Engineer.pdf';
import { useTheme } from "../ThemeContext";

const AboutMe = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { theme } = useTheme()

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = ResumePDF;
        link.download = 'Ashen_Samarasekera_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Framer Motion variants for smooth jump from top
    const jumpVariants = {
        hidden: { y: -300 }, // start 100px above
        visible: {
            y: 0,              // end at normal position
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0, 10, 0], // Moves up and down
            rotate: [0, 1, -1, 1, 0], // Slight rotation for subtle motion
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const pulseVariants = {
        animate: {
            boxShadow: [
                "1px 0 0px rgba(255,165,0,0.4)",
                "1px 2px 20px rgba(255,165,0,0.6)",
                "1px 2px 0px rgba(255,165,0,0.4)",
            ],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 "
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.2, // jump one by one
                    }
                }
            }}
        >
            {/* "Hi Friends" Section */}
            <motion.div
                className="bg-gray-800 w-[100px] p-2 text-white flex items-center justify-center rounded-t-lg "
                variants={jumpVariants}
            >
                Hi There
            </motion.div>

            {/* Profile Card */}
            <motion.div
                className="bg-white rounded-2xl rounded-tl-none border border-gray-200 shadow-sm p-8 pb-0"
                variants={jumpVariants}
            >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 h-max">
                    {/* Profile Image */}
                    <motion.div
                        className="flex-shrink-0 rounded-2xl"
                        variants={floatingVariants}
                        animate="animate"
                    >
                        <motion.div
                            className="rounded-2xl"
                            variants={pulseVariants}
                            animate="animate"
                        >
                            <img
                                className="w-32 h-32 rounded-2xl object-cover"
                                src={ProfileImage}
                                alt="Ashen Samarasekera"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        className="flex-1 text-center sm:text-left"
                        variants={jumpVariants}
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            Hey I'm <span className={`${theme.secondary}`}>Ashen,</span>  Software Engineer
                        </h1>
                        <motion.p variants={jumpVariants} className="text-base text-gray-600 leading-relaxed mb-4">
                            As an undergraduate student pursuing a BSc Degree in Software Engineering, I am passionate about web development and committed to contributing innovative solutions in the field. I am seeking opportunities to apply my skills and knowledge to real-world projects.
                        </motion.p>

                        {/* Tags */}
                        <motion.div
                            className="flex flex-wrap justify-center sm:justify-start gap-2 items-center mb-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.15 } // each tag animates one after another
                                }
                            }}
                        >
                            {[
                                "✦", "Web Development", "✦", "Software Engineering", "✦", "Innovation", "✦", "Vibe Coding"
                            ].map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className={`text-sm ${tag === "✦" ? "text-gray-400" : "text-gray-700"}`}
                                    variants={{
                                        hidden: { x: -50, opacity: 0 }, // start slightly left and invisible
                                        visible: {
                                            x: 0, // slide to natural position
                                            opacity: 1,
                                            transition: { duration: 0.5, ease: "easeOut" } // smooth slow movement
                                        }
                                    }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>


                        {/* Download Button */}
                        {/* <div className="flex justify-center sm:justify-start">
                            <motion.button
                                onClick={handleDownloadResume}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variants={jumpVariants}
                            >
                                <span>Download Resume</span>
                                <IoMdCloudDownload className={`text-xl transition-transform duration-300 ${isHovered ? 'translate-y-1' : ''}`} />
                            </motion.button>
                        </div> */}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default AboutMe;
