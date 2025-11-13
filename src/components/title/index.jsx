import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProfileImage from "../../../public/IMG_6579-removebg-preview.png";
import ResumePDF from "../../../public/Ashen Samarasekera Resume Software Engineer.pdf";
import { useTheme } from "../ThemeContext";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { VscActivateBreakpoints } from "react-icons/vsc";

const AboutMe = () => {
    const [showQuotes, setShowQuotes] = useState(false);
    const { theme } = useTheme();

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = ResumePDF;
        link.download = "Ashen_Samarasekera_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Entrance animation for sections
    const jumpVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 12 },
        },
    };

    // Floating and glowing animations
    const floatingVariants = {
        animate: {
            y: [0, -10, 0, 10, 0],
            rotate: [0, 1, -1, 1, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const pulseVariants = () => ({
        animate: {
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    });

    const tags = [
        "✦ Web Development",
        "✦ Software Engineering",
        "✦ Innovation",
        "✦ Vibe Coding",
    ];

    return (
        <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.2 },
                },
            }}
        >
            {/* Greeting */}
            <motion.div
                className="bg-gray-700 w-[100px] p-2 text-white flex items-center justify-center rounded-t-lg"
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
                        className={`flex-shrink-0 rounded-2xl ${theme.primary}`}
                        variants={floatingVariants}
                        animate="animate"
                    >
                        <motion.div
                            className="rounded-2xl"
                            variants={pulseVariants}
                            animate="animate"
                        >
                            <img
                                className="w-34 h-32 rounded-2xl transform scale-110 object-cover "
                                src={ProfileImage}
                                alt="Ashen Samarasekera"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        className="flex-1 text-center sm:text-left"
                        variants={jumpVariants}
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-3">
                            Hey I'm{" "}
                            <span className={`${theme.secondary}`}>Ashen,</span>{" "}
                            <span className="text-xl font-medium text-gray-700 italic">
                                Software Engineer
                            </span>
                        </h1>
                        <motion.p
                            variants={jumpVariants}
                            className="text-base text-gray-600 leading-relaxed mb-4"
                        >
                            As an undergraduate student pursuing a BSc Degree in
                            Software Engineering, I am passionate about web
                            development and committed to contributing innovative
                            solutions in the field. I am seeking opportunities
                            to apply my skills and knowledge to real-world
                            projects.
                        </motion.p>

                        {/* Tags */}
                        <motion.div
                            className="flex flex-wrap justify-center sm:justify-start gap-2 items-center mb-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.15 },
                                },
                            }}
                        >
                            {tags.map((tag, index) => (
                                <motion.div
                                    key={index}
                                    className={`border  border-gray-200 px-2 bg-slate-50 shadow-sm py-1 text-xs rounded-lg`}
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeOut",
                                            },
                                        },
                                    }}
                                >
                                    {tag}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Toggle Button */}
            <div className="flex justify-center mt-4 cursor-pointer">
                <motion.div
                    animate={{
                        type: 'spring'
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowQuotes(!showQuotes)}
                    className="text-gray-700 text-2xl"
                >
                    {showQuotes ? <BiUpArrow /> : <BiDownArrow />}
                </motion.div>
            </div>

            {/* Animated Expand/Collapse Section */}
            <AnimatePresence initial={false}>
                {showQuotes && (
                    <motion.div
                        key="quotes"
                        initial={{ height: 0 }}
                        animate={{
                            height: "auto",
                            transition: {
                                type: "spring",
                                stiffness: 90,
                                damping: 15,
                            },
                        }}
                        exit={{
                            height: 0,
                            transition: {
                                type: "spring",
                                stiffness: 90,
                                damping: 20,
                            },
                        }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            className="mt-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.15 },
                                },
                            }}
                        >
                            {[
                                "I craft high-quality, user-focused interfaces that blend modern design with smooth functionality.",
                                "I’m committed to building clean, responsive, and visually engaging web experiences.",
                                "Every line of code I write aims to deliver performance, precision, and a seamless user journey.",
                                "My primary focus is front-end development — creating elegant, performant, and intuitive user interfaces.",
                            ].map((text, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { y: 30 },
                                        visible: {
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 14,
                                            },
                                        },
                                    }}
                                    className="bg-white flex rounded-lg  my-2 border border-gray-200 shadow-md p-4 hover:shadow-lg transition-all text-gray-800 text-sm leading-relaxed tracking-wide items-center gap-3"
                                >
                                    <div>
                                        <VscActivateBreakpoints className={`${theme.secondary} text-md`} />
                                    </div>
                                    <motion.span
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            visible: {
                                                transition: { staggerChildren: 0.05 },
                                            },
                                        }}
                                        className="inline-block"
                                    >
                                        {text.split(" ").map((word, idx) => (
                                            <motion.span
                                                key={idx}
                                                variants={{
                                                    hidden: { x: 20, opacity: 0 },
                                                    visible: {
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: { type: "spring", stiffness: 100, damping: 12 },
                                                    },
                                                }}
                                                className="inline-block mr-1"
                                            >
                                                {word}
                                            </motion.span>
                                        ))}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AboutMe;
