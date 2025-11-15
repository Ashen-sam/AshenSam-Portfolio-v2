import { AnimatePresence, motion } from "framer-motion";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { VscActivateBreakpoints } from "react-icons/vsc";
import ProfileImage from "../../../public/IMG_6579-removebg-preview.png";
import { useTheme } from "../ThemeContext";
import { UseTitle } from "../hooks/useTitle";

const AboutMe = () => {
    const { theme } = useTheme();
    const { floatingVariants, jumpVariants, pulseVariants, tags, setShowQuotes, showQuotes } = UseTitle()
    const stats = [
        { label: "Age", value: 24 },
        { label: "Projects(Pe & Ac)", value: "15" },
        { label: "Industry Experience", value: "1y" },
        { label: "Development Experience", value: "2" },
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
            <motion.div
                className="bg-gray-700  w-[100px] p-2 dark:bg-gray-800 text-white flex items-center justify-center rounded-t-lg"
                variants={jumpVariants}
            >
                Hi There
            </motion.div>

            <motion.div
                className="bg-white dark:border-gray-800 dark:bg-transparent/40 rounded-2xl rounded-tl-none border border-zinc-200  shadow-sm p-8 pb-0"
                variants={jumpVariants}
            >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 h-max">
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

                    <motion.div
                        className="flex-1 text-center sm:text-left"
                        variants={jumpVariants}
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold dark:text-gray-100 text-gray-700 mb-3">
                            Hey I'm{" "}
                            <span className={`${theme.secondary}`}>Ashen,</span>{" "}
                            <span className="text-xl font-medium dark:text-gray-100 text-gray-700 italic">
                                Software Engineer
                            </span>
                        </h1>
                        <motion.p
                            variants={jumpVariants}
                            className="text-[14px] dark:text-gray-200 text-gray-600 leading-relaxed mb-4"
                        >
                            As an undergraduate pursuing a BSc in Software Engineering, I am passionate about web development and driven to deliver innovative, high-quality solutions. I am eager to leverage my technical expertise and problem-solving skills to contribute to impactful, real-world projects, while continuously expanding my knowledge and professional experience in the field.
                        </motion.p>

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
                                    className={`border  border-gray-200 px-2 bg-slate-50 dark:bg-zinc-800 dark:border-neutral-700 dark:text-gray-100 shadow-sm py-1 text-xs rounded-lg`}
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

            <div className="flex justify-center mt-4 cursor-pointer">
                <motion.div
                    animate={{
                        type: 'spring'
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowQuotes(!showQuotes)}
                    className="text-gray-700 dark:text-gray-300 text-2xl"
                >
                    {showQuotes ? <BiUpArrow /> : <BiDownArrow />}
                </motion.div>
            </div>

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
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={` rounded-2xl p-6 text-center ${theme.secondary}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className={`sm:text-6xl text-4xl font-bold text-[${theme.secondary}]`}>
                                        {stat.value == "15" ? (
                                            <div className="flex items-center justify-center">
                                                <div>15</div>
                                                <motion.div
                                                    initial={{ rotate: 0 }}
                                                    animate={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 1.5,
                                                        ease: "easeInOut",
                                                    }}
                                                    className="inline-block ml-1"
                                                >
                                                    +
                                                </motion.div>
                                            </div>
                                        ) : stat.value == 2 ? (
                                            <div className="flex items-center justify-center">
                                                <div>2</div>
                                                <motion.div
                                                    initial={{ rotate: 0 }}
                                                    animate={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 1.5,
                                                        ease: "easeInOut",
                                                    }}
                                                    className="inline-block ml-1"
                                                >
                                                    +
                                                </motion.div>
                                            </div>
                                        ) : (
                                            stat.value
                                        )}

                                    </div>
                                    <div className="text-gray-600 dark:text-gray-200 mt-2 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            className="mt-2"
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
                                    className="bg-white dark:border-gray-800 dark:bg-transparent/35 dark:text-gray-100  flex rounded-lg  my-2 border border-gray-200 shadow-md p-4 hover:shadow-lg transition-all text-gray-800 text-sm leading-relaxed tracking-wide items-center gap-3"
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
