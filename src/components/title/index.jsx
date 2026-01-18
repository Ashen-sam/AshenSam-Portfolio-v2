import { motion } from "framer-motion";
import { FaArrowRight, FaJava } from "react-icons/fa";
import {
    SiAzuredevops,
    SiCss3,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMui,
    SiNextdotjs,
    SiPostman,
    SiReact,
    SiRedux,
    SiShadcnui,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel
} from "react-icons/si";
import { VscActivateBreakpoints } from "react-icons/vsc";
import ProfileImage from "../../../public/IMG_6579-removebg-preview.png";
import companyLogo from '../../../public/download-removebg-preview.png';
import companyLogo2 from '../../../public/cropped-favicon-192x192.png';
import { useTheme } from "../ThemeContext";
import { UseTitle } from "../hooks/useTitle";
import { projects } from "../projects";

const AboutMe = () => {
    const { theme } = useTheme();
    const { floatingVariants, tags, } = UseTitle()
    const stats = [
        { label: "Age", value: "24y" },
        { label: "Projects", value: "15+" },
        { label: "Industry Experience", value: "1y+" },
        { label: "Development Experience", value: "2y+" },
    ];

    const highlights = [
        "I craft high-quality, user-focused interfaces that blend modern design with smooth functionality.",
        "I'm committed to building clean, responsive, and visually engaging web experiences.",
        "Every line of code I write aims to deliver performance, precision, and a seamless user journey.",
        "My primary focus is front-end development — creating elegant, performant, and intuitive user interfaces.",
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Ashen Samarasekera
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Software Engineer based in Colombo
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Available for remote-friendly short-term freelance work
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-transparent sm:hidden block mb-4 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800"
            >
                <div className="flex items-center gap-4 mb-4">
                    <motion.div
                        className={`flex-shrink-0 ${theme.primary} rounded-full`}
                        variants={floatingVariants}
                        animate="animate"
                    >
                        <img
                            className="w-20 h-20 rounded-2xl object-cover"
                            src={ProfileImage}
                            alt="Ashen Samarasekera"
                        />
                    </motion.div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Hi There!</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            I'm Ashen, <span className="italic">Software Engineer</span>
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    As an Associate Software Engineer, I am passionate about web development and committed to delivering innovative, high quality solutions. I am eager to apply my technical expertise and problem solving abilities to contribute to impactful real world projects.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="bg-white dark:bg-transparent p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-transparent p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800"
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">What I Do</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 flex items-center gap-2">
                                    <VscActivateBreakpoints className={`${theme.secondary}`} />
                                    Full Stack Development
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Building scalable web applications using modern technologies like React, Vue.js, Node.js, and TypeScript with focus on performance and user experience.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 flex items-center gap-2">
                                    <VscActivateBreakpoints className={`${theme.secondary}`} />
                                    Frontend Expertise
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Creating responsive, accessible interfaces with React, Next.js, and modern CSS frameworks while maintaining clean, maintainable code.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-transparent p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800"
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Skills</h2>
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex gap-3"
                                animate={{
                                    x: [0, -800],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 20,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {[...Array(3)].map((_, repeatIndex) => (
                                    <div key={repeatIndex} className="flex gap-3 flex-shrink-0">
                                        {tags.slice(0, 8).map((tag, index) => (
                                            <div key={`${index}-${repeatIndex}`} className="flex items-center gap-2 flex-shrink-0">
                                                <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">{tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white dark:bg-transparent p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800"
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Experience</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 ">
                                <div className="bg-white rounded-xl">
                                    <img src={companyLogo2} width={50} alt="asd" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Associate Software Engineer</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Omak Pvt Ltd</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">January 2026 - Present</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Node, Express, Vue js(2), Couch DB, Azure, Bit bucket</p>

                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white rounded-xl">
                                    <img src={companyLogo} width={50} alt="asd" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Software Engineer Intern</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Expernetic Pvt Ltd</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">May 2024 - May 2025</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">React, Redux, RTK query, Redux, Azure Devops, Next js</p>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-transparent sm:block hidden p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <motion.div
                                className={`flex-shrink-0 ${theme.primary} rounded-full`}
                                variants={floatingVariants}
                                animate="animate"
                            >
                                <img
                                    className="w-20 h-20 rounded-2xl object-cover"
                                    src={ProfileImage}
                                    alt="Ashen Samarasekera"
                                />
                            </motion.div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Hi There!</h2>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    I'm Ashen, <span className="italic">Software Engineer</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            As an Associate Software Engineer, I am passionate about web development and committed to delivering innovative, high quality solutions. I am eager to apply my technical expertise and problem solving abilities to contribute to impactful real world projects.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white dark:bg-transparent p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800"
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Technologies</h2>
                        <div className="overflow-hidden mb-4">
                            <motion.div
                                className="flex gap-6"
                                animate={{
                                    x: [0, -1000],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 30,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {[...Array(3)].map((_, repeatIndex) => (
                                    <div key={repeatIndex} className="flex gap-6 flex-shrink-0">
                                        <SiReact className="text-xl" color="#61DAFB" />
                                        <SiTypescript className="text-xl" color="#3178C6" />
                                        <SiTailwindcss className="text-xl" color="#38B2AC" />
                                        <SiRedux className="text-xl" color="#764ABC" />
                                        <SiSupabase className="text-xl" color="#3ECF8E" />
                                        <SiShadcnui className="text-xl dark:text-gray-100 text-[#000000]" />
                                        <SiJavascript className="text-xl" color="#F7DF1E" />
                                        <SiHtml5 className="text-xl" color="#E34F26" />
                                        <SiCss3 className="text-xl" color="#1572B6" />
                                        <SiPostman className="text-xl" color="#FF6C37" />
                                        <FaJava className="text-xl" color="#007396" />
                                        <SiNextdotjs className="text-xl dark:text-gray-100 text-[#000000]" />
                                        <SiMui className="text-xl" color="#007FFF" />
                                        <SiGithub className="text-xl" color="#764ABC" />
                                        <SiAzuredevops className="text-xl" color="#007FFF" />
                                        <SiVercel className="text-xl dark:text-gray-100 text-[#000000]" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-transparent pt-6 px-6 pb-[8.5px] rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800"
                    >
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Highlights</h2>
                        <div className="space-y-3">
                            {highlights.map((text, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                                >
                                    <VscActivateBreakpoints className={`${theme.secondary} mt-1 flex-shrink-0`} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-transparent my-6 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800"
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Projects</h2>
                    <span className="text-xs text-gray-500 dark:text-gray-400">15+ completed</span>
                </div>
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-3"
                        animate={{
                            x: [0, -1000],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                        style={{ cursor: "grab" }}
                        drag="x"
                        dragConstraints={{ left: -1000, right: 0 }}
                    >
                        {[...Array(3)].map((_, repeatIndex) => (
                            <div key={repeatIndex} className="flex gap-3 flex-shrink-0">
                                {projects.slice(0, 5).map((project) => (
                                    <motion.div
                                        key={`${project.id}-${repeatIndex}`}
                                        className="group bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer w-[200px] flex-shrink-0"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="relative h-28 bg-gray-200 overflow-hidden">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-xs text-gray-500">
                                                    No Image
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        </div>
                                        <div className="p-2">
                                            <h3 className="text-xs font-bold dark:text-gray-200 text-gray-900 mb-1 line-clamp-1">{project.title}</h3>
                                            <h3 className="text-xs  dark:text-gray-200 text-gray-900 mb-1 line-clamp-2">{project.description}</h3>

                                            <div className="flex items-center gap-1 text-black text-sm mb-2">
                                                {Array.isArray(project.icons) &&
                                                    project.icons.slice(0, 3).map((icon, idx) => (
                                                        <div key={idx} className="w-3 h-3">
                                                            {icon}
                                                        </div>
                                                    ))}
                                            </div>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-200"
                                                >
                                                    View <FaArrowRight size={8} />
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutMe;